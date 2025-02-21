const myArr = [0, 1, 3, 4, 6]
// const newArr = myArr.join()//converts the array into a string separated by comma if separator is not defined.
// console.log(myArr)
// console.log(newArr)

console.log(myArr)
const newArr = myArr.slice(1, 3)
console.log('A', newArr)
console.log(myArr)
const myArr2 = myArr.splice(1, 3)
console.log(myArr2)
console.log(myArr)

// slice() doesn't takes the last  element in the range mentioned in arrguments.
// While splice() does take the last element and also performs changes to the original array while slice doesn't make changes to the original array.

//flat(), isArray(), from() are also important method in js pls see cac video on array for more. What flat does is flatenss the array having multiple arrays inside it into one big array with all its element.

