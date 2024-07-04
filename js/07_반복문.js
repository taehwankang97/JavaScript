/* for([1]초기식(변수) ; [2]조건식 ; [4]증감식){

      [3]조건식이 true인 경우 반복 수행할 코드;} */

/** 12345 출력*/

function check1(){
  
  //num이 1부터 시작해서 
  // 1씩 증가 하다가
  //num 값이 5이하가 아닌 순간 반복 종료하는 반복문
  for( let num = 1 ; num < 6 ; num++){
    console.log(num);
  }

}




function check2(){
  for(let i = 1; i < 11; i++){
    console.log(i);
  }
}





function check3(){
  for(let i = 5; i < 14; i++){
    console.log(i);
  }
  console.log(i);
}




function check4(){

  let result = ''; // 결과 저장용 변수 빈칸(string)

  for(let i = 1; i < 6 ; i++){
    result += i;  // result = result = result + i
   
  }
  console.log(result);
}







/**1부터 10까지 1씩 증가한 숫자들의 합을 출력하기 */

function check5(){

  let sum = 0; // 더했을때 영향이 없는 숫자 0을 대입

  for(let num = 1; num <= 10 ; num++){
    sum += num;
   
  }
  console.log(sum);
}



function check6(){

  for(let num = 1; num <=10; num+=2){
    console.log(num)
  }
}


function check7(){

  for(let num = 3; num <=30; num+=3){
    console.log(num)
  }
 
}
