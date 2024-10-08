// console.log('안녕')

// let size : number = 100;
// size= 105;

let product ={
  id: 'c001',
  name: '라이트 윈드 브레이커',
  price: 129000,
  sizes: ['M','L','XL'],
};

const newProduct ={
  id: 'c002',
  name: '다크 윈드 브레이커',
  price: 139000,
  sizes: [90, 95, 100, 105, 100],
};

// product = newProduct;


// 05 type

let itemName: string = '블랙 후드';
let itemPrice: number = 12900;
let membersOnly: boolean =  true;
let owner: undefined = undefined;
let seller: null = null;


let num = 2/0 //Infinity
let num2 =0/0 //NaN

// 07 배열과 튜플

const cart: string[] = []; //문자열 배열 타입
cart.push('c001');
cart.push('c002');
// cart.push(2); -> 문자열 배열에 숫자형을 push하면 배열 오류가 남.

const carts: string[][] =[ //배열의 배열
  ['c001','c002'],
  ['c003']
];

// cf. 배열 타입에는 크기가 정해져 있지 않음. 

let mySize : number[] = [167,28];
mySize= [167,28,255];
mySize= [255];
mySize=[];

// 배열이지만 개수를 명확하게 정하고 싶을 때 -> 튜플 타입
//튜플 타입: 배열의 값을 정하듯이 쓰기.

let mySize2 : [number,number] = [167,28];
// mySize2= [167,28,255];
// mySize2= [255];
// mySize2=[];
// 개수나 타입이 다르면 오류가 남.

//09 객체 타입

let product9 : {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean; // optional property
  size: string[];
}={
  id: 'c001',
  name: '블랙 후디',
  price: 12900,
  size: ['M','L','XL'],
};


if (product9.membersOnly){
  console.log('회원 전용 상품');
} else{
  console.log('일반 상품');
}

//js 중 객체에 값을 할당할 때 프로퍼티 이름에 변수를 쓰고 싶으면 대괄호를 씀.
let field = 'field name';
let obj ={
  [field]: 'field value',
};

// 프로퍼티의 개수를 알 수 없거나 개수를 정해 놓고 싶지 않은 경우 
let stock : {
  [id: string]: number; //프로퍼티 이름으로 아무 문자열이나 쓸 수 있도록 정함. 
} ={
  c001: 1,
  c002: 3,
  c003: 8,
}