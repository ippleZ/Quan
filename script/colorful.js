let body = $response.body;
let url = $request.url;
let obj = JSON.parse(body);

if (url.indexOf('/banner') !== -1) {
  obj.data = {
    "title": "",
    "banner_type": "",
    "url": "",
    "avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/banner/6467500d38c25ada83ded8ae/d95edb5f9b64da0462cc506eb70a4c40.jpg"
  };
  body = JSON.stringify(obj);
}

if (url.indexOf('/feeds') !== -1) {
  obj.data = [
    {
      "avatar": "https://gitee.com/ipple/iCloud/raw/master/feeds1.jpg",
      "visits": 520,
      "author": "十点半睡觉",
      "author_avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/author/64a180e9627638f8ec7c3eff/a284273d1d0f8d2bdec03ed564199820.png",
      "category_times_text": "人查看",
      "title": "钓黄鳝晚上往往比白天更好钓什么原因",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "feeds1",
      "url": ""
    },
    {
      "avatar": "https://gitee.com/ipple/iCloud/raw/master/feeds2.jpg",
      "visits": 520,
      "author": "十点半睡觉",
      "author_avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/author/64a180e9627638f8ec7c3eff/a284273d1d0f8d2bdec03ed564199820.png",
      "category_times_text": "人查看",
      "title": "钓黄鳝晚上往往比白天更好钓什么原因",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "feeds1",
      "url": ""
    },
    {
      "avatar": "https://gitee.com/ipple/iCloud/raw/master/feeds3.jpg",
      "visits": 520,
      "author": "十点半睡觉",
      "author_avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/author/64a180e9627638f8ec7c3eff/a284273d1d0f8d2bdec03ed564199820.png",
      "category_times_text": "人查看",
      "title": "钓黄鳝晚上往往比白天更好钓什么原因",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "feeds1",
      "url": ""
    }
  ];
  body = JSON.stringify(obj);
}

$done({ body });
