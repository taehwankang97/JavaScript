/** class 를 이용한 요소 접근 방법  */

function classTest(){

  /* 유사 배열이란?
    배열처럼 index, length를 가지고 있으나
    배열 전용 기능(메서드)를 제공하지 않음
  */
  //클래스가 cls-test인 요소를 모두 얻어와
  //HTML Collection (유사배열) 형태로 얻어옴

  const divs = document.getElementsByClassName("cls-test");

  for(let i = 0; i < divs.length ; i ++){ //  i == 0,1,2
    //요소.innerText = "값", // 요소내용 "값" 대입
    // 요소.innerText;       // 요소 내용 얻어오기
    
    console.log(divs[i].innerText); // 작성된 내용 (색상)

    divs[i].style.backgroundColor = divs[i].innerText;
    divs[i].style.color = divs[i].innerText;
  

  }

}


/**input에 입력된 숫자 모두 얻어와 합계 구하기 */
function classTest2(){
  /* input요소.vlaue 

    HTML요소에서 얻어온 값의 자료형은
    -> 모두 string(문자열)

    합계 구하는 방법
    -> let sum = 0; 선언 후 누적

    HTMl문서에서 class 속성값이 일치하는 요소 모두 얻어오기
    -> document.getElementsByClassName("class 속성값")
    -> HTMLCollection(유사배열) 형태로 반환
  
  */
 //클래스가 cls-test2인 요소를 얻어옴
 const num = document.getElementsByClassName("cls-test2");
 let sum = 0;
 for(let i = 0; i < num.length; i++){

  sum += Number(num[i].value);

 }
 alert(`합계 : ${sum}`)
}


/** 태그명으로 요소 접근하기 */
function tagNameTest(){

  /* documnet.getElementByNameTagName("태그명") */
  
  const tagList = document.getElementsByTagName("li");
  //->요소 4개짜리 배열 반환
  // i == 0,1,2,3 
  for(let i = 0; i < tagList.length ; i ++){
    /* tagList[i].innerText \ 작성된 내용 (색상)
   */
    tagList[i].style.color =  tagList[i].innerText;
    
    // 테두리 변경
    
    tagList[i].style.border =  `3px solid ${tagList[i].innerText}`;



  }


}


/** name으로 요소 접근하기 */
function nameTest(){
 /*  document.getElementsByName("name 속성값") NodeList (유사배열) 반환
 name 값이 hobby인 요소를 모두 얻어와 저장*/
 const hobbyList =  document.getElementsByName("hobby");

 let str = '';// 체그된 input의 value를 누적
 let count = 0; // 체크된 input의 개수를 카운트

 // i == 0,1,2,3,4,5 (길이는 6, 마지막 인덱스는 5(길이 -1))
  for(let i = 0; i<hobbyList.length; i++){
    /*요소.checkbox, radio 타입 전용 속성 
      요소.checked = true; -> 해당요소 체크
      요소.checked = flase; -> 해당요소 체크 해제
      
      요소.checked; -> 체크 여부 반환 
                       (체크O -> true)
    */
    
      // 
      if(hobbyList[i].checked === true){
        //console.log(hobbyList[i].value);
        str += `${hobbyList[i].value} `
        count++;
    
   }
  }
  // class가 name-div인 요소에 str, count 출력
  //const div = document.getElementsByClassName("name-div")
  //->요소가 1개밖에 없어도 배열 형태로 변환
  // 0번 인덱스만 별도로 변수에 저장해서 사용
  const div = document.getElementsByClassName("name-div")[0];
  div.innerHTML =`${str}<br><br>선택된 취미 개수 : ${count}개` 
}






function csstest1(){
  const container = document.querySelector('[target-div = css-div]');

    container.style.width = "200px";
    container.style.height = "200px";
    container.style.border = "10px solid orange"

    //target-div 속성 값이 css-div인 요소의
    //자식중 div 요소를 모두 선택해 얻어옴
    const divs =document.querySelectorAll('[target-div = css-div]>div');

    for(let i = 0; i<divs.length; i++){
      divs[i].style.height = "50%";
      divs[i].style.display = "flex";
      divs[i].style.justifyContent = "center";
      divs[i].style.alignItems = "center";
    }
    divs[0].style.backgroundColor="pink"
    divs[1].style.backgroundColor="skyblue"

    //divs 사용하지 말고 
    //test1이 작성된 요소를 선택해 
    //fontSize = "30px"로 변경

    const test1 = document.querySelector('[target-div = css-div]>div');
    test1.style.fontSize = "30px";
}