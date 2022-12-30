

/*
requiredFields.addEventListener("keyup", function(){
    const requiredFields = document.querySelectorAll ('.required');
    const submitButton = document.querySelector('.frm-submit');

    if (requiredFields != ""){
        submitButton.disabled = false;
    }
    
});



const requiredFields = document.querySelectorAll ('.required');
const submitButton = document.querySelector('.frm-submit');

console.log(requiredFields);

requiredFields.addEventListener('input');
console.log("here it is");

function checkboxes(){
    if(requiredFields.value != '' ){
        submitButton.disabled = false;
    }
    else{
        submitButton.disabled = true;
    }
}
*/



    const submitButton = document.querySelector('.frm-submit');
    console.log(submitButton);

    const lastName = document.getElementById("last-name").value;
    const firstName = document.getElementById("first-name").value;
    const email = document.getElementById("email-address").value;

    let requiredFields = [lastName, firstName , email ];
    //console.log(requiredFields);

    requiredFields.addEventListener('input', updateValue);
    
    function updateValue(element){
        submitButton.disabled = false;
    }


    if(firstName.value  != '' ){
        submitButton.disabled = false;
    }
    else{
        submitButton.disabled = true;
    }


    /*
    const formInput = document.querySelector(".first-name");
    const formButton = document.querySelector(".frm-submit");
    
    // the default state is 'disabled'
    formButton.disabled = true; 
    
    // alternative is to use "change" - explained below
    formInput.addEventListener("keyup", buttonState);
    
    function buttonState() {
        if (document.querySelector(".first-name").value === "") {
            formButton.disabled = true; // return disabled as true whenever the input field is empty
        } else {
            formButton.disabled = false; // enable the button once the input field has content
        }
    }
    
    // just verifying that the button has been clicked
    formButton.addEventListener("click", () => {
    console.log("You entered:", document.querySelector(".form-input").value);
    });*/