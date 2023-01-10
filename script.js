// Write your JavaScript code here!

window.addEventListener("load", function () {
   let form = document.querySelector("#launchForm");
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

      let itemStatus = document.getElementById("itemStatus");
      itemStatus.style.visibility = "visible";

      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
      // pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;

      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Copilot ${coPilotInput.value} is ready for launch`;

      let fuelStatus = document.getElementById("fuelStatus");
      let fuelLevel = Number(fuelLevelInput.value);
      let launchStatus = document.getElementById("launchStatus");

      if (fuelLevel < 10000) {
         fuelStatus.innerHTML = `fuel too low to launch`;
         launchStatus.innerHTML = `Shuttle not ready to launch`;
         launchStatus.style.color = "red";
      } else {
         fuelStatus.innerHTML = `Fuel Level check passed`;
         launchStatus.innerHTML = `Awaiting information before launch`;
         launchStatus.style.color = "black";
      }

      let cargoStatus = document.getElementById("cargoStatus");
      let cargoMass = Number(cargoMassInput.value);

      if (cargoMass > 10000) {
         cargoStatus.innerHTML = `Cargo mass too high for launch`;
         launchStatus.innerHTML = `Shuttle not ready to launch`;
         launchStatus.style.color = "red";
      } else {
         cargoStatus.innerHTML = `Cargo Mass check passed`;
         launchStatus.innerHTML = `Awaiting Information Before Launch`;
         launchStatus.style.color = "black";
      }
      if (fuelLevel >= 10000 && cargoMass <= 10000) {
         launchStatus.innerHTML = `Shuttle ready to launch`;
         launchStatus.style.color = "green";
      }
      document.querySelector("#launchForm").submit();
   });
});

/*This block of code shows how to format the HTML once you fetch some planetary JSON!
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
