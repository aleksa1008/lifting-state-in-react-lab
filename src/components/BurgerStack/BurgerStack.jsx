function BurgerStack({ stack, removeFromBurger }) {
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button style={{color: 'white'}} onClick={() => removeFromBurger(index)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default BurgerStack;
