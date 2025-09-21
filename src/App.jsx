//App.jsx

import './App.css'
import { useState , useEffect } from 'react';
import SearchBar from './components/SearchBar.jsx';
import Loader from './components/Loader.jsx';
import RecipeList from './components/RecipeList.jsx';
import Modal from './components/Modal.jsx';
//basic app
function App() {
  //state
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  //search function
  const fecthRecipe = async (query) => {
    setLoading(true);
    setError(null);
    setRecipes([]);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      if(!response.ok) {
        throw new Error('Ошибка сети!');
      }
      const data = await response.json();
      setRecipes(data.meals);
    } catch(err) {
        setError(err.message);
      } finally {
          setLoading(false);
        }
  }

  //modal functions
  const handleRecipeClick = (recipeId) => setSelectedRecipeId(recipeId);
  const handleCloseModal = () => setSelectedRecipeId(null);
  //useEffect load random recipes
  useEffect(() => {
    //loaded random recipe
    const fetchRandomRecipe = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      if(!response.ok) {
        throw new Error('Не удалось загрузить рецепт');
      }
      const data = await response.json();
      return data.meals[0];
    };
    //loaded some recipes
    const fetchInitialRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        const promises = Array(6).fill(null).map(() => fetchRandomRecipe());
        const results = await Promise.all(promises);
        setRecipes(results);
      } catch(error) {
          setError(error.message);
        } finally {
            setLoading(false);
          }
    }
    fetchInitialRecipes();
  } , []);
  return (
      <div className="app">
        <header>
          <h1>Recipe Finder</h1>
          <SearchBar onSearch={fecthRecipe}/>
        </header>
        {loading && <Loader/>}
        {error && <p className="error-message">Ошибка: {error}</p>}
        <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick}/>
        {selectedRecipeId && <Modal recipeId={selectedRecipeId} onClose={handleCloseModal}/>}
      </div>
    
  );
}

export default App
