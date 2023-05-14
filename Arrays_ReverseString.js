//Create a function that reverses a string:
//"Hi my name is Kevin" should ne:
//"niveK si eman ym iH"

function reverse(str) {
    if (checkInput(str)) {
        const backwards = [];
        const totalItems = str.length - 1;
        for (let i = totalItems; i >= 0; i--) {
            backwards.push(str[i]); 
        }
        console.log(backwards);
        return backwards.join("");
    }
    else { console.log("Wrong Input"); }
}
//Method to validate Input
function checkInput(str) {
    if (!str || str.length < 2 || typeof str !== "string") {
        return false;
    }
    else {return true; }
}
console.log(reverse("Hi my name is Cimar"));

//Reverse String Ver 2
function reverse2(str) {
    return str.split("").reverse().join("");
}
console.log(reverse2("Hi my name is Kevin"));

//Reverse String Ver 3
const reverse3 = str => str.split("").reverse().join("");
console.log(reverse3("Hi my name is Iporre"));

//Reverse String Ver4
const reverse4 = str => [...str].split("").reverse().join("");
console.log(reverse3("Hi my name is Soliz"));