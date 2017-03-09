window.onload = function(){
    var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName("span"); 
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 0;
    var timer2;
    var myBoolen = true; 

/*换页*/
    function animate(offset) {
        myBoolen = false;
        var newleft = parseInt(list.style.left) +offset;
        var time = 300;
        var interval = 10;
        var speed = offset/(time/interval);
        
        
        // var go = function(){
        //     if ((speed>0&&newleft>parseInt(list.style.left))||(speed<0&&newleft<parseInt(list.style.left))) {
        //         list.style.left = parseInt(list.style.left)+speed+"px";
                
        //     }else { 
        //         if (newleft === 0) {

        //             list.style.left = -3000+"px";
        //             }
        //          if (newleft == -3600) {

        //              list.style.left = -600+"px";
        //         }
               

        //     }

        // }; 
       
        // go();
         var timer = setInterval(function(){
            if (parseInt(list.style.left)==newleft) {
                clearInterval(timer);
                if (parseInt(list.style.left)==0) {
                   list.style.left = -3000+"px";
                }
                if (parseInt(list.style.left)==-3600) {
                    list.style.left = -600+"px";
                }

                myBoolen = true;
            }else{
                
                list.style.left = parseInt(list.style.left) +speed +"px";
            }
                        
        },interval);


        
    }

/*改变按钮*/
    function showBtn(){
          if (index == -1 ) {
            index = 4;
        }else if (index ==5) {
            index = 0;
        }

        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className=="on") {   
            buttons[i].className = "";
            break;
            }
        }
        buttons[index].className = "on";    
    }


/*自动换页*/
    function play(){
        timer2 = null;
        timer2 = setInterval(function(){
           next.onclick();
        },2000);

    }
    function stop(){
        clearInterval(timer2);
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play();


    prev.onclick = function(){
       
        if (myBoolen) {
            index -=1;
            animate(600);
            showBtn();
        }
        
        
    } ;
    next.onclick = function(){
        
        
        if (myBoolen) {
            index +=1;
            animate(-600);
            showBtn();
       
        }
       
    };


    for (var i = 0; i < buttons.length; i++) {

        buttons[i].onclick = function(){

            var myIndex = parseInt(this.getAttribute("index"));
            var myOffset = -(myIndex - index)*600;
            
            if (myIndex != index) {
                animate(myOffset);
                index = myIndex;
                showBtn();
            }

        };

    }

};