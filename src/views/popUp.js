import { elementActive } from "../../main";

export const openPopUp = () => {
  document.getElementById("modalPopUp").style.display = "flex";

  const buttonDelete = document.getElementById("deleteButton");
  if (elementActive) {
    buttonDelete.style.display = "block";
  } else {
    buttonDelete.style.display = "none";
  }
};
export const closePopUP = () => {
  document.getElementById("modalPopUp").style.display = "none";
  resetProps();
};

const resetProps = () => {
  let nameInput = document.getElementById("nombre");
  let imagenInput = document.getElementById("img");
  let precioInput = document.getElementById("precio");
  let categoriaInput = document.getElementById("categoria");
  nameInput.value = "";
  imagenInput.value = "";
  precioInput.value = 0;
  categoriaInput.value = "Seleccione una categoria";
};
