let sidebar = document.getElementById('sidebar');
let main = document.getElementById('main');
let textElements = document.querySelectorAll('.text');

let t = true;


let menu1 = document.getElementById('menu1');

function aside1() {
    if (t) {
        sidebar.style.width = "300px";
        main.style.marginLeft = "300px";
        textElements.forEach((text) => {
            text.style.display = "block";
        });
        t = false;
    } else {
        sidebar.style.width = "100px";
        main.style.marginLeft = "100px";
        textElements.forEach((text) => {
            text.style.display = "none";
        });
        t = true;
    }
}

menu1.addEventListener('click', aside1);












let menu2 = document.getElementById('menu2');

function aside2() {
    if (t) {
        sidebar.style.width = "100px";
        main.style.marginLeft = "100px";
     //    textElements.forEach((text) => {
     //      text.style.display = "none";

     //    });
        t = false;
    } else {
        sidebar.style.width = "300px";
        main.style.marginLeft = "300px";
     //    textElements.forEach((text) => {
     //      text.style.display = "block";

     //    });
        t = true;
    }
}

menu2.addEventListener('click', aside2);






let nav=document.getElementById("nav")

nav.addEventListener("click",()=>{
     console.log(true);
     
    if (t) {

     sidebar.style.transform="translateX(0px)"
     main.style.marginLeft = "100px";

     t = false;
} else {
     sidebar.style.transform="translateX(-100px)"
        main.style.marginLeft = "0px";

     t = true;

}
})





let search=document.getElementById("search")

let searchbox=document.getElementById("searchbox")


search.addEventListener("click",()=>{
     console.log(true);
     
    if (t) {

     searchbox.style.transform="translateY(80px)"
     searchbox.style.opacity="1"

     t = false;
} else {
     searchbox.style.transform="translateY(-100px)"
     searchbox.style.opacity="0"

     t = true;

}
})









     let currentdate=new Date();


     function calendar() {
          let days = document.getElementById('days')

          let ht = document.getElementById('h2')
      

     let year=currentdate.getFullYear();
     let month=currentdate.getMonth();

     

     let middleday=new Date(year,month+1,0);
     
     



     

     let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    h2.innerHTML+=`<div>${months[month]}, ${year}</div>`


          let fd=new Date(year,month,0);

     let getpreday=fd.getDay();
     let getpredate=fd.getDate();

     


          for (let i = getpredate - getpreday; i <= getpredate; i++) {
if (getpreday==6) {
     days.innerHTML+=`<div class="datepre" style="color:#89a;"></div>`

}


else{

               days.innerHTML+=`<div class="datepre" style="color:#89a;">${i}</div>`

}
               
       

          
         
     }






     for (let i = 1; i <= middleday.getDate(); i++) {
          days.innerHTML+=`<div class="datenxt">${i}</div>`

     }
   

     let ld=new Date(year,month+1,1);
          console.log(ld.toLocaleString());
          let getnxtday=ld.getDay();
          let getnxtdate=ld.getDate();

          console.log(getnxtday,getnxtdate);
          

          for (let i = getnxtdate; i <=  7 - getnxtday ; i++) {
               if (getnxtday==0) {
                    days.innerHTML+=`<div class="datepre" style="color:#89a;"></div>`
               
                    
               }

               else{

               days.innerHTML+=`<div class="datepre" style="color:#89a;">${i}</div>`

               
          }
       

          
         
     }


}




calendar();


function highlight() {
     
let datenxt=document.querySelectorAll('.datenxt')
let newdate=new Date();
if (currentdate.getMonth()==newdate.getMonth() && currentdate.getFullYear()==newdate.getFullYear()) {
     
for (let i = 0; i < datenxt.length; i++) {
     
          if (currentdate.getDate()-1==i) {
            

              datenxt[i].style.background="#172f6b";
              datenxt[i].style.color="#fff";
          
     
          

}

}
}

          
}

highlight()





function dtnxt() {



let datenxt=document.querySelectorAll('.datenxt')


datenxt.forEach((datenxt)=>{
     datenxt.addEventListener('mouseover',()=>{
          datenxt.style.border="2px solid #000"
console.log(true);

          })
          datenxt.addEventListener('mouseout',()=>{
               datenxt.style.border="2px solid transparent"


               })
})

}

dtnxt();


let pre = document.getElementById('pre')
let next = document.getElementById('next')
let box = document.getElementById('box')


pre.addEventListener('click',()=>{
     days.innerHTML=""
     h2.innerHTML=""
     
     currentdate.setMonth(currentdate.getMonth()-1)

     calendar();
     highlight();
     dtnxt();

})

next.addEventListener('click',()=>{
     days.innerHTML=""
     h2.innerHTML=""
     
     currentdate.setMonth(currentdate.getMonth()+1)

     calendar();
     highlight();
     dtnxt();

})










