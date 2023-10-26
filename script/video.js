const url = $request.url;
let body = $response.body;

if (url.includes("waipian")) {
  body = body.replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.gitmirror.com/ippleZ/Quan/master/style/waipian.css" type="text/css">');
} else if (url.includes("bdys")) {
  body = body.replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.gitmirror.com/ippleZ/Quan/master/style/bdys.css" type="text/css">');
}

$done({ body });
