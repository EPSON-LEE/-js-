// JavaScript Document// JavaScript Document
//startMove(obj,{attr1:itarget1, attr2:itarget2},fn)
function startMove2(obj, json, fn){
	var flag = true;//假设到达目标值
	clearInterval(obj.timer)
		obj.timer = setInterval(function(){
		for(var attr in json){
		//1、取当前的值
			var icur = 0;
			if(attr == 'opacity'){
				var icur = parseFloat(getStyle(obj,attr))*100; 
				var speed = (json[attr] - icur);
			
			}else{
				var icur = parseInt(getStyle(obj,attr));
				
			}	 
			//2、计算速度
			var speed = (json[attr] - icur)/8;
			speed = speed > 0?Math.ceil(speed):Math.floor(speed);
			//3、检测停止
			if(icur != json[attr]){
				flag = false;
			}
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';
				obj.style.opacity = (icur+speed)/100;
			}else{
				obj.style[attr] = icur + speed + 'px' //有利于传参
			}
			if(flag == true){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
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