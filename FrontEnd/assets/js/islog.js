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