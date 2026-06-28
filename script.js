let total = 0;

function addToCart(product, price){

    let li = document.createElement("li");
    li.innerHTML = product + " - ₹" + price;

    document.getElementById("cart").appendChild(li);

    total += price;

    document.getElementById("total").innerHTML = total;
}
