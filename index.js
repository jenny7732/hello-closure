
/* //#예제1
//메모리 상태 확인하려고 디버그를 찍음
function 함수1() {
  debugger;
  함수2();
  debugger
}

function 함수2() {
  debugger;
}

함수1();
debugger; */



/* //#예제2
//메모리 상태 확인하려고 디버그를 찍음
function 바깥함수() {
  debugger
  var 변수 = 0;

  function 안쪽함수() {
    debugger
    console.log(변수);
    debugger;
  }

  return 안쪽함수;
  debugger
}

const 안쪽함수 = 바깥함수();
debugger
안쪽함수();
dksdebugger; */



//#예제3
//메모리 상태 확인하려고 디버그를 찍음
//function 바깥함수()
const useState = (초깃값) => {
  debugger
  let 상태 = 초깃값;
  debugger
  function 읽기() {
    debugger;
    return 상태;
    debugger
  }

  function 쓰기(새값) {
    debugger
    상태 = 새값;
  }

  return [읽기, 쓰기];
  debugger
};

const [읽기, 쓰기] = useState(0);
debugger
// const 읽기 = 배열[0]
// const 쓰기 = 배열[1]

console.log(읽기());
debugger
쓰기(읽기() + 1);
debugger
console.log(읽기());
debugger
쓰기(읽기() + 1);
debugger
console.log(읽기());
쓰기(읽기() + 1);
console.log(읽기());