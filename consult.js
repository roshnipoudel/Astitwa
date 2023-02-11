const form = document.querySelector("#consultationForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const childName = document.querySelector("#childName").value;
  const childAge = document.querySelector("#childAge").value;
  const childGender = document.querySelector('input[name="childGender"]:checked').value;
  const parentName = document.querySelector("#parentName").value;
  const contactNumber = document.querySelector("#contactNumber").value;
  const address = document.querySelector("#address").value;
  const symptoms = document.querySelector("#symptoms").value;
  
  console.log("Child Name: " + childName);
  console.log("Child Age: " + childAge);
  console.log("Child Gender: " + childGender);
  console.log("Parent Name: " + parentName);
  console.log("Contact Number: " + contactNumber);
  console.log("Address: " + address);
  console.log("Symptoms: " + symptoms);
});
