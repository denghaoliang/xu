
$(function(){
	
	var anniu=$("#button")
	anniu.click(function(){
		$.ajax({
		url:"http://apis.juhe.cn/geo/",
		dataType:'jsonp',
		processData: false,
		type:'GET',
//		data:"lng="+jd+"&lat="+wd+"&type=2&dtype=&key=bfaae7122148a72c4541e8ddc2239e99",
		data:"lng="+jd+"&lat="+wd+"&type=1&dtype=&key=bfaae7122148a72c4541e8ddc2239e99",
		success:function(data){
			$("#guojia").html(data.result.ext.country)
	        $("#sheng").html(data.result.address)		
		}
    
		
		
		})
  })
	
	
	
	
	
	
})

