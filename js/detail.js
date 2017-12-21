var goodsId=window.location.hash.slice(1);
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/getGoods.php",
				async:true,
				data:{goodsID:goodsId},
				dataType:'jsonp',
				success:function(data){
//					var data1=data.slice(9,-1);
//  				var data2=JSON.parse(data1);
//  				var imgs=JSON.parse(data2[0].imgsUrl);
					//处理获得的数据
//				    console.log( data[0].detail);
				    var imgs=JSON.parse(data[0].imgsUrl);
//  				console.log(data[0].goodsName);	

    				for (var i=0;i<imgs.length;i++) {
    					$('.swiper-wrapper').html($('.swiper-wrapper')
    					.html()+'<div class=\"swiper-slide\"><img src='+imgs[i]+'></div>');
    				}
    				$('#titles').html(''+data[0].goodsName+'');
    				$('#yang').html('￥'+data[0].price+'');
    				$('#count').html(data[0].discount+'折钜惠!');
    				//轮播图js逻辑
    			    var swiper=new Swiper('.swiper-container',{
			        		autoplay:3000,
				    	    loop:true,
				    	    pagination:'.swiper-pagination',
				    	    prevButton:'.swiper-button-prev',
			     			nextButton:'.swiper-button-next'
        	        });
				}
			});
			$(document).ready(function(){
				$('#focus').click(function(){
					$(this).unbind('click');
					console.log('a');
					alert('关注成功');
					$(this).css('background-color','red');
			    });
			    $('.cur').click(function(){
			    	$('.swiper-container').show();
					$('#titles').show();
					$('#yang').show();
					$('#infone').show();
					$('#count').css('display','inline');
					$('.sale-service').hide();
					$('p#deta').hide();
					$('	')
			    })
				$('.argus').click(function(){
				
					$('.swiper-container').hide();
					$('#titles').hide();
					$('#yang').hide();
					$('#infone').hide();
					$('#count').hide();
					$('.sale-service').hide();
					$.ajax({
						type:"get",
						url:"http://datainfo.duapp.com/shopdata/getGoods.php",
						async:true,
						data:{goodsID:goodsId},
						dataType:'jsonp',
						success:function(data){
							var details=data[0].detail;
							var spdet=details.split('。');
							
							console.log(details);
						    for (var i=0;i<spdet.length;i++) {
						    	$('.wrappe').after('<p id="deta">'+spdet[i]+'</p>')
						    }
							
							
							
							
//							var details=JSON.parse(data[0].detail);
						}
					});
				})
				$('.cover').bind('click',function(){
					
					$('.swiper-container').hide();
					$('#titles').hide();
					$('#yang').hide();
					$('#infone').hide();
					$('#count').hide();
					$('p#deta').hide();
					
					$('.wrappe').after(`<div class="sale-service">
					1、易购价：易购价为商品的销售价，是您最终决定是否购买商品的依据。
2、划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
3、折扣：如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。
4、异常问题：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。
					</div>`);

				});
					
				$('#add').click(function(){
					if(!window.localStorage){
						alert("浏览器不支持lcoalStorage")
					}else{
						var storage=window.localStorage;
						var userid=storage.user;
						$.ajax({
							type:"get",
							url:"http://datainfo.duapp.com/shopdata/updatecar.php",
							data:{userID:userid,goodsID:goodsId,number:1},
							dataType:'json',
							success:function(data){
								console.log(data); 
								
							}
						});
						alert('加入成功，快去结算吧');
					}
	
				});
				$('#back').click(function(){
       				window.location.href="index.html";
       			})
			})
			
