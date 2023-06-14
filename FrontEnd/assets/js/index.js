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
	  const response = await fetch('http://localhost:5678/api/category');
	  const categories = await response.json();
	  generateCategory(categories);
	} catch (error) {
	  console.error('Une erreur s\'est produite lors de la récupération des catégories :', error);
	}
  }
  
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
  
  function generateCategoryButtons(categories) {
	const categoryElement = document.querySelector('.filter_btn');
	categoryElement.innerHTML = '';
  
	for (let i = 0; i < categories.length; i++) {
	  const categoryButton = document.createElement('button');
	  categoryButton.innerText = categories[i].name;
	  categoryButton.setAttribute('src',categories[i].id );
  
	  categoryButton.addEventListener('click', () => {
		filterWorksByCategory(categories[i].id);
	  });
  
	  categoryElement.appendChild(categoryButton);
	}
  }
  let currentCategory = 0;
  function filterWorksByCategory(categoryId) {
	currentCategory = categoryId;
	fetchCategoryData();
  }
  
  fetchData();
  fetchCategoryData();