 let home = document.getElementById("homescore")
 let guest = document.getElementById("guestscore")

 let count = 0
 let count2 = 0
 
 
 function plus1(){
    count += 1
    home.textContent = count
    console.log(count)
 }
 
 function plus2(){
    count += 2 
    home.textContent = count
    console.log(count)
 }
 
 function plus3(){
    count += 3
    home.textContent = count
    console.log(count)
 }
 
 
  function plus1g(){
     count2 += 1
     guest.textContent = count2
     console.log(count2)
  }
 
  function plus2g(){
     count2 += 2
     guest.textContent = count2
     console.log(count2)
  }
  
  function plus3g(){
    count2 += 3
    guest.textContent = count2
    console.log(count2)
  }