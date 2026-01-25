import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';

function App() {
  return (
    <div className="App" style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px' 
    }}>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;