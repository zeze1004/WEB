var name = 'no mapcy';
var letter = 'you are ' + name + ' no mapcy is ' + name;

console.log(letter);

var letter2 = `you are ${name}


no mapcy is  + ${name}`;
console.log(letter2);
//``를 이용하면 \n 없이도 편히 뛰어쓸 수 있다
//문자열 결합 필요없이 ${} 사용 가능
//${1+1}은 2로 출력

var letter3 = `제제의 자산 ${100*101010}`;
console.log(letter3);
