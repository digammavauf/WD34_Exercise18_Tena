for (let i=0; i<500; i++) { //use < for ranges exclusive of the left side of expression
    console.log((i + 1) + " Hello world");
}

let i = 1;
while(i<=10) { // use <= for ranges inclusive of the left side of expression
    console.log(i + " Hello world");
    i++;
}

let arrCars = ["BMW","Volvo","Chevrolet","Jeep"];
for(let i=0; i<4; i++) { //use i<arrCars.length for dynamic arrays
    console.log(arrCars[i]);
}

for(let num=0; num<10; num+=2) { //increment by 2 instead of 1
    console.log(num);
}

let ast = "*";
document.write('<div class="mt-3 p-3 container border col-3 text-center">');
for(let i=0; i<10; i++) {
    document.writeln(ast+"<br>");
    ast += "*";
}
document.write("</div>");

let showNum = () => {
    let opt=document.getElementById("opt").value;
    let begin;
    switch(opt) {
        case "Even":
            begin = 0;
            break;
        case "Odd":
            begin = 1;
            break;
        default:
            //do nothing
    }
    document.getElementById("res").innerHTML="";
    for(let i=begin; i<=100; i+=2) {
        document.getElementById("res").innerHTML+=i+"<br>";
    }
}

let x=0;
do {
    console.log(x++);
} while(x<0);