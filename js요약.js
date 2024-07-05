/* 화면 흑백 바꾸기
    HTML.
    <button type="button" onclick="lightMode()">라이트 모드</button> 
    
    function lightMode(){
  body.style.color ="black";
  body.style.backgroundColor = "white"
  */

  /* 
  function check2() {
    const randomNumber
   = Math.floor(Math.random() * 100);
    if (randomNumber % 2 == 0) {
    alert(`${randomNumber}은/는 짝수 입니다.`);
  }
  else { //조건식이 false인 경우 == 홀수인 경우
    alert(`${randomNumber}은/는 홀수 입니다.`);
  }
}
  */

/** 1부터 20까지 4의 배수만 출력하고 합계도 구하기
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
*/


/*html
<h4>입력받은 범위 내 지정된 배수 출력 / 합계 구하기 </h4>
   <div>
    시작 : <input type="number" id="start9">
    <br>
    종료 : <input type="number" id="end9">
    <br>
    배수 : <input type="number" id="multiple9">
    <br>
    <button onclick="check9()">확인9</button>
  </div>
  js
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
}*/



/*html
<input type="number" id="dan10">
<button onclick="check10()">확인 10</button>
js
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
}*/



/** 입력 받은 단 거꾸로 출력 하기 */
/** 입력 받은 단 거꾸로 출력 하기 */
/*html
단 입력 : <input type="number" id="dan12">
<button onclick="check12()">확인 12</button>
js
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
}*/

/*html
<h4>특정 배수마다 지정된 모양으로 출력</h4>
<pre>
  - 1~20, 1씩 증가하는 반복문 
  - 한 줄당 숫자 10 씩만 출력

  hint > innerHTML 사용
    -> 대입대는 HTML 태그 문자열을 해석하는 특징이 있음 
  [출력 화면 ]
  배수 지정 : 5
  출력 모양 : @
  1 2 3 4 @ 6 7 8 9 @ 
  .....
</pre>
<div>
  배수 지장 : <input type="number" id="input13">
  <br>
  출력 모양 : <input type="text" id="output13">
  <br>
  <button onclick="check13()">출력하기 13</button>
  <p id="result13"></p>
</div>
js
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
*/

/*html
<button onclick="check18()">출력하기</button>
js
function check18(){
  for(let row = 1 ; row <5 ; row ++){
    let str = '';
    for(let col = 1 ; col <= row ; col++){
      str += "*";
    }
  console.log(str);
  }
}*/
/*html
<h4>다음 모양 출력 하기 </h4>
<pre>
12345
1234
123
12
1
</pre>
js
<button onclick="check19()">출력하기</button>
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
*/
/*html
<h4>다음 모양 출력 하기 </h4>
<pre>
12345
1234
123
12
1
</pre>
<button onclick="check19()">출력하기</button>
js
function check19(){
      for(let row = 5 ; row > 0 ; row --){
        let str = '';
        for(let col = 1 ; col <= row ; col ++){
          str += col;  ;
        }
        console.log(str);
        console.log('--------');
      }
    }*//*html
      <h3>count를 이용해 다음 모양 출력 하기</h3>
      <pre>
         1 2 3 4
         5 6 7 8
         9 10 11 12
      </pre>
      <button onclick="check22()">확인하기</button>
      js
      *//*\html
      <h3>메뉴 주문하기 </h3>
<!-- while + count + switch-->
<ol>
  <li>깁밥 : 4000</li>
  <li>라면 : 4500</li>
  <li>돈가스 : 9000</li>
</ol>
<strong style="color: red;">취소 클릭시 주문 완료</strong>
<button onclick="check24()">주문하기</button>
<ul id="result24">
  <li>김밥(5개) : 20000원</li>
  <li>라면(2개) : 9000원</li>
  <li>돈가스(1개) : 9000원</li>
  <li>합계 : 38000원</li>
</ul>
js
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
*/