let nav2=document.querySelector("#test2")
var k2
console.log(k2)


nav2.addEventListener("click",function ch(){

    k2 = "red";
    document.body.style.backgroundColor=k2
})
console.log(nav2)
if(k2!=undefined)
    document.body.style.backgroundColor=k2