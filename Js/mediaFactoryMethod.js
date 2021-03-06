
/////Get and display Medias from Photographer's Id/////
function MediaFactory(thatMedia){  
  if(thatMedia.hasOwnProperty('image')){
    return createImages();
  } else if(thatMedia.hasOwnProperty('video')){
    return createVideos();
  }

  function createImages(){
    //Get Dom element
    let portfolio = document.querySelector(".portfolio");

    //Dom element creation
    let media = document.createElement('article');
    let upMedia = document.createElement('div');
    let image = document.createElement('img');
    let downMedia = document.createElement('div');
    let mediaTitle = document.createElement('p');
    let mediaDate = document.createElement('p');
    let mediaPrice = document.createElement('p');
    let likes = document.createElement('div');
    let number = document.createElement('div');
    let heart = document.createElement('i');
    let thisMediaTags = document.createElement('div');
    let hidenTitle = document.createElement('div');

    //Dom appending
    portfolio.appendChild(media);
    media.appendChild(upMedia);
    upMedia.appendChild(image);
    media.appendChild(downMedia);      
    downMedia.appendChild(mediaTitle);
    downMedia.appendChild(mediaDate);
    downMedia.appendChild(mediaPrice);
    downMedia.appendChild(likes);
    likes.appendChild(number);      
    likes.appendChild(heart);
    media.appendChild(thisMediaTags);
    media.appendChild(hidenTitle);  

    //Assign classes & ids to Dom elements
    media.classList.add("media");
    upMedia.classList.add("up-media");
    image.classList.add("media-img");
    downMedia.classList.add("down-media");
    mediaTitle.classList.add("media-title");
    mediaDate.classList.add("media-date", "removable");
    mediaPrice.classList.add("media-price", "removable");      
    likes.classList.add("likes");      
    number.classList.add("number");
    heart.classList.add("fas", "fa-heart", "icon-heart", "icon-heart-plain");
    hidenTitle.classList.add("removable");
    media.id = "IMAGE";      
    upMedia.id = thatMedia.date;      
    image.id = thatMedia.title;      
    hidenTitle.id = thatMedia.title;

    //Settings (innerHTML, sources, alt, arialabel, Tabindex...)
    image.tabIndex = '0';        
    likes.tabIndex = '0';   
    likes.ariaLabel ="likes";
    image.alt = thatMedia.depiction;
    number.innerHTML = thatMedia.likes;
    mediaDate.innerHTML = thatMedia.date;      
    mediaTitle.innerHTML = thatMedia.title;      
    mediaPrice.innerHTML = thatMedia.price + "???";
    image.src = "./Ressources/Photos/" + thatMedia.photographerId + "/" + thatMedia.image;
        
    //get media tags     
    let thoseTags = thatMedia.tags;    
    for( let i in thoseTags){
      thisMediaTags.classList.add("removable");
      if(thoseTags[i] === "portrait"){thisMediaTags.id = ("tagportrait");}
      else {thisMediaTags.id = (thoseTags[i]);}
    }
  }

  function createVideos(){

    //Get Dom element
    let portfolio = document.querySelector(".portfolio"); 

    //Dom element creation
    let media = document.createElement('article');
    let upMedia = document.createElement('div');
    let video = document.createElement('video');  
    let downMedia = document.createElement('div');
    let mediaTitle = document.createElement('p');
    let mediaDate = document.createElement('p');
    let mediaPrice = document.createElement('p');
    let likes = document.createElement('div');
    let number = document.createElement('div');
    let heart = document.createElement('i');
    let playIcon = document.createElement('img');
    let thisMediaTags = document.createElement('div');
    let hidenTitle = document.createElement('div');

    //Dom appending
    portfolio.appendChild(media);
    media.appendChild(upMedia);
    upMedia.appendChild(video);
    media.appendChild(downMedia);
    downMedia.appendChild(mediaTitle);
    downMedia.appendChild(mediaDate);
    downMedia.appendChild(mediaPrice);
    downMedia.appendChild(likes);
    likes.appendChild(number);
    likes.appendChild(heart);
    upMedia.appendChild(playIcon); 
    media.appendChild(thisMediaTags);
    media.appendChild(hidenTitle);  

    //Assign classes & ids to Dom elements
    media.classList.add("media");
    upMedia.classList.add("up-media");
    video.classList.add("media-vid");
    downMedia.classList.add("down-media");      
    mediaTitle.classList.add("media-title");
    mediaDate.classList.add("media-date", "removable");
    mediaPrice.classList.add("media-price",  "removable");
    likes.classList.add("likes"); 
    number.classList.add("number");
    heart.classList.add("fas", "fa-heart", "icon-heart", "icon-heart-plain");
    playIcon.classList.add("play-icon");
    hidenTitle.classList.add("removable");
    video.id = thatMedia.title; 
    media.id = "VIDEO";
    upMedia.id = thatMedia.date;
    hidenTitle.id = thatMedia.title;

    //Settings (innerHTML, sources, alt, arialabel, Tabindex...)      
    video.title = thatMedia.depiction;
    video.tabIndex = '0';        
    video.src = "./Ressources/Photos/" + thatMedia.photographerId + "/" + thatMedia.video;
    mediaTitle.innerHTML = thatMedia.title;
    mediaDate.innerHTML = thatMedia.date;      
    mediaPrice.innerHTML = thatMedia.price + "???";
    likes.tabIndex = '0';
    number.innerHTML = thatMedia.likes;
    playIcon.src = "./Ressources/Icones/playButton.png";
    playIcon.alt = "video";

    //get media tags
    let thoseTags = thatMedia.tags;    
    for( let i in thoseTags){
      thisMediaTags.classList.add("removable");
      if(thoseTags[i] === "portrait"){thisMediaTags.id = ("tagportrait");}
      else {thisMediaTags.id = (thoseTags[i]);}
    }
  }
}