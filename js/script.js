
const container = document.querySelector(".container");

const limit = 100;
console.log(container);
// const fstDividend = 3;
// const sndDividend = 5;


for (let i = 1; i<=limit ; i++) {
  const box = document.createElement('div');
  box.className="box";
  console.log(box);
  
  container.append(box);
  
  if (i % 3 ===0 && i % 5 ===0) {
    box.className="box-green"
    box.append("FizzBuzz")
  }
  else if (i % 3 ===0){
    box.className="box-yellow"
    box.append("Fizz")
  }
  else if (i % 5 ===0){
    box.className="box-red"
    box.append("Fizz")
  }
  else{
    box.append(i)
  }
  
 }
 