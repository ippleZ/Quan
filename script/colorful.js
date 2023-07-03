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
      "visits": 78,
      "author": "妖猫爱睡觉",
      "author_avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/author/64a180e9627638f8ec7c3eff/a284273d1d0f8d2bdec03ed564199820.png",
      "category_times_text": "人查看",
      "title": "钓黄鳝晚上往往比白天更好钓什么原因",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "64a29c3b949dbe2fbe0fe6b1",
      "url": "https://cdn-w.caiyunapp.com/p/app/operation/prod/article/64a27b07627638f8ec7c3f0d/index.html"
    },
    {
      "avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/feed/64a29c3b949dbe2fbe0fe6b1/0d47eadedfe4dfdff327a7efab55417e.png",
      "visits": 78,
      "author": "妖猫爱睡觉",
      "author_avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/author/64a180e9627638f8ec7c3eff/a284273d1d0f8d2bdec03ed564199820.png",
      "category_times_text": "人查看",
      "title": "钓黄鳝晚上往往比白天更好钓什么原因",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "64a29c3b949dbe2fbe0fe6b1",
      "url": "https://cdn-w.caiyunapp.com/p/app/operation/prod/article/64a27b07627638f8ec7c3f0d/index.html"
    },
    {
      "avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/feed/64a29c3b949dbe2fbe0fe6b1/0d47eadedfe4dfdff327a7efab55417e.png",
      "visits": 78,
      "author": "妖猫爱睡觉",
      "author_avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/author/64a180e9627638f8ec7c3eff/a284273d1d0f8d2bdec03ed564199820.png",
      "category_times_text": "人查看",
      "title": "钓黄鳝晚上往往比白天更好钓什么原因",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "64a29c3b949dbe2fbe0fe6b1",
      "url": "https://cdn-w.caiyunapp.com/p/app/operation/prod/article/64a27b07627638f8ec7c3f0d/index.html"
    }
  ];
  body = JSON.stringify(obj);
}

$done({ body });
