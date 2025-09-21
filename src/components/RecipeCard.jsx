//RecipeCard.jsx
function RecipeCard({recipe , onClick}) {
	return (
		<div className="recipe-card"  onClick={onClick}>
			<img src={recipe.strMealThumb} alt={recipe.strMeal}/>
			<h3>{recipe.strMeal}</h3>
			<p>"{recipe.strArea}" , "{recipe.strCategory}"</p>
		</div>
	);
}
export default RecipeCard