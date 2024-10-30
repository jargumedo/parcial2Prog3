//render de la vista categorias

import { categoryActive, setCategorieActive } from "../../main";
import { handleGetProductsLocalStorage } from "../persistence/localStorage.js";
import { handleRenderListItems } from "../views/store";

const handleFilterProductsByCategory = (categoryIn) => {
  const products = handleGetProductsLocalStorage();

  switch (categoryIn) {
    case categoryActive:
      handleRenderListItems(products);
      break;
    case "Hamburguesas":
    case "Papas":
    case "Gaseosas":
      const filteredResult = products.filter(
        (el) => el.categoria === categoryIn
      );
      handleRenderListItems(filteredResult);
      break;
    case "mayorPrecio":
      const sortedByHighestPrice = products.sort((a, b) => b.precio - a.precio);
      handleRenderListItems(sortedByHighestPrice);
      break;
    case "menorPrecio":
      const sortedByLowestPrice = products.sort((a, b) => a.precio - b.precio);
      handleRenderListItems(sortedByLowestPrice);
      break;
    default:
      handleRenderListItems(products);
      break;
  }
};
export const renderCategories = () => {
  const ulList = document.getElementById("listFilter");
  ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hamburguesas">Hamburguesas</li>
        <li id="Papas">Papas</li>
        <li id="Gaseosas">Gaseosas</li>
        <li id="mayorPrecio">Mayor Precio</li>
        <li id="menorPrecio">Menor Precio</li>
  `;
  const liElements = ulList.querySelectorAll("li");
  liElements.forEach((liElement) => {
    liElement.addEventListener("click", () => {
      handleFilterProductsByCategory(liElement.id);
      liElements.forEach((el) => {
        if (el.classList.contains("li_active")) {
          el.classList.remove("li_active");
        } else {
          if (el === liElement) el.classList.add("li_active");
        }
      });
    });
  });
};
