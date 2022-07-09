
/////Calculate and display total of like for this photographer/////
function totalOfLikes() {
  
  //Variables
  let totaloflike = [];

  //Display total likes into footer  
  let eachMediaLikes = document.querySelectorAll(".number");
  Array.from(eachMediaLikes).map(element => { 
    totaloflike.push(element.innerText)
  });
  var valuesArray = [];
  var sum = 0;
  for (var i = 0; i < totaloflike.length; i++) {   
    let value = parseInt(totaloflike[i]);
    valuesArray.push(value);
  }
  for (var i = 0; i < valuesArray.length; i++) {sum += valuesArray[i];}  
  let totalNumber = document.querySelector(".number-footer");
  totalNumber.innerHTML = sum;

  //check popularity order
  listenToMenu();
}

/////Increment media likes & total likes on click/////
function incrementLikes() {

  //Get Dom elements 
  const likeButtons = document.querySelectorAll(".likes");
  
  //Increase number
  likeButtons.forEach((btn) => btn.addEventListener("click", increaseNumber));
  likeButtons.forEach((btn) => btn.addEventListener("keyup", increaseNumber2));

  let time = 0;

  //Increase number
  function increaseNumber() {  
    if(time == 0){
      let newNumberTarget = event.target.firstChild;   
      let likeButton = event.target.firstChild.innerText;  
      newNumber = parseInt(likeButton);
      newNumber++;
      NewText = newNumber.toString();
      newNumberTarget.innerHTML = NewText;
      time = 1;
      //Calculate and display once more the total of like for this photographer
      totalOfLikes();
    }
    else if (time == 1){
      let newNumberTarget = event.target.firstChild;   
      let likeButton = event.target.firstChild.innerText;  
      newNumber = parseInt(likeButton);
      newNumber--;
      NewText = newNumber.toString();
      newNumberTarget.innerHTML = NewText;
      time = 0;
      //Calculate and display once more the total of like for this photographer
      totalOfLikes();
    }
  }

  //Increase number
  function increaseNumber2() {
    if (event.keyCode === 13) {
      if(time == 0){
        let newNumberTarget = event.target.firstChild;   
        let likeButton = event.target.firstChild.innerText;  
        newNumber = parseInt(likeButton);
        newNumber++;
        NewText = newNumber.toString();
        newNumberTarget.innerHTML = NewText;
        //Calculate and display once more the total of like for this photographer
        totalOfLikes();
        time = 1;
      }
      else if( time == 1){
        let newNumberTarget = event.target.firstChild;   
        let likeButton = event.target.firstChild.innerText;  
        newNumber = parseInt(likeButton);
        newNumber--;
        NewText = newNumber.toString();
        newNumberTarget.innerHTML = NewText;
        //Calculate and display once more the total of like for this photographer
        totalOfLikes();
        time = 0;
      }
    }
  }
}