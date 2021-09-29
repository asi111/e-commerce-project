var  imgContainer = document.getElementById("container")
var  counterCartItems = document.getElementById("cartId")
// var  addButton = document.getElementsByClassName("addBtn")

var cartArray=[]
// var BtnAddToCart = document.getElementById("addBtn")
for(var i = 0 ; i< Electronics.length; i++){
    if(Electronics[i].category.indexOf("mobile") != -1 ){
        imgContainer.innerHTML+=
        `<article>
        <button type="button" onclick= addToCart(${Electronics[i].id})>add item</button><br>
        <span>id: ${Electronics[i].id}</span><br>
        <span>Name: ${Electronics[i].Name}</span><br>
        <span>price: $${Electronics[i].price}</span><br>
        <span>category: ${Electronics[i].category}</span><br>
        <span class="description">description: ${Electronics[i].description}</span><br>
        <img src="${Electronics[i].image[0]}" >
        <img src="${Electronics[i].image[1]}" >
        </article>`
    }
    
}

var counter = 1
function addToCart(id){
    for(var i =0; i < Electronics.length;i++){
        if(Electronics[i].id == id){
            cartArray.push(Electronics[i])
            counterCartItems.innerText= counter++
        }
    }
    
    console.log(cartArray);
}

 

