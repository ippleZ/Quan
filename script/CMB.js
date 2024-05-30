let body = $response.body;
let obj = JSON.parse(body);

if (obj.bizResult && obj.bizResult.data && obj.bizResult.data.ernInfo) {
  obj.bizResult.data.ernInfo.forEach(item => {
    if (item.ernMon) {
      item.ernMon = (parseFloat(item.ernMon) * 5).toString();
    }
  });
}

body = JSON.stringify(obj);
$done({body});
