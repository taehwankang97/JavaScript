/* for([1]초기식(변수) ; [2]조건식 ; [4]증감식){

      [3]조건식이 true인 경우 반복 수행할 코드;} */

/** 12345 출력*/

function check1() {

  //num이 1부터 시작해서 
  // 1씩 증가 하다가
  //num 값이 5이하가 아닌 순간 반복 종료하는 반복문
  for (let num = 1; num < 6; num++) {
    console.log(num);
  }

}




function check2() {
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}





function check3() {
  for (let i = 5; i < 14; i++) {
    console.log(i);
  }
  console.log(i);
}




function check4() {

  let result = ''; // 결과 저장용 변수 빈칸(string)

  for (let i = 1; i < 6; i++) {
    result += i;  // result = result = result + i

  }
  console.log(result);
}







/**1부터 10까지 1씩 증가한 숫자들의 합을 출력하기 */

function check5() {

  let sum = 0; // 더했을때 영향이 없는 숫자 0을 대입

  for (let num = 1; num <= 10; num++) {
    sum += num;

  }
  console.log(sum);
}



function check6() {

  for (let num = 1; num <= 10; num += 2) {
    console.log(num)
  }
}


function check7() {

  for (let num = 3; num <= 30; num += 3) {
    console.log(num)
  }

}

/** 1부터 20까지 4의 배수만 출력하고 합계도 구하기*/
function check8() {

  let sum = 0;

  for (let num = 1; num < 21; num++) {
    if (num % 4 === 0) {

      console.log(num);

      sum += num;

    }

  }

  console.log("합계 : ", sum);
}



function check9(){
  
  // 기능 수행에 필요한 요소들 모두 얻어 오기 
  const start = document.getElementById("start9");
  const end = document.getElementById("end9");
  const multiple = document.getElementById("multiple9");

  //input 요소에 작성된 값을 얻어와 숫자로 변환해서 저장
  const s = Number(start.value);
  const e = Number(end.value);
  const m = Number(multiple.value);

  let sum = 0;

// 입력된 값만큼 반복

  for(let num = s ; num <= e ; num++){
    if(num % m === 0){ // 지정된 변수 (M)가 맞을 경우 
      console.log(num);
      sum += num;
    }
  }


console.log("합계 : ",sum);
}



function check10(){
  const input = document.getElementById("dan10");

  //단이 입력되지 않은 경우 
  if(input.value.legth === 0){
    alert("단을 입력해 주세요");
    return; // 함수를 즉시 종료 하고 호출한 곳으로 돌아감
  }

  // 단이 2~9 사이가 아닌경우 
  const dan = Number(input.value);
  if(dan < 2 || dan > 9){
    alert("2~9 사이에 숫자를 입력해 주세요");
    return;
  }
  // 구구단 출력 
  for(let num = 1; num <= 9; num ++){
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}



function check11(){
  for(let num = 10; num > 0; num--){
    console.log(num);
  }
}


/** 입력 받은 단 거꾸로 출력 하기 */
/** 입력 받은 단 거꾸로 출력 하기 */
function check12(){
  const input = document.getElementById("dan12");

  // 단이 입력되지 않은 경우
  if(input.value.length === 0){
    alert("단을 입력해 주세요.");
    return; // 함수를 "즉시 종료"하고 호출한 곳으로 돌아감
  }

  const dan = Number(input.value);

  if(dan < 2 || dan > 9){
    alert("2 ~ 9 사이 숫자를 입력해 주세요");
    return;
  }

  // 구구단 역순 출력
  for(let num = 9 ; num >= 1 ; num--){
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}



function check13(){

  // 기능 수행에 필요한 요소 모두 얻어오기
  const input  = document.getElementById("input13");
  const output = document.getElementById("output13");
  const result = document.getElementById("result13");

  // 배수
  const multiple = Number(input.value);

  // 출력 모양
  const shape = output.value;

 let str = ''; //출력될 문자열을 저장할 변수

  for(let num = 1 ; num <= 20 ; num++){ // 1 ~ 20, 1씩 증가하는 반복문

    // 현재 반복되는 숫자가 multiple의 배수인 경우
    if(num % multiple === 0){
      //console.log(shape);
      str += `${shape}` ;

    } else { // 배수가 아니면 현재 반복 숫자 출력
      //console.log(num);
      str += `${num} `;
    }

    //num ==== 10 인 경우  줄을 변경 <br> 추가
    if(num === 10 ) str += "<br>";

  }


  result.innerHTML = str;

}
/* 다음모양 출력하기 
  1234
  1234
  1234
   */
function check14(){
// 행은 3번 반복
//1행 마다 4번 반복
  for(let row = 1; row <= 3 ; row ++){ // 3행 반복

    let str = ''; // 한 행의 출력될 문자열을 저장할 변수

    //1행 마다 4번 반복
    for(let col = 1; col <= 4 ; col++){
      str += col;
    }

    //안쪽 for문 반복결과 출력
    console.log(str);
    console.log('--------');
  }
 
}





function check15(){
  // 행은 3번 반복
  //1행 마다 4번 반복
    for(let row = 0; row < 4 ; row ++){ // 3행 반복
  
      let str = ''; // 한 행의 출력될 문자열을 저장할 변수
  
      //1행 마다 4번 반복
      for(let col = 0; col < 5 ; col++){
        str += (col + 1);
      }
  
      //안쪽 for문 반복결과 출력
      console.log(str);
      console.log('--------');
    }
   
  }





  function check16(){
   
      for(let row = 0; row < 3 ; row ++){ 
    
        let str = ''; 
    
        for(let col = 6; col > 0 ; col--){

          str += col ;
        }
        console.log(str);

        console.log('--------');
      }
     
    }








    function check17(){
      for(let row = 1 ; row < 5 ; row ++){

        let str = '';

        for(let col = 1; col <= row ;col ++){
          str += col ;
        }
        console.log(str);

        console.log('--------');
      }
    }




    function check18(){

      for(let row = 1 ; row <5 ; row ++){

        let str = '';

        for(let col = 1 ; col <= row ; col++){

          str += "*";
        }
      console.log(str);
      }

    }




    function check19(){
      for(let row = 5 ; row > 0 ; row --){

        let str = '';

        for(let col = 1 ; col <= row ; col ++){
          str += col;  ;
        }
        console.log(str);

        console.log('--------');
      }
    }






    function check20(){

      let count = 0; // 4의 배수를 세기 위한 변수

      for(let num = 1 ; num <= 30 ; num++){

        if(num % 4 === 0 ){
          count++; //count 1 증가 
        }
      }
      alert(`count : ${count}`);
    }





    

    function check21(){

      // 입력 받은 값을 얻어와 숫자로 변환해 저장
      const input = document.getElementById("input21");
      const value = Number(input.value);
    
      let count = 0; // 배수 카운트
    
      for(let num = 1 ; num <= 100 ; num++){
    
        if(num % value === 0){ // 입력 받은 수의 배수인 경우
          count++;
        }
      }
    
      alert(`count : ${count}`);
    }






  function check22(){

    let count = 1

    for(let row = 1; row < 4 ; row++){
      let str = '';
      for(let col = 1; col < 5 ; col++){
        str += count++;
      }
      console.log(str);
      console.log("=========");
    }
  }




/* while문
0이 입력될때까지 입력된 값 누적하기 */

function check23(){

  let sum = 0; 

  let value;

  while((value = Number(prompt("숫자 입력")) )!= 0){
    sum += value;// 누적 

  }
  alert(`합계 : ${sum}`)
   
}



/** 메뉴 주문하기 */
function check24(){
  // 메뉴 가격을 저장한 변수 선언
  const gimbap = 4000;
  const ramen = 4000;
  const donkkaseu = 9000;

// 주문 개수 카운트

let gimbapcount = 0;
let ramencount = 0;
let donkkaseucount = 0;

// prompt에 입력된 값을 저장할 변수 
let input; // undifined

//input이 undifined이기 때문에
//while문이 첫 반복은 무조건 수행됨
while(input !== null){// input이 null이 아니면 반복

  // prompt -> 확인 : 작성한값
  // prompt -> 취소 : null
  //   -> 취소 선택시 
  //      while문 다음 반복 수행X
  input = prompt("메뉴 번호 입력");


  switch(input){
    case'1': gimbapcount++; break;
    case'2': ramencount++; break;
    case'3': donkkaseucount++; break;
    case null : alert("주문완료!") ; break;
    default : alert("메뉴에 작성된 번호만 입력해 주세요")
  }


}// while end

let html= '';// 화면에 출력될 html 코드를 저장할 변수
if(gimbapcount > 0){
  html += `<li>김밥(${gimbapcount}개) : ${gimbapcount * gimbap}원</li>`;
}

if(ramencount > 0){
  html += `<li>라면(${ramencount}개) : ${ramencount * ramen}원</li>`;
}

if(donkkaseucount > 0){
  html += `<li>돈가스(${donkkaseucount}개) : ${donkkaseucount * donkkaseu}원</li>`;
}

const sum = (gimbapcount * gimbap) + (ramencount * ramen) + (donkkaseucount * donkkaseu) ;


html += `<li>합계 : ${sum}원</li>`;
document.getElementById("result24").innerHTML = html



}









