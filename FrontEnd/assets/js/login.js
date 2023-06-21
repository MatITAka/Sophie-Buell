
async function fetchLoginData() {
	
    
    try {
	 const response = await fetch('http://localhost:5678/api/users/login');
	  const login = await response.json();
	  console.log(login);
	  loginFunction(login);
	} catch (error) {
	  console.error('Une erreur s\'est produite lors de la récupération des données :', error);
	}
  }


const loginForm = document.getElementById("form");
const emailInput = document.getElementById("email");
const mdpInput = document.getElementById("mdp");
const errorMsg = document.querySelector(".erreur-msg");

let mail = "";
let mdp = "";