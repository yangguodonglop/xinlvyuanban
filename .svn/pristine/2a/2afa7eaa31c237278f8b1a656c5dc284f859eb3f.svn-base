///var 
var nav = new Vue({
	el:'#nav',
	data:{
		navnum:0,
		navImg: ['/public/imgs/nav1.png','/public/imgs/nav2.png', '/public/imgs/nav3.png', '/public/imgs/nav4.png', '/public/imgs/nav5.png'],
		imgActive: ['/public/imgs/nav1on.png','/public/imgs/nav2on.png', '/public/imgs/nav3on.png', '/public/imgs/nav4on.png', '/public/imgs/nav5on.png'],
		navName:['首页','景点门票','发现','积分商城','我的'],
		navUrl:['/index.html','/ticket/index.html','/find/index.html','/integral/index.html','/user/index.html']
	},
	created:function(){
		for(var key in this.navUrl){
		    if(this.navUrl[key]==window.location.pathname){
		    	this.navnum = key;
		    }
		}
		this.navImg[this.navnum] = this.imgActive[this.navnum];
	},
	methods:{
		tonavlink:function(link){
			window.location.href = link;
		},
	}
});