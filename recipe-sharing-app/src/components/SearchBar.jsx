import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search recipes by title or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 16px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '2px solid #ddd',
          boxSizing: 'border-box',
          transition: 'border-color 0.3s',
          outline: 'none'
        }}
        onFocus={(e) => e.target.style.borderColor = '#007bff'}
        onBlur={(e) => e.target.style.borderColor = '#ddd'}
      />
      {searchTerm && (
        <p style={{ 
          marginTop: '8px', 
          fontSize: '14px', 
          color: '#6c757d' 
        }}>
          Searching for: "<strong>{searchTerm}</strong>"
        </p>
      )}
    </div>
  );
};

export default SearchBar;