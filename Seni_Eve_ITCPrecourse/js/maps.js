const prevButton = document.querySelector ('.prev');
const nextButton = document.querySelector (' .next');
const galleryImgs = document.querySelectorAll('.gallery-img');

let currentlySelected =0;

prevButton.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected= currentlySelected - 1;
    galleryImgs[currentlySelected].classList.add ("active");
    nextButton.disabled = false;

    if (currentlySelected === 0){
        prevButton.disabled=true;
    }

});

nextButton.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");
    //removes the active element of the first image.Have to remove the classlist first from the designation  
    currentlySelected++; 
    galleryImgs[currentlySelected].classList.add ("active");
    prevButton.disabled = false;

    if (galleryImgs.length -1  === currentlySelected){
    // +1 to make sure it stops
     nextButton.disabled = true;
    }
});

