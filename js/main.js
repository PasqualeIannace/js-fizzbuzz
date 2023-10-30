
for (let i = 1; i <= 100; i++) {

    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("SUPER RESTO 3 & 5!", i);
    } else if (i % 3 == 0) {
        console.log("RESTO 3", i);
    } else if (i % 5 == 0) {
        console.log("RESTO 5", i);
    } else {
        console.log(i);
    }
}