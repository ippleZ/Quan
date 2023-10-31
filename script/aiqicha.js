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
          // orderIdFloor我的订单 keyToolsFloor浏览记录 newWalletIdFloor我的钱包 iconToolFloor底部工具栏
          const items = [
            "bigSaleFloor",
            "newAttentionCard", // 关注的频道
            "newBigSaleFloor", // 双十一
            "noticeFloor", // 顶部横幅
            "recommendfloor" // 我的推荐
          ];
          if (items?.includes(floor?.mId)) {
            continue;
          } else {
            if (floor?.mId === "basefloorinfo") {
              // 删除不需要的属性
              delete floor.data.commonPopup;
              if (floor?.data?.commonTips?.length > 0) {
                floor.data.commonTips = [];
              }
              if (floor?.data?.commonWindows?.length > 0) {
                floor.data.commonWindows = [];
              }
              delete floor.data.floatLayer;
            } else if (floor?.mId === "orderIdFloor") {
              if (floor?.data?.commentRemindInfo?.infos?.length > 0) {
                floor.data.commentRemindInfo.infos = [];
              }
            } else if (floor?.mId === "userinfo") {
              // 保留必要属性
              if (floor?.data?.bgImgInfo?.bgImg) {
                // 保留这个属性
                // delete floor.data.bgImgInfo.bgImg;
              }
              // 删除不需要的属性
              delete floor.data.newPlusBlackCard;
            }
            newFloors.push(floor);
          }
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
      if (obj?.images?.length > 0) {
        obj.images = [];
      }
      if (obj?.showTimesDaily) {
        obj.showTimesDaily = 0;
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`京东-开屏广告, 出现异常: ` + error);
    }
  }

  $done({ body });
}
