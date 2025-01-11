import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favoriteRecipes = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;