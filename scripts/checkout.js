import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-oop.js';
// import  '../data/backend-practice.js';


Promise.all([
  loadProductsFetch(),
  new Promise((reslove) => {
    loadCart(() => {
      reslove();
    }); 
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
  console.log('done'); 
});

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


