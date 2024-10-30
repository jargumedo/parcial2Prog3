//Local Storage

export const handleGetProductsLocalStorage = () => {
  return JSON.parse(localStorage.getItem("products"));
};

export const setProductsLocalStorage = (item) => {
  let storedProducts = handleGetProductsLocalStorage() || [];
  if (item) {
    const existingProductIndex = storedProducts.findIndex(
      (product) => product.id === item.id
    );

    if (existingProductIndex !== -1) {
      storedProducts[existingProductIndex] = item;
    } else {
      storedProducts.push(item);
    }
  }
  localStorage.setItem("products", JSON.stringify(storedProducts));
};
