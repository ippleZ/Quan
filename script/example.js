let ele = '<head>';
let eleReplace = '<head><link rel="stylesheet" href=".css" type="text/css" /><script type="text/javascript" async="async" src=".js"></script>'
let body = $response.body
    。replace(ele, eleReplace)
$done({ body });
