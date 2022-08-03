document.getElementById("btn_text").addEventListener("click", tax_calculator);

function tax_calculator() {
    event.preventDefault();

var price;
var tax;
var total;
const tax_rate=18;

 price = document.getElementById("price").value;    
 tax = (price * 18) / 100;
 total = parseInt(price) + parseInt(tax); 

 console.log(total)

result_text = "Price of the product without tax: " + "<strong>" + price + "</strong>" + "<br>"
              +"Price of the tax: " + "<strong>" + tax + "</strong>" + "<br>"
              +"Price of the product with tax: " + "<strong>" + total + "</strong>" + "<br>"

document.getElementById("result").style.display = "block";
document.getElementById("result").innerHTML = result_text;
 

}