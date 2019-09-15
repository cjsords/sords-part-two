
var eventClothing;
var tempClothing;
var result;
var acceptedEventTypes = ['casual','semi-formal','formal'];

var eventType = prompt("What is the event type?\ncasual, semi-formal, or formal?");
eventType = eventType.toLowerCase();
if (acceptedEventTypes.includes(eventType) == false) {
    eventType = prompt("Sorry, what was the event type again?\ncasual, semi-formal, or formal?");
        if (acceptedEventTypes.includes(eventType) == false) {
            eventClothing = null;
        } 
        else {
            if (eventType == "casual") {
                eventClothing = "something comfy";
            }
            else if (eventType == "semi-formal") {
                eventClothing = "a polo";
            }
            else if (eventType == "formal") {
                eventClothing = "a suit";
            } 
        }
}    
else {
    if (eventType == "casual") {
        eventClothing = "something comfy";
    }
    else if (eventType == "semi-formal") {
        eventClothing = "a polo";
    }
    else if (eventType == "formal") {
        eventClothing = "a suit";
    }         
}    


var tempFahr = (prompt("What is the temperature (in Fahrenheit)?"));
if (tempFahr < 54) {
    tempClothing = "a coat";
}
else if (tempFahr >= 54 && tempFahr <= 70) {
    tempClothing = "a jacket";
}
else if (tempFahr > 70) {
    tempClothing = "no jacket";
    }    
else {
    tempFahr = (prompt("Sorry, what was the temperature (in Fahrenheit) again?"));
        if (tempFahr < 54) {
            tempClothing = "a coat";
        }
        else if (tempFahr >= 54 && tempFahr <= 70) {
            tempClothing = "a jacket";
        }
        else if (tempFahr > 70) {
            tempClothing = "no jacket";
        }  
        else {
            tempClothing = null;
        }
}

if (eventClothing == null || tempClothing == null) {
    console.log('input error');
}
else {
    result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + eventClothing + " and " + tempClothing + ".";
    console.log(result);
}