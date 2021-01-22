function getUnique(arr){

    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array = [1,2,3,4,4,2,1,5,1,4,5];

getUnique(array);

