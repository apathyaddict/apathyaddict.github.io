


//replace with your user:
const GITHUB_URL = "https://api.github.com/users/apathyaddict";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json(); //this gathers the response from JSON but they are objects
  })
  .then(function (data) {
    
    const profileName = data.name; //gets info from data list
    const profileImage = data.avatar_url;

    document.getElementById("profile-name").innerText = profileName;
    document.getElementById("profile-image").src = profileImage;

    
  });



//click animation

const clickMe = document.querySelector ('.mainbutton');
const coralBox = document.querySelector ('.card');

clickMe.addEventListener('click', function (){
  
  coralBox.style.backgroundColor=  "#FFCAC2";
  clickMe.disabled = true;
})




