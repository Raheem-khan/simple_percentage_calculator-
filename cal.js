var nameField1 = document.getElementById('nameField1');
var nameField2 = document.getElementById('nameField2');
var resultfield= document.getElementById('resultfield');
var form =document.getElementById('XpercentageOfY');


	form.addEventListener('submit', function(event){
		if(!nameField1.value || !nameField2.value){
				alert ("Please enter values on the field");
			
		}else{

		var x = parseFloat(nameField1.value);
		var y = parseFloat(nameField2.value);
			var result=x/y;
			var perscent=result*100;
			//alert(perscent);
			resultfield.innerText = "Answer:" + perscent + "%";
			event.preventDefault();
		}
	
	

		
		
	});