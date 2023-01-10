// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault();

      let pilotInput = document.querySelector("input[name=pilotName]");
      let coPilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotInput.value === "" || coPilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
      } else if (!pilotInput.value.match(/^[A-Z a-z]+$/) || (!coPilotInput.value.match(/^[A-Z a-z]+$/) || isNaN(Number(fuelLevelInput.value)) || isNaN(Number(cargoMassInput.value)))) {
         alert("Enter a valid data type");
      }
   });
 });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/