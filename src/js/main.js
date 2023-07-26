// number, string, boolean, null, undefined, Symbol, BigInt, Object

// var let const

// let str = 'Some string';
// str = 10;

// string t = 'some string';
// t = 10;

// 101

// String

const person = {
  address: {
    city: 'Homiel',
    street: 'Sovetskaya',
    building: '2',
  },
};

person.age = 33;
person.name = 'Jhon';

console.log(person);

person.name = 'Harry';

console.log(person);

delete person.address;

console.log(person);
console.log(person.name);

const arr = [1, 2, 3, 4];

console.log(arr[2]);
console.log(arr.length);
person['first name'] = 'Harry';
console.log(person['first name']);
