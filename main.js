function calculateGrade(){

var sub1 = Number(document.getElementById("inputMathgrade").value);
var sub2 = Number(document.getElementById("inputEnggrade").value);
var sub3 = Number(document.getElementById("inputScigrade").value);



let AVE=((sub1+sub2+sub3)/ 3).toFixed(2);



 if (AVE >= 70 && AVE < 74.99 ){
	window.alert("You have the worst grades EVER. The poorest of performances!");
	}

else if (AVE >= 75 && AVE < 79.99 ){ 
	 window.alert("You need improvement, STUDY!");
        }

else if (AVE >= 80 && AVE < 86.99){
	 window.alert("Hmm.. satisfactory.. not as good as me though >:)");
        }

else if (AVE >= 87 && AVE < 93.99){
	 window.alert("Nice, above satisfactory.. you are getting there.");
        }

else if (AVE > 94 && AVE <= 100.99){
	 window.alert("Excellent! you should work for me as my assistant!");
        }

else {
	window.alert("Give me your grades properly, it isn't calculable.");
	}
}
	
