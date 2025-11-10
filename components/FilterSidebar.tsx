// components/FilterSidebar.tsx
'use client';

interface FilterSidebarProps {
  filters: {
    category: string;
    priceRange: string;
  };
  onFilterChange: (filters: { category: string; priceRange: string }) => void;
}

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const categories = [
    'All Categories',
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports',
    'Beauty',
    'Toys'
  ];

  const priceRanges = [
    'All Prices',
    'Under $25',
    '$25 - $50',
    '$50 - $100',
    '$100 - $200',
    'Over $200'
  ];

  const handleCategoryChange = (category: string) => {
    const newCategory = category === 'All Categories' ? '' : category;
    onFilterChange({
      ...filters,
      category: newCategory
    });
  };

  const handlePriceRangeChange = (priceRange: string) => {
    const newPriceRange = priceRange === 'All Prices' ? '' : priceRange;
    onFilterChange({
      ...filters,
      priceRange: newPriceRange
    });
  };

  const clearFilters = () => {
    onFilterChange({
      category: '',
      priceRange: ''
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3 text-gray-400">CATEGORY</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={
                  category === 'All Categories' 
                    ? filters.category === '' 
                    : filters.category === category
                }
                onChange={() => handleCategoryChange(category)}
                className="w-3.5 h-3.5 text-violet-600 bg-gray-700 border-gray-600 focus:ring-violet-500"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3 text-gray-400">PRICE RANGE</h3>
        <div className="space-y-1">
          {priceRanges.map((range) => (
            <label key={range} className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="radio"
                name="priceRange"
                checked={
                  range === 'All Prices'
                    ? filters.priceRange === ''
                    : filters.priceRange === range
                }
                onChange={() => handlePriceRangeChange(range)}
                className="w-3.5 h-3.5 text-violet-600 bg-gray-700 border-gray-600 focus:ring-violet-500"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {range}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {(filters.category || filters.priceRange) && (
        <div className="pt-4 border-t border-gray-700">
          <h3 className="text-xs font-medium mb-2 text-gray-400">ACTIVE FILTERS:</h3>
          <div className="flex flex-wrap gap-1">
            {filters.category && (
              <span className="bg-violet-600 text-white px-2 py-1 rounded text-xs">
                {filters.category}
              </span>
            )}
            {filters.priceRange && (
              <span className="bg-violet-600 text-white px-2 py-1 rounded text-xs">
                {filters.priceRange}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}