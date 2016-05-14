// JavaScript Document
function startMove(obj,iTarget,attr,fn){
	clearInterval(obj.timer)
		obj.timer = setInterval(function(){
		//1、取当前的值
		var icur = 0;
		if(attr == 'opacity'){
			var icur = parseFloat(getStyle(obj,attr))*100; 
			var speed = (iTarget - icur);
		
		}else{
			var icur = parseInt(getStyle(obj,attr));
			
		}	 
		//2、计算速度
		var speed = (iTarget - icur)/8;
		speed = speed > 0?Math.ceil(speed):Math.floor(speed);
		//3、检测停止
		if(icur == iTarget){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}else{
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';
				obj.style.opacity = (icur+speed)/100;
			}else{
				obj.style[attr] = icur + speed + 'px' //有利于传参
			}

		}
		
	},30)
}

function getStyle(obj,attr){
	if(obj.currentStyle){//ie
		return obj.currentStyle[attr];
	}else{//firefox
		return getComputedStyle(obj,false)[attr];
	}
}