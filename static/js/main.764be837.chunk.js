(this["webpackJsonpamazon-challenge"]=this["webpackJsonpamazon-challenge"]||[]).push([[0],{102:function(e,a,t){},104:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(46),l=t.n(c),i=(t(59),t(3)),o=t(10),s=t(5),m=(t(60),t(61),t(47)),u=t.n(m),d=t(49),p=t.n(d),E=t(48),_=t.n(E),h=Object(n.createContext)(),g=function(e){var a=e.reducer,t=e.initialState,c=e.children;return r.a.createElement(h.Provider,{value:Object(n.useReducer)(a,t)},c)},v=function(){return Object(n.useContext)(h)},f=t(31),b=t.n(f),N=b.a.initializeApp({apiKey:"AIzaSyCVpZqc3MNnrNM5kdSNIqbIq-Z8s1Y53Jg",authDomain:"dhilip-amaz-clone.firebaseapp.com",databaseURL:"https://dhilip-amaz-clone.firebaseio.com",projectId:"dhilip-amaz-clone",storageBucket:"dhilip-amaz-clone.appspot.com",messagingSenderId:"917518908910",appId:"1:917518908910:web:1bab9ecc2670329ccfe2ff",measurementId:"G-E3HEX2LJ82"}).firestore(),O=b.a.auth();var k=function(){var e=v(),a=Object(i.a)(e,1)[0],t=a.basket,n=a.user;return console.log(t),r.a.createElement("nav",{className:"header"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"Amazon Logo"})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{type:"text",className:"header__searchInput"}),r.a.createElement(u.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__github"},r.a.createElement("a",{href:"https://github.com/dhilip1201/amazon-clone",target:"_blank"},r.a.createElement(_.a,null),"GitHub")),r.a.createElement("div",{className:"header__nav"},r.a.createElement(o.b,{className:"header__link",to:!n&&"/login"},r.a.createElement("div",{onClick:function(){n&&O.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"}," Hello ",n?n.email:"Guest"),r.a.createElement("span",{className:"header__optionLineTwo"},n?"Sign out":"Sign In"))),r.a.createElement(o.b,{className:"header__link",to:"/orders"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"}," Returns"),r.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),r.a.createElement(o.b,{className:"header__link",to:"/"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"}," Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime"))),r.a.createElement(o.b,{to:"/checkout",className:"header__link"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(p.a,{className:"header__optionBasketIcon"}),r.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===t||void 0===t?void 0:t.length)))))};t(77),t(78);var y=function(e){var a=e.id,t=e.title,n=e.price,c=e.rating,l=e.image,o=v(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,t),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"\u0930"),r.a.createElement("strong",null,n)),r.a.createElement("div",{className:"product__rating"},Array(c).fill().map((function(e){return r.a.createElement("p",{className:"product__star"}," \u2606 ")})))),r.a.createElement("img",{src:l,alt:""}),r.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:t,image:l,price:n,rating:c}})}},"Add to basket"))};var j=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg",alt:""}),r.a.createElement("div",{className:"home__row"},r.a.createElement(y,{id:"10000",title:"Vivo V17 (Glacier Ice, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",price:1.5,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71iWvC-Sk1L._SY741_.jpg"}),r.a.createElement(y,{id:"10001",title:"Daniel Klein Analog Black Dial Men's Watch-DK12229-1",price:20,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71rr9h0v1YL._UY500_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(y,{id:"10002",title:"Turtle Beach Recon 150",price:7,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/811tCFHxNZL._SX679_.jpg"}),r.a.createElement(y,{id:"10003",title:"Van Heusen Men's Solid Regular Fit Polo",price:10,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81TyTRt4LVL._SX569._SX._UX._SY._UY_.jpg"}),r.a.createElement(y,{id:"10004",title:"Lapis O Lupo Women's Handbag",price:6,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/81qk98di%2BuL._UY625_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(y,{id:"10005",title:"Amazon Brand - Solimo 500 ml Large Vegetable Chopper with 3 Blades, Blue",price:3,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51tjMeONVoL._SX569_.jpg"})))};t(79),t(80);var S=function(e){var a=e.id,t=e.title,n=e.image,c=e.price,l=e.rating,o=e.hideButton,s=v(),m=Object(i.a)(s,2),u=(m[0].basket,m[1]);return r.a.createElement("div",{className:"CheckoutProduct"},r.a.createElement("img",{className:"CheckoutProduct__image",src:n,alt:""}),r.a.createElement("div",{className:"CheckoutProduct__info"},r.a.createElement("p",{className:"CheckoutProduct__title"},t),r.a.createElement("p",{className:"CheckoutProduct__price"},r.a.createElement("small",null,"\u0930"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"CheckoutProduct__rating"},Array(l).fill().map((function(e){return r.a.createElement("p",{className:"product__star"}," \u2606 ")}))),!o&&r.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:a})}},"Remove Product")))},C=(t(81),t(21)),w=t.n(C),T=t(35),A=t(17),B=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)};var z=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:a.user});case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(T.a)(e.basket),[a.item])});case"EMPTY_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var t=Object(T.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("Canot remove product (id: ".concat(a.id,") as its not Basket")),Object(A.a)(Object(A.a)({},e),{},{basket:t});default:return e}};var I=function(){var e=Object(s.f)(),a=v(),t=Object(i.a)(a,2),n=t[0],c=n.basket,l=n.user;return t[1],r.a.createElement("div",{className:"subtotal"},r.a.createElement(w.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",null===c||void 0===c?void 0:c.length," items): ",r.a.createElement("strong",null,"".concat(e))),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"}),"This Order Contain gift"))},decimalScale:2,value:B(c),displayType:"text",thousandSeparator:!0,prefix:"\u0930"}),r.a.createElement("button",{onClick:function(a){l?e.push("/payment"):e.push("/login")}},"Proceed to Checkout"))};var x=function(){var e=v(),a=Object(i.a)(e,1)[0].basket;return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===a||void 0===a?void 0:a.length)?r.a.createElement("div",{className:"checkout__empty"},r.a.createElement("h2",null,"Your Shopping is empty"),r.a.createElement("p",null,'You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.')):r.a.createElement("div",null,r.a.createElement("h2",null,"Your Shopping Baskets"),null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),a.length>0&&r.a.createElement("div",{className:"checkout__right"},r.a.createElement(I,null)))};t(83);var P=function(){var e=Object(s.f)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),c=t[0],l=t[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],p=u[1];return r.a.createElement("div",{className:"login"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign in"),r.a.createElement("form",null,r.a.createElement("h5",null,"E-mail"),r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},type:"email"}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{value:d,onChange:function(e){return p(e.target.value)},type:"password"}),r.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),O.signInWithEmailAndPassword(c,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInbutton"},"Sign In")),r.a.createElement("p",null,"By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),r.a.createElement("button",{onClick:function(a){a.preventDefault(),O.createUserWithEmailAndPassword(c,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))},M=t(23),L=t.n(M),Y=t(34),R=(t(85),t(20)),D=t(50),U=t.n(D).a.create({baseURL:"http://localhost:5001/dhilip-amazan-clone/us-central1/api"});var F=function(){var e=v(),a=Object(i.a)(e,2),t=a[0],c=t.basket,l=t.user,m=a[1],u=Object(s.f)(),d=Object(R.useStripe)(),p=Object(R.useElements)(),E=Object(n.useState)(!1),_=Object(i.a)(E,2),h=_[0],g=_[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),O=b[0],k=b[1],y=Object(n.useState)(null),j=Object(i.a)(y,2),C=j[0],T=j[1],A=Object(n.useState)(!0),z=Object(i.a)(A,2),I=z[0],x=z[1],P=Object(n.useState)(!0),M=Object(i.a)(P,2),D=M[0],F=M[1];Object(n.useEffect)((function(){(function(){var e=Object(Y.a)(L.a.mark((function e(){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U({method:"post",url:"/payments/create?total=".concat(100*B(c))});case 2:a=e.sent,F(a.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),console.log("THE SECRET IS>>>",D);var K=function(){var e=Object(Y.a)(L.a.mark((function e(a){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),k(!0),e.next=4,d.confirmCardPayment(D,{payment_method:{card:p.getElement(R.CardElement)}}).then((function(e){var a=e.paymentIntent;N.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").doc(a.id).set({basket:c,amount:a.amount,created:a.created}),g(!0),T(null),k(!1),m({type:"EMPTY_BASKET"}),u.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout ",r.a.createElement(o.b,{to:"/checkout"},null===c||void 0===c?void 0:c.length," items")," "),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery Address")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,null===l||void 0===l?void 0:l.email),r.a.createElement("p",null,"Palaghat main road,"),r.a.createElement("p",null,"Pollachi, Coimbatore."))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Reviews Items and Delivery")),r.a.createElement("div",{className:"payment__items"},null===c||void 0===c?void 0:c.map((function(e){return r.a.createElement(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:K},r.a.createElement(R.CardElement,{onChange:function(e){x(e.empty),T(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment__priceContainer"},r.a.createElement(w.a,{renderText:function(e){return r.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:B(c),displayType:"text",thousandSeparator:!0,prefix:"\u0930"}),r.a.createElement("button",{disabled:O||I||h},r.a.createElement("span",null,O?r.a.createElement("p",null,"Processing"):"Buy Now")),r.a.createElement("p",{className:"payment__dummyCard"},"try this dummy card:(4242 4242 4242 4242 04/24 242 42424) ")),C&&r.a.createElement("div",null,C))))))},K=t(51),G=(t(102),t(52)),H=t.n(G);var V=function(e){var a,t=e.order;return r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",null,H.a.unix(t.data.created).format("MMMM Do YYYY, h:mm a")),r.a.createElement("p",{className:"order__id"},r.a.createElement("small",null,t.id)),null===(a=t.data.basket)||void 0===a?void 0:a.map((function(e){return r.a.createElement(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),r.a.createElement(w.a,{renderText:function(e){return r.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:t.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"\u0930"}))};t(104);var W=function(){var e=v(),a=Object(i.a)(e,2),t=a[0],c=(t.basket,t.user),l=(a[1],Object(n.useState)([])),o=Object(i.a)(l,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){c?N.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):m([])}),[c]),r.a.createElement("div",{className:"orders"},r.a.createElement("div",{className:"orders__order"},null===s||void 0===s?void 0:s.map((function(e){return r.a.createElement(V,{order:e})}))))},X=Object(K.a)("pk_test_51HQEw7Ci12Lsn25czkEJ3PIFmtLmxSoyF1C6lOgq0FwxDqnyAOYrsYcOJj769G0zxfH7Ct2FmOQQbSwpFemKFuDW00tpBMioTM");var q=function(){var e=v(),a=Object(i.a)(e,2),t=a[0].user,c=a[1];return Object(n.useEffect)((function(){var e=O.onAuthStateChanged((function(e){console.log("The user is>>",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),console.log("User is null",t),r.a.createElement(o.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/checkout"},r.a.createElement(k,null),r.a.createElement(x,null)),r.a.createElement(s.a,{path:"/login"},r.a.createElement(P,null)),r.a.createElement(s.a,{path:"/orders"},r.a.createElement(k,null),r.a.createElement(W,null)),r.a.createElement(s.a,{path:"/payment"},r.a.createElement(k,null),r.a.createElement(R.Elements,{stripe:X},r.a.createElement(F,null))),r.a.createElement(s.a,{path:"/"},r.a.createElement(k,null),r.a.createElement(j,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,{reducer:z,initialState:{basket:[],user:null}},r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,a,t){e.exports=t(106)},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},83:function(e,a,t){},85:function(e,a,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.764be837.chunk.js.map