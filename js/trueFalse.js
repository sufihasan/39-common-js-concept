/* 
Truethy:
1. true
2.any number positive or negetive must be truthy
3.any string with out empty string
4.empty object
5.empty array


Falsy:
1.false
2.0
3.empty string
4.undefined
5.null



*/

// true false cheker

// const x = false;
// const x = 5;
// const x = 0; //0  is falsy

// const x = 'hasan';  //any string without empty string is truthy
// const x = ''; //falsy
//const x = [];
const x = {};
if (x) {

    // console.log('x is truthy');
}

else {

    // console.log('x is falsy');
}

//optinal
//falsy cheker
const num = 0;

if (!num) {
    console.log('this is falsy');
}

//optional
//truthy cheker

if (!!num) {

    console.log('this is truthy');
}
