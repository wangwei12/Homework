
      
    
	  $(document).ready(function(){
		 $('#repass').blur(function(){
    	    var password=$('#password').val();
    	    var repass=$('#repass').val();
    		//console.log('a');
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
          	//console.log('sss');
          	$('#user').html('');
          })
	  });
	  
    	function regs(){
    			var password=$('#password').val();
    	        var userid=$('#userid').val();
    			$.ajax({
	    			type:"get",
	    			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
	    			data:{status:'register',userID:userid,password:password},
	    			dataType:'json',
	    			success:function(a){
	    				console.log(a);
	    				if(a == 0){$('#user').html('<span style="color: red;">用户名重名</span>');}
	    				if(a == 1){$('#info').html('<span style="color: green;">注册成功</span>');window.location.href='login.html';}
	    		    }
    			});
    	    }
		
    	
