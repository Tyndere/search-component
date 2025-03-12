import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    sortBy: 'relevance'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, filters });
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center border border-gray-200 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-white">
          {/* Search Icon - using inline SVG to avoid dependencies */}
          <div className="pl-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full py-3 px-3 outline-none text-gray-700 bg-white"
          />
          
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200 rounded-full"
            aria-label="Toggle filters"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </button>
          
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200 rounded-full mr-1"
          >
            Search
          </button>
        </div>
        
        {showFilters && (
          <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-4">
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-full"
                >
                  <option value="all">All Categories</option>
                  <option value="products">Products</option>
                  <option value="articles">Articles</option>
                  <option value="users">Users</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Sort By</label>
                <select
                  name="sortBy"
                  value={filters.sortBy}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-full"
                >
                  <option value="relevance">Relevance</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
