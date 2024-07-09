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
/* html
<header>
    <h1>구구단 표 만들기</h1>
  </header>
  <main>
    시작 단 : <input type="number" id="start">
    종료 단 : <input type="number" id="end">
    <button onclick="createTable()">만들기</button>
    <table border="1">
      <!-- 테이블 머리(제목)을 작성하는 영역 -->
      <thead>
        <tr id="thead-row">
          <th>2단</th>
          <th>3단</th>
          <th>4단</th>
          <th>5단</th>
        </tr>
      </thead>
      <!-- 테이블 몸통(내용, 데이터)를 작성하는 부분 -->
      <tbody id="tbody">
        <tr>
          <td>2 x 1 = 2</td>
          <td>3 x 1 = 3</td>
          <td>4 x 1 = 4</td>
          <td>5 x 1 = 5</td>
        </tr>
        <tr>
          <td>2 x 2 = 4</td>
          <td>3 x 2 = 6</td>
          <td>4 x 2 = 8</td>
          <td>5 x 2 = 10</td>
        </tr>
        <tr>
          <td>2 x 3 = 6</td>
          <td>3 x 3 = 9</td>
          <td>4 x 3 = 12</td>
          <td>5 x 3 = 15</td>
        </tr>
      </tbody>
    </table>
  </main>
  js
function createTable(){
  const startInput = document.getElementById("start");
  const endInput = document.getElementById("end");
  const theadRow = document.getElementById("thead-row");
  const tbody = document.getElementById("tbody");
  theadRow.innerHTML = '';
  tbody.innerHTML = '';
  const start = Number(startInput.value);
  const end   = Number(endInput.value);
  for(let dan = start ; dan <= end ; dan++){
    theadRow.innerHTML += `<th>${dan}단</th>`;
  }
  for(let num = 1 ; num <= 9 ; num++){
    let tr = "<tr>";   // 한 줄을 저장할 변수 선언
    for(let dan = start ; dan <= end ; dan++){
      tr += `<td>${dan} x ${num} = ${dan * num}</td>`;
    }
    tr += "</tr>";
    tbody.innerHTML += tr;
  }
}
  */
/*<button onclick="check2()">무한 반복 멈추기</button>*/
 /** 무한 반복 멈추기 */
/*function check2(){

  let sum = 0; // 합계 저장용 변수

  // while문은 () 내 조건식이 true일 때 반복을 수행
  // -> true라고 작성하면 조건식이 false가 되는 경우가 없음
  //  -> 무한 반복

  // * 무한 반복하는 코드에는 break를 포함한 if문을 작성해서
  //  종료 조건을 만들어 두어야만 한다!!!!!!!!!!
  while(true){ 
    const value = prompt("숫자 입력"); // 취소 -> null

    // 취소 클릭 시 반복 종료
    if(value === null) break;

    // 확인 클릭 시 sum에 입력한 숫자를 누적
    sum += Number(value);
  }

  alert("합계 : " + sum);
}
*/
/*<button onclick="check3()">continue</button>
js
function check3(){
  for(let num = 1 ; num <= 20 ; num++){
    if(num % 3 === 0) continue;
    console.log(num);
  }
}
*/
/*html
<button onclick="check4()">continue2</button>
js
continue + 중첩 반복문에서의 분기문
function check4(){
  for(let row = 1 ; row <= 5 ; row++){ // 행 제어
    let str = ''; // 문자열 형태로 누적하기 위한 변수 선언
    for(let col = 1 ; col <= 9 ; col++){ // 열 제어
      if(row === col) continue; // 감싸고 있는 for문만 건너뜀
      str += col; // 이어쓰기
    }
    console.log(str); // 한 줄 출력
  }
} */

  /*<button onclick="startGame()">게임 시작</button>

  function startGame(){
  const answer = Math.floor( Math.random() * 200 ) + 1;
  let count = 0;
  let str = "1부터 200 사이 숫자 입력"; 
  while(true){ // 무한 반복
    let input = prompt(str);
    if(input === null){ // 취소 클릭 시
      alert("게임 포기");
      break;
    }
    const value = Number(input); // 입력 받은 값 숫자로 변환
    if( isNaN(value) ){ // 숫자가 아닌 값을 입력한 경우
      alert("숫자만 입력해 주세요");
      continue;
    }
    if(value < 1 || value > 200){ // 범위 초과
      alert("1 ~ 200 사이 값만 작성해 주세요");
      continue;
    }
    count++;
    if(value === answer){
      alert(`정답 !!! (${answer}) / 시도 횟수 : ${count}`);
      break;
    }
    if(value < answer){ // 작은 경우
      str = `${value} [UP] / 시도 횟수 : ${count}회`;
    } else { // 큰 경우
      str = `${value} [DOWN] / 시도 횟수 : ${count}회`;
    }
  }
}
*/

/*html
 <h3>로또 번호 생성기</h3>

<button onclick="check6()">번호 생성</button>
<p id="result6"></p>
 JS
 function check4() {
  const arr = new Array(5); //5칸 짜리 배열 생성
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`${i}번째 요소에 저장할 숫자 입력`))
    sum += arr[i];
  }
  console.log("저장된 값 : ", arr);
  console.log("합계 : ", sum);
  console.log("평균 : ", sum / arr.length);
}
*/

/* HTML
<h3>
  점심 메뉴 뽑기 : <span id="menuResult"></span>
</h3>
<button onclick="selectMenu()">점심메뉴 뽑기</button>
JS
function selectMenu() {
  const menus = ["라면 + 김밥", "제육볶음",
    "치즈 돈까스", "샐러드", "맘스터치",
    "알탕", "돼지국밥", "닭갈비", "뚝배기 불고기",
    "KFC", "냉면", "콩국수", "쭈꾸미",
    "초밥", "쌀국수", "김치찜", "고등어구이",
    "우육탕"
  ];
  const randomNumder = Math.floor(Math.random() * menus.length);
}
/*  html
  <h1>name으로 요소 접근하기</h1>
  <pre>
  -name 속성은 input 또는 input관련 요소 (select, textarea)만
    기본 속성으로 가지고 있음
    input 요소를 한번에 접근하는 용도
  </pre>
  <table>
    <tr>
      <td>
        <input type="checkbox" name="hobby" id="game" value="게임">
        <label for="game">게임</label>
      </td>
      <td>
        <input type="checkbox" name="hobby" id="music" value="음악감상">
        <label for="music">음악감상</label>
      </td>
      <td>
        <input type="checkbox" name="hobby" id="movie" value="영화감상">
        <label for="movie">영화감상</label>
      </td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" name="hobby" id="coding" value="코딩">
        <label for="coding">코딩</label>
      </td>
      <td>
        <input type="checkbox" name="hobby" id="exercise" value="운동">
        <label for="exercise">운동</label>
      </td>
      <td>
        <input type="checkbox" name="hobby" id="book" value="독서">
        <label for="book">독서</label>
      </td>
    </tr>
  </table>
<!-- 선택된 취미만 출력 -->
<div class="name-div"></div>
<button onclick="nameTest()">출력</button>
JS
function nameTest(){
 const hobbyList =  document.getElementsByName("hobby");

 let str = '';// 체그된 input의 value를 누적
 let count = 0; // 체크된 input의 개수를 카운트

 // i == 0,1,2,3,4,5 (길이는 6, 마지막 인덱스는 5(길이 -1))
  for(let i = 0; i<hobbyList.length; i++){
      if(hobbyList[i].checked === true){
        //console.log(hobbyList[i].value);
        str += `${hobbyList[i].value}`
        count++;
   }
  }
  const div = document.getElementsByClassName("name-div")[0];
  div.innerHTML =`${str},<br><br>선택된 취미 개수 : ${count}개` 
}
 */

/* html
<h1>CSS 선택자를 이용한 요소 접근 방법</h1>
<div target-div="css-div">
<div>test1</div>
<div>test2</div>
</div>
<button onclick="csstest1()">css선택자로 요소 접근</button>
  <script src="../js/11_요소접근방법.js"></script>
  JS
  function csstest1(){
  const container = document.querySelector('[target-div = css-div]');
    container.style.width = "200px";
    container.style.height = "200px";
    container.style.border = "10px solid orange"
    const divs =document.querySelectorAll('[target-div = css-div]>div');
    for(let i = 0; i<divs.length; i++){
      divs[i].style.height = "50%";
      divs[i].style.display = "flex";
      divs[i].style.justifyContent = "center";
      divs[i].style.alignItems = "center";
    }
    divs[0].style.backgroundColor="pink"
    divs[1].style.backgroundColor="skyblue"
    const test1 = document.querySelector('[target-div = css-div]>div');
    test1.style.fontSize = "30px";
}
  */
/*HTML 불투명
   <div class="my-btn1" onclick="check1(this)">
    인라인 이벤트 모델 확인
  </div>
JS
function check1(btn){
  console.log(btn);
  if( isNaN( Number(btn.innerText) )){
    btn.innerText = 0;
  } else{
    btn.innerText++;
    // btn.innerText = btn.innerText + 1;
  }
} 
 */

/* HTML
<h3>클릭할 수 록 투명 + 클릭 횟수 증가 </h3>
<div id="test2">0</div>
JS
const test2 = document.querySelector("#test2");
test2.addEventListener("click",function(){
  let curr = test2.style.opacity;
  console.log("curr", curr);
  if(curr === '') curr =1;
  test2. style.opacity = curr - 0.05;
  if(test2.style.opacity < 0){
    test2.style.opacity = 1;
}
})
test2.addEventListener("click",function(){
  test2.innerText++;
})

*/
/*html
<h3>클릭한 버든에 작성된 색으로 배경색 변경하기</h3>
<!-- 배경색 -->
<div class="test3">
  <!-- 버튼 영역 -->
  <div id="result3"></div>
  <div class="btn-container3">
    <button>red</button>
    <button>brown</button>
    <button>orange</button>
    <button>yellow</button>
    <button>green</button>
    <button>skyblue</button>
    <button>blue</button>
    <button>navy</button>
    <button>purple</button>
    <button>violet</button>
    <button>black</button>
    <button>white</button>
  </div>
</div> 
JS
const result3 = document.querySelector("#result3");
const btns 
  = document.querySelectorAll(".btn-container3 > button");
for(let i = 0 ; i < btns.length ; i++){
  btns[i].addEventListener("click", function(){
    const color = btns[i].innerText;
    result3.style.backgroundColor = color;
  })
}
 */
/* html 키 이미지
<img src="../images/13_입력된 키 확인/짱구.gif"
id="cursorImage">
  <div class="container">
    <div class="key-box">
      <div class="key">Q</div>
      <div class="key">W</div>
      <div class="key">E</div>
      <div class="key">R</div>
    </div>
  </div>
  JS
const images= ["짱구.gifㅂ","w.jpg","e.jpg","r.jpg"]
document.addEventListener("keydown", function(e){
let index; // 인덱스를 저장할 변수
  switch(e.key.toLowerCase()){
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default : return;
  }
  keys[index].style.backgroundImage = `url("../images/13_입력된 키 확인/${images[index]}")`
  keys[index].style.color = "rgba(0,0,0,0)";
});
document.addEventListener("keyup", function(e){
let index;
  switch(e.key.toLowerCase()){
    case 'q':  index = 0; break;
    case 'w':  index = 1; break;
    case 'e':  index = 2; break;
    case 'r':  index = 3; break;
  }
  keys[index].style.backgroundImage = "none";
  keys[index].style.color = "rgba(0,0,0,1)";
  //keys[index].style.backgroundColor = "white";
});
const cusorImage = document.querySelector("#cursorIamge")
document.addEventListener("mousemove",function(e){
  cursorImage.style.left = `${e.pageX + 15}px`
  cursorImage.style.top = `${e.pageY + 15}px`
})

 */