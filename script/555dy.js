var body = $response.body
  .replace(/<img id="([^"]+)" referrerpolicy="no-referrer" src="([^"]+)" width="([^"]+)">/g, '<img id="#" referrerpolicy="no-referrer" src="#" width="0%">');
$done({ body: body });
