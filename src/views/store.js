import { setProductActive } from "../../main";
import {
  handleGetProductsLocalStorage,
  setProductsLocalStorage,
} from "../persistence/localStorage";
import { handleProductActive } from "../services/products";

export const handleGetProductsToStore = () => {
  const product = handleGetProductsLocalStorage();
  if (product) {
    handleRenderListItems(product);
  } else {
    setProductsLocalStorage();
  }
};
export const handleRenderListItems = (productsIn) => {
  const burgers = productsIn.filter((el) => el.categoria === "Hamburguesas");
  const drinks = productsIn.filter((el) => el.categoria === "Gaseosas");
  const potatos = productsIn.filter((el) => el.categoria === "Papas");

  const renderProductGroup = (productos, title) => {
    if (productos.length > 0) {
      const productosHTML = productos.map((producto, index) => {
        return `
        <div class='cardContainer' id='product-${producto.categoria}-${index}'>
          <div class='cardItem'>
            <img src="${producto.imagen}" alt="${producto.nombre}" />
            <div class='cardItem__description'>
              <div class=titleItem>
                <h2>${producto.nombre}</h2>
              </div>
              <div class='itemprop'>
                <p><b>Precio:</b> $${producto.precio}</p>
                <p><b>Categoría:</b> ${producto.categoria}</p>
              </div>
            </div>
          </div>
        </div>
      `;
      });

      return `
        <section class='main-category' >
        <h3 class='catregory-title'>${title}</h3>
        <div class="category-container">
        ${productosHTML.join("")}</div>
        </section>
    `;
    } else {
      return "";
    }
  };
  const appContainer = document.getElementById("store");
  appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(potatos, "Papas")}
    ${renderProductGroup(drinks, "Gaseosas")}
  `;

  const addEvents = (productsIn) => {
    productsIn.forEach((producto, index) => {
      const productContainer = document.getElementById(
        `product-${producto.categoria}-${index}`
      );
      productContainer.addEventListener("click", () => {
        setProductActive(producto);
        handleProductActive(producto);
      });
    });
  };

  addEvents(burgers);
  addEvents(potatos);
  addEvents(drinks);
};
