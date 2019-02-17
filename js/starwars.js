
var byline = document.getElementById('byline');    
var bylineText = byline.innerHTML;                                    
var bylineArr = bylineText.split('');         
byline.innerHTML = '';        

var span;                   
var letter;

for(i=0;i<bylineArr.length;i++){                                 
  span = document.createElement("span");                  
  letter = document.createTextNode(bylineArr[i]);   
  if(bylineArr[i] == ' ') {  

    byline.appendChild(letter);                 
  } else {
        span.appendChild(letter);                       
    byline.appendChild(span);                   
  }
}