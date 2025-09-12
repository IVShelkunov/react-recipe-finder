function RecipeCard({recipe}) {
	return (
		<div className="recipe-card">
			<img src={recipe.strMealThumb} alt={recipe.strMeal}/>
			<h3>{recipe.strMeal}</h3>
			<p>"{recipe.strArea}" , "{recipe.strCategory}"</p>
		</div>
	);
}
export default RecipeCard