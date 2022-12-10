function stopWatch() {
    let num = 0;

    return function () {
        num++;
        return num;

    }
}

const w1 = stopWatch();
console.log(w1());