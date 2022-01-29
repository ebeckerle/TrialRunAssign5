// const scriptHelper = require('./scriptHelper.js');

// UPDATING SHUTTLE REQUIREMENTS
function validateInput(string){
    if (isNaN(string) == true){
        return "Not a number"; 
    } else if (string === ""){
        return "Empty";
    } else if (isNaN(string) == false){
        return 'Is a Number'
    };
};

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass){
    
    if ( fuelLevel < 10000 || cargoMass > 10000){
        // const shuttleStatus = document.getElementById("faultyItems");
        // shuttleStatus.innerHTML = `
        //     <h2 id="launchStatus">Shuttle not ready for launch</h2>
        //         <ol>
        //             <li id="pilotStatus">${pilot.value}</li>
        //             <li id="copilotStatus">${copilot.value}</li>
        //             <li id="fuelStatus"></li>
        //             <li id="cargoStatus"></li>
        //         </ol>
        //     `
        //     document.getElementById("launchStatus").style.color = "red";

        return 'shuttle not ready for launch';
    }else if (fuelLevel>10000 && cargoMass<10000){
        return 'shuttle is ready for liftoff';
    };

};






window.addEventListener("load", function(){
    // console.log("this is working1");

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        // console.log("this is working2");
        let pilot = document.querySelector("input[name=pilot]");
        let copilot = document.querySelector("input[name=co-pilot]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        
        if (pilot.value ==="" || copilot.value==="" || fuelLevel.value==="" || cargoMass.value===""){
            alert("All Fields are Required.");
            // event.preventDefault();
            // console.log("this is working3");
        }
        // else{

        //     form.addEventListener("submit", function(event){
        //         const shuttleStatus = document.getElementById("faultyItems");
        //             shuttleStatus.innerHTML = `
        //                 <h2 id="launchStatus">Shuttle not ready for launch</h2>
        //             `;
        //         console.log("this event listener is working");
        //     });
        // };

        else {
            let validatedForm = formSubmission("document", pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
            if (validatedForm === 'shuttle not ready for launch'){
                const shuttleStatus = document.getElementById("faultyItems");
                shuttleStatus.innerHTML = `
                    <h2 id="launchStatus">Shuttle not ready for launch</h2>
                        <ol>
                            <li id="pilotStatus">${pilot.value}</li>
                            <li id="copilotStatus">${copilot.value}</li>
                            <li id="fuelStatus">${fuelLevel.value}</li>
                            <li id="cargoStatus">Trial</li>
                        </ol>
                `
                document.getElementById("launchStatus").style.color = "red";
                console.log("Shuttle not ready for launch");
            };
            if (validatedForm ==='shuttle is ready for liftoff'){
                shuttleStatus.innerHTML = `
                    <h2 id="launchStatus">Shuttle is ready for launch</h2>
                        <ol>
                            <li id="pilotStatus">${pilot.value}</li>
                            <li id="copilotStatus">${copilot.value}</li>
                            <li id="fuelStatus"></li>
                            <li id="cargoStatus">Trial</li>
                        </ol>
                `
                document.getElementById("launchStatus").style.color = "green";
                console.log("Shuttle is ready for launch");
            };
        };



    });
});









        // const shuttleStatus = document.getElementById("faultyItems");
        // shuttleStatus.innerHTML = `
        //     <h2 id="launchStatus">Shuttle not ready for launch</h2>
        //         <ol>
        //             <li id="pilotStatus">${pilot.value}</li>
        //             <li id="copilotStatus">${copilot.value}</li>
        //             <li id="fuelStatus"></li>
        //             <li id="cargoStatus"></li>
        //         </ol>
        //     `
        //     document.getElementById("launchStatus").style.color = "red";