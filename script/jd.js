// 2023-11-03 17:05

if (!$response.body) $done({});
const url = $request.url;
let body = $response.body;

if (body) {
  if (/^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=personinfoBusiness/.test(url)) {
    try {
      let obj = JSON.parse(body);
      if (obj?.floors?.length > 0) {
        let newFloors = [];
        for (let floor of obj.floors) {
          const itemsToExclude = [
            "bigSaleFloor",
            "buyOften",
            "newAttentionCard",
            "newBigSaleFloor",
            "noticeFloor",
            "recommendfloor"
          ];
          if (itemsToExclude.includes(floor?.mId)) {
            continue;
          }
          if (floor?.mId === "basefloorinfo") {
            // 删除不需要的属性
            delete floor.data.commonPopup;
            delete floor.data.commonPopup_dynamic;
            floor.data.commonTips = [];
            floor.data.commonWindows = [];
            delete floor.data.floatLayer;
          } else if (floor?.mId === "orderIdFloor") {
            floor.data.commentRemindInfo.infos = [];
          } else if (floor?.mId === "userinfo") {
            // 删除不需要的属性
            delete floor.data.newPlusBlackCard;
          }
          newFloors.push(floor);
        }
        obj.floors = newFloors;
        body = JSON.stringify(obj);
      }
    } catch (error) {
      console.log(`京东-个人主页, 出现异常: ` + error);
    }
  } else if (/^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=start/.test(url)) {
    try {
      let obj = JSON.parse(body);
      obj.images = [];
      obj.showTimesDaily = 0;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`京东-开屏广告, 出现异常: ` + error);
    }
  }
  $done({ body });
}
