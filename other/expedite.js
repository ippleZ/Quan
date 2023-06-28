// 定义正则表达式模式
var regex1 = https:\/\/github\.com\/(.+?)\/(.+?)\/raw\/(.+?)\/(.+)/gmi;
var regex2 = https:\/\/raw\.githubusercontent\.com\/(.+?)\/(.+?)\/(.+?)\/(.+)/gmi;

// 替换匹配项
var modifiedBody = $response.body。replace(regex1, function(match, p1, p2, p3, p4) {
    return 'https://raw.gitmirror.com/' + p1 + '/' + p2 + '/' + p3 + '/' + p4;
});
modifiedBody = modifiedBody.replace(regex2, function(match, p1, p2, p3, p4) {
    return 'https://raw.gitmirror.com/' + p1 + '/' + p2 + '/' + p3 + '/' + p4;
});

// 返回修改后的响应体
$done({ body: modifiedBody });
