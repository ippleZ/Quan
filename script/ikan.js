var body = $response.body
  .replace(/position\s*:\s*fixed\s*;\s*top\s*:\s*60px\s*;\s*right\s*:\s*0\s*;\s*z-index\s*:\s*999\s*;\s*width\s*:\s*250px/, 'position: fixed;top: 60px;right:0;z-index:999;width:0px')
  .replace(/position\s*:\s*absolute\s*;\s*right\s*:\s*0\s*;\s*top\s*:\s*0px\s*;\s*width\s*:\s*33px\s*;\s*height\s*:\s*33px\s*;\s*text-align\s*:\s*center/, 'position:absolute;right:0;top:0px;width:0px;height:0px;text-align:center')
  .replace(/src="https:\/\/sp\.fp\.ps\.netease\.com\/.*"\s*width="100%"/, 'width="0%"')
  .replace(/src="\$\{tj_pic\}" width="100%"/g, 'src="${tj_pic}" width="0%"')
  .replace(/class="stui-pannel stui-pannel-bg clearfix" style="margin-bottom\s*:\s*0"/g, 'class="stui-pannel stui-pannel-bg clearfix" style="margin-bottom:0;display:none"');
$done({ body });
