// console.log('undefined js is ok');

let a;
// console.log(a);  // output undefined



function sum(a, b) {
    const total = a + b;
}

const sumation = sum();
// console.log(sumation); // undefined beacuse function with no return

function printnum(a, b, c, d) {

    const total = a + b + c + d;

    console.log(a, b, c, d);
}

// printnum(2, 3);

function findPositiveOrNot(num) {
    if (num > 0) {
        return

    }

    return 'negetive';

}

const output = findPositiveOrNot(5);
// console.log(output); //if return has nothing on the right side will return undefined


const student = { name: 'Hasan', id: 201015081, Address: 'Goila Barisal' };
// console.log(student.name, student.age); //property that doesnot exist on an object will 
//give you undefined

const mark = [10, 20, 30, 40, 50];
// console.log(mark[1], mark[3], mark[200]); //accessing array elements outside of the index range



