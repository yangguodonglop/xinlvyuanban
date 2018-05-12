//判断用户是否登录
window.onload=function User(){
	var token = localStorage.getItem('token');
	var expired_at = localStorage.getItem('expired_at');
	var refresh_expired_at = localStorage.getItem('refresh_expired_at');
	var myDate = new Date();
	if(Date.parse(myDate) < Date.parse(refresh_expired_at)){
		if(Date.parse(myDate)-60000 > Date.parse(expired_at)){
			Vue.http.options.emulateJSON = true;
			Vue.http.post(URL+'/token/refresh',{token:token}).then(function(response){
				localStorage.token = response.body.data.token;//token
				localStorage.expired_at = response.body.data.expired_at;//过期时间
				localStorage.refresh_expired_at = response.body.data.refresh_expired_at;//刷新时间
				User();
			});
		}
	}
}

