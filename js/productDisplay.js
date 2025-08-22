const product = [{
    image:"shirt.jpg",
    name:"TOUPHY Sports Short Sleeve T-Shirt & Shorts Set - 2 Piece - Black ",
    price:60.50,
    seller:"Touphy",
    available:"in stock",
    discount:69.19
},
{   
    image:"shirt.jpg",
    name:"TOUPHY Sports Short Sleeve T-Shirt & Shorts Set - 2 Piece - Black",
    price:60.50,
    seller:"Touphy",
    available:"in stock",
    discount:69.19
}]


    let parent_box = document.getElementById("parent-box");
    let child_box = document.createElement("a");

product.map((eachProduct)=>{

    
  

    child_box.innerHTML =  `<div class="envelope">
                                <span>
                                    <div class="tie">
                                        <img src="/images/${eachProduct.image}" alt="">
                                        <div class="topDown">
                                            <p>${eachProduct.name}</p>
                                            <h3>Seller: <b>${eachProduct.seller}</b></h3>
                                            <h3>${eachProduct.available}</h3>
                                            <div class="remove">
                                                <img src="/images/remove.png" alt="">
                                                <p>Remove</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="topDown">
                                        <h4>GH₵ ${eachProduct.price}</h4>
                                        <div class="dis">
                                            <s>GH₵ ${eachProduct.discount}</s>
                                            <p class="discount">${((eachProduct.discount/eachProduct.price)*(100)).toFixed(2)}%</p>
                                        </div>
                                        <form action="">
                                            <input class="reduce-item" id="reduce" type="button" value="-">
                                            <p id="counter">1</p>
                                            <input class="increase-item" id="increase" type="button" value="+">
                                        </form>
                                    </div>
                                    
                                </span>
                            </div>`

                    parent_box.append(child_box)
                    child_box = document.createElement("a");

})

let plus = document.getElementById("increase");
let minus = document.getElementById("reduce");
let counter = document.getElementById("counter");
let count = 0;

plus.onclick = function(){
    count++;
    counter.textContent = count;
}
minus.onclick = function(){
    if(count !== 1){
        count--;
        counter.textContent = count;    
    }
   
}