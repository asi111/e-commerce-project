

let cartObj = [
    {
        Name:"samsung",
    price:100,
    img:"https://media.istockphoto.com/photos/samsung-smart-tv-logo-picture-id483551726?k=20&m=483551726&s=612x612&w=0&h=2j_irOxDu7Tf2ECg_c9l8wUB16huRYVnzbZH1sW98xo="
},
{
    Name:"lenovo",
    price:100,
    img:"https://media.istockphoto.com/photos/side-view-of-open-laptop-computer-modern-thin-edge-slim-design-blank-picture-id1221721782?k=20&m=1221721782&s=612x612&w=0&h=zUpcT2u-JyjMbKszAOs87XE2iBLotzZNjOg0HkGiyHo="
},
{
    Name:"galaxy",
    price:100,
   img:"https://media.istockphoto.com/photos/samsung-s6-picture-id482230144?k=20&m=482230144&s=612x612&w=0&h=bth7XP18Vx-bwE5tGmRyb07upgK9rwjphosBdJcJxm0="
},
{
    Name:"beats",
    price:100,
    img:"https://media.istockphoto.com/photos/studio-headphones-picture-id458593293?k=20&m=458593293&s=612x612&w=0&h=8FdFoM67xkDAeSn1hqjiDuu65aZxAxEqLuI2ZcjNNwo="
},


]
let sum = 0;
let arrayOfSum = [];
let divContainer = document.getElementById("tbContainer")
for(let i = 0 ; i < cartObj.length; i++){
    divContainer.innerHTML+=
    `
    <tr class = "cartTableRow">    
    <td class="tb_cart"> <img  src="${cartObj[i].img}"  class="img"></td>
    <td class="tb_cart">  ${cartObj[i].Name}</td>
    <td class="tb_cart" > $${cartObj[i].price} </td>
    <td> <button  class = "btn">remove item</button></td>
    </tr>`
    sum+= Number(cartObj[i].price);
    arrayOfSum.push(Number(cartObj[i].price));
    
}
let total = document.getElementById("Total");
total.innerHTML += `total price : $${sum}`

let button = document.getElementsByClassName("btn");
const div = document.getElementsByClassName(`cartTableRow`);

for(let i =0; i < cartObj.length;i++){
    button[i].onclick=()=>{
        cartObj.splice(0,1);
        div[i].innerHTML = " ";
        sum-=arrayOfSum[i]
        total.innerText = `total : $${sum}`
        console.log(cartObj);
        console.log(sum);
        
    }
    
}








