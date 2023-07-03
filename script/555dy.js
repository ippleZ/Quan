var regex = /<img id="([^"]+)" referrerpolicy="no-referrer" src="([^"]+)" width="([^"]+)">/g;
var body = $response.body.replace(regex, '<img id="#" referrerpolicy="no-referrer" src="#" width="0%">');
$done({ body: body });
