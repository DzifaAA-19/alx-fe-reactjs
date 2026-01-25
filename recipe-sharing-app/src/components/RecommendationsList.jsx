import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const favorites = useRecipeStore((state) => state.favorites);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  // Generate recommendations when favorites change or component mounts
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  if (recommendations.length === 0) {
    return null; // Don't show the section if no recommendations
  }

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: '#28a745', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>✨</span> Recommended for You
      </h2>
      <p style={{ color: '#6c757d', marginBottom: '15px' }}>
        Based on your favorites, you might also like these recipes:
      </p>
      
      {recommendations.map((recipe) => (
        <div 
          key={recipe.id} 
          style={{ 
            border: '2px solid #e8f5e9', 
            padding: '15px', 
            margin: '10px 0',
            borderRadius: '8px',
            backgroundColor: '#f1f8f4'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ marginTop: 0, color: '#28a745' }}>
                ✨ {recipe.title}
              </h3>
              <p style={{ color: '#555' }}>
                {recipe.description.length > 100 
                  ? `${recipe.description.substring(0, 100)}...` 
                  : recipe.description}
              </p>
            </div>
            <button
              onClick={() => addFavorite(recipe.id)}
              disabled={favorites.includes(recipe.id)}
              style={{
                padding: '6px 12px',
                backgroundColor: favorites.includes(recipe.id) ? '#e0e0e0' : '#fff',
                color: favorites.includes(recipe.id) ? '#999' : '#28a745',
                border: `1px solid ${favorites.includes(recipe.id) ? '#e0e0e0' : '#28a745'}`,
                borderRadius: '4px',
                cursor: favorites.includes(recipe.id) ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                marginLeft: '10px'
              }}
              onMouseEnter={(e) => {
                if (!favorites.includes(recipe.id)) {
                  e.target.style.backgroundColor = '#28a745';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (!favorites.includes(recipe.id)) {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#28a745';
                }
              }}
              title={favorites.includes(recipe.id) ? "Already in favorites" : "Add to favorites"}
            >
              {favorites.includes(recipe.id) ? '✓ Favorited' : '+ Favorite'}
            </button>
          </div>
          <Link 
            to={`/recipe/${recipe.id}`}
            style={{
              display: 'inline-block',
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7e34'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
          >
            View Details →
          </Link>
        </div>
      ))}
      
      <button
        onClick={() => generateRecommendations()}
        style={{
          marginTop: '15px',
          padding: '10px 20px',
          backgroundColor: '#17a2b8',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#117a8b'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#17a2b8'}
      >
        🔄 Refresh Recommendations
      </button>
    </div>
  );
};

export default RecommendationsList;
