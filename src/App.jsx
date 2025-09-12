import './App.css'
import { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import Loader from './components/Loader.jsx';
import RecipeList from './components/RecipeList.jsx';
//basic app
function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  return (
      <div className="app">
        <h1>Recipe Finder</h1>
        <SearchBar onSearch={fecthRecipe}/>
        {loading && <Loader/>}
        {error && <p className="error-message">Ошибка: {error}</p>}
        <RecipeList recipes={recipes}/>
      </div>
    
  );
}

export default App
