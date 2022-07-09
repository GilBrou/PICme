
/////Set Modals & Lightboxes/////
function setModals(){
  /////DOM ELEMENTS/////////////////////////
  const modalbg = document.querySelector(".bground");
  const modalbg2 = document.querySelector(".bground2");
  const lightBox = document.querySelector(".bground3");
  const lightBoxIn = document.querySelector(".content3");
  const contactBtn = document.querySelectorAll(".p-contact");
  const lightBtn = document.querySelectorAll(".media-img");
  const lightBtnVideo = document.querySelectorAll(".media-vid");
  const closeBtn = document.querySelectorAll(".close");
  const main = document.getElementsByTagName("main");
  const next = document.querySelectorAll(".next");
  const back = document.querySelectorAll(".back");
  
  /////VARIABLES/////////////////////////
  let mediaType = 0;
  let lightBoxIsOpen = false;
  let ModalIsOpen = false;
  let opened;//, opened0;
  
  /////EVENTS/////////////////////////

  /////launch modal
    contactBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  /////launch lightboxes
    //on click
    lightBtn.forEach((btn) => btn.addEventListener("click", launchLightBox));
    lightBtnVideo.forEach((btn) => btn.addEventListener("click", launchLightBoxVideo));

    //on press enter on focus
    lightBtn.forEach((btn) => btn.addEventListener("keyup", launchLightBox2));  
    lightBtnVideo.forEach((btn) => btn.addEventListener("keyup", launchLightBoxVideo2));
  

  /////close modals & ligthboxes
    //on click X
    closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
    //on press enter on focus
    closeBtn.forEach((btn) => btn.addEventListener("keyup", ckeckKeyClose));
    

    //on press escape
    document.addEventListener('keydown', function(e) {
      if(lightBoxIsOpen == true || ModalIsOpen == true){        
        //close modal and lightbox on press escape
        if (event.keyCode === 27){
          closeModal();
        }

        //Change media in lightbox by pressing arrow

        //left arrow for previous
        else if(event.keyCode === 37){
          let target = document.querySelector(".back");
          target.click(); 
        }

        //right arrow for next
        else if (event.keyCode === 39){
          let target = document.querySelector(".next");
          target.click(); 
        }
      }
    });

  /////FUNCTIONS/////////////////////////

    /////launch modal form
    function launchModal(){
      ModalIsOpen = true;
      modalbg.style.display = "block";
    }

    /////launch lightbox containing image by click
    function launchLightBox(){ 
      lightBoxIsOpen = true;

      //Display ligthbox
      lightBox.style.display = "block";       

      //Insert correct Image Title  
      let mediaTitle = document.getElementById("media-title-ligthbox");
      let targetedTitle = event.target.id;
      mediaTitle.innerHTML = targetedTitle;
        
      //Insert correct image
      let selectedMedia = document.querySelector(".media-ligthbox");
      let targetedImg = event.target.src;
      let targetedAlt = event.target.alt;


      //check if there is already an image
      if (selectedMedia.hasChildNodes()){}
      else{
        //Insert image once
        let imageLightbox = document.createElement('img');
        imageLightbox.id = "image-lightbox";    
        selectedMedia.appendChild(imageLightbox);
        imageLightbox.src = targetedImg;
        imageLightbox.alt = targetedAlt;
      }
      
    }

    /////launch lightbox containing image by key
    function launchLightBox2() {
      if (event.keyCode === 13) {
        lightBoxIsOpen = true;

        //Display ligthbox
        lightBox.style.display = "block"; 
        
        //Insert correct Image Title  
        let mediaTitle = document.getElementById("media-title-ligthbox");
        let targetedTitle = event.target.id;
        mediaTitle.innerHTML = targetedTitle;
          
        //Insert correct image
        let selectedMedia = document.querySelector(".media-ligthbox");
        let targetedImg = event.target.src;
        let targetedAlt = event.target.alt;


        //check if there is already an image    
        if (selectedMedia.hasChildNodes()){}
        else{
          //Insert image once
          let imageLightbox = document.createElement('img');
          imageLightbox.id = "image-lightbox";    
          selectedMedia.appendChild(imageLightbox);
          imageLightbox.src = targetedImg;
          imageLightbox.alt = targetedAlt;
        }
          }
    }

    /////launch lightbox containing video by click
    function launchLightBoxVideo() {
      lightBoxIsOpen = true; 

      //Tell Js it's a video
      mediaType++;

      //Display ligthbox
      lightBox.style.display = "block"; 
      
      //Insert correct video Title  
      let mediaTitle = document.getElementById("media-title-ligthbox");
      let targetedTitle = event.target.id;
      let targetedAlt = event.target.title;
      mediaTitle.innerHTML = targetedTitle;
        
      //Insert correct video
      let selectedMedia = document.querySelector(".media-ligthbox");
      let targetedImg = event.target.src;


      //check if there is already an image    
      if (selectedMedia.hasChildNodes()){}
      else{
        //Insert video once
        let videoLightbox = document.createElement('video');
        videoLightbox.id = "video-lightbox";    
        selectedMedia.appendChild(videoLightbox);
        let videoLightboxSrc = document.createElement('source');
        videoLightbox.appendChild(videoLightboxSrc);
        videoLightboxSrc.src = targetedImg;
        videoLightbox.title = targetedAlt;
        videoLightboxSrc.type = "video/mp4"; 
        videoLightbox.autoplay = true;
        videoLightbox.setAttribute("controls","controls");   
      }
    }
    
    /////launch lightbox containing video by key
    function launchLightBoxVideo2() {
      if (event.keyCode === 13) {
        lightBoxIsOpen = true;

        //Tell Js it's a video
        mediaType++;

        //Display ligthbox
        lightBox.style.display = "block"; 
        
        //Insert correct video Title title  
        let mediaTitle = document.getElementById("media-title-ligthbox");
        let targetedTitle = event.target.id;
        let targetedAlt = event.target.title;
        mediaTitle.innerHTML = targetedTitle;
          
        //Insert correct video
        let selectedMedia = document.querySelector(".media-ligthbox");
        let targetedImg = event.target.src;


        //check if there is already an image    
        if (selectedMedia.hasChildNodes()){}
        else{
          //Insert video once
          let videoLightbox = document.createElement('video');
          videoLightbox.id = "video-lightbox";    
          selectedMedia.appendChild(videoLightbox);
          let videoLightboxSrc = document.createElement('source');
          videoLightbox.appendChild(videoLightboxSrc);
          videoLightboxSrc.src = targetedImg;
          videoLightbox.title = targetedAlt;
          videoLightboxSrc.type = "video/mp4"; 
          videoLightbox.autoplay = true;
          videoLightbox.setAttribute("controls","controls");   
        }
          }
    }

    /////Close modal and lightboxes by enter key pressed on focus
    function ckeckKeyClose(){if (event.keyCode === 13){closeModal();}}  

    /////close modal and lightboxes
    function closeModal() {

      let selectedMedia = document.querySelector(".media-ligthbox");
      let closeIt = selectedMedia.querySelector(':nth-child(1)');
      if (selectedMedia.hasChildNodes()){
        selectedMedia.removeChild(closeIt);
      }
      lightBoxIsOpen = false;
      ModalIsOpen = false;     

      //Undisplay modal & ligthbox
      modalbg.style.display = "none";
      lightBox.style.display ="none";     
    }  

    /////Go to next media

      //listen to .next
       Array.from(next).map(element => {
        element.addEventListener("click", function (event) {

          //Get Dom elements & find media's title
          let inThisLigthMedia = event.target.parentNode.parentNode;
          let thisLigthMedia = inThisLigthMedia.querySelector(':nth-child(2)');
          const allMedia = document.querySelectorAll(".media");

          //Variables
          let mediaTarget, nextMediaType;

          //Find media's title
          let thatLigthMedia = thisLigthMedia.querySelector(':nth-child(2)').innerHTML;

          //Find current media from current title
          Array.from(allMedia).map(element => {
            let thisTitle = element.lastChild.id;      
            if(thisTitle == thatLigthMedia){

              //Find next media
              mediaTarget = element.nextSibling;

              //Check current media type        
              let currentTagName = element.id;

              //check if current media isn't the last of current page
              if(mediaTarget.tagName == "ARTICLE"){

                //Insert next media Title  
                let mediaTitle = document.getElementById("media-title-ligthbox");
                let targetedTitle = mediaTarget.lastChild.id;
                mediaTitle.innerHTML = targetedTitle;

                //Get Parent element of display zone
                let selectedMedia = document.querySelector(".media-ligthbox");      
                               
                //If current media is an image
                if (currentTagName == "IMAGE"){

                  //remove current image
                  let toRemove = document.getElementById("image-lightbox");
                  selectedMedia.removeChild(toRemove);

                //If next media is a video
                } else if (currentTagName == "VIDEO"){
                  //remove current video
                  let toRemove = document.getElementById("video-lightbox");
                  selectedMedia.removeChild(toRemove);
                }

                //Get targeted media
                let targetedMediaSrc = mediaTarget.querySelector(':nth-child(1) > :nth-child(1)').src;
                let targetedAlt = mediaTarget.querySelector(':nth-child(1) > :nth-child(1)').alt;
                let targetedAlt2 = mediaTarget.querySelector(':nth-child(1) > :nth-child(1)').title;

                //Check next media type
                nextMediaType = mediaTarget.querySelector(':nth-child(1) > :nth-child(1)').className;

                //If next media is an image
                if (nextMediaType == "media-img"){

                  //Insert next image
                  let imageLightbox = document.createElement('img');
                  imageLightbox.id = "image-lightbox";    
                  selectedMedia.appendChild(imageLightbox);
                  imageLightbox.src = targetedMediaSrc;
                  imageLightbox.alt = targetedAlt;
                }

                //If next media is a video
                else if (nextMediaType == "media-vid"){

                  //Insert next video
                  let videoLightbox = document.createElement('video');
                  videoLightbox.id = "video-lightbox";    
                  selectedMedia.appendChild(videoLightbox);
                  let videoLightboxSrc = document.createElement('source');
                  videoLightbox.appendChild(videoLightboxSrc);
                  videoLightboxSrc.src = targetedMediaSrc;
                  videoLightboxSrc.type = "video/mp4"; 
                  videoLightbox.autoplay = true;
                  videoLightbox.title = targetedAlt2;
                  videoLightbox.setAttribute("controls","controls");
                }
              }
            }
          });
        });        
      });
    
    /////Go to previous media     

      //listen to .next
      Array.from(back).map(element => {
        element.addEventListener("click", function (event) {

          //Get Dom elements & find media's title
          let inThisLigthMedia = event.target.parentNode.parentNode;
          let thisLigthMedia = inThisLigthMedia.querySelector(':nth-child(2)');
          const allMedia = document.querySelectorAll(".media");

          //Variables
          let mediaTarget, nextMediaType;

          //Find media's title
          let thatLigthMedia = thisLigthMedia.querySelector(':nth-child(2)').innerHTML;

          //Find current media from current title
          Array.from(allMedia).map(element => {
            let thisTitle = element.lastChild.id;      
            if(thisTitle == thatLigthMedia){

              //Find next media
              mediaTarget = element.previousElementSibling;

              //Check current media type        
              let currentTagName = element.id;

              //check if current media isn't the last of current page
              if(mediaTarget == null){}
              else if(mediaTarget.tagName == "ARTICLE"){

                //Insert next media Title  
                let mediaTitle = document.getElementById("media-title-ligthbox");
                let targetedTitle = mediaTarget.lastChild.id;
                mediaTitle.innerHTML = targetedTitle;

                //Get Parent element of display zone
                let selectedMedia = document.querySelector(".media-ligthbox");      
                                   
                //If current media is an image
                if (currentTagName == "IMAGE"){

                  //remove current image
                  let toRemove = document.getElementById("image-lightbox");
                  selectedMedia.removeChild(toRemove);

                //If next media is a video
                } else if (currentTagName == "VIDEO"){
                  //remove current video
                  let toRemove = document.getElementById("video-lightbox");
                  selectedMedia.removeChild(toRemove);
                }

                //Get targeted media
                let targetedMediaSrc = mediaTarget.querySelector(':nth-child(1) > :nth-child(1)').src;
                
                //Check next media type
                nextMediaType = mediaTarget.querySelector(':nth-child(1) > :nth-child(1)').className;

                //If next media is an image
                if (nextMediaType == "media-img"){

                  //Insert next image
                  let imageLightbox = document.createElement('img');
                  imageLightbox.id = "image-lightbox";    
                  selectedMedia.appendChild(imageLightbox);
                  imageLightbox.src = targetedMediaSrc;
                }

                //If next media is a video
                else if (nextMediaType == "media-vid"){

                  //Insert next video
                  let videoLightbox = document.createElement('video');
                  videoLightbox.id = "video-lightbox";    
                  selectedMedia.appendChild(videoLightbox);
                  let videoLightboxSrc = document.createElement('source');
                  videoLightbox.appendChild(videoLightboxSrc);
                  videoLightboxSrc.src = targetedMediaSrc;
                  videoLightboxSrc.type = "video/mp4"; 
                  videoLightbox.autoplay = true;
                  videoLightbox.setAttribute("controls","controls");
                }

                // for first media on page
                else if (nextMediaType == "up-media"){
                  let newMedia = mediaTarget.querySelector(':nth-child(1) > :nth-child(1) > :nth-child(1)').className;
                  let targetedMediaSrc = mediaTarget.querySelector(':nth-child(1) > :nth-child(1) > :nth-child(1)').src;

                  if (newMedia == "media-img"){

                    //Insert next image
                    let imageLightbox = document.createElement('img');
                    imageLightbox.id = "image-lightbox";    
                    selectedMedia.appendChild(imageLightbox);
                    imageLightbox.src = targetedMediaSrc;
                  }
                  else if (newMedia == "media-vid"){

                    //Insert next video
                    let videoLightbox = document.createElement('video');
                    videoLightbox.id = "video-lightbox";    
                    selectedMedia.appendChild(videoLightbox);
                    let videoLightboxSrc = document.createElement('source');
                    videoLightbox.appendChild(videoLightboxSrc);
                    videoLightboxSrc.src = targetedMediaSrc;
                    videoLightboxSrc.type = "video/mp4"; 
                    videoLightbox.autoplay = true;
                    videoLightbox.setAttribute("controls","controls");
                  }
                }
              }   
            }
           });
         });
       });
}

    /////Submit Form & trigger next timed modal (contact confirmation)
    function validate() {

      //Prevent submitting
      event.preventDefault();

      //Displaying form inputs
      console.log("Nom :" + last.value);
      console.log("E-mail :" + email.value);
      console.log("Message :" + message.value);

      //Get Dom elements
      const modalbg = document.querySelector(".bground");
      const lightBox = document.querySelector(".bground3");
      const modalbg2 = document.querySelector(".bground2"); 

      //Undisplay modal & ligthbox
      modalbg.style.display = "none";
      lightBox.style.display ="none";
      modalbg2.style.display = "block";

      //close second modal
      function closeModal2() {modalbg2.style.display = "none";}

      //Display and automatically close confirmation modal
      setTimeout(closeModal2, 2500);
    }
