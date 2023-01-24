
document.querySelector(".advice-btn").addEventListener("click", function(){
	
	fetch('https://api.adviceslip.com/advice').then(function (response){
		return response.json();
	}).then(function (obj){
		
		document.querySelector(".advice-quote").innerHTML = obj.slip.advice;
		document.querySelector(".advice-id-number").innerHTML = obj.slip.id;
		
		
	});

	
});