const page = async () =>{

  //Dom Elements
  const main = document.getElementById('main-section');
    
  //Variables
  mediaArray= [];
  mediaImage= [];
  mediaVideo= [];

  //get targeted photographer in previous click (from index.html)
  let myUrl = window.location.href;
  let url_string = (window.location.href);
  let url = new URL(url_string);
  let targetId = url.searchParams.get("id");

  //Get Json Data
  let fishData = await myFetch();
  
  //Get Photographers infos
  let fishPhotog = fishData.photographers;
  //Get Photographers medias
  let fishMedia = fishData.media;

  /////Instanciate single Photographer Class
  for (let i in fishPhotog){
    if(fishPhotog[i].id == targetId){
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

      //Get and display medias from Photographer's Id
      for (let i in fishMedia){
        if(fishMedia[i].photographerId == newPhotographer.id){
          newPhotographer.media.push(fishMedia[i]);
        }
      }

      //Create Dom elements from Photographers medias
      newPhotographer.createAndDisplayPhotographerInfos();

      //Create and display tags
      newPhotographer.createAndDisplayTags();
    }
  } 

  /////Listen to clicked tags and display the selected ones
  sortingMediaTags(); 

  /////Set modals and lighboxes
  setModals();

  /////Calculate total of likes
  totalOfLikes();

  /////Increment selected likes & total
  incrementLikes();

  /////Sorting media with menu selection
  listenToMenu();
};

//Initiate page Function On Page Load
window.onload = page;