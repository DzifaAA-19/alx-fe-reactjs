import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Recipe not found!</p>
      </div>
    );
  }

  // Mock ingredients and steps (since data.json only has summary)
  const ingredients = [
    "Ingredient 1",
    "Ingredient 2",
    "Ingredient 3",
  ];

  const steps = [
    "Step 1: Do something.",
    "Step 2: Do next thing.",
    "Step 3: Finish up.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
        <p className="text-gray-700 mb-4">{recipe.summary}</p>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Cooking Steps</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {steps.map((step, index) => (
              <li key={index} className="mb-1">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
