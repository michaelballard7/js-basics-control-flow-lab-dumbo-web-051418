// Write your code in this file!

function scuberGreetingForFeet(num){
  if (num <= 400){
    return "This one is on me!"
  } else if(400<num  && num < 2500) {
    return 'I will gladly take your thirty bucks.'    
  }else{
    return 'No can do.'
  }

}


function ternaryCheckCity(city){
  city === 'NYC' ? return "Ok, sounds good." : return "No go"
  
}