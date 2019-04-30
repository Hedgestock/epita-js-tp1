import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import update from "./actions/update";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

function handleImageError(index) {
  remove(index);
  
  refreshGrid();
  
  alert("Image URL is not a valid image URL !");
}

const addPictureHandler = () => {
  const url = getInputContents();

  // bonus, trim eventual whitespaces and validate content
  url.trim(); //kind of validated in addition with the onerror handler ?

  // use your actions functions to add a new picture
  add(url);

  clearInputContents();

  refreshGrid();
};

const updatePictureHandler = (url, index) => {

  url.trim();

  update(url, index);

  refreshGrid();
  // That seems really crappy but I don't have time to do pretty things like modifying the DOM directly. My few attempts failed...
};

const refreshGrid = () => {
  // use your functions to get all the elements
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach((item, index) => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelectorAll(".picture-item-image");

    imgElement[0].addEventListener("error", () => { handleImageError(index) });

    // set the URL from your Picture model.
    imgElement.forEach(i => {
      i.src = item;
    });

    const deleteButtonElement = clone.querySelector(".picture-item-delete-button");

    // use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => { remove(index); refreshGrid();});

    const modalButtonElement = clone.querySelector(".picture-item-modal-button");

    const modal = clone.querySelector(".update-modal");
    
    const close = clone.querySelector(".close");
    
    modalButtonElement.addEventListener("click", () => { modal.style.display = "block"; });
    
    close.onclick = () => { modal.style.display = "none"; } // which is better ?

    const updateButtonElement = clone.querySelector(".picture-item-update-button");
    
    const updatePictureInputElement = clone.querySelector("#update-picture-url-input");

    updateButtonElement.addEventListener("click", () => updatePictureHandler(updatePictureInputElement.value, index));
        
    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
