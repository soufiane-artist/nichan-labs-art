import React, { useState } from 'react'
import { portfolioItems } from '../../data/portfolioData';

function Portfolios() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredItems, setFilteredItems] = useState(portfolioItems);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage =9;

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
        // Scroll to the top of the portfolio section
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
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
        </div>
    );
}

export default Portfolios