// 解析JSON数据
let obj = JSON.parse($response.body);

// 遍历ernInfo数组
obj.bizResult.data.ernInfo.forEach(item => {
  // 将ernMon转换为数字
  let ernMon = parseFloat(item.ernMon);
  
  // 根据条件处理ernMon
  if (ernMon > 0) {
    ernMon *= 2;
  } else if (ernMon < 0) {
    ernMon /= 2;
  }
  
  // 四舍五入到两位小数
  item.ernMon = ernMon.toFixed(2);
});

// 将修改后的对象转回JSON字符串
$done({body: JSON.stringify(obj)});
