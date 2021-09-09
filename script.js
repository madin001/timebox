 
 let elInput =document.querySelector('#input');
 let textPiyoda =document.querySelectorAll('#text')[0];
 let textBicycle =document.querySelectorAll('#text')[1];
 let textCar =document.querySelectorAll('#text')[2];
 let textAirplane =document.querySelectorAll('#text')[3];
 
 let piyoda = 3.6
 let bicycle = 20.1
 let car = 70
  let airplane = 800 
  const minute =60



form.addEventListener('submit' , function(e){
    e.preventDefault()

    if(!isNaN(elInput.value)){
       let resultPiyoda = Math.floor(elInput.value/piyoda) + 'soat ' + ((elInput.value%piyoda)/piyoda*minute).toFixed(0) +' minut';
       textPiyoda.textContent=resultPiyoda;

       let resultBicycle =  Math.floor(elInput.value/ bicycle) + 'soat ' + ((elInput.value%bicycle)/ bicycle*minute).toFixed(0) +' minut';
       textBicycle.textContent=resultBicycle;

       let resultCar =  Math.floor(elInput.value/ car) + 'soat ' + ((elInput.value%car)/ car*minute).toFixed(0) +' minut';
       textCar.textContent = resultCar;

       let resultAirplane = Math.floor(elInput.value/  airplane) + 'soat ' + ((elInput.value% airplane)/airplane*minute).toFixed(0) +' minut';
       textAirplane.textContent= resultAirplane;

          
    }else{ 
      
     console.log('raqam kiriting')
    }

    input.value = ''

 
})