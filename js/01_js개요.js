/* .js파일 내부를 script 태그 내부라고 생각 */

// 함수 선언 (기능 만들꺼야) 
function externalFn(){

//  함수 정의(기능이 이렇게 동작할꺼야 )

alert("External 확인 버튼이 클릭됨")
alert("이번엔  alert 두번 ")

}

//---------------------------------------
//JS 맛보기
// - 버튼 클릭시 body 태그의 글자색, 배경색을 변경 

// html 문서에서 body 태그 선택
const body = document.querySelector("body");

// 라이트 모드 변경함수 기능 선언 
function lightMode(){
  // 함수 정의 
  body.style.color ="black";
  body.style.backgroundColor = "white"
}

// 다크 모드 변경할 수 있는 기능 선언 
function darkMode(){
    body.style.color ="white";
  body.style.backgroundColor = "black"
}