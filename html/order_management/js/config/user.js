//判断用户是否登录

function User(){
	var token = localStorage.getItem('token');
	var expired_at = localStorage.getItem('expired_at');
	var refresh_expired_at = localStorage.getItem('refresh_expired_at');
	
	var userdata = {
		"status": 1,
		"data": {
			"id": 1,
			"name": 'Xulei',
			"phone": "13476510184",
			"email": "765841378@qq.com",
			"integral": 2696,
			"nickname": null,//第三方昵称
			"sign": '世界那么大，那么大',//个性签名
			"avatar_url": null//头像
			},
		"msg": ""
		};
	return userdata;
}
