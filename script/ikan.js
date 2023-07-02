var body = $response.body
  .replace(/position\s*:\s*fixed\s*;\s*top\s*:\s*60px\s*;\s*right\s*:\s*0\s*;\s*z-index\s*:\s*999\s*;\s*width\s*:\s*250px/, 'position: fixed;top: 60px;right:0;z-index:999;width:0px');
$done({ body });
