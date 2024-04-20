// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

window.onload = function() {
    n1 = Math.floor(Math.random() * (100 - 0 +1));
    console.log(n1)
    n2 = Math.floor(Math.random()* (100-0+1));
    console.log(n2)
    document.getElementById("number1").innerHTML = n1;
    document.getElementById("number2").innerHTML = n2;

// Iteration 3: Creating variables required to make the game functional
const operators=['+','-','*','/','%'];
const button = document.getElementById('buttons');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const mul = document.getElementById('mul');
const divide = document.getElementById('divide');
const modulus = document.getElementById('modulus');
let score=0;
const updateScore=()=>{
    score+=1;
 }
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const n3=(result)=>{
    
    n3.textContent=result;
}
// Iteration 5: Creating a randomise function to make the game functional
const getRandomOperator =()=>{
    const num1 = parseInt(n1.textContent);
    const num2 = parseInt(n2.textContent);
    const randomOperators = operators[Math.floor(Math.random()*operators.length)];
    let result=0;
    switch(randomOperators) {
        case '+' : result = num1+num2;
                    break;
        case '-': result = num1-num2;
                    break;
        case '*': result=num1*num2;
                    break;
        case '/': result=num1/num2;
                    break;
        case '%':result=num1%num2;
                    break;
    }
    return result;
 }
// Iteration 6: Making the Operators (button) functional
button.addEventListener('click', function(event) {
    const num1 = parseInt(n1.textContent);
    const num2 =parseInt(n2.textContent);
    const num3 =parseInt(n3.textContent);
      if (event.target === plus && ((num1+num2)===num3))
      {
         console.log('plus');
         updateScore();
       } 
       else if (event.target === minus && ((num1-num2)===num3) ) {
          console.log('minys');
          updateScore();
       }
       else if (event.target === mul && ((num1*num2)===num3)) {
          console.log('mul');
          updateScore();
       }
       else if (event.target === divide  && ((num1/num2)===num3) ) {
        console.log('divide');
        updateScore();
     }
     else if (event.target === modulus && ((num1%num2)===num3)) {
        console.log('modulus');
        updateScore();
     }
       else{
          
          window.location.href = 'gameover.html?score=' + score;
       }
       
       
      numbers();
      n3(getRandomOperator());

    
   });

// Iteration 7: Making Timer functional
const time=document.getElementById('timer')
let count = 20;
const timer = setInterval(function() {
  count--;
  time.textContent=count;  
  if(count==0)
  {
   window.location.href = 'gameover.html?score=' + score;
  }
},1000);

}