var modifiedBody = $response.body
	.replace(/(position:absolute;right:0;top:0px;width:)\d+px(;height:)\d+px(;text-align:center)/g, "$10px$20px$30px")
	.replace(/(position: fixed;top: 60px;right:0;z-index:999;width:)\d+px/g, "$10px")
	.replace(/<head>/, '<head><style>img#hth,img#hth616,div[style*="line-height: 21px"],div#layui-layer1,div#layui-layer-shade1,div.marquee_outer,img#ad_img,img#buka888,iframe[id^=buffer],span.more.text-muted.pull-right,ul.more-btn,a[target^="_blank"],div.jq-toast-wrap,img#tj,img[src*=".gif"]{display:none!important} </style>')
	.replace(/'159140'/g, "'259140'")
	.replace(/\<div  class=\"item stui-banner__item[\s\S]*html[\s\S]*?\<\/div\>/g, "")
	.replace(/img id="ik\d+"/g, 'img id="ippleZ"')
$done({body: modifiedBody});
