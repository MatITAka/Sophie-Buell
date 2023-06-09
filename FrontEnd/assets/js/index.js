

async function fetchData() {
	try {

	  const response = await fetch('http://localhost:5678/api/works');      
      const works = await response.json();
      console.log(works);
	  generateworks(works);

	} 
    catch (error) {
	  console.error('Une erreur s\'est produite lors de la récupération des works :', error);
	}
  } 

  async function fetchCategoryData() {
	try{

	
	const response = await fetch('http://localhost:5678/api/category');
	const Category = await response.json();
	generateCategory(Category);
	}
	catch (error) {
		console.error('Une erreur s\'est produite lors de la récupération des works :', error);
	  }
	}

  


  function generateworks(works) {
	const workElement = document.querySelector(".gallery");
  
	for (let i = 0; i < works.length; i++) {

	  const workCreation = document.createElement('figure');
	  const workCreated = document.createElement('img');
	  const workName = document.createElement('figcaption');         

	  workCreated.setAttribute('src',works[i].imageUrl);

      workName.innerText = works[i].title; 
	  

	  workCreation.appendChild(workCreated);
	  workCreation.appendChild(workName);
      workElement.appendChild(workCreation);
	  
	}
  }
  
  fetchData();
  fetchCategoryData();


const buttonFilterObjects = document.querySelector ('#Objets')
const buttonFilterAppartements = document.querySelector ('#Appartements')
const buttonFilterRestaurants = document.querySelector ('#Restaurants')
let currentCategory = 0;
innerHTML ="";

buttonFilterObjects.addEventListener ('click', e=>{




});



buttonFilterAppartements.addEventListener ('click', e=> {




});




buttonFilterRestaurants.addEventListener ('click', e=> {




});
