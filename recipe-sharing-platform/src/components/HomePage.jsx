import { Link } from "react-router-dom";
import recipesData from "../data.json";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
     
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
        Recipe Sharing Platform 🍲
      </h1>

      
      <div className="text-center mb-8">
        <Link
          to="/add-recipe"
          className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add New Recipe
        </Link>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipesData.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
