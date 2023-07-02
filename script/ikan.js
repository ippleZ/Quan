var body = $response.body
  .replace(/position\s*:\s*fixed\s*;\s*top\s*:\s*60px\s*;\s*right\s*:\s*0\s*;\s*z-index\s*:\s*999\s*;\s*width\s*:\s*250px/, 'position: fixed;top: 60px;right:0;z-index:999;width:0px')
  .replace(/position\s*:\s*absolute\s*;\s*right\s*:\s*0\s*;\s*top\s*:\s*0px\s*;\s*width\s*:\s*33px\s*;\s*height\s*:\s*33px\s*;\s*text-align\s*:\s*center/, 'position:absolute;right:0;top:0px;width:0px;height:0px;text-align:center')
  .replace(/src="\$\{tj_pic\}" width="100%"/, 'src="${tj_pic}" width="0%"')
  .replace(/class="marquee_outer"/, 'class="marquee_outer" style="display:none !important"')
  .replace(/class="stui-pannel stui-pannel-bg clearfix" style="margin-bottom\s*:\s*0"/, 'class="stui-pannel stui-pannel-bg clearfix" style="margin-bottom:0;display:none"')
  .replace(/159140/, '990929')
  .replace(/=== 0/, '=== 520');;
$done({ body });
