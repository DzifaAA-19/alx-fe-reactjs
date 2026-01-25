import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Get full recipe objects for favorites
  const favoriteRecipes = favorites
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(recipe => recipe !== undefined);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: '#d32f2f', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>❤️</span> My Favorites
      </h2>
      
      {favoriteRecipes.length === 0 ? (
        <p style={{ 
          padding: '20px', 
          textAlign: 'center', 
          color: '#6c757d',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          No favorite recipes yet. Start adding recipes to your favorites!
        </p>
      ) : (
        <div>
          <p style={{ color: '#6c757d', marginBottom: '15px' }}>
            You have {favoriteRecipes.length} favorite recipe{favoriteRecipes.length !== 1 ? 's' : ''}
          </p>
          {favoriteRecipes.map((recipe) => (
            <div 
              key={recipe.id} 
              style={{ 
                border: '2px solid #ffebee', 
                padding: '15px', 
                margin: '10px 0',
                borderRadius: '8px',
                backgroundColor: '#fff5f5'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginTop: 0, color: '#d32f2f' }}>
                    ❤️ {recipe.title}
                  </h3>
                  <p style={{ color: '#555' }}>
                    {recipe.description.length > 100 
                      ? `${recipe.description.substring(0, 100)}...` 
                      : recipe.description}
                  </p>
                </div>
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#fff',
                    color: '#d32f2f',
                    border: '1px solid #d32f2f',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    marginLeft: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#d32f2f';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#fff';
                    e.target.style.color = '#d32f2f';
                  }}
                  title="Remove from favorites"
                >
                  Remove
                </button>
              </div>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#d32f2f',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b71c1c'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#d32f2f'}
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;