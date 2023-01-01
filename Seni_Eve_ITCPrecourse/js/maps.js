const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(" .next");


const galleryImage = document.querySelector(".maps iframe");

const mapLinks = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54467.89178726825!2d2.2959551425293343!3d48.857636130026805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1672411752233!5m2!1sfr!2sfr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106989.7384134891!2d-79.45114624549457!3d43.67907703656345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sfr!2sfr!4v1672412840205!5m2!1sfr!2sfr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5809150095!2d144.49131356755697!3d-37.97014756949896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20Victoria%2C%20Australie!5e0!3m2!1sfr!2sfr!4v1672412881826!5m2!1sfr!2sfr"
];

let currentlySelected = 0;
console.log(currentlySelected);

prevButton.addEventListener("click", function () {
  currentlySelected = currentlySelected - 1;
  console.log(mapLinks[currentlySelected]);
  galleryImage.src = mapLinks[currentlySelected];
  nextButton.disabled = false;

  if (currentlySelected === 0) {
    prevButton.disabled = true;
  }
});

nextButton.addEventListener("click", function () {
  currentlySelected++;
  console.log(mapLinks[currentlySelected]);
  galleryImage.src = mapLinks[currentlySelected];
  prevButton.disabled = false;

  if (mapLinks.length - 1 === currentlySelected) {
    nextButton.disabled = true;
  }
});