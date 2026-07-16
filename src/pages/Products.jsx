// src/pages/Products.jsx
import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', ...new Set(products.map(p => p.category))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: 'Under ₹500' },
    { value: '500-1000', label: '₹500 - ₹1000' },
    { value: '1000-2000', label: '₹1000 - ₹2000' },
    { value: '2000+', label: 'Above ₹2000' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(v => v.replace('+', ''));
      filtered = filtered.filter(p => {
        if (max) {
          return p.price >= Number(min) && p.price <= Number(max);
        } else {
          return p.price >= Number(min);
        }
      });
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Our Collection</h1>
        <p style={styles.subtitle}>Handcrafted jewellery made with love</p>
      </div>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.filtersContainer}>
        <div style={styles.filterGroup}>
          <label style={styles.filterLabel}>Category</label>
          <div style={styles.categoryChips}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                style={{
                  ...styles.chip,
                  ...(selectedCategory === cat ? styles.chipActive : {})
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.filterRow}>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel} htmlFor="priceRange">Price Range</label>
            <select
              id="priceRange"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              style={styles.select}
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.filterGroup}>
            <label style={styles.filterLabel} htmlFor="sortBy">Sort By</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={styles.select}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>

      <div style={styles.resultsInfo}>
        <p style={styles.resultsText}>
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div style={styles.productsGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={styles.noResults}>
          <p style={styles.noResultsText}>No products found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setPriceRange('all');
              setSearchQuery('');
              searchParams.delete('category');
              setSearchParams(searchParams);
            }}
            style={styles.resetButton}
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#7f8c8d',
  },
  searchContainer: {
    marginBottom: '24px',
  },
  searchInput: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '1rem',
    border: '2px solid #e8e8e8',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  filtersContainer: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '24px',
  },
  filterGroup: {
    marginBottom: '16px',
  },
  filterLabel: {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '8px',
  },
  categoryChips: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  chip: {
    padding: '8px 16px',
    border: '2px solid #e8e8e8',
    borderRadius: '20px',
    backgroundColor: '#fff',
    color: '#2c3e50',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontWeight: '500',
  },
  chipActive: {
    backgroundColor: '#d4af37',
    color: '#fff',
    borderColor: '#d4af37',
  },
  filterRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  select: {
    width: '100%',
    padding: '10px 12px',
    fontSize: '0.95rem',
    border: '2px solid #e8e8e8',
    borderRadius: '8px',
    backgroundColor: '#fff',
    color: '#2c3e50',
    cursor: 'pointer',
    outline: 'none',
  },
  resultsInfo: {
    marginBottom: '20px',
    paddingBottom: '12px',
    borderBottom: '1px solid #e8e8e8',
  },
  resultsText: {
    fontSize: '0.95rem',
    color: '#7f8c8d',
    fontWeight: '500',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '40px',
  },
  noResults: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  noResultsText: {
    fontSize: '1.1rem',
    color: '#7f8c8d',
    marginBottom: '20px',
  },
  resetButton: {
    padding: '12px 24px',
    backgroundColor: '#d4af37',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Products;
