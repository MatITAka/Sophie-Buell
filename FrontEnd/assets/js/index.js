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


  function generateworks(works) {
	const imageElement = document.querySelector(".gallery");
  
	for (let i = 0; i < works.length; i++) {

	  const imageCreation = document.createElement('figure');
	  const imageCreated = document.createElement('img');
	  const imageName = document.createElement('figcaption');         

	  imageCreated.setAttribute('src',works[i].imageUrl);

      imageName.innerText = works[i].title; 
	  

	  imageCreation.appendChild(imageCreated);
	  imageCreation.appendChild(imageName);
      imageElement.appendChild(imageCreation);
	  
	}
  }
  
  fetchData();




