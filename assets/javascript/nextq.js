var nextQ = function nextQuestion(num)
{
	var s = 0;
	getQues = quiz[num];
	console.log(getQues);
	
	$("#ansthis").text(getQues.question);
	
	var u = setInterval("s++; document.getElementById('txt').innerHTML = s;if(this.s==5) {s=0;};", 1000);
		
	} 

