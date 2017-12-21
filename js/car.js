
         	var storage=window.localStorage;
       		if(!storage.user){
       			alert("请先登陆！");
       			window.location.href="login.html";
       		}
       		$(document).ready(function(){
       				
       		    var userid=storage.user;
       		    var result=0;
       			$.ajax({
	       				type:"get",
	       				url:"http://datainfo.duapp.com/shopdata/getCar.php",
	       				data:{userID:userid},
	       				dataType:'jsonp',
	       				success:function(data){
	       					console.log(data);
	       					for (var i=0;i<data.length;i++) {
	       						$('#carlist').html($('#carlist').html()+'<li moneys="'+data[i].price+'"goods="'+data[i].goodsID+'"><input type="checkbox" class="focus"><img src='+data[i].goodsListImg+'><div class="content"><p class="names">'+data[i].goodsName+'</p><p class="price">'+'￥'+data[i].price+'<span id="dele">删除</span></p></div></li>');
	       					}
	       					$('span#dele').click(function(){
       							console.log('a');
//     							console.log($(this).parents()[2]);
       							var lis=$($(this).parents()[2]);
       							var goodsid=lis.attr('goods');
       							
       							console.log(goodsid);
       							lis.css("display","none");
       							
       							$.ajax({
       								type:"get",
       								url:"http://datainfo.duapp.com/shopdata/updatecar.php",
       								data:{userID:userid,goodsID:goodsid,number:0},
       								dataType:'json',
       								success:function(data){
       									console.log(data);
       								}
       							});
       						});
       						$('.focus').click(function(){
       							console.log('f');
       							var money=$(this).parent();
       							var moneys=parseInt($(money).attr('moneys'));
       							console.log(moneys);
       							if(this.checked == true){
       								console.log('b');
       								result+=moneys;
       								$('#caculate').html('合计￥'+result);
       							}
       							else{
       								console.log('d');
       								result-=moneys;
       								$('#caculate').html('合计￥'+result);
       							}
       						})
       						$('#back').click(function(){
       							window.location.href="index.html";
       						})
       						
       			     }
       			
       			})
       			$('#back').click(function(){
       				window.location.href="index.html";
       			})
       			
       		
       		});
       		