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
    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31,40],[4,6,30,43]));