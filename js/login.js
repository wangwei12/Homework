	
    	$(document).ready(function(){
    		
    	 $('#goto').click(function(){
    		window.location.href='register.html';
    	 });
    	
		 $('#repass').blur(function(){
    	    var password=$('#password').val();
    	    var repass=$('#repass').val();
    		console.log('a');
    		console.log(password);
    		if(password != repass) {
    			console.log('b');
    			$('#info').html('<span style="color: red;">两次输入密码不一致</span>');
    		}
    		
          });
          $('#repass').focus(function(){
          	$('#info').html('');
          })
          $('#userid').focus(function(){
          	console.log('sss');
          	$('#user').html('');
          })
	    });
	  
function logs(){
			    var userid=$('#userid').val();
    			var password=$('#password').val();
    	        
    	        console.log('log');
    			$.ajax({
	    			type:"get",
	    			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
	    			data:{status:'login',userID:userid,password:password},
	    			dataType:'json',
	    			success:function(aa){
	    				if(aa == 2){
	    					$('#user').html('<span style="color:red;">用户名与密码不符</span>');
	    				}
	    				if(aa == 0){
	    					$('#user').html('<span style="color:red;">用户名不存在</span>');
	    				}else{
	    					var storage=window.localStorage;
	    					storage.user=userid;
	    					storage.passw=password;
	    					window.location.href='index.html';
	    					
	    				}
	    				
				       }
	    		});
    	}