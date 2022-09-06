/*-----------brightness---------------*/
		let icon = document.getElementById("icon");

		icon.onclick = function() {
			document.body.classList.toggle("black-theme");
		}

		/*---------------newsfeeds--------------*/

	    let para = document.querySelectorAll(".contant");
      
          para.forEach(paragraphs => {
	    	paragraphs.addEventListener('click',() => {
	    		paragraphs.classList.toggle('open');
	    	})
	    })
          
/*-------------------------navbar---------------------------*/

        
        let menu = document.getElementById("bar-menu")
        let xmark = document.getElementById("xmark")
        let link=  document.getElementById("nav-link")
       
       menu.onclick =function(){
       	    link.style.left = "0" ;
       	    menu.style.display="none";
       	    xmark.style.display="block";
       }

         xmark.onclick =function(){
       	    
       	    menu.style.display="block";
       	    xmark.style.display="none";
       	     link.style.left = "-250px" ;
       }




 /*-----------------------reels------------------------*/

        let reel = document.getElementById("overlay-contant")
        let back = document.getElementById("backVideo")
        let run =  document.getElementById("play")
        let stop =  document.getElementById("pause")

        reel.onclick =function(){
             back.style.display = "block";
             reel.style.display ="none";
             run.style.display ="block";
        }


        run.onclick =function () {
        	

             if(back.paused){
             	back.play();
             		stop.style.display ="block";

             }
             else{
             	back.pause();
             

             }
        }
console.log(reel)
