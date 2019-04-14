
        

        var itemButtons = document.querySelectorAll("#items");
        
        var terminalDisplay = document.querySelector("#terminalDisplay");
        
        var terminalItems = document.querySelector("#terminalItems"); 
        var li = document.createElement("li"); 
        
        
        var sendReceiptButton = document.getElementById("sendReceipt");
        
        var printReceiptButton = document.getElementById("printReceiptButton"); 
        
        var deleteListButton = document.getElementById("deleteListButton"); 
        
        
        var itemsObject = [ 
        {
            name: "Apple", price: 12 
        },
        {
            name: "Banana", price: 10 
        },
        {
            name: "Orange", price: 11 
        },
        {
            name: "Pear", price: 14 
        },
        {
            name: "Avocado", price: 20 
        },
        {
            name: "Tomato", price: 5 
        },
        {
            name: "Carrot", price: 7 
        },
        {
            name: "Onion", price: 8 
        },
        {
            name: "Bun", price: 15 
        },
        {
            name: "Donut", price: 17 
        },
        {
            name: "Cake", price: 25 
        },
        {
            name: "Candy", price: 19 
        }]; 
        
        var allReceipts = [];  
        
        var text2 = "test2"; 
        
        for (var i = 0; i < itemButtons.length; i++){ 
        
              itemButtons[i].addEventListener("click", getItem(i)); 
                console.log(i); 
         } 
        
        function getItem(i){ 
            return function(){ 
             console.log(i); 
             
        li.appendChild(document.createTextNode(itemsObject[i].name + " " + itemsObject[i].price + "$"));
        li.appendChild(document.createElement("hr")); 
        terminalDisplay.appendChild(li);      
          }; 
         } 
        
        
        
        sendReceiptButton.addEventListener("click", function(){ 
        
        
        if(li.innerHTML !== ""){
            allReceipts.push(li.innerHTML);
            console.log("List added");
            deleteItems();
            terminalItems.textContent = allReceipts.forEach(function(key){
               console.log(key);
            });
            
        }else{
            console.log("Can't add empty list to array");
        }
        
         });
        
        
        
        printReceiptButton.addEventListener("click", function(){
            
            console.log(allReceipts);
            
        }); 
        
        
        
        
        deleteListButton.addEventListener("click", function(){
        
        deleteItems(); 
            
        });
        
        
        
        
        
        function deleteItems(){
            li.innerHTML = "";   
        }
        
        //   $("#terminalDisplay ul").append('<li>' + itemsObject[i].name +  " " + itemsObject[i].price + "$" + '</li>'); 
        //   $("#terminalDisplay ul").append('<hr>'); 
                
                
   



  
/* 
When the button is clicked, it should add the value from an array with the same index. 
So if button[0] is clicked, then item[0] should be displayed. 
*/