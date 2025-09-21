//RecipeList.jsx
import RecipeCard from './RecipeCard.jsx';
function RecipeList({recipes , onRecipeClick}) {
	if(!recipes) {
		return <p className="not-found">Ничего не найдено</p>;
	}
	if(recipes.lenght === 0) {
		return <p>Начните поиск, чтобы увидеть рецепты!</p>;
	}
	return (
		<div className="recipe-list">
			{recipes.map(recipe => (
				<RecipeCard key={recipe.idMeal} recipe={recipe} onClick={() => onRecipeClick(recipe.idMeal)}/>
			))}
		</div>
	);
}
export default RecipeList