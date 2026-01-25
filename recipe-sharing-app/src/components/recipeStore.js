import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  // Recipe CRUD operations
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  
  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  
  deleteRecipe: (recipeId) => set((state) => {
    const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
      // Remove from favorites if deleted
      favorites: state.favorites.filter(id => id !== recipeId)
    };
  }),
  
  setRecipes: (recipes) => set({ recipes }),
  
  // Search and filter
  setSearchTerm: (term) => set((state) => {
    const lowerCaseTerm = term.toLowerCase();
    return {
      searchTerm: term,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerCaseTerm) ||
        recipe.description.toLowerCase().includes(lowerCaseTerm)
      )
    };
  }),
  
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  // Favorites management
  addFavorite: (recipeId) => set((state) => {
    // Prevent duplicates
    if (state.favorites.includes(recipeId)) {
      return state;
    }
    return { favorites: [...state.favorites, recipeId] };
  }),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Recommendations generation
  generateRecommendations: () => set((state) => {
    // If user has favorites, recommend similar recipes
    if (state.favorites.length === 0) {
      // If no favorites, recommend random recipes
      const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
      return { recommendations: shuffled.slice(0, 3) };
    }
    
    // Get favorite recipes
    const favoriteRecipes = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id)
    );
    
    // Extract keywords from favorite recipes
    const favoriteKeywords = favoriteRecipes.flatMap(recipe =>
      recipe.title.toLowerCase().split(' ').concat(
        recipe.description.toLowerCase().split(' ')
      )
    );
    
    // Find recipes that match keywords but aren't already favorites
    const recommended = state.recipes
      .filter(recipe => !state.favorites.includes(recipe.id))
      .map(recipe => {
        const recipeWords = recipe.title.toLowerCase().split(' ').concat(
          recipe.description.toLowerCase().split(' ')
        );
        const matchCount = recipeWords.filter(word =>
          favoriteKeywords.includes(word) && word.length > 3
        ).length;
        return { recipe, matchCount };
      })
      .filter(item => item.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 3)
      .map(item => item.recipe);
    
    return { recommendations: recommended };
  })
}));

export default useRecipeStore;