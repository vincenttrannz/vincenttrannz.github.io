  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")


let images = ["./images/unicorn-1.png","./images/unicorn-2.png","./images/unicorn-3.png"]
let count = [0,0,0]
let inflation = [false, false, false]

document.getElementsByClassName('inflate-an-image')[0].onclick = function(){inflate(0);}
document.getElementsByClassName('inflate-an-image')[1].onclick = function(){inflate(1);}
document.getElementsByClassName('inflate-an-image')[2].onclick = function(){inflate(2);}

function inflate(unicorn){

  //Alert thank you for fully inflation
  if(inflation[unicorn] == true){
    alert("Unicorn" + " " + (unicorn+1) + " " + "says thank you!")
  }
  document.getElementsByClassName('inflate-an-image')[unicorn].src = images[count[unicorn]]

if(count[unicorn] <= 2){
  count[unicorn] = count[unicorn] + 1
if(count[unicorn] == 3){
  count[unicorn] = count[unicorn] - 1
  inflation[unicorn] = true;
}
}
}

























// let unicornImages = document.querySelector("[src='./images/unicorn-0.png']")
// function inflate(){
//   let changeImages = document.getElementsByTagName("img")
//   debugger
//   this.addEventListener('click', ()=>{
//     if(unicornImages.src == "file:///Users/hieutran/Desktop/EDA_Bootcamp/Foundations/javascript-carnival/inflate-the-unicorn/images/unicorn-2.png"){
//       for(let i=0;i<changeImages.length;i++){
//       changeImages[i].setAttribute("src", "./images/unicorn-3.png")
//     }}  
//      else if(unicornImages.src == "file:///Users/hieutran/Desktop/EDA_Bootcamp/Foundations/javascript-carnival/inflate-the-unicorn/images/unicorn-1.png"){
//       for(let i=0;i<changeImages.length;i++){
//       changeImages[i].setAttribute("src", "./images/unicorn-2.png")
//     }} 
//     if(unicornImages.src == "file:///Users/hieutran/Desktop/EDA_Bootcamp/Foundations/javascript-carnival/inflate-the-unicorn/images/unicorn-0.png"){
//       for(let i=0;i<changeImages.length;i++){
//       changeImages[i].setAttribute("src", "./images/unicorn-1.png")
//     }}
//   })
//   return 
// }
