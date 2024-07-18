let obj = JSON.parse($response.body);
console.log("Original object:", JSON.stringify(obj));

if (obj.bizResult && obj.bizResult.data && obj.bizResult.data.ernInfo) {
  obj.bizResult.data.ernInfo.forEach((item, index) => {
    let ernMon = parseFloat(item.ernMon);
    console.log(`Processing item ${index}, original ernMon: ${ernMon}`);
    
    if (ernMon > 0) {
      ernMon *= 2;
    } else if (ernMon < 0) {
      ernMon /= 2;
    }
    
    item.ernMon = ernMon.toFixed(2);
    console.log(`Item ${index} processed, new ernMon: ${item.ernMon}`);
  });
} else {
  console.log("Required data not found in the object");
}

console.log("Modified object:", JSON.stringify(obj));

$done({body: JSON.stringify(obj)});
