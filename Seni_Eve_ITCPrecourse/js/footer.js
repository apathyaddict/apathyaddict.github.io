
const codingLanguages = ["HTML", "CSS", "Javascript"];
//easily add more languages to the Array

//document.getElementById("created").innerText =" This page was built using: " + codingLanguages.join(', ') + ".";

let arrayFormat;

  if (codingLanguages.length === 1)  {
    arrayFormat = codingLanguages[0];

  }else if (codingLanguages.length === 2) {
    arrayFormat = codingLanguages.join(' and ');

  } else if (codingLanguages.length > 2){
    arrayFormat = codingLanguages.slice(0, -1).join(', ') + ', and ' + codingLanguages.slice(-1);
  }
  //slice(0,-1) removes the last item in the array. Then adds a comma after each the last splice puts it back. - doesn't mean remove


document.getElementById("created").innerText =" This page was built using: " + arrayFormat + ".";