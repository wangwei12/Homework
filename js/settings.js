
        	var storage=window.localStorage;
       		if(!storage.user){
       			window.location.href="login.html";
       		}
        	$(document).ready(function(){
				var storage=window.localStorage;
				var user=storage.getItem('user');
				$('#user').html("用户名: "+user);
        	})
        	$('#out').click(function(){
        		window.location.href="login.html";
        		var storage=window.localStorage;
        	    storage.clear();
        	})
        	$('#back').click(function(){
       			window.location.href="index.html";
       		})
