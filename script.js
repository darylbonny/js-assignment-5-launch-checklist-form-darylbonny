window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      return response.json().then(function (json) {
         let i = Math.floor(Math.random() * json.length);
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${json[i].name}</li>
   <li>Diameter: ${json[i].diameter}</li>
   <li>Star: ${json[i].star}</li>
   <li>Distance from Earth: ${json[i].distance}</li>
   <li>Number of Moons: ${json[i].moons}</li>
</ul>
<img src="${json[i].image}">`
      })
   })
})

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

      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Copilot ${coPilotInput.value} is ready for launch`;

      let fuelStatus = document.getElementById("fuelStatus");
      let fuelLevel = Number(fuelLevelInput.value);
      let launchStatus = document.getElementById("launchStatus");
      if (fuelLevel < 10000) {
         fuelStatus.innerHTML = `Fuel too low to launch`;
      } else {
         fuelStatus.innerHTML = `Fuel level check passed`;
      }
      let cargoStatus = document.getElementById("cargoStatus");
      cargoMass = Number(cargoMassInput.value);
      if (cargoMass > 10000) {
         cargoStatus.innerHTML = `Cargo mass too high for launch`;
      } else {
         cargoStatus.innerHTML = `Cargo mass check passed`;
      }
      if (fuelLevel >= 10000 && cargoMass <= 10000) {
         launchStatus.innerHTML = `Shuttle ready to launch`;
         launchStatus.style.color = "green";
      } else {
         launchStatus.innerHTML = `Shuttle not ready to launch`;
         launchStatus.style.color = "red";
      }
      document.querySelector("#launchForm").submit;
   });
});

