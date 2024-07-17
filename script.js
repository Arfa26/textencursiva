
      
document.getElementById('text-here').addEventListener('input', function() {
      var pasteContainer = document.getElementById('paste-container');
      pasteContainer.classList.toggle('hidden', this.value.trim() !== '');
  });



  let boldBtn = document.querySelector(".sansBold");
  let bolditalicBtn = document.querySelector(".sansBoldItalic");
  let serifBoldBtn = document.querySelector(".serifBold");
  let serifBoldItalicBtn = document.querySelector(".serifBoldItalic");
  let normalBtn = document.querySelector(".normal");
  let textarea = document.querySelector(".text-here");

  boldBtn.addEventListener("click", function() {
    textarea.style.fontWeight = "bold";
   });
    
   bolditalicBtn.addEventListener("click", function() {
    textarea.style.fontWeight = "bold";
    textarea.style.fontStyle = "italic";
   });

   serifBoldBtn.addEventListener("click", function() {
    textarea.style.fontWeight = "bold";
    textarea.style.fontFamily = "Times New Roman, serif";
   });

   serifBoldItalicBtn.addEventListener("click", function() {
    textarea.style.fontWeight = "bold";
    textarea.style.fontStyle = "italic";
    textarea.style.fontFamily = "Times New Roman, serif";
   });
  
   normalBtn.addEventListener("click", function() {
    let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    textarea.value = textarea.value.replace(selectedText, '');
});
function eventChanger() {
   var textarea = document.getElementById("text-here");
  if (textarea.value.trim() === '') {
      textarea.style.fontWeight = "normal"; // Reset font weight to normal
      textarea.style.fontStyle = "normal";
      textarea.style.textDecoration = "none";
      textarea.style.color = "initial";
      textarea.style.fontSize = "initial";
      textarea.style.fontFamily="Calibri";
  }
}

// Attach the eventChanger function to the textarea's input event
document.getElementById("text-here").addEventListener("input", eventChanger);


function copyText() {
 
  let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
  navigator.clipboard.writeText(selectedText)
      .then(() => {
          alert("Text copied to clipboard!");
      })
      .catch(err => {
          console.error('Failed to copy text: ', err);
      });
}


     function tweetText()
     {
      let text = encodeURIComponent(textarea.value);
      let url = `https://twitter.com/intent/tweet?text=${text}`;
      window.open(url,'_blank');
    }

function submitEmail() {
// Get the email input value
let email = document.getElementById("exampleFormControlInput1").value;

if (email.trim() === '') {
  alert('Please enter your email.');
  return;
}
if (!isValidEmail(email)) {
  alert('Please enter a valid email address.');
  return;
}

console.log('Submitted email:', email);
document.getElementById("exampleFormControlInput1").value = '';
}
function isValidEmail(email) {
// Basic email format validation
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);}





// ////////////////////Contact Us/////////////////////////////////





// function isValidEmail(email) {
//   // Basic email validation using regular expression
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

// function isValidName(name) {
//   // Validation to allow only alphabetic characters (both uppercase and lowercase)
//   var re = /^[a-zA-Z]+$/;
//   return re.test(name);
// }
// function validateForm() {

//   var nameInput = document.getElementById('exampleInputText1').value.trim();
//   var emailInput = document.getElementById('exampleInputEmail1').value.trim();
//   var subjectInput = document.getElementById('exampleInputSubject1').value.trim();
//   var messageInput = document.getElementById('exampleInputMessage1').value.trim();
//   document.querySelectorAll(".error").forEach((curElem)=>(curElem.textContent=" "));
//   var isValid = true;

//   // Validate name
 
//   if (nameInput === '' || !isValidName(nameInput)) {
//       document.getElementById('exampleInputText1').classList.add('is-invalid');
//       isValid = false;
//   } else {
//       document.getElementById('exampleInputText1').classList.remove('is-invalid');
//   }

//   // Validate email

//   if (emailInput === '' || !isValidEmail(emailInput)) {
//       document.getElementById('exampleInputEmail1').classList.add('is-invalid');
//       isValid = false;
//   } else {
//       document.getElementById('exampleInputEmail1').classList.remove('is-invalid');
//   }

//   // Validate subject
 
//   if (subjectInput === '') {
//       document.getElementById('exampleInputSubject1').classList.add('is-invalid');
//       isValid = false;
//   } else {
//       document.getElementById('exampleInputSubject1').classList.remove('is-invalid');
//   }

//   // Validate message
 
//   if (messageInput === '') {
//       document.getElementById('exampleInputMessage1').classList.add('is-invalid');
//       isValid = false;
//   } else {
//       document.getElementById('exampleInputMessage1').classList.remove('is-invalid');
//   }

  

//   if (isValid) {
//     alert("Form is filled!");
// }
//   // Allow form submission if all fields are valid
//   return isValid;

// }


function validateForm() {
  // Fetching values from all input fields and storing them in variables
  var name = document.getElementById("exampleInputText1").value;
  var email = document.getElementById("exampleInputEmail1").value;
  var subject = document.getElementById("exampleInputSubject1").value;
  var message = document.getElementById("exampleInputMessage1").value;

  // Validating name, email, subject and message fields
  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Please fill all fields');
    return false;
  } else {
    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return false;
    }
    return true;
  }
}
