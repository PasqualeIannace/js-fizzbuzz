const container = document.getElementById("container")

for (let i = 1; i <= 100; i++) {

    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("SUPER RESTO 3 & 5!", i);

        const fizzBuzz = document.createElement("div");
        fizzBuzz.innerHTML = `${i} FizzBuz!`;
        container.append(fizzBuzz);
        fizzBuzz.classList.add("box", "bgRed");

    } else if (i % 3 == 0) {
        console.log("RESTO 3", i);

        const fizz = document.createElement("div");
        fizz.innerHTML = `${i} Fizz!`;
        container.append(fizz);
        fizz.classList.add("box", "bgGreen");
    } else if (i % 5 == 0) {
        console.log("RESTO 5", i);

        const buzz = document.createElement("div");
        buzz.innerHTML = `${i} Buzz!`;
        container.append(buzz);
        buzz.classList.add("box", "bgYellow");
    } else {
        console.log(i);

        const number = document.createElement("div");
        number.innerHTML = `${i}`;
        container.append(number);
        number.classList.add("box", "bgBlue");
    }
}