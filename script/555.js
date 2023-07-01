var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.gitmirror.com/ippleZ/Quan/master/script/555.css" type="text/css">');
$done({ body });
