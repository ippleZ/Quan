var modifiedBody = $response.body
	.replace('<img id="tj" onclick="window.open(\'/topicdetail-9\')" src="${tj_pic}" width="100%" >', '<img id="tj" onclick="window.open(\'/topicdetail-9\')" src="${tj_pic}" width="0%" >')
	.replace('<div class="marquee_outer">', '<div class="marquee_outer" style="display: none">')
	.replace('<div style="position: fixed;top: 60px;right:0;z-index:999;width:250px">', '<div style="position: fixed;top: 60px;right:0;z-index:999;width:0px">')
	.replace('position:absolute;right:0;top:0px;width:33px;height:33px;text-align:center', 'position:absolute;right:0;top:0px;width:0px;height:0px;text-align:center')
	.replace(/(<img id="[^"]*" url="" onclick="window\.open\(this\.url\)" src="[^"]*" width=")100%(">)/g, '$10.01px$2');
$done({ body: modifiedBody });
