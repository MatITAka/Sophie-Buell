async function fetchData() {
	try {
	  const response = await fetch('http://localhost:5678/api/works');
	  const works = await response.json();
	  console.log(works);
	  generateWorks(works);
	} catch (error) {
	  console.error('Une erreur s\'est produite lors de la récupération des works :', error);
	}
  }
  
  async function fetchCategoryData() {
	try {
	  const response = await fetch('http://localhost:5678/api/categories');
	  const categories = await response.json();
	  console.log(categories);
	  generateCategory(categories);
	} catch (error) {
	  console.error('Une erreur s\'est produite lors de la récupération des catégories :', error);
	}
  }
// let categories = [];
//   const fetchCategoryData = async () => {
// 	await fetch('http://localhost:5678/api/categories')
// 	  .then((res) => res.json().then((cat) => (categories = cat)))
// 	  .catch((err) => {
// 		console.log(`Erreur : ${err}`);
// 	  });
  
// 	//Ajout des filtres
// 	generateCategory(categories);
//   };

  
  
  function generateWorks(works) {
	const workElement = document.querySelector('.gallery');
	
	for (let i = 0; i < works.length; i++) {
	  const workCreation = document.createElement('figure');
	  const workCreated = document.createElement('img');
	  const workName = document.createElement('figcaption');
  
	  workCreated.setAttribute('src', works[i].imageUrl);
	  workName.innerText = works[i].title;
  
	  workCreation.appendChild(workCreated);
	  workCreation.appendChild(workName);
	  workElement.appendChild(workCreation);
	}
  }
  
  function generateCategory(categories) {
	const categoryElement = document.querySelector('.filter_btn');
	categoryElement.innerHTML = '';
  
	for (let i = 0; i < categories.length; i++) {
	  const categoryButton = document.createElement('button');
	  categoryButton.innerText = categories[i].name;
	  categoryButton.setAttribute('src',categories[i].id );
  
	  
	  categoryElement.appendChild(categoryButton);
	}
  }

categoryButton.addEventListener('click', () => {
		filterWorksByCategory(categories[i].categoryId);
	  });
  
  let currentCategory = 0;



  function filterWorksByCategory(categoryId) {
	currentCategory = categoryId;
	generateCategory();
  }

  
  fetchData();
  fetchCategoryData();

  