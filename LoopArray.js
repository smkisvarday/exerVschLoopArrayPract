var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let counter = 0;

for( let i=0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") counter++;
}

console.log(counter);


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
          console.log("old enough")
        } else {
            console.log("NOT old enough")            
        }
    }

    for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
          } else {
              console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough")            
          }
      }

      for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){

            if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE's good to see Mad Max Fury Road.")
            } else{
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE's good to see Mad Max Fury Road.")
            }
            
          } else {
              if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
              console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see Mad Max Fury Road; don't let HER in.")            
          } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see Mad Max Fury Road; don't let HIM in.")  
          }
      }
    }

// [2, 5, 435, 4, 3] // "The light is on"
//[1, 1, 1, 1, 3]   // "The light is on"
//[9, 3, 4, 2]      // "The light is off"

//let count = 0
//const codes = [2, 5, 435, 4, 3] 

//for (var i = 0; i < )







