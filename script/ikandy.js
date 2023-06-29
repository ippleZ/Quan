var modifiedBody = $response.body
	.replace(/(position:absolute;right:0;top:0px;width:)\d+px(;height:)\d+px(;text-align:center)/g, "$10px$20px$30px")
	.replace(/(position: fixed;top: 60px;right:0;z-index:999;width:)\d+px/g, "$10px")
$done({body: modifiedBody});
