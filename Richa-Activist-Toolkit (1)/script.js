let facts = document.getElementById("facts");
let contactButton = document.getElementById("contact-button")
let text = document.getElementById("text");
let contact = document.getElementById("contact");
let fullName = document.getElementById("full-name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let message = document.getElementById("message");

facts.addEventListener("click", generateFacts);
contactButton.addEventListener("click", getContact)

/* This function contains a list of 5 quotes about the future + importance of all assets of education from Human Restoration Project and Stem Teaching tools. After clicking the button, a random number will generated, which will be the index value for an item in the list. The item from the list will then be displayed on the screen. */
function generateFacts() {
  const list = ["As Spanish Philosopher Ortega y Gasset said 'humans need the imaginary, the spiritual, and the beautiful in order to find meaning in life'",

    "The humanities and the arts are being cut away, in both primary/secondary and college/university education, in every nation of the world. They are seen by policy-makers as useless frills",
    "[Humanities] are seen by policy-makers as useless frills, at a time when nations must cut away all useless things in order to stay competitive in the global market, they are rapidly losing their place in the curricula, and also in the minds and hearts of parents and children",

    "Intersecting equity projects can guide the teaching and learning of science towards social justice.",

    "'Education is seen not so much as a means of helping society but of helping one obtain the best that society has to offer socially, economically, and culturally.' - Robert Sternberger, psychologist"];

  let rand = Math.floor(Math.random() * list.length);
  text.innerText = list[rand];
}
/* Function to output a pre-written message containing the user's information, which can then be copy pasted and sent to the official Learn4Justice email.*/

function getContact(e) {
   e.preventDefault();
  var passage;
  // checks to make sure all the fields in the text boxes are filled with user input before anything can be output to the user.
/* also checks to make sure the email address has an @symbol and that the phone number is more than 11 characters including the dash in between the numbers.*/

  if ((document.getElementById("fullname").value.length>0) && (document.getElementById("email").value.length>10 && document.getElementById("email").value.includes("@")) && (document.getElementById("phone-number").value.length>=12) && (document.getElementById("message").value.length>0)){
  passage = "Hello my name is " + document.getElementById("fullname").value + " and I am interested in being contacts with Learn4Justice. My message for the Learn4Justice team is " + document.getElementById("message").value + ". In order for the Learn4Justice team to contact me, I have given my phone number and email. My phone number is " + document.getElementById("phone-number").value + " and my email is " + document.getElementById("email").value + " Looking forward to being in contact with the L4J Team!"
  let emailAddress = email.value;  
  console.log(emailAddress);
  contact.innerText = passage;
    //password is Testing873%
    // password for smtp is F6C45746888EB29F5888D232D430E2008883
    Email.send({
      SecureToken : "ef6739c9-c64f-43e6-9729-2b5b8badde72",
      To : "testcoding777@gmail.com",
      From : "sanjivanisngh@gmail.com",
      Subject : "Learn4Justice Contacts",
      Body : passage
    }).then(
    message => alert(message)
    ).catch(err => console.log(err));
  }
  // security token aa44f4ba-e0c0-4e9f-971c-26c73b30719c 
// sanjivanisngh@gmail.com

  // new pass: 3971D9A5A7A21FD5B5ABCA224D57B391E597

}