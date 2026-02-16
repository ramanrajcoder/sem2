//const button=document.querySelector('button')

//button.classList.add('btn')


//function message(){
  //  alert("you have clicked the button")
//
//button.addEventListener('click', message)



//button.removeEventListener('click', message)

//const button=document.querySelector('#btn')
//const button2=document.querySelector('#stop')
//button.addEventListener('click', message)

//button2.addEventListener('click',fucntion(){
  //  button.removeEventListener('click',message)
//})


//const btn=document.querySelector(#btn)

//btn.addEventListener('keyup',fucntion(event)({
  //  console.log(event.key)

//})
// debugger
//console.log(a)
//console.log(b)


//var a=78       //part of global scope
//let b= 345      //stored in script scope 
//console.log(a)
//console.log(b)

//function print(){
  //let c=45
  //console.log(c)
  //console.log("Inside fn")
//}

//print()
//debugger
//f//unction first(){
  //second()
  
//}


//let total = 100;

//function calculate( ) {
//console. log(total);
//let total = 50;

//calculate();

//console.log("first Line")
//setTimeout(()=>{
  //console.log("after 2 sec")
//},2000)
//console.log("second line")

//console.log("first Line")
//setTimeout(()=>{
  //console.log("after 2 sec")
//},2000)
//console.log("second line")

//setTimeout()=>{
  //alert{("ALERT AFTER 3 SEC")
//,3000}
//}


//setTimeout(()=>{
  //clearInterval(timer)
//},10*1000)


//let count = 1;

//const interval = setInterval(() => {
  //  console.log(count);

    //if (count === 10) {
      //  clearInterval(interval); // stop printing
    //}

   // count++;
//}, 1000);


// function print(){
//   console.log("HELLO TEACHERS")
// }

// function greet(num){
//   console.log("welcome to our class")
//   setTimeout(()=>{
//     console.log("INSIDE SET TIMEOUT")
//     let firstname="alexa"
//     num(firstname)
//   },2000);
  
// }
//  greet(print)



// console. log("Starting homework ... ");

// setTimeout(( ) => {
// console.log("Homework done!");
// console.log("Starting dinner ... ");

// setTimeout ( ( ) => {
// console.log( "Dinner done!");
// consolole.log("Getting ready to go out ... ");

// setTimeout(() =>{
// console.log( "Going to the playground!" );
// }, 1000); // after Winner

// }, 1500); // dinner tme

// }, 2000); // homework time

// function finishHomework(callback) {
// console.log("Starting homework ... ");
// setTimeout(() => {
// console. log("Homework done!");
// callback();
// }, 2000);
// }

// function eatDinner(callback) {
// console. log("Starting dinner ... ");
// setTimeout(() =>{
// console. log("Dinner done!");
// callback();
// }, 1500);
// }
// function goToPlayground( ) {
// console. log("let's go to playground!");
// }
// // Chained in steps, but cleaner
// finishHomework(() => {
// eatDinner(() => {
// goToPlayground( );

// });
// });


// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")


// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     const li=document.createElement('li')
//     li.innerText=input.value
//     list.appendChild(li)
//     input.value=""
// })
  
// btn.addEventListener('click',(e)=>{
//   e.preventDefault()
//   const 11=document.createElement('li')
//   const 
// }
// )

// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const lists=document.querySelector(".list")

// btn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     if(input.value===""){
//       alert("enter task")
//       return
//     }
//     const li=document.createElement("li")
//     const deleteButton=document.createElement("button")
//     deleteButton.innerText="Delete"
//     li.innerText=input.value
    
//     lists.appendChild(deleteButton)
//     lists.appendChild(li)

//     deleteButton.addEventListener("click",()=>{
//         lists.removeChild(li)
//     })
//     input.value=""
// })




// console.log("first line")
// setTimeout(()=>{
//   console.log("inside timeout")
// },0)
// const p=new Promise((resolve,reject)=>{
//   resolve()
// })

// p.then(()=>{
//   console.log("inside promise")
// }).catch(()=>{
//   console.log("inside catch")
// })
// const p2=new Promise((resolve,reject)=>{
//   resolve()
// })
// p2.then(()=>{
//    console.log("inside promise")
// }).catch(()=>{
//   console.log("inside catch")
// })
// const p2=new Promise((resolve,reject)=>{
//   resolve()


// }).catch(()=>{

// })

// constp3=new Promise((resolve,reject)=>{
//   resolve()
// })

// p3.then(()=>{
//   console.log("inside promise")
// })



//const form=document.querySelector("#form")
//form.addEventListener('submit',(e)=>{
  //e.preventDefault()
  //console.log(eventTitle.value)
  //console.log(eventDate.value)
  //console.log(category.value)
  //console.log(RTCSessionDescription.value)
//})





// function orderFood(){
//   return new Promise{function(resolve,reject){
//     setTimeout(()=>{
//       console.log("Food ordered")
//       resolve("food ordered")
//     },1000)
//   }}

  
// }



// function prepareFood(){
//   return new Promise{function(resolve,reject){
//     setTimeout(()=>{
//       console.log("Food prepared")
//       resolve("food prepared")
//     },1000)
//   }

//   }
// }


// function deliverFood(){
//   return new Promise{function(resolve,reject){
//     setTimeout(()=>{
//       console.log("Food delivered")
//       resolve("food delivered")
//     },1000)
//   }

//   }
// }

// orderFood().then((data)=>{
//   console.log(data)
//   return prepareFood()
// }).then((data)=>{
//   console.log(data)
//   return deliverFood()
// })then((data)=>{
//   console.log(data)
// })catch((err)=>{
//   console.log(err)
// })



// function deliverFood(){
//   return new Promise(function(resolve,reject){

//   })
// }


// async function order(){
//   const data=wait orderFood()
//   console.log(data)
//   await prepareFood()
//   await deliverFood()
// }
  
// order()


// console.log("first line")
// try{
//   // let sample=324
//   console.log(sample)
// }catch(error){
//   console.log(error)
// }finally{
//   console.log("finally block")
// }
// console.log("last line")
// )
// console.log(sample)
// console.log("last line")


// console.log("first line")
// try{
//   //let sample=324
//   //console.log(Sample)
//   let age=19
//   if (age<19){
//     //error
//     throw new Error("Access Denied")
//   }
// }

// async function getData(){
//   const response=await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data=await response.json()
//   data.products.forEach((ele)=>{
//     console.log(ele.id)
//   })
// }
// getData()


async function getData(){
  try{
    const respose=await fetch("https://dummyjson.com/products")
    console.log(Response.ok)
    if(Response.ok==false)throw new Error("data  not found")
      const data=await Response.json()
    console.log(data)
  }catch(error){
    console.log("data not found")
  }
}

getData()


