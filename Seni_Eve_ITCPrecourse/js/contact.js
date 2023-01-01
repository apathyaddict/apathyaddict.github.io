


   const submitButton = document.querySelector('.frm-submit');
   const lastName = document.getElementById("last-name")
   const firstName = document.getElementById("first-name")
   const email = document.getElementById("email-address")

   let requiredFields = [lastName, firstName , email ];
   

   requiredFields.forEach(function (field){
       field.addEventListener("input", updateValue);
   })
   
   function updateValue(){
       if(firstName.value && lastName.value && email.value) {
           submitButton.disabled = false
       } else {
           submitButton.disabled = true
       }
   }


//in a boolean empty string will come out as false