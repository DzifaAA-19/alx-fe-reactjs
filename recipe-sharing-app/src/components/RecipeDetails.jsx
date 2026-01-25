import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) {
    return (
      <div>
        <h2>Recipe Not Found</h2>
        <button onClick={() => navigate('/')}>Back to Recipes</button>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <button 
        onClick={() => navigate('/')}
        style={{
          marginBottom: '20px',
          padding: '8px 16px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back to Recipes
      </button>
      
      <div style={{
        border: '2px solid #ddd',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: isFavorite ? '#fff5f5' : 'white',
        borderColor: isFavorite ? '#d32f2f' : '#ddd'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <h1 style={{ margin: 0, color: isFavorite ? '#d32f2f' : '#333' }}>
            {isFavorite && '❤️ '}{recipe.title}
          </h1>
          <button
            onClick={toggleFavorite}
            style={{
              padding: '10px 20px',
              backgroundColor: isFavorite ? '#d32f2f' : 'white',
              color: isFavorite ? 'white' : '#d32f2f',
              border: `2px solid #d32f2f`,
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              if (!isFavorite) {
                e.target.style.backgroundColor = '#d32f2f';
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (!isFavorite) {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#d32f2f';
              }
            }}
          >
            {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
        </div>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginTop: '15px' }}>
          {recipe.description}
        </p>
      </div>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;