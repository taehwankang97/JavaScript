function check1() {

  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ['사과', '딸기', '바나나'];

  console.log(arr1, arr2, arr3, arr4);


  /*  배열명. leghth : 배열의 길이 */

  console.log(arr1.length, arr2.length, arr3.length, arr4.length);

  /* 배열의 각 요소 접근 방법(index 이용) */

  //배열명[index] -> index번째 요소에 저장된 값을 반환
  console.log('arr4[0]:', arr4[0]);
  console.log('arr4[1]:', arr4[1]);
  console.log('arr4[2]:', arr4[2]);
  console.log('arr4[3]:', arr4[3]);

  // 배열명[index] = 값 -> 해당 index번쨰 요소에 값 대입 
  arr2[0] = 123;
  arr2[1] = '덥다';
  arr2[2] = true;

  console.log('arr2', arr2);

  //===============================

  /* JS배열 특징 이용하기 */
  // 1. 길이 제한이 없다 
  // -> 원하는 만큼 배욜 요소를 추가 할 수 있다.

  arr1[0] = '가나다';
  arr1[1] = '라마바';
  arr1[2] = '사아자';

  console.log("값이 대입된 arr1", arr1);

  // 2. 원하는 index에 값을 마음대로 추가할 수 있다
  // -> 중간의 건너뜀 index 요소는 빈칸으로 처리됨

  arr1[5] = '중간에 건너뜀 '

  console.log("arr1번 확인", arr1);
}




function check2() {
  const weeks = ['월', '화', '수', '목', '금', '토', '일'];
  // weeks.leghth == 7 
  // weeks의 마지막 인덱스 번호 == 6 == weeks 길이 -1 



  for (let i = 0; i < weeks.length; i++) {
    // 0부터 7미만(==6이하) 까지 1씩 증가 
    console.log(weeks[i]);
  }
}


/** 배열 X for문 확인2  */
function check3() {
  // 배열 요소에 순차적으로 값 초기화 하기

  const arr = [];

  for (let i = 0; i < 4; i++) {// 0 1 2 3 
    arr[i] = prompt(`${i}번째 인덱스 요소 값 입력`);
  }
  console.log(arr);
}

/** 배열 X for문  */
/* prompt를 이용해서 숫자 5개를 입력 받아 배열에 저장 후 저장된 값, 합계, 평균을 console에 출력하기
ex) 1,2,3,4,5 입력
저장된 값 : [1,2,3,4,5]
합계 : 15
평균 : 3
 */

function check4() {
  const arr = new Array(5); //5칸 짜리 배열 생성

  let sum = 0;

  //fot문 작성(0 ~ 4 1씩 증가)
  for (let i = 0; i < arr.length; i++) {
    // 입력 받자마자 number타입으로 변환하여 
    //배열 요소에 저장
    arr[i] = Number(prompt(`${i}번째 요소에 저장할 숫자 입력`))

    sum += arr[i];
  }

  console.log("저장된 값 : ", arr);
  console.log("합계 : ", sum);
  console.log("평균 : ", sum / arr.length);

}


/** 배열 X for문 확인4 */
/*  배열에 0 부터 배열 길이 미만의 난수 저장하기 */
function check5() {

  const leng = Number(prompt("생성할 난수 범위 지정(미만)"));

  const arr = []; // 빈 배열 생성

  for (let i = 0; i < leng; i++) {

    const randomNumder = Math.floor(Math.random() * leng);
    arr[i] = randomNumder;
  }

  console.log("결과 : ", arr);

}
/** 로또 번호 생성기 */
/*  1~ 45 사이 난수 6개 생성
단 중복 X 오름 차순 정렬
 */
function check6() {
  const lotto = []; //난수 저장할 배열 생성


  // 일단 배열에 난수 대입
  for (let i = 0; i < 6; i++) {

    const randomNumder = Math.floor(Math.random() * 45) + 1;

    lotto[i] = randomNumder;

    // -> 앞에 중복되는 숫자가 있는지 확인
    // -> 없으면 다음 index에 머물기
    for (let x = 0; x < i; x++) {

      // 중복 검사
      // i번째 저장하려는 값이 
      // x번째 (앞쪽)에 존재하는가 
      if (lotto[x] === lotto[i]) { // 중복 값이 존재
        //-> 있으면 현재 index에 머물기

        //난수를 저장하기 위한 index를 지정하기 
        //i값을 1 감소 
        //-> 바깥쪽 for문의 증감 i++에 의해 다시 1 증가
        //-> 결과적으로 i값 변화 X
        i--;
        break; // 불필요한 중복 검사 멈춤(효율 up)
      }

    }
  }


  // 배열 내 숫자 정렬 방법
  lotto.sort(function (a, b) { return a - b });

  console.log(lotto);

  document.getElementById("result6").innerText = lotto;
}





/** 점심 메뉴 뽑기 */
function selectMenu() {

  const menus = ["라면 + 김밥", "제육볶음",
    "치즈 돈까스", "샐러드", "맘스터치",
    "알탕", "돼지국밥", "닭갈비", "뚝배기 불고기",
    "KFC", "냉면", "콩국수", "쭈꾸미",
    "초밥", "쌀국수", "김치찜", "고등어구이",
    "우육탕"
  ];

  const randomNumder = Math.floor(Math.random() * menus.length);
  //menus 배열에서 랜덤으로 하나 뽑아서
  // 화면에 #menuResult에 출력하기 


}



function check7() {

  // 2차원 배열 선언 및 초기화 
  const arr = [
    /* arr[0] */[10,20,30,40],
    /* arr[1] */[50,60,70,80],
    /* arr[2] */[90,100]
  ]

  console.log("2차원 배열 arr의 길이 (행의 개수) :", arr.length);
 
  console.log("arr의 0번째 인덱스 길이 : ", arr[0].length);
  console.log("arr의 0번째 인덱스 길이 : ", arr[1].length);
  console.log("arr의 0번째 인덱스 길이 : ", arr[2].length);

  //arr 모든 요소(행)을 for문을 이용해 접근
  for(let i = 0; i<arr.length; i++){
    //console.log(arr[i]);

  let str = '';

    //arr[i]요소에 저장된 배열의 모든 요소 접근 
    for(let x = 0; x<arr[i].length; x++){
 
      str += `(${arr[i][x]}) `;
     
    }
    console.log(str);
  }
}



function check8(){
/* 4행 4열 짜리 2차원 배열에 
 0 ~ 99 사이 난수   */

 //배열 생선

 const arr = [];
// 난수를 2차원 배열에 대입 
 for(let row = 0; row < 4 ; row++){

  arr[row] = [];

  for(let col = 0; col < 4 ; col++){

    // 난수 생성 
    const randomNumder = Math.floor(Math.random() * 100);

    //2차원 배열에 대입
    arr[row][col] = randomNumder
  }
 }
console.log(arr);
//콘솔창 출력용 2중 for문
for(let row = 0; row < 4 ; row++){

  let str = '';

  for(let col = 0; col < 4 ; col++){

    str += `${arr[row][col]} `
  }
  console.log(str);// 한줄 출력
}



const search = Number(prompt('찾으려는 값 입력'));

// 2차원 배열 (arr) 내에서 입력 값(search) 찾기

for(let row = 0 ; row < arr.length ; row++){

  for(let col = 0 ; col < arr[row].length; col++){

    if(arr[row][col] === search){
      console.log(`${row}행 ${col}열에 ${search}가 존재합니다.`);
    }

  }
}


}