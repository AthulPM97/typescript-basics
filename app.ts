const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numResults: Array<number> = []; // generic array notation
const textResults: string[] = [];

type NumOrString = number | string;
type result = {val: number; timestamp: Date};

interface person {
    name: string,
    age: number,
};

function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
}

function printResult(obj: result) {
    console.log(obj.val);
}

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  numResults.push(result as number);
  const stringResult = add(num1, num2);
  textResults.push(stringResult as string);
  console.log(result);
  console.log(stringResult);
  printResult({val: result as number, timestamp: new Date()});
  console.log(numResults, textResults);
});

const myPromise = new Promise<string>((resolve, reject) => { // promise generic type defined
    setTimeout(() => {
        resolve('Promise resolved');
    }, 1000);
}) 

myPromise.then((result => console.log(result.split(' '))));