 
    		$(document).ready(function(){
    			
    			$.ajax({
    			type:"get",
    			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
    			data:'jsonp',
    			success:function(data){
    				var data1=data.slice(9,-1);
    				var data2=JSON.parse(data1);
    				console.log(data2[0]);
    				//console.log( data2[0].imgsUrl.slice(1,89));
    				//$('.ui-block-a').html('<img src='+data2[0].imgsUrl.slice(1,89)+' />'+
    				//'<p>'+data2[0].goodsName.slice(0,6)+'</p>');
    				for (var i=0;i<data2.length;i++) {
    						$('#goodul').html($('#goodul').html()+'<li goods='+data2[i].goodsID+'><img id="goodsimg" src='+data2[i].goodsListImg
    						+'><p class="titles">'+data2[i].goodsName.slice(0,11)+'...' +'</p><p class="price">'+'￥'+'<span class="moneys">'+data2[i].price+'.00'+'</span></p></li>');
    					
    				}
    				
    				$('#goodul>li').click(function(){
    			        var goodsid=this.getAttribute('goods');
	 					console.log(goodsid);
	 					window.location.href='detail.html#'+goodsid;
 				    }); 				    
    			}
    		    });
 				$.ajax({
						type:"get",
						url:"http://datainfo.duapp.com/shopdata/getclass.php",
						dataType:'json',
						success:function(data){
							console.log(data);
							for (var i=0;i<data.length;i++) {
								$('#selects').html($('#selects').html()+'<option id="options"><a>'+data[i].className+'</a></option>');
							}
							$('#selects').change(function(){
								console.log('a');
								var name=$(this).val();
								window.location.href="class.html#"+name;
							})
							
							
						}
					});
 				$('#carhref').click(function(){
 					window.location.href='car.html';
 				})
 				$('#settings').click(function(){
 					window.location.href="settings.html";
 				})
 				$('#find').blur(function(){
        			console.log('a');
        			var val=$(this).val();
        			var encodeval=encodeURI(val);
        			console.log(encodeval);
        			$.ajax({
        				type:"get",
        				url:'http://datainfo.duapp.com/shopdata/selectGoodes.php',
        				data:{selectText:encodeval,pageCode:0,linenumber:10},
        				dataType:'jsonp',
        				success:function(data){
							console.log(data);
        				}

        			})
        			window.location.href="findetail.html"+'#'+val;
        	    })
 				
    		});
    	   
