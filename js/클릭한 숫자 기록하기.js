const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result");

for(let item of numbers){
  item.addEventListener("click", e => {

    if(result.textContent.length == 15){
      alert("너무 많이 입력했습니다");
      return;
    } 

    result.textContent += e.target.textContent;
  }); 
}

const call = document.querySelector("#call");
for(){
  call.addEventListener("click", e=>{
    alert("요금을 결제해 주세요")
  })
}


document.querySelector("#resetBtn").addEventListener("click", () => {
  result.textContent = "";
});
