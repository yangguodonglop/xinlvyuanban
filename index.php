<?php
        if(strpos($_SERVER['HTTP_USER_AGENT'],'MicroMessenger') !== false ){

            $app_id = 'wx5005811e2b6b94dc'; //公众号appid
            $app_secret = 'fa412b8ded33e37100843bb409f11ba6'; //公众号app_secret
            $redirect_uri = 'http://test1.xinlv123.com/index.html'; //授权之后跳转地址

            $redirect_uri = urlencode($redirect_uri);
            $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={$app_id}&redirect_uri={$redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
            echo "<script>window.location.href='".$url."'</script>";
            exit;
        }else{
            $url = "http://test1.xinlv123.com/index.html";
            echo "<script>window.location.href='".$url."'</script>";
        }
