const islog =  localStorage.getItem("info") ? true : false;
console.log(islog);


const editProfile = document.querySelector('#edit_photo');
const editProject = document.querySelector('#edit_project');
const editBar = document.querySelector('#banner_admin');
const loginButton = document.getElementById('login_button');
const filterButton = document.getElementById ('btn_filtres');




if(islog) {

editProfile.style.display = "flex";
editProject.style.display = "flex";
editBar.style.display="flex";

// change le login pour logout

loginButton.innerText = "logout"
loginButton.classList.add("login_btn_connected");


// permet la déconnexion 

loginButton.addEventListener('click', () => {	 
    

    loginButton.href ="/FrontEnd/index.html"
    logout();
    
    
    
});


// désactive les bouttons de filtres 

filterButton.style.display ="none";


// // afficher les elements admin de la barre
// const editBarCreation = document.createElement('div')

// const editBarFontCreation = document.createElement('i')
// const editBarTextCreation = document.createElement('p')
// const editBarButtonCreation = document.createElement('button')

// editBarTextCreation.innerText = ("mode édition")
// editBarButtonCreation.innerText = ("publier les changements")


// editBarCreation.classList.add("edit-title");

// editBarFontCreation.classList.add("fa-regular" ,"fa-pen-to-square", "font_pen");
// editBarButtonCreation.classList.add("modify_banner_btn");

// editBarCreation.appendChild(editBar);

// editBarButtonCreation.appendChild(editBarCreation);
// editBarTextCreation.appendChild(editBarCreation);
// editBarFontCreation.appendChild(editBarCreation);

// // afficher les elements admin de la photo

// const editProfileCreation = document.createElement('div');

// const editProfileFont = document.createElement ('i');
// const editProfileText = document.createElement ('p');

// editProfileText.innerText = ("mode édition");

// editProfileCreation.classList.add("edit-photo")
// editProfileFont.classList.add ("fa-regular" ,"fa-pen-to-square", "font_pen")

// editProfileCreation.appendChild(editProfile);
// editProfileFont.appendChild(editProfileCreation);
// editProfileText.appendChild(editProfileCreation);


// // afficher les elements admin des projets

// const editProjectCreation = document.createElement('div');

// const editProjectFont = document.createElement ('i');
// const editProjectText = document.createElement ('p');

// editProjectText.innerText = ("mode édition");

// editProjectCreation.classList.add("edit-projet")
// editProjectFont.classList.add ("fa-regular" ,"fa-pen-to-square", "font_pen")

// editProjectCreation.appendChild(editProject);
// editProjectFont.appendChild(editProjectCreation);
// editProjectText.appendChild(editProjectCreation);


}

else{
    
    // masquer les element admin
    editBar.style.display= "none";
    editProfile.style.display="none"
    editProject.style.display ="none"

    filterButton.style.display = "flex"

    console.log(aaa);
}

 logout = () => {
   
    localStorage.clear();
   
}