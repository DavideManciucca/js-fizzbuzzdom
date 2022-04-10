
const container = document.querySelector(".container");

const limit = 100;
console.log(container);
// const fstDividend = 3;
// const sndDividend = 5;


for (let i = 0; i<=limit ; i++) {
  const box = document.createElement('div');
  box.className="box";
  console.log(box);
  box.append(i)
  container.append(box);
  
  if (i % 3 ===0 && i % 5 ===0) {
    box.className="box-green"
    
  }
  
 }
 