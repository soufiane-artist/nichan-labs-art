import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { animated, useSprings } from '@react-spring/web';

const SplitText = ({
    text = '',
    className = '',
    delay = 70,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    easing = 'easeOutCubic',
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    onLetterAnimationComplete,
}) => {
    const letters = text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedCount = useRef(0);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );
        
        observer.observe(ref.current);
        
        return () => observer.disconnect();
    }, [threshold, rootMargin]);
    
    const springs = useSprings(
        letters.length,
        letters.map((_, i) => ({
            from: animationFrom,
            to: inView
                ? async (next) => {
                    await next(animationTo);
                    animatedCount.current += 1;
                    if (animatedCount.current === letters.length && onLetterAnimationComplete) {
                        onLetterAnimationComplete();
                    }
                }
                : animationFrom,
            delay: i * delay,
            config: { easing },
        }))
    );
    
    return (
        <p
            ref={ref}
            className={`split-parent ${className}`}
            style={{ textAlign, display: 'inline', overflow: 'hidden' }}
        >
            {springs.map((props, index) => (
                <animated.span
                    key={index}
                    style={{
                        ...props,
                        display: 'inline-block',
                        willChange: 'transform, opacity',
                        marginRight: letters[index] === '' ? '2rem' : '0em'
                    }}
                >
                    {letters[index] === ' ' ? '\u00A0' : letters[index]}
                </animated.span>
            ))}
        </p>
    );
};

const drawHexagon = (ctx, x, y, radius) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const xPos = x + radius * Math.cos(angle);
        const yPos = y + radius * Math.sin(angle);
        if (i === 0) {
            ctx.moveTo(xPos, yPos);
        } else {
            ctx.lineTo(xPos, yPos);
        }
    }
    ctx.closePath();
};

const drawTriangle = (ctx, x, y, radius) => {
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
        const angle = (i * 2 * Math.PI) / 3 - Math.PI / 2;
        const xPos = x + radius * Math.cos(angle);
        const yPos = y + radius * Math.sin(angle);
        if (i === 0) {
            ctx.moveTo(xPos, yPos);
        } else {
            ctx.lineTo(xPos, yPos);
        }
    }
    ctx.closePath();
};

const Hero = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const shapes = [
            {
                type: 'hexagon',
                x: window.innerWidth * 0.3,
                y: window.innerHeight * 0.5,
                radius: 100,
                speed: 0.5,
                rotationSpeed: 0.02,
                offset: 0
            },
            {
                type: 'triangle',
                x: window.innerWidth * 0.5,
                y: window.innerHeight * 0.4,
                radius: 80,
                speed: 0.7,
                rotationSpeed: 0.03,
                offset: Math.PI / 3
            },
            {
                type: 'hexagon',
                x: window.innerWidth * 0.7,
                y: window.innerHeight * 0.6,
                radius: 90,
                speed: 0.6,
                rotationSpeed: 0.015,
                offset: Math.PI / 2
            }
        ];

        const animate = () => {
            time += 0.02;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            shapes.forEach((shape, i) => {
                const x = shape.x + Math.sin(time * shape.speed + shape.offset) * 50;
                const y = shape.y + Math.cos(time * shape.speed + shape.offset) * 30;
                const radius = shape.radius + Math.sin(time * 2) * 10;

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2);
                gradient.addColorStop(0, `rgba(0, 255, 136, ${0.4 - i * 0.1})`);
                gradient.addColorStop(0.5, `rgba(0, 170, 68, ${0.2 - i * 0.05})`);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(time * shape.rotationSpeed);
                ctx.translate(-x, -y);

                if (shape.type === 'hexagon') {
                    drawHexagon(ctx, x, y, radius * 1.5);
                } else {
                    drawTriangle(ctx, x, y, radius * 1.5);
                }
                ctx.fillStyle = gradient;
                ctx.fill();

                if (shape.type === 'hexagon') {
                    drawHexagon(ctx, x, y, radius * 0.7);
                } else {
                    drawTriangle(ctx, x, y, radius * 0.7);
                }
                ctx.fillStyle = `rgba(0, 255, 136, ${0.2 - i * 0.05})`;
                ctx.fill();

                ctx.restore();

                if (i < shapes.length - 1) {
                    const nextShape = shapes[i + 1];
                    const nextX = nextShape.x + Math.sin(time * nextShape.speed + nextShape.offset) * 50;
                    const nextY = nextShape.y + Math.cos(time * nextShape.speed + nextShape.offset) * 30;

                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(nextX, nextY);
                    ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="home" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="overlay"></div>
            
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    opacity: 1,
                    zIndex: 1
                }}
            />
            
            <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
                <div className="labs-badge">
                    <i>
                        <FontAwesomeIcon icon={faFlask} />
                    </i>
                    Membre Officiel de NichanLabs
                </div>
                <h4 style={{ fontSize: '3rem' }} className="glowing-text">
                    <SplitText
                        text="Innovation et Créativité chez NichanLabs"
                        onLetterAnimationComplete={handleAnimationComplete}
                        className="hero-title"
                    />
                </h4>
                <div className="artist-name">Soufiane Moutaouakil</div>
                <p>Artiste Digital & Développeur Créatif Senior</p>
            </div>
            <div className="scroll-indicator" style={{ position: 'relative', zIndex: 2 }}>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </section>
    );
};

export default Hero;