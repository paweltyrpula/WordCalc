var languageFrom = document.getElementById("languageFrom");
var languageTo = document.getElementById("languageTo");
var chooseLanguagePrice = document.getElementById("chooseLanguagePrice");
var inputTextArea = document.getElementById("textinput");
var _count = document.getElementById("count");
var summaryPrice = document.getElementById('summaryPrice')
var checkboxExpress = document.getElementById("express");
var deliveryCustomer = document.getElementById("deliveryCustomer");
// var lowQuality =  document.getElementById("lowQuality");

inputTextArea.addEventListener("keyup", calc);
languageFrom.addEventListener("change", calc);
languageTo.addEventListener("change", calc);
checkboxExpress.addEventListener("change", calc);
deliveryCustomer.addEventListener("change", calc);
// lowQuality.addEventListener("change", calc);

var price = 0;
var charPrice;
var count = 0;

//jezyki
var select = document.getElementById("languageFrom");
var select2 = document.getElementById("languageTo");
var priceLanguage =  document.getElementById("priceLanguage");
var dane = {
 "selectValue": ["angielski","niemiecki","polski"],
 "angielski": {
     "selectValue": ["polski","niemiecki"],
     "niemiecki" : 2,
     "polski" : 4
  },
 "niemiecki": {
	"selectValue": ["polski","angielski"],
    "polski":8,
    "angielski":3
 },
 "polski":{
   "selectValue": ["niemiecki","angielski"],
   "niemiecki": 10,
   "angielski":15
 }
}

function setSelect1 () {
	dane.selectValue.forEach(function(value) {
    var opt = document.createElement('option');
    opt.value = value;
    opt.innerHTML = value;
    select.appendChild(opt);
  })
}
setSelect1();

function setSelect2 () {
  	select2.innerHTML = "";
	dane[select.value].selectValue.forEach(function(value) {
    var opt = document.createElement('option');
    opt.value = value;
    opt.innerHTML = value;
    select2.appendChild(opt);
  })
  priceLanguage.innerHTML = dane[select.value][select2.value];
}
setSelect2();

select.addEventListener('change', function () {
	setSelect2();


})
select2.addEventListener('change', function () {
	priceLanguage.innerHTML = dane[select.value][select2.value];

})

function printCount () {
    _count.innerHTML = count;
};

function printPrice () {
    summaryPrice.innerHTML = price;
};

function update () {
    count = inputTextArea.value.length;
    printCount();
}

function calc () {
    update();
    basicPrice();
    mod_express();
    deliveryCustomerFunction();
    printPrice();
}

function basicPrice () {
    price = count * dane[select.value][select2.value];
    if(dane[select.value]==dane[select2.value]){
      setSelect2();
      price = count * dane[select.value][select2.value];
    }
}

function mod_express () {
    if(checkboxExpress.checked)
        price *= 2;
}

function deliveryCustomerFunction () {
  if(deliveryCustomer.checked)
      price += 50;
}

function init() {
    update();
    printPrice();
}

init();
