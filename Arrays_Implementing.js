//DATA STRUCTURES - ARRAYS
//Arrays in JavaScript are just objects with integer based keys thath act like indexes.

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    //Method to Access
    get(index) {
        return this.data[index];
    }
    //Method to Add at the end
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    //Method to Delete last item
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        delete this.data[this.length-1];
        this.length--;
        return item;
    }

    shiftItems(index) {
         for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
         }
    }
}

//Created an instance of the obj
const NewArray = new MyArray();

NewArray.push("Hi");
NewArray.push("you");
NewArray.push("!");
console.log(NewArray);
NewArray.pop();
console.log(NewArray);
NewArray.delete(1);
console.log(NewArray);