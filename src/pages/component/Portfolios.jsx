import React, { useState } from 'react'
import { portfolioItems } from '../../data/portfolioData';

function Portfolios() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredItems, setFilteredItems] = useState(portfolioItems);

    const handleFilterClick = (category) => {
        setActiveFilter(category);
        setFilteredItems(
            category === 'all' 
                ? portfolioItems 
                : portfolioItems.filter(item => item.category === category)
        );
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
                    {filteredItems.map((item, index) => (
                        <div 
                            key={index}
                            className="portfolio-item"
                            style={{
                                animation: `fadeInUp ${0.3 + index * 0.1}s ease forwards`
                            }}
                        >
                            <img src={item.image} alt={item.title} loading="lazy" />
                            <div className="portfolio-overlay">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    </div>
  )
}

export default Portfolios