

var $list = $("#list");
var $buttons = $("span");
var index = 0;
var timer;
var isFinish =true; 


$("#prev").click(function(){
	if(isFinish){
		changePic(600);
		index -=1;
		changeBtn();
	}
	
});
$("#next").click(function(){
	if(isFinish){
		changePic(-600);
		index +=1;
		changeBtn();
	}
	
});

function changePic(offset){
	isFinish=false;

	
	$list.animate({left:"+="+offset+'px'},300,function(){
		var newLeft = parseInt($list.css("left")) ;

		if ( newLeft== -3600) {
		
		$list.css("left",-600);
		}else if ( newLeft == 0) {
			$list.css("left",-3000);
		}
	});
	isFinish=true;
}

 function changeBtn(){
          if (index == -1 ) {
            index = 4;
        }else if (index ==5) {
            index = 0;
        }

        $("[class='on']").removeClass("on");
        $buttons.eq(index).addClass("on");    
    }

$buttons.click(function(){
	var myIndex = parseInt($(this).attr("index"));
    var myOffset = -(myIndex - index)*600;
    
    if (myIndex != index) {
        changePic(myOffset);
        index = myIndex;
        changeBtn();
    }
});



function play(){
       
        timer = setInterval(function(){
          $("#next").trigger('click');
        },3000);

    }
function stop(){
    	
        clearInterval(timer);
    }
    $("#container").hover(stop, play);

    play();