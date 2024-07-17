//concat
let arr1=[1,2,3]
let arr2=[4,5,6]
final_arr=arr1.concat(arr2)
console.log(final_arr)

//flat
let arr3=[1,[2,[3,[4]]]]
flat_arr=arr3.flat(3)
console.log(flat_arr)

//splice
let arr4=[1,2,3,4,5]
final_splice=arr4.splice(2,2,"a","b")
console.log("removed elemnts are:"+final_splice)

//slice
let arr5=[1,2,3,4,5]
final_slice=arr5.slice(1,4)
console.log(final_slice)

//spliced
let arr6=[1,2,3,4,5,6]
final_spliced=arr6.toSpliced(0,2)
console.log(final_spliced)

//copyWithin
let arr7=[1,2,3,4,5]
final_copy=arr7.copyWithin(0,3)
console.log(final_copy)

//indexOf
let arr8=[1,2,3,2,1]
final_index=arr8.indexOf(2)
console.log(final_index)

//lastindex
let arr9=[,2,3,2,1]
final_lastindex=arr9.lastIndexOf(2)
console.log(final_lastindex)


//includes
const arr10=[1,2,3,4,5]
const hasvalue=arr10.includes(4)
console.log(hasval
//combing multiple methods objective
const arr11=[1,2,3]
const arr12=[4,5,6]
const arr_merged=arr11.concat(arr12).flat();
const spliced_arr=arr_merged.toSpliced(2,1,'a')
const final=spliced_arr.slice(1,5)
console.log(final.includes('a'))
console.log(final.indexOf(5))

