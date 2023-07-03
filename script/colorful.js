let body = $response.body;
let url = $request.url;
let obj = JSON.parse(body);

if (url.indexOf('/banner') !== -1) {
  obj.data = {
    "title": "",
    "banner_type": "",
    "url": "",
    "avatar": "https://gitee.com/ipple/iCloud/raw/master/banner.jpg"
  };
  body = JSON.stringify(obj);
}

if (url.indexOf('/feeds') !== -1) {
  obj.data = [
    {
      "avatar": "https://gitee.com/ipple/iCloud/raw/master/feeds1.jpg",
      "visits": 520,
      "author": "十点半睡觉",
      "author_avatar": "https://gitee.com/ipple/iCloud/raw/master/author.jpg",
      "category_times_text": "人查看",
      "title": "十点半睡觉",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "feeds1",
      "url": ""
    },
    {
      "avatar": "https://gitee.com/ipple/iCloud/raw/master/feeds2.jpg",
      "visits": 520,
      "author": "十点半睡觉",
      "author_avatar": "https://gitee.com/ipple/iCloud/raw/master/author.jpg",
      "category_times_text": "人查看",
      "title": "十点半睡觉",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "feeds1",
      "url": ""
    },
    {
      "avatar": "https://gitee.com/ipple/iCloud/raw/master/feeds3.jpg",
      "visits": 520,
      "author": "十点半睡觉",
      "author_avatar": "https://gitee.com/ipple/iCloud/raw/master/author.jpg",
      "category_times_text": "人查看",
      "title": "十点半睡觉",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "feeds1",
      "url": ""
    }
  ];
  body = JSON.stringify(obj);
}

$done({ body });
