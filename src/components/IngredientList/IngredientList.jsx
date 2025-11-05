
function IngredientList({ availableIngredients, addToBurger }) {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button style={{color: 'white'}} onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
}

export default IngredientList;
