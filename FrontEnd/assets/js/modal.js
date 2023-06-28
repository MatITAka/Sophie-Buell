const editBanner = document.querySelector(".modify-banner");
const editBtn = document.querySelectorAll(".edit-projet");
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalGallery = document.querySelector(".modal-gallery-work");
const modal1 = document.querySelector(".pictures-gallery");
const modal2 = document.querySelector(".add-picture-gallery");
const addPictureBtn = document.querySelector(".addPicture-btn");
const returnArrow = document.querySelector(".return-arrow");
const addPicture = document.querySelector(".addPictures");
const addImageModal = document.querySelector(".btn-addImage");
const validateBtn = document.querySelector(".validate-btn");
const addTitle = document.getElementById("add-title");
const addCategorie = document.getElementById("add-categories");
const previewImg = document.querySelector(".preview-img");
const imgContainer = document.querySelector(".img-container");
const errorAdd = document.querySelector(".error-add");
const deleteMsg = document.querySelector(".delete-msg");

let imageForm = "";
let categoryForm = "";
let titleForm;


function toggleModal() {
    modalContainer.classList.toggle("target");
  }

  modalTriggers.forEach((trigger) =>
    trigger.addEventListener("click", toggleModal)
  );
  
  function showAddPictureModal() {
    modal1.style.display = "none";
    modal2.style.display = "flex";
  }
  
  addPictureBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showAddPictureModal();
  });
  
  //Au click sur la fleche retour de la modal on revient à la modale précédente
  
  function returnModal1() {
    modal1.style.display = "block";
    modal2.style.display = "none";
    previewImg.src = "";
    previewImg.style.setProperty("display", "none");
    imgContainer.style.setProperty("display", "flex");
  }
  
  returnArrow.addEventListener("click", returnModal1);
  
  //Function ajout des images
  function addImage() {
    // Image
    addImageModal.addEventListener("input", (e) => {
      imageForm = e.target.files[0];
      const img = URL.createObjectURL(imageForm);
      previewImg.src = img;
      previewImg.style.setProperty("display", "block");
      imgContainer.style.setProperty("display", "none");
    });


    //Titre
    addTitle.addEventListener("input", (e) => {
      titleForm = e.target.value;
      // console.log(addTitle);
    });


    //Catégories
    addCategorie.addEventListener("input", (e) => {
      categoryForm = e.target.value;
      // console.log(categoryForm);
    });

    //Submit
    addPicture.addEventListener("submit", (e) => {
      e.preventDefault();
      if (imageForm && titleForm && categoryForm) {
        const formData = new FormData();
        console.log(imageForm, titleForm, categoryForm);
        formData.append("image", imageForm);
        formData.append("title", titleForm);
        formData.append("category", categoryForm);
        console.log(formData.entries());
        //Fetch ajout des travaux
        fetch("http://localhost:5678/api/works", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("info")).token}`,
          },
          body: formData,
        })
        console.log(fetch)
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
            errorAdd.innerText = "Posté !";
            errorAdd.style.color = "green";
           
            //Clear les galleries
            gallery.innerHTML = "";
            modalGallery.innerHTML = "";
            addPicture.reset();
            previewImg.src = "";
            previewImg.style.setProperty("display", "none");
            imgContainer.style.setProperty("display", "flex");
            setTimeout(() => {
              errorAdd.innerText = "";
            }, 4000);
          })
          .catch((err) =>
            console.log("Il y a eu une erreur sur le Fetch: " + err)
          );
      } else {
        alert("Veuilez remplir tous les champs");
      }
    });

  }

function workGallery(works) {
  const modalGallery = document.querySelector('.modal-gallery-work');
  modalGallery.innerHTML = "";

  for (let i = 0; i < works.length; i++) {
    const work = works[i];

    const workPost = document.createElement('figure');
    // workPost.setAttribute('id', work.id);

    const workContainer = document.createElement('div');
    workContainer.classList.add('workgallery-container');

    const deleteIcon = document.createElement('i');
    // deleteIcon.setAttribute('id',work.id);
    deleteIcon.classList.add('fa-solid', 'fa-trash-can', 'trash-icon');

    const workImage = document.createElement('img');
    workImage.classList.add('modal-image');
    workImage.setAttribute('src', work.imageUrl);
    workImage.setAttribute('alt', `image de ${work.title}`);

    const editCaption = document.createElement('figcaption');
    editCaption.innerText = 'éditer';

    workContainer.appendChild(deleteIcon);
    workContainer.appendChild(workImage);

    workPost.appendChild(workContainer);
    workPost.appendChild(editCaption);

    modalGallery.appendChild(workPost);

    // deleteImage(deleteIcon);
    deleteIcon.addEventListener("click", () => {
      fetchDelete( work.id)
    });
    
  }
}


// fetch API delete

const fetchDelete = (id) => {  
  fetch("http://localhost:5678/api/works/" + id, {
    method: "DELETE",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("info")).token}`,
    },
    mode: "cors",
  })
    .then((response) => response.json())
    .then((res) => {
      fetchData();
    })
    .catch((err) => console.log("Il y a eu une erreur sur le Fetch: " + err));
};




  addImage();