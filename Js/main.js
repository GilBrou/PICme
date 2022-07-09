const main = async () =>{

  //Dom elements
  const main = document.getElementById('main-section');
      
  //Get Json Data
  let fishData = await myFetch();
  
  //Get Photographers infos
  let fishPhotog = fishData.photographers;

 //Instanciate Photographers Class
  for (let i in fishPhotog){
    let newPhotographer = new Photographer(
      fishPhotog[i].name,
      fishPhotog[i].id,
      fishPhotog[i].city,
      fishPhotog[i].country,
      fishPhotog[i].tags,
      fishPhotog[i].tagline,
      fishPhotog[i].price,
      fishPhotog[i].portrait
    );

    //Create Dom elements from Photographers infos
    newPhotographer.createAndDisplayPhotographerCard(main);
  } 

  //Listen to clicked tags and display the selected ones
  sortingTags();
 
  //listen to click on photographer sections to display targeted photographer page
  const photoSections = document.querySelectorAll('.ID');
  Array.from(photoSections).map(element => {

    element.addEventListener("click", function (event) {
      let targetId = element.id;
      window.location.href = "Photographer.html" + "?id=" + targetId;
    });

    element.addEventListener("keyup", function (event) {
      let targetId = element.id;
      if (event.keyCode === 13) {window.location.href = "Photographer.html" + "?id=" + targetId;}
    });    
  });
};
  
//Initiate Main Function On Page Load
window.onload = main;
