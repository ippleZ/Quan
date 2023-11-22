var body = $response.body;
var json = JSON.parse(body);
const url = $request.url;


//修改我的-昵称旁边图标
if (url.indexOf(/users/me) != -1){
  body = body.replace(/\"membershipIdentity":".*?"/g, '\"membershipIdentity":"svip"').replace(/\"membershipIcon":".*?"/g, '\"membershipIcon":"https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png"').replace(/\"badges":\[.+\]/g, '\"badges":[    {      "code" : "member-shi",      "defaultIcon" : "https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png",      "iconText" : null,      "iconTemplate" : null    }]');
}

//去除-我的-插条
if (url.indexOf(/users/tools) != -1){
  delete json.result.guideInfo;
  body = JSON.stringify(json);
}

if (url.indexOf(/user/get) != -1){
  body = body.replace(/\"vip_identity":".*?"/g, '\"vip_identity":"svip"');
}

//播放信息
if (url.indexOf(/users/feature/list) != -1){
  body = body.replace(/\"name":".*?"/g, '\"name":"svip"').replace(/\"intercept":\w+/g, '\"intercept":false');
}

if (url.indexOf(/user/getUserCapacityInfo) != -1){
  json.capacity_level_info = {
    "capacity_type" : "normal"
  };
  json.user_capacity_limit_details = {
    "limit_download" : false,
    "limit_consume" : false
  };
  body = JSON.stringify(json);
}

//净化项目
if ($request.url.indexOf(/users/onboard_list) != -1){
  delete json.result;  //横条信息
  body = JSON.stringify(json);
}

if ($request.url.indexOf(/users/home/widgets) != -1){
  json.coreFeatures.items = json.coreFeatures.items.filter(item => item.code !== "AI_ASSISTANT");  //图搜
  delete json.signIn;  //登录
  delete json.banners; //横幅
  delete json.minorBackup;  //设备列表
  delete json.mainBackup;  //备份还原
  body = JSON.stringify(json);
}

$done({ body });
