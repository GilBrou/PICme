/////Photographer Class Creation/////
class Photographer {
  constructor(name, id, city, country, tags, tagline, price, portrait){
    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
    this.media = [];
  }

  //Create And Display into Dom Photographer's Cards
  createAndDisplayPhotographerCard(main){

    //Dom element creation
    let photoSection = document.createElement('section');
    let focusLink = document.createElement('a');
    let focusPortrait = document.createElement('img');
    let focusName = document.createElement('h1');
    let aside1 = document.createElement('aside');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let aside2 = document.createElement('aside');

    //Dom appending
    main.appendChild(photoSection);
    photoSection.appendChild(focusLink);
    focusLink.appendChild(focusPortrait);
    focusLink.appendChild(focusName);
    photoSection.appendChild(aside1);
    aside1.appendChild(p1);
    aside1.appendChild(p2);
    aside1.appendChild(p3);
    photoSection.appendChild(aside2);

    //Assing to Dom
    focusPortrait.src = "./Ressources/Photos/" + this.id + "/" + this.portrait;
    focusPortrait.alt = this.name;
    focusName.innerHTML = this.name;     
    p1.innerHTML = this.city + ", " + this.country ; 
    p2.innerHTML = this.tagline;
    p3.innerHTML = this.price + "€/jour";

    //Setup Taglist
    let tagList = this.tags;
    for (let i in tagList){
      let tag = document.createElement('a');
      aside2.appendChild(tag);
      tag.innerHTML = "#" + tagList[i]; 
      if(tagList[i] == "portrait"){tag.classList.add("tag"+tagList[i]);}
      else {tag.classList.add(tagList[i]);}
    }

    //Assign classes & refs or ids to Dom elements
    photoSection.classList.add("photographers", "unDisplay");
    focusLink.classList.add("ID");
    focusLink.id = this.id; 
    focusLink.tabIndex = '0';
    //focusLink.setAttribute("role", "button");
    focusPortrait.classList.add("portrait"); 
    focusName.classList.add("name");  
    p1.classList.add("city", "country");
    p2.classList.add("tagline");
    p3.classList.add("price");
    aside2.classList.add("tags");
  }

  //Create And Display Media into Page Dom
  createAndDisplayPhotographerInfos(page){

    /////Display photographer's details

    //Get Dom elements
    let name = document.querySelector(".name");        
    let modalName = document.querySelector(".modal-name");     
    let location = document.querySelector(".city");        
    let tagline = document.querySelector(".tagline");    
    let portrait = document.querySelector(".portrait");
    let price = document.querySelector(".price");

    //Append Dom elements from Photographer
    name.innerHTML = this.name;
    modalName.innerHTML = this.name;
    location.innerHTML = this.city + ", " + this.country;
    tagline.innerHTML = this.tagline;    
    portrait.src = "./Ressources/Photos/" + this.id + "/" + this.portrait;
    portrait.alt = this.name;
    price.innerHTML = this.price + "€ /jour";
    document.title = this.name;
    
    /////Create images and video elements    
    for(let i in this.media){
      let thatMedia = this.media[i];
      MediaFactory(thatMedia);
    }    
  } 

  //Create And Display Tags
  createAndDisplayTags(main){

    //get Dom element
    let tags = document.querySelector(".tags");

    //Setup Taglist
    let tagList = this.tags;
    for (let i in tagList){
      let tag = document.createElement('a');
      tags.appendChild(tag);
      tag.tabIndex = '0';
      tag.innerHTML = "#" + tagList[i]; 
      if(tagList[i] == "portrait"){tag.classList.add("tag"+tagList[i]);}
      else {tag.classList.add(tagList[i]);}
    }
  }
}