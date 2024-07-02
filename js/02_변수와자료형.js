/* 변수(Variable) 선언  */

// 메모리의 값을 저장할 공간을 만들고 이름을 붙이는것 
// 작성법 : 변수종류 변수명;

var number1;
var numver2;


/* 변수에 값 대입 */
// 선언된 변수(공간)에 값을 대입 (집어 넣음)
// 작성법 : 변수명 = 값

//  =(등호) : 대입 연산자 
// A = B -> B를 A에 대입 (오른쪽 값을 왼쪽 변수에 대입)

number1 = 10; //number1 변수에 10대입
number2 = 20; // number2 변수에 20대입 


/* 변수 사용하기  */
// 필요한 곳에서 변수명 작성
console.log("number1 변수에 저장된 값", number1);

console.log("number2 변수에 저장된 값", number2);

console.log("number1 + number2", number1 + number2)

/*선언된 변수는 콘솔에서도 사용가능  */
// number3라는 변수가 정의되지 않았다
// == number3 선언 안됨 / 존재 X 


//--------------------------------------------------

/* 1. var*/
/* var : 변수, 변수명 중복 O (덮어쓰기 ), 함수 레벨 범위(scope) */ 

function varCheck(){

  var menu ="제육덮밥";
  console.log("menu: " , menu)

  var menu = "초밥"
  console.log("변경된 메뉴:" , menu)

  var menu = "국밥"
  console.log("변경된 메뉴:" , menu)

  //var를 이용할 경우
  //변수명이 중복되면 
  //이전 값을 새로운 값으로 덮어쓰기함

  //문제점 : 이전에 대입한 값을 이용할 수 있다
  //-> 나중에 이전 값을 사용하고 싶은데 
  //나도 모으게 새로운 값을 대입해 지워버리는 경우가 생김


}



/* 2. let */
/* 변수, 변수명 중복을 허용하지 않음, 블록{} 레벨 범위 */

function letCheck(){

  let name = "홍길동";
  console.log("name:", name)

   name = "김미영";
  /* let */ console.log("name", name) // 주석 해제시 오류 발생
// 블록 범위 변수 'name'을 다시 선언 할 수 없습니다 
// -> 해결 방법
// 1. 변수에 대입된 값을 바꾸는게 목적 -> let 제거
// name = "김미영"
// 2. 새로운 변수 생성이 목적 -> 변수명 변경
// let name2 = "김미영"

// 새로운 변수 선언

let name2 = "신짱구";
console.log("name : ", name, "name2 :", name2)
}


/* 3. const */
/* 상수(constant, 항상 같은 수 ), 상수명 중복을 허용하지 않음, 블록{} 레벨 범위 */
//const로 선언된 변수에 값을 대입하면 변경 할 수 없다
//(새로운 값 대입 불가)

function constCheck(){
  const nationalCode = 82;

  console.log("국가 코드 :", nationalCode);

  nationalCode = 1;
  //상수는 값을 다시 대입(할당) 할 수 없어서 오류 발생

  // 해결 방법: const를 let으로 변경 
  // const nationalCode; -> let nationalCode;
  console.log("국가 코드 :", nationalCode);
}




/* var, let, const의 scope확인  */

/* 
 선수 지식
  1. 전역 변수 : 어디서든 사용 가능한 변수 

  2. 지역 변수 : 특정 지역에서만 사용가능한 변수
    1) 함수 레벨의 범위 
      - function 함수명(){}
      함수 정의 부분에서 => {} 내부에서 
      var로 선언된 변수는 함수 내부 어디서든 공유 가능 

    2) 블록 레벨 범위
*/

function scopeTest(){

//함수 정의 

var num1 = 100;

//num1에 저장된 값이 100과 같다면
//{} 내부 코드를 실행
if(num1 == 100){
   var num2 = 200; // var를 이용해서 num2 변수 선언


console.log("num2 ", + num2) //num2 : 200 출력됨 

// var로 선언 되었기 떄문에 
// 함수 {}레벨 지역 변수 
// if 문이 끝나도 함수가 끝난게 아니기 때문에 
// 함수 {}안에서 어디서든 사용 가능 
}

//--------------------------------------------------------------

let num3 = 300;

//num3 변수에 저장된 값이 300과 같다면 {} 내부 코드 실행
if(num3 == 300){
  let num4 = 400; // 블록 {} 레벨 지역 변수 
                  //  == 블록을 벗어나면 사용할 수 없다
                  // 블록 내부에서만 사용 가능 
  console.log("if 내부 num4:" , num4)
}

console.log("num4 :", num4)
//num4가 정의 되지 않음




}


//------------------------------------------------------------
//변수 선언 위치에 따른 범위 

//전역 변수 선언
const global1 = "전역 변수 1";

function scopeTest2(){

  const fn1= "함수 지역변수1";//상수 (값 변경 X)

  let fn2 = "함수 지역 변수 2"//변수(값 변경 O)


  console.log("if 실행 전 fn2:", fn2)
  
  const temp = 123; // 테스트를 위한 임시 값(함수 지역 변수)

  


  if(1==1){// 1 과1 이 같다면 if{} 수행

    const local1 = "if 지역변수1 ";

    console.log("if문 내부에서 global", global1);

    /*  넓은 범위 (함수)에서 선언된 변수는  
    좁은 범위(함수 내 if)에서 사용 가능*/
    console.log("if 내부에서 f1 : ", fn1);


    console.log("if 내부에서 local1 : " , local1);

    fn2 = "변경된 fn2";
    //좁은 범위의 데이터를 넚은 범위에서 사용할 수 있게 하는 방법 
    //if{} 내부 (좁은 범위)에서
    //함수 {} 내부 (넓은 범위)의 변수 값을 변경 

    const temp = 456;

    console.log("if 내부의 temp:", temp);
    
    //1) 범위가 다르면 변수명 중복 O

    //2) 중복되는 변수 사용시 
    // 범위의 변수가 호출된다.
  }

console.log("if 실행후 temp",temp);

  console.log("if 시행후 fn2", fn2)
  // console.log("local1 : " , local1)
  //if문 지역변수 local1을 
  //if 문 밖에서 호출하면 "정의 되지 않음 " 오류 발생
}




/* 자료형 확인   */
function typeCheck(){

//함수 정의


/* typeof 연산자 : 변수/값의 자료형을 확인해주는 연산자 */

/* undefined : 정의되지 않은 변수 / 값 대입 X 또는 존재X 변수 */

let undef; // undef 변수 선언
console.log("undef :", undef , typeof undef);
        //    문자열 :  저장된값 , 자료형



/* string(문자열) : "" 또는 '' 내부에 작성된 값 */
/*  ex) "홍길동" == '홍길동*/

const name = "홀길동"
const phone = "01012341234"


console.log("name :" , name , typeof name);

console.log("phone: ", phone, typeof phone);

/* number(정수, 실수) */

const age = 25;
const height = 180.51;
const sight = -4.5;

console.log("age: " ,age, typeof age);
console.log("height:" , height, typeof height);
console.log("sight :", sight, typeof sight);

/* boolean (논리형): */

console.log("true : ", true, typeof true);
console.log("false:", false, typeof false);

/* Object(객체) */
/* (쉬운 버전 설명 ) 값을 여러 개 저장할 수 있는 형태  */

// 1) 배열 : 변수의 묶음 

const numbers = [10,20,30]; // 배열 생성

console.log("numbers :", numbers, typeof numbers);

//배열에 저장된 값을 하나씩 꺼냈을 떄의 타입 검사
console.log("number 배열의 값 중[0] 번째", numbers[0] , typeof numbers[0] );
console.log("number 배열의 값 중[1] 번째", numbers[1] , typeof numbers[1] );
console.log("number 배열의 값 중[2] 번째", numbers[2] , typeof numbers[2] );

//2) JS객체
// 값을 K:V 형식으로 저장하는 형태 
// -> {K:V, K:V, K:V}

//(쉽게 이해하는 방법)
//K(key) == 변수명 
//V(vlaue) == 변수에 저장된 값



const user ={
  id : "user01", //const id = "user01"
  pw : "pass01", // let pw = "pass01"
  point : 1200   // let point = 1200
}

console.log("user:", user, typeof user);

// user 객체에 저장된 값 하나씩 꺼내기

/* .(점) 연산자 : 내부/ 하위 접근 연산다 */
console.log("user.id : " , user.id, typeof id);
console.log("user.id : "  ,user.pw, typeof pw);
console.log("user.id : "  ,user.point, typeof point);

/* 함수 (function) */
/* 
함수도 변수에 저장 가능 !!!

[작성법]
const 함수명 = fuction 함수명(){};

*/
const sumFn = function(a, b){
  return a + b
}

console.log(typeof sumFn); //funtion

console.log(sumFn);

console.log(sumFn(1,3));


}