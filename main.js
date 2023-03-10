//정규식 생성
// ``를 사용하면 엔터키를 눌러 문자를 다른줄에 쓸 수 있음 
const str = `
010-1234-5678
ldkffhdpthsl@naver.com
https://www.naver.com
The quick brown fox jumps over the lazy dog.
the abbcccdddd hotp
http://www.google.com
동해물과_ 백두산이 마르고 닳도록 9911
d`

//생성자 방식
const regexp = new RegExp ('the','gi') // the 라는 단어만 찾아 배열로 만듬, 
console.log(str.match(regexp))

//리터럴 방식
const regexp2 = /the/gi
console.log(str.match(regexp2))




// 메소드 
// test 예제
const regexp3 = /fox/gi
console.log(regexp3.test(str));  // fox 가 있으므로 true출력
const regexp4 = /young/gi
console.log(regexp4.test(str)); // young가 없으므로 false 출력

// replace 예제
const regexp5 = /brown/gi
console.log(str.replace(regexp5, 'red')) // brown 자리에 red가 들어감 
// 바뀐 내용을 원본에 저장하려면 const가 아닌 let으로 할당하여 재할당함 



// 플래그(옵션)

const regexp6 = /the/gi;
console.log(str.match(regexp6)); //.match메소드를 사용하여 배열로 반환 
console.log(str.match(/the/gi)); // 정규배열식을 변수에 저장하지 않고 메소드에 바로 입력가능 
console.log(str.match(/\.$/gim)); // 정규배열식에서 . 하나는 특별한 문자를 검색하는 패턴으로 인식, 문자로 인식하고 싶을때는 \를 사용 
                      // $는 문자데이터가 끝나는 부분을 찾아줌, m을 추가함으로써 줄마다 끝나는 부분에 마침표가 있는지 확인 후 배열데이터로 반환
                      // 줄끝에 .이 하나도 없는 경우 null 출력 



// 패턴(표현)

console.log(
  str.match(/d$/gm) // d로 끝나는 줄을 찾기
); 

console.log(
  str.match(/^t/gim) // t로 시작하는 줄 찾기
);

console.log(
  str.match(/./g) // 모든 문자들을 하나하나 각각 배열로 표시 함 
)

console.log(
  str.match(/http/g) // http를 찾아서 출력  
)

console.log(
  str.match(/h..p/g) // h로 시작 p로 끝나는 단어를 찾아서 출력  
)

console.log(
  str.match(/fox|dog/g) // fox와 dog 를 찾아서 출력  
)

console.log(
  str.match(/https?/g) // s가 있거나 없는 글자를 찾아서 출력, https, http 두개 다 찾음 
)

console.log(
  str.match(/d{2}/g) // d가 2개연속 되는 것을 찾아서 출력 , dddd는 dd,dd로 나옴
)

console.log(
  str.match(/d{2,}/g) // d가 2개이상 연속 되는 것을 찾아서 출력 , dddd 한개만 출력
)

console.log(
  str.match(/d{2,3}/g) // d가 2개이상 3개이하(2~3개)연속 되는 것을 찾아서 출력 , ddd가 출력됨
)

console.log(
  str.match(/\w{2,3}/g) // 2개 이상 3개 이하의 글자나 숫자가 출력(ex) 1234일경우 123까지만 출력 
)

console.log(
  str.match(/\b\w{2,3}\b/g) // 2글자 3글자 이하인 단어가 출력 1234는 출력이 안됨 
)

console.log(
  str.match(/[fox]/g) // f, o, x가 들어가는 글자를 찾아서 하나씩 출력 
)

console.log(
  str.match(/[0-9]/g) // 0부터 9까지가 들어간 글자를 찾아서 하나씩 출력
)

console.log(
  str.match(/[0-9]{1,}/g) // 0부터 9사이의 숫자가 들어간 1개이상의 단어를 찾아서 출력
)

console.log(
  str.match(/[가-힣]/g) // 가부터 힣 사이의 글자가 들어간 글자를 찾아서 하나씩 출력  
)

console.log(
  str.match(/\w/gi) // 숫자, 대소문자, _ 이 모두 출력 
)

console.log(
  str.match(/\b/gi) // 63개 문자에 일치하지 않는 경계가 모두 출력  
)

console.log(
  str.match(/\bf\w{1,}\b/gi) // 63개의 경계중 소문자 f단어로 시작하는 1글자이상의 단어를 찾음 , fox가 출력 
)

console.log(
  str.match(/\d/gi) // 숫자가 모두 하나씩 출력 
)

console.log(
  str.match(/\d{1,}/gi) // 숫자가 모두 1나이상의 단어를 출력  
)

console.log(
  str.match(/\s/gi) // 공백이 모두 하나씩 출력 \n은 줄바꿈
)


const h  = `  the hello  world     !

`
console.log(
  h.replace(/\s/gi, '') // 공백이 모두 빈문자로 replace(재배치)되어 사라짐 thehelloworld! 가 출력됨

)


const abc = `
010-1234-5678
ldkffhdpthsl@naver.com
https://www.naver.com
The quick brown fox jumps over the lazy dog.
the abbcccdddd hotp
http://www.google.com
동해물과_ 백두산이 마르고 닳도록 9911
d`


console.log(
  abc.match(/.{1,}(?=@)/gi) // @의 앞쪽을 1글자 이상 남겨 출력 , ldkffhdpthsl만 출력됨
)

console.log(
  abc.match(/(?<=@).{1,}/gi) // @의 뒤쪽을 1글자 이상 남겨 출력 , naver.com만 출력됨
)
