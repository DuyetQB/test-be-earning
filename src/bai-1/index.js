
//1.[0,10,1,99,9,8,79,91,22,32,12]
//2.[99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]
//3.[1, 10, 19, 11, 13, 16, 19]

let arr1=[0,10,1,99,9,8,79,91,22,32,12]
let arr2=[99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]
let arr3=[1, 10, 19, 11, 13, 16, 19]

let max_1 = 0;
let max_2 = 0;
let max_3 = 0;


function renderArray1 () {

    for(let i = 0 ; i < arr1.length ; i ++) {
        if(arr1[i] > max_1 ) {
            max_1 = arr1[i];
        }
        return max_1
    }
}
function renderArray2 () {
    for(let i = 0 ; i < arr2.length ; i ++) {
        if(arr2[i] > max_2 ) {
            max_2 = arr2[i];
        }
        return max_2
    }
}
function renderArray3 () {
    for(let i = 0 ; i < arr3.length ; i ++) {
        if(arr3[i] > max_3 ) {
            max_3 = arr3[i];
        }
        return max_3
    }
}

renderArray1();
renderArray2();
renderArray3();

