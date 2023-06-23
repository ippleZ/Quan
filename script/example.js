var body = $response.body
  .replace(/<head>/, '<head><link rel="stylesheet" href="https://example/example.css" type="text/css">');
$done({ body });
