# js demo
simple demo 

demo1 速度动画
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>速度动画</title>
<style type="text/css">
*{margin:0;padding:0;}
#div1{
	width:200px;
	height:200px;
	left:-200px;
	background-color:#00FF00;
	position:relative;
}
#Tag{
	width:50px;
	height:50px;
	background-color:#FF0000;
	position:absolute;
	left:200px;
	top:80px
}
</style>
<script language="javascript">
window.onload = function(){
	var oDiv = document.getElementById('div1');
	oDiv.onmouseover = function(){
		startMove(10);
	}
	
	oDiv.onmouseout  = function(){
		startMove(-200);
	}
}
var timer = null;//timer 是定时器的ID
function startMove(iTarget){
	clearInterval(timer);
	var oDiv = document.getElementById('div1');
	
	timer = setInterval(function(){
	
		if(oDiv.offsetLeft > iTarget){
			speed = -10;
		}
		else{
			speed = 10;
		}
		
		if(oDiv.offsetLeft == iTarget){
			clearInterval(timer);
		}
		else{
			oDiv.style.left = oDiv.offsetLeft+ speed + 'px';
		}
		
	},30)
}

</script>
</head>

<body>
<div id="div1">	
	<span id="Tag">分享</span>
</div>


</body>
</html>
