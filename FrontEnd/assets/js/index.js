let currentCategory = 0;
let listWorks=[];


async function fetchData() {
	try {
	  const response = await fetch('http://localhost:5678/api/works');
	  const works = await response.json();
	  console.log(works);
	  listWorks = works;

	  generateWorks(currentCategory);
	  workGallery(listWorks);
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



  function generateWorks(currentCategory) {
	
	const workElement = document.querySelector('.gallery');
	workElement.innerHTML="";
	
	for (let i = 0; i < listWorks.length; i++) { 

		if(listWorks[i].categoryId === currentCategory || currentCategory===0  ){
			
			const workCreation = document.createElement('figure');
			const workCreated = document.createElement('img');
			const workName = document.createElement('figcaption');
		
			workCreated.setAttribute('src', listWorks[i].imageUrl);
			workName.innerText = listWorks[i].title;
		
			workCreation.appendChild(workCreated);
			workCreation.appendChild(workName);
			workElement.appendChild(workCreation);
		}
	}
  }
  
  function generateCategory(categories) {
	const categoryElement = document.querySelector('.filter_btn');

	const Tous = document.getElementById('Tous');
    Tous.addEventListener('click', () => {		
		generateWorks(0);
	  });


	for (let i = 0; i < categories.length; i++) {

	  const categoryButton = document.createElement('button');

	  categoryButton.innerText = categories[i].name;
	//   categoryButton.setAttribute('src',categories[i].id );

	  categoryButton.addEventListener('click', () => {		
		generateWorks(categories[i].id);
	  });
	  
	  categoryElement.appendChild(categoryButton);
	}
  }



  

  fetchCategoryData();
  fetchData();
