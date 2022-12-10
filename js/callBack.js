function secondF(miniFunction) {
    miniFunction();
}



function miniFunction() {
    console.log('mini mini function');
}

secondF(miniFunction);