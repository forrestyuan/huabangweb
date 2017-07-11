var imgArr=["img/rainbow.jpg","img/desert.jpg","img/bg.jpg","img/bg2.jpg"];
var c=imgArr.length;
window.onload=function(){
	/*
	 * 返回顶部 
	 */
	setInterval(function(){
		var totopshow=document.getElementById("gotop");
		var top_nav=document.getElementById('navtop');
		var ullrt=document.getElementById('ul-lrt');
		var offsetHeight=document.body.scrollTop;
		if(offsetHeight>450){
			totopshow.style.display="block";
			top_nav.style.backgroundColor="black";
			top_nav.style.borderBottom="solid 1px #ccc";
		}
		else{
			totopshow.style.display="none";
			top_nav.style.backgroundColor="rgba(255,255,255,0)";
			top_nav.style.borderBottom="none";
		}
	},100);
	setInterval(changebackround,4000);
	
} 
/*
 * 改变背景
 */
function changebackround(){
    var bgc=document.getElementById('changeimg');
    c--;
    if(c==-1){c=imgArr.length;}
    else{
    bgc.src=imgArr[c];
    }
}
/*
 * 添加内容
 */
function addInfomation(){
	/*<div class="content"><a href="#"><img src="img/sec6.jpg"></a></div>添加的div结构*/
	for(var i=0;i<20;i++)
	{
		var parent=document.getElementById('addinfo');
		var oDiv=document.createElement('div');
		oDiv.setAttribute('class','content');
		oDiv.setAttribute('id','newdiv');
		oDiv.innerHTML="<div></div>";
		
		var img=document.createElement('img')
		img.src="img/sec1.jpg";
		img.innerHTML="<img>";
		var a=document.createElement('a');
		a.setAttribute('href','#');
		a.setAttribute('id','newa');
		a.innerHTML="<a></a>";

		a.appendChild(img);
		oDiv.appendChild(a);
		parent.appendChild(oDiv);
	}
	
}
function showmoive(){
		document.getElementById('playmoive').style.display="none"
		document.getElementById('moive').style.display="block";
	}
