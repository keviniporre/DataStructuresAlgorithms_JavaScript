let user = {
    age: 54,
    name: "Kevin",
    magic: true,
    scream: function() {
        console.log("ahhhhhhh!");
    }

}

console.log(user.age);          //O(1)
user.spell = "Abra Kadabra";    //O(1)
console.log(user);              //O(1)
user.scream();                  //O(1)

//Collisions happen in Hash Tables, where the Hash set info to an address that is already taken