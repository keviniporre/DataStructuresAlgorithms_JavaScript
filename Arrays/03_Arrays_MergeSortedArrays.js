function mergeSortedArrays(array1, array2) 
{
    const numberOfItems1 = array1.length;
    const numberOfItems2 = array2.length;
    const totalNumberItems = numberOfItems1 + numberOfItems2;
    const mergedArray = [];

    for (let i = 0; i < numberOfItems1; i++)
    {
        mergedArray.push(array1[i]);
    }
    for (let i = 0; i < numberOfItems2; i++)
    {
        mergedArray.push(array2[i]);
    }
    return mergedArray.sort();
}

//console.log(mergeSortedArrays([0,3,4,31,40],[4,6,30,43]));

//Course Answer
function mergeSortArray(array1, array2) 
{
    //Const cant modify from array to number while let can
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    while (array1Item || array2Item) {
        if (array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}
console.log(mergeSortArray([0,3,4,31,40],[4,6,30,43]));