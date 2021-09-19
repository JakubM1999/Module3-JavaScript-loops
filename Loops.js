
//-----------Objects in array--------------//


var arrayOfPeople = [
    {
        id:1,
        name:"Stormy Abarough",
        birthdate:"11-03-1956",
        children:5,
        country:"Indonesia",
        can_program:false
    },
        
    {
        id:2,
        name:"Tawsha Coldtart",
        birthdate:"12-01-1961",
        children:4,
        country:"China",
        can_program:true
    },
        
    {   
        id:3,
        name:"Roberto Fritchly",
        birthdate:"1-17-1987",
        children:5,
        country:"China",
        can_program:false
    },
        
    {   
        id:4,
        name:"Thain Sellens",
        birthdate:"10-20-1958",
        children:3,
        country:"Bulgaria",
        can_program:false
    },
        
    {   
        id:5,
        name:"Rena Braben",
        birthdate:"8-19-2002",
        children:2,
        country:"Yemen",
        can_program:false
    },
        
    {   
        id:6,
        name:"Bonita Swadden",
        birthdate:"9-09-1958",
        children:1,
        country:"China",
        can_program:false
    },
        
    {   
        id:7,
        name:"Valene Sarra",
        birthdate:"5-13-2000",
        children:1,
        country:"Indonesia",
        can_program:false
    },
        
    {   
        id:8,
        name:"Alayne Paske",
        birthdate:"11-06-1984",
        children:1,
        country:"China",
        can_program:true
    },
        
    {
        id:9,
        name:"Lissie Scaplehorn",
        birthdate:"4-23-1970",
        children:4,
        country:"Uruguay",
        can_program:true
    },
        
    {
        id:10,
        name:"Dee Pagelsen",
        birthdate:"11-30-2000",
        children:0,
        country:"Israel",
        can_program:false
    }

]

// console.log(arrayOfPoeple)

//----------------QUESTIONS------------------//

// Question seperatot
console.log("------------------------------------")

// 1.Outputs how many children all people have, in total

/* So I did this by using a basic loop and just defined 
total as 0 and did total "+=" to arrayOfPoeple[i].children
which means that I am specifically talking to arrayOfPeople index
children. */

let total = 0;

for(let i = 0; i < arrayOfPeople.length; i++){
    total += arrayOfPeople[i].children;
   
}
console.log("Total number of children is", total)

// Question seperatot
console.log("------------------------------------")

// 2.Outputs one string per person formatted

/* Here I had to output one string per person, what I did is I
made a simple while loop to show that I understand it also. When I
finished the while loop it was time to define it in the console, so
I wrote the same thing that I wrote in the first question but changed
"children" for "name" and also added id's so it's more visible which
people I am talking to.*/

var i = 0;
while(i < 10) {
    console.log("name of id", arrayOfPeople[i].id + ": " +
    arrayOfPeople[i].name);
    i++;
}


// Question seperatot
console.log("------------------------------------")

// 3.Output all properties of all people using for…in loop

/* This is a for...in loop which helps us output all properties of
people. How does this loop work? well, first you need to loop through
the object's that's where the first "for" comes in. Then you need to
loop again but through all the properties in all of the object's
that's where you can see "for...in", then ou put it in console.log
where you can also add ":" between "prop" and "object" so it's
more readeble */

let object = arrayOfPeople;

for(let i=0, len=object.length; i<len; i++){
    for (let prop in object[i]){
        console.log(prop,":",object[i][prop],);
    }
    // Inner seperator.
    console.log("---------------------------")
}

/* ofcorse I had a bit of trubble learning how the for..in loop works
so I made also this function which works almost the same but it doesn't
output properties names only the properties values which. I wanted to 
include this because it can also be an alternative */

//You can turn off the comment and see how it's differend

// arrayOfPeople.forEach(outputForIn);

// function outputForIn(item, i){
//     for (var key in item) {
        
//         console.log(item [key])
//     }
//     console.log("----------------------------")
// }
