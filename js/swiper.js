var storage=window.localStorage;
    			if(storage.status=="12"){
    				window.location.href="index.html";
    			}

var swiper=new Swiper('.swiper-container',{
        		pagination:'.swiper-pagination',
        		prevButton:'.swiper-button-prev',
     			nextButton:'.swiper-button-next',
     			paginationClickable :true,
     			effect:'coverflow'
        	});
        	


        	$('#login').click(function(){
        		var storage=window.localStorage;
        		storage.status="12";
        		window.location.href='login.html';
        		
        	})