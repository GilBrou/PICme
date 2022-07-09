
/////Listen to clicked tags and display the accordings Photographer Cards/////
function sortingTags (){

  //getting Tags classes
  const allTags = document.querySelectorAll(".tagportrait,.art,.fashion,.architecture,.travel,.sports,.animals,.events");
  const allTagsTag = document.querySelectorAll(".allTags");
  
  //Listen to "click" on all tags
  for (var i = 0; i < allTags.length ; i++) {
    allTags[i].addEventListener("click", function (event) {

      //Get selected tag className
      var targetTag = event.target.className;

      //Get all photographer cards
      var PhotographerSections = document.getElementsByTagName("section");
      Array.from(PhotographerSections).map(element => {

        //Get taglists from current photographer card
        var inTags = element.lastChild.children; 
        var removeOrStay = 0 ;
        Array.from(inTags).map(element => {

          //Check if selected tag is present in current taglist
          if (element.className == targetTag){removeOrStay++;}  
          return element;
        });
        
        //If selected tag is missing, current photographer card is removed
        if (removeOrStay == 0){element.style.display = "none";}

        //If selected tag is present, current photographer card stay displayed
        else {element.style.display = "block";}
        return element;
      });
    });
  }

  //Listen to "click" on allTagsTag
  for (var i = 0; i < allTagsTag.length ; i++) {
    allTagsTag[i].addEventListener("click", function (event) {
      //Get all photographer cards
      var PhotographerSections = document.getElementsByTagName("section");
      Array.from(PhotographerSections).map(element => {
      //Display all photographer cards       
        element.style.display = "block";
        return element;
      });
    });
  }
}

/////Listen to clicked tags and display the accordings Media Articles/////
function sortingMediaTags (){
  //getting Tags classes
  const allTags = document.querySelectorAll(".tagportrait,.art,.fashion,.architecture,.travel,.sports,.animals,.events");
  const allTagsTag = document.querySelectorAll(".allTags");
  
  //Listen to "click" on all tags
  for (var i = 0; i < allTags.length ; i++) {
    allTags[i].addEventListener("click", function (event) {

      //Get selected tag className
      var targetTag = event.target.className;

      //Get all Media articles
      var mediaArticles = document.getElementsByTagName("article");
      Array.from(mediaArticles).map(element => {
        var inTags = element.lastChild.previousSibling.id;       

        //If selected tag is missing, current photographer card is removed
        if (inTags == targetTag){element.style.display = "block";}

        //If selected tag is present, current photographer card stay displayed
        else {element.style.display = "none";}        
        return element;
      });      
    });
  }

  //Listen to "click" on allTagsTag
  for (var i = 0; i < allTagsTag.length ; i++) {
    allTagsTag[i].addEventListener("click", function (event) {
      //Get all Media articles
      var mediaArticles = document.getElementsByTagName("article");
      Array.from(mediaArticles).map(element => {
      //Display all photographer cards       
        element.style.display = "block";
        return element;
      });
    });
  }

  //Listen to "Keyup" on allTags
  allTags.forEach((btn) => btn.addEventListener("keyup", ckeckKey));

  function ckeckKey(){
    if (event.keyCode === 13) {

      //Get selected tag className
      var targetTag = event.target.className;

      //Get all Media articles
      var mediaArticles = document.getElementsByTagName("article");
      Array.from(mediaArticles).map(element => {
        var inTags = element.lastChild.previousSibling.id;       

        //If selected tag is missing, current photographer card is removed
        if (inTags == targetTag){element.style.display = "block";}

        //If selected tag is present, current photographer card stay displayed
        else {element.style.display = "none";}        
        return element;
      });     
    }
  }

  //Listen to "Keyup" on allTagsTag
  allTagsTag.forEach((btn) => btn.addEventListener("keyup", ckeckKey2));

  function ckeckKey2(){
    if (event.keyCode === 13) {

      //Get all Media articles
      var mediaArticles = document.getElementsByTagName("article");
      Array.from(mediaArticles).map(element => {        
      //Display all photographer cards       
        element.style.display = "block";
        return element;
      });     
    }
  }
}

/////Sort media according to menu selection/////
function listenToMenu(){
  //Get dom element
  let sortMenu = document.getElementById("sort-by");

  //Listent to changes
  sortMenu.addEventListener('change', checkSelection);

  //Sort at page load
  checkSelection();

  //Sort medias
  function checkSelection(){
    if (sortMenu.options[0].selected == true){
      sortingMediaByPopularity();
    } else if (sortMenu.options[1].selected == true){
      sortingMediaByDate();
    } else if (sortMenu.options[2].selected == true){
      sortingMediaByTitle();    
    }
  }

  //Sort by popularity
  function sortingMediaByPopularity(){
    
    //get Dom elements
    const allMedia = document.querySelectorAll(".media");
    const portfolio = document.querySelector(".portfolio");
    let beforeThisOne = document.querySelector(".bground3");

    //variables
    likesArray = [];
    mediaArray = []

    Array.from(allMedia).map(element => {
      let howManyLikes = element.querySelector(':nth-child(2) > :nth-child(4) > :nth-child(1)').innerHTML;
      likesArray.push(howManyLikes);
      mediaArray.push(element);
      return element;
    });

    likesArray.sort((a, b) => b - a); // For descending sort

    for(let i in likesArray){
      thisOne = likesArray[i];
      for (let i in mediaArray){
        insertThisOne = mediaArray[i];
        thatOne = mediaArray[i].childNodes[1].childNodes[3].childNodes[0].innerHTML;
        if(thatOne == thisOne){portfolio.insertBefore(insertThisOne, beforeThisOne);} 
      }
    }   
  }

  //Sort by date
  function sortingMediaByDate(){ 

    //get Dom elements
    const allMedia = document.querySelectorAll(".media");
    const portfolio = document.querySelector(".portfolio");
    let beforeThisOne = document.querySelector(".bground3");

    //variables
    datesArray = [];
    mediaArray = []

    Array.from(allMedia).map(element => {

      //get Dom elements
      let whatIsTheDate = element.querySelector(':nth-child(1)').id;

      //Remove string element "-" for plain number
      whatIsTheDate = whatIsTheDate.replace('-', '');
      whatIsTheDate = whatIsTheDate.replace('-', '');
      datesArray.push(whatIsTheDate);
      mediaArray.push(element);
      return element;
    }); 
    
    //sort Array
    datesArray.sort();
    datesArray.reverse();
    
    for(let i in datesArray){
      thisOne = datesArray[i];
      for (let i in mediaArray){
        insertThisOne = mediaArray[i];
        thatOne = mediaArray[i].childNodes[0].id;
        //Remove string element "-" for plain number
        thatOne = thatOne.replace('-', '');
        thatOne = thatOne.replace('-', '');
        if(thatOne == thisOne){portfolio.insertBefore(insertThisOne, beforeThisOne);} 
      }
    }     
    
    //calculate total of date numbers
    function findSum(str) {
      let temp = "0";
      let sum = 0;
      for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (!isNaN(String(ch) * 1))
        temp += ch;
        else {
          sum += parseInt(temp);
          temp = "0";
        }
      }
      return sum + parseInt(temp);
    }     
}

  //Sort by title
  function sortingMediaByTitle(){

    //get Dom elements
    const allMedia = document.querySelectorAll(".media");
    const portfolio = document.querySelector(".portfolio");
    let beforeThisOne = document.querySelector(".bground3");

    //variables
    titlesArray = [];
    mediaArray = []

    Array.from(allMedia).map(element => {
      let thisTitle = element.lastChild.id;
      titlesArray.push(thisTitle);
      mediaArray.push(element);
      return element;
    });

     titlesArray.sort(); // By alphabetical order

    for(let i in titlesArray){
      thisOne = titlesArray[i];
      for (let i in mediaArray){
        insertThisOne = mediaArray[i];
        thatOne = mediaArray[i].lastChild.id;
        if(thatOne == thisOne){portfolio.insertBefore(insertThisOne, beforeThisOne);} 
      }
    }
  }
}