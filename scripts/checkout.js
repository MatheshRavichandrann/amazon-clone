import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-oop.js';
// import  '../data/backend-practice.js';

async function loadPage(){
  try{
    await loadProductsFetch();

    await new Promise((reslove) => {
    loadCart(() => {
       reslove();
     }); 
   });
   
  } catch (error){
    console.log('Unexpected Error, Dont try again')
  }
  
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();


// Promise.all([
//   loadProductsFetch(),
//   new Promise((reslove) => {
//     loadCart(() => {
//       reslove();
//     }); 
//   })

// ]).then((values) => {
//   console.log(values);
//   renderOrderSummary();
//   renderPaymentSummary();
//   console.log('done'); 
// });

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve('value1');
//   });
// }).then((value) => {
//   console.log(value);
//   return new Promise((reslove) => {
//     loadCart(() => {
//       reslove();
//     }); 
//   })
// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
//   console.log('done'); 
// });

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
  
// });


