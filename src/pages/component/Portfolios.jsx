import React, { useState } from 'react'
import { portfolioItems } from '../../data/portfolioData';

function Portfolios() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredItems, setFilteredItems] = useState(portfolioItems);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isClicking, setIsClicking] = useState(true);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const itemsPerPage = 9;

    const handleFilterClick = (category) => {
        setActiveFilter(category);
        setCurrentPage(1); // Reset to first page when filter changes
        setFilteredItems(
            category === 'all' 
                ? portfolioItems 
                : portfolioItems.filter(item => item.category === category)
        );
    };

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    };

    // Handle image click
    const handleImageClick = (item, event) => {
        setClickPosition({ x: event.clientX, y: event.clientY });
        setIsClicking(true);
        setTimeout(() => {
            setIsClicking(false);
        }, 1000);
        setSelectedImage(item);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when viewer is open
    };

    // Handle close viewer
    const handleCloseViewer = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <div>
            <section id="portfolio" className="portfolio">
                <h2>Notre <span>Portfolio Artistique</span></h2>
                <div className="portfolio-filters">
                    {['all', 'murals', 'paintings', 'digital', 'workshops'].map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => handleFilterClick(category)}
                        >
                            {category === 'all' ? 'Tous les Categories' : category}
                        </button>
                    ))}
                </div>
                <div className="portfolio-grid">
                    {currentItems.map((item, index) => (
                        <div 
                            key={item.id}
                            className="portfolio-item"
                            style={{
                                animation: `fadeInUp ${0.3 + index * 0.1}s ease forwards`
                            }}
                            onClick={(e) => handleImageClick(item, e)}
                        >
                            <img  src={item.image} alt={item.title} loading="lazy" />
                            <img 
                                style={{
                                    height: '100px', 
                                    width: '100px',
                                    display: isClicking ? 'block' : 'none',
                                    pointerEvents: 'none'
                                }} 
                                className="clicking" 
                                src="https://cliply.co/wp-content/uploads/2021/07/392107080_HAND_CLICKING_400px.gif" 
                                alt="clicking animation" 
                            />
                            <div className="portfolio-overlay">
                                
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="pagination">
                        <button
                            className="page-btn nav-btn"
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                        >
                            &#8249;
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                            <button
                                key={number}
                                className={`page-btn ${currentPage === number ? 'active' : ''}`}
                                onClick={() => handlePageChange(number)}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            className="page-btn nav-btn"
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                        >
                            &#8250;
                        </button>
                    </div>
                )}
            </section>

            {/* Fullscreen Image Viewer */}
            {selectedImage && (
                <div className="fullscreen-viewer" onClick={handleCloseViewer}>
                    <button className="close-btn" onClick={handleCloseViewer}>×</button>
                    <div className="viewer-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage.image} alt={selectedImage.title} />
                        <div className="viewer-info">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolios