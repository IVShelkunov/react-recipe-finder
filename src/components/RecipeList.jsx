function RecipeList({recipes}) {
	if(!recipes) {
		return <div className="recipe-list"><p>Ничего не найдено</p></div>;
	}
	if(recipes.lenght === 0) {
		return <p>Начните поиск, чтобы увидеть рецепты!</p>;
	}
	return (
		<div className="recipe-list">
			{recipes.map(recipe => (
				<RecipeCard key={recipe.idMeal} recipe={recipe}/>
			))}
		</div>
	);
}
export default RecipeList