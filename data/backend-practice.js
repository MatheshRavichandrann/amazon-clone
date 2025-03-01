const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
xhr.send();


console.log('Request sent...'); // Path: data/deliveryOptions.js 

/*
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'http://localhost:8080/name');
xhr.send();


console.log('Request sent...'); // Path: data/deliveryOptions.js 
*/