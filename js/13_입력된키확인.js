//준비한 이미지 파일명을 저장할 배열
const images= ["짱구.gif","w.jpg","e.jpg","r.jpg"]

// 클래스가 key인 요소를 모두 얻어와 배열형태로 저장
const keys = document.querySelectorAll(".key");
// 입력키 :  Q W E R
// 인덱스 :  0 1 2 3

/* 문서 전체에 keydown 이벤트 리스너 추가*/
document.addEventListener("keydown", function(e){
  // e : 이벤트 객체
  // e.key : 입력한 key
  // console.log(e.key);

let index; // 인덱스를 저장할 변수

// 문자열.toupperCase() : 문자열을 대문자로 변환
// 문자열.toLowerCase() : 문자열을 소문자로 변환

  switch(e.key.toLowerCase()){
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default : return;
  }
 
  keys[index].style.backgroundImage = `url("../images/13_입력된 키 확인/${images[index]}")`
  // keys[index].style.backgroundColor = "pink"

  //글자색 투명으로 변경 
  //rgba -> a 투명도 0(투명) 1(불투명)
  keys[index].style.color = "rgba(0,0,0,0)";

});


/* 문서 전체에 keyup 이벤트 리스너 추가*/
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


// 이미지가 마우스 따라다니게 하기
const cusorImage = document.querySelector("#cursorIamge")

//마우스가 움직였을때 감지 추가
document.addEventListener("mousemove",function(e){
  
  //console.log(e);
  //e.pageX : 가로 방향 마우스 위치 (왼쪽에서 떨어진 px)
  //e.pageY : 세로 방향 마우스 위치 (왼쪽에서 떨어진 px)

  cursorImage.style.left = `${e.pageX + 15}px`
  cursorImage.style.top = `${e.pageY + 15}px`
})
