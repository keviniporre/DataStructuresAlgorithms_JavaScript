//DATA STRUCTURES - ARRAYS

//Declare an Array of letters
//4 x 4 = 16 bytes of storage (4 bytes per item times 4 items)
const strings = ['a','b','c','d'];
//Indexes         0   1   2   3

//Access
console.log(strings[2]);    //O(1)

//Push (Add something at the end of the array)
strings.push('e');      //O(1)
console.log(strings);

//Pop (Remove the last item of the array)
strings.pop();          //O(1)
console.log(strings);

//Unshift (Add something at the beginning of the array)
strings.unshift('x');   //O(n)
console.log(strings);
//It has O(n) because we have to move every item one more index to make room for the new item at the beginning

//Splice (Add/Delete in a given index)
strings.splice(2,0,'alien');    //Adds 'alien' at index 2
console.log(strings);
//It has O(n/2) because we only moved half the items one place, but worst case it still is O(n)