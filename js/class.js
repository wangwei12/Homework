$(document).ready(function(){
        		var sercon=window.location.hash.slice(1);
        		var encodeval=encodeURI(sercon);
        			console.log(encodeval);
        			$.ajax({
        				type:"get",
        				url:'http://datainfo.duapp.com/shopdata/selectGoodes.php',
        				data:{selectText:encodeval,pageCode:0,linenumber:10},
        				dataType:'jsonp',
        				success:function(data){
//							console.log(data);
							if(data==0){
								$('#shows').html('未找到符合相应商品！')
							}
							for (var i=0;i<data.length;i++) {
								$('#shows').html($('#shows').html()+'<li goods='+data[i].goodsID+'><img src='+data[i].goodsListImg+'><p class="titles">'+data[i].goodsName.slice(0,11)+'...' +'</p><p class="price">'+'￥'+'<span class="moneys">'+data[i].price+'.00'+'</span></p></li>')
							}
							$('#shows>li').click(function(){
				        		console.log('a');
				        		var goods=$(this).attr("goods");
				        		console.log(goods);
				      			window.location.href="detail.html#"+goods;
        					})
        				}

        			})
        		
        		$('#return').click(function(){
	        		window.location.href="index.html";
	        		
        	    })
        	})