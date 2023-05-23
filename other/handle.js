// 将 $response.body 按行分割成数组
var lines = $response.body.split('\n');

// 定义正则表达式模式
var regex = /https:\/\/github\.com\/ddgksf2013\/Scripts\/raw\/master\/(.+)/;

// 遍历每一行进行匹配和替换
for (var i = 0; i < lines.length; i++) {
  if (regex.test(lines[i])) {
    lines[i] = lines[i].replace(regex, 'https://raw.gitmirror.com/ddgksf2013/Scripts/master/$1');
  }
}

// 将修改后的行数组重新合并为字符串
var modifiedBody = lines.join('\n');

// 返回修改后的响应体
$done({ body: modifiedBody });
