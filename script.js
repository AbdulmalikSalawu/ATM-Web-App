    var balance = 1000
      var mySong = new Audio("songname")

      function withdraw(){
         var amount = userAmount.value
         balance = balance-amount
         if(amount<=balance && amount>0){
            alert ("Withdrawal successful and your balance is " + balance)
         }
         else if (amount>balance){
            alert ("Insufficient Funds!")
         }
         else if ( amount<balance){
            alert("invalid")
         }
         else if (amount==""){
            alert ("kindly enter an amount")
         }
      }
      function deposit(){
         var amount = Number(userAmount.value)
         balance = balance + amount
         if(amount>0){

           alert ("Deposit successful and your balance is "+ balance)
         }
         else if(amount<0){
            alert("invalid")
         }
      }

      function checkBalance(){
         disp.innerText = "Balance is $" + balance
        // disp.innerHTML = "<h1> balance is" + balance + "</h1>"
         disp.style.color = "white"
         //disp.style.backgroundColor = "red"
         mysong.play()
      }
      function clearAll(){
         disp.innerText = "Your Balance"
         userAmount.value = ""
      }