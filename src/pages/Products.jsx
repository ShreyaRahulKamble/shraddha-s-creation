import { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Our Collection</h1>
        <p style={styles.subtitle}>Handcrafted with love, designed for you</p>
      </div>

      <div style={styles.filtersContainer}>
        <div style={styles.filterSection}>
          <label style={styles.filterLabel}>Category</label>
          <div style={styles.categoryButtons}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  ...styles.categoryButton,
                  ...(selectedCategory === cat ? styles.categoryButtonActive : {})
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.filterRow}>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Sort By</label>
            <select
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

          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>
              Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
            </label>
            <div style={styles.rangeInputs}>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                style={styles.rangeInput}
                placeholder="Min"
                min="0"
              />
              <span style={styles.rangeSeparator}>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                style={styles.rangeInput}
                placeholder="Max"
                min="0"
              />
            </div>
          </div>
        </div>
      </div>

      <div style={styles.resultsInfo}>
        <p style={styles.resultsText}>
          Showing {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      {filteredAndSortedProducts.length === 0 ? (
        <div style={styles.noResults}>
          <p style={styles.noResultsText}>No products found matching your criteria</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setPriceRange([0, 10000]);
              setSortBy('featured');
            }}
            style={styles.resetButton}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div style={styles.productsGrid}>
          {filteredAndSortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    minHeight: '60vh'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '8px'
  },
  subtitle: {
    fontSize: '1rem',
    color: '#718096',
    marginTop: '0'
  },
  filtersContainer: {
    backgroundColor: '#f7fafc',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '30px',
    border: '1px solid #e2e8f0'
  },
  filterSection: {
    marginBottom: '20px'
  },
  filterLabel: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#4a5568',
    marginBottom: '8px'
  },
  categoryButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  categoryButton: {
    padding: '8px 16px',
    border: '1px solid #cbd5e0',
    borderRadius: '20px',
    backgroundColor: '#fff',
    color: '#4a5568',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'inherit'
  },
  categoryButtonActive: {
    backgroundColor: '#c53030',
    color: '#fff',
    borderColor: '#c53030'
  },
  filterRow: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px'
  },
  filterGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  select: {
    padding: '10px',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
    fontSize: '0.875rem',
    backgroundColor: '#fff',
    color: '#2d3748',
    cursor: 'pointer',
    fontFamily: 'inherit'
  },
  rangeInputs: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  rangeInput: {
    flex: 1,
    padding: '10px',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
    fontSize: '0.875rem',
    fontFamily: 'inherit'
  },
  rangeSeparator: {
    color: '#718096',
    fontSize: '0.875rem'
  },
  resultsInfo: {
    marginBottom: '20px'
  },
  resultsText: {
    fontSize: '0.875rem',
    color: '#718096',
    margin: '0'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '40px'
  },
  noResults: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f7fafc',
    borderRadius: '12px'
  },
  noResultsText: {
    fontSize: '1.125rem',
    color: '#4a5568',
    marginBottom: '20px'
  },
  resetButton: {
    padding: '12px 24px',
    backgroundColor: '#c53030',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'background-color 0.2s'
  }
};