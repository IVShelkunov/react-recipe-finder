//Modal.jsx
import { useState, useEffect } from 'react';

// Принимает ID рецепта и функцию для закрытия
function Modal({ recipeId, onClose }) {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Эффект для загрузки данных при открытии модалки (когда меняется recipeId)
  useEffect(() => {
    if (!recipeId) return;

    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then(res => res.json())
      .then(data => {
        setRecipeDetails(data.meals[0]);
      })
      .finally(() => setLoading(false));

  }, [recipeId]); // Эффект перезапускается, когда меняется recipeId
  	console.log(recipeDetails);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        {loading ? (
          <p>Recipe loading...</p>
        ) : (
          <>
            <h2>{recipeDetails.strMeal}</h2>
            <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />
            <h3>Instruction:</h3>
            <p>{recipeDetails.strInstructions}</p>
            {/* Здесь можно также отрендерить список ингредиентов */}
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;