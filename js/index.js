window.onload=function(){
	
	var pic1 = document.getElementsByClassName("pic1")[0];
	var pic2 = document.getElementsByClassName("pic2")[0];
	
	pic1.onmouseover = function(){
		pic2.style.width = "100%";
		pic2.style.opacity = "0.6";
		pic2.style.boxShadow =" inset -3px -7px 17px -1px rgba(0,0,0,0.56)";
	};
	
	pic1.onmouseout = function(){
		pic2.style.width = "40px";
		pic2.style.opacity = "0";
		pic2.style.boxShadow ="initial";
	}
	
};