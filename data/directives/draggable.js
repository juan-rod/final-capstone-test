app.directive("draggable", function($document) {
    return {
        restrict: 'EA',
        scope: {},
        link: function(scope,element,attr){
        	var playheadX = 0, mouseX = 0, x = 0;
        	var mouseUpX;
        	var onplayhead = false;

        	element.css({
				width: "18px",
				height: "18px",
				borderRadius: "50%",
				marginTop: "1px",
				background: "rgba(0, 0, 0,1)",
				position: 'relative',
				cursor: 'pointer'
       			//display: 'block'
			});
        	
        	element.on("mousedown", function(e){
        		e.preventDefault();
        		onplayhead = true;

        		if (mouseUpX === null){
        			playheadX = e.screenX - x;
        		} else if (mouseUpX >= 0){
        			playheadX = e.screenX - mouseX;
        		}

        		console.log("playheadX",playheadX);
        		console.log("onplayhead",onplayhead);
        		
        		$document.on('mousemove', mousemove);
        		$document.on('mouseup', mouseup);
        		//return false;

        	});


        	function mousemove(e){
        		mouseX = e.screenX - playheadX;
      
        		element.css({
         			left:  mouseX + 'px'
        		});
        	}
        		
        

        	function mouseup(e){
        		mouseUpX = e.screenX;
        		if (onplayhead === true){
        			$document.off('mousemove', mousemove);
        			$document.off('mouseup', mouseup);
        		}else {
        			$document.on('mousemove',mousemove);
        		}
        		onplayhead = false;
        		console.log('mouseUpX', mouseUpX);
        		
        	}
        		

        }
        
       
    };
});

