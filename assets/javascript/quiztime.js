var quizTime = function quizTime()
{
    var count = 0;

    $(".clock").attr("style", "visibility: visible");
	$(".askhere").attr("style", "visibility: visible");
    
    var t = setTimeout("nextQ(count) ;", 5000);
    count = count + 1;
 	
}