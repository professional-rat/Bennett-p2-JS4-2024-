const lightbulb = document.getElementById('lightbulb');
const lightswitch = document.getElementById('lightswitch');
const status = document.getElementById('statusOfSwitch');

 let isLightOn = false;

 lightswitch.addEventListener('click', function() { 
    if(isLightOn) {
        lightbulb.src = "lightOff.png";
        lightswitch.src ="switchOff.png";
        status.textContext ="TURN ON THE LIGHT.";
    }else{
        lightbulb.src = "lightOn.png";
        lightswitch.src = "switchOn.png";
        status.textContext = "You DID it! Now turn off the lights."
    }
    isLightOn = !isLightOn;
 }

);