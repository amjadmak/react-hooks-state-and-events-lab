import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

const [isDark, setIsDark] = useState(false);
const toogleDarkMode = () => {
  setIsDark(!isDark);
}
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick= {toogleDarkMode}>{ isDark ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData}/>
    </div>
  );
}

export default App;
