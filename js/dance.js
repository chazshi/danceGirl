/*
	每张110*128
	8*10张
*/
window.onload = function(){
	var danceTime = 0;
	var danceStyle = 0;
	var danceStatus = false;
	var danceInterval;

	$(".change").click(function(){		//next
		if(danceStatus){
			if(danceStyle <= 1152){
				danceStyle += 128;
			} else{
				danceStyle = 0;
			}
			clearInterval(danceInterval);
			danceInterval = setInterval(dance,80);//setInterval(dance,$("#danceSpeed").val());
		} else{

		}
	});

	$(".status").click(function(){		//dance
		danceStatus = !danceStatus;
		if(danceStatus){
			danceInterval = setInterval(dance,80);//setInterval(dance,$("#danceSpeed").val());
			$(".status").text("stop");
			$(".status").css("background","#0f0");
		} else{
			clearInterval(danceInterval);
			$(".status").text("dance");
			$(".status").css("background","#000");
		}
	});

	function dance(){				
		if(danceTime <= 770){
			danceTime += 110;
		} else{
			danceTime = 0;
		}
		$(".dance").css("background-position",danceTime+"px "+danceStyle+"px");
	};

	var obj = $('.danceCtrl')[0];//document.getElementById('dance');//这里需要的是dom对象而不是jquery对象
	rDrag.init(obj);
}
// $(function(){
	
// });

var rDrag = {
	
	o:null,
	
	init:function(o){
		o.onmousedown = this.start;
	},
	start:function(e){
		var o;
		e = rDrag.fixEvent(e);
               e.preventDefault && e.preventDefault();
               rDrag.o = o = this;
		o.x = e.clientX - rDrag.o.offsetLeft;
                o.y = e.clientY - rDrag.o.offsetTop;
		document.onmousemove = rDrag.move;
		document.onmouseup = rDrag.end;
	},
	move:function(e){
		e = rDrag.fixEvent(e);
		var oLeft,oTop;
		oLeft = e.clientX - rDrag.o.x;
		oTop = e.clientY - rDrag.o.y;
		rDrag.o.style.left = oLeft + 'px';
		rDrag.o.style.top = oTop + 'px';
	},
	end:function(e){
		e = rDrag.fixEvent(e);
		rDrag.o = document.onmousemove = document.onmouseup = null;
	},
    fixEvent: function(e){
        if (!e) {
            e = window.event;
            e.target = e.srcElement;
            e.layerX = e.offsetX;
            e.layerY = e.offsetY;
        }
        return e;
    }
}