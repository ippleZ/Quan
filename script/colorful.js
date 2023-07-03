let body = $response.body;
let url = $request.url;
let obj = JSON.parse(body);

if (url.indexOf('/banner') !== -1) {
  obj.data = [
    {
      "title" : "风场图",
      "banner_type" : "",
      "url" : "cy://button_moremap_wind",
      "avatar" : "https://cdn-w.caiyunapp.com/p/app/operation/prod/banner/6467500d38c25ada83ded8ae/d95edb5f9b64da0462cc506eb70a4c40.jpg"
    },
    {
      "title" : "缺这 5 种营养，让你老得快、骨头脆！一半以上中国人没补够...",
      "banner_type" : "",
      "url" : "https://h5.baike.qq.com/mobile/article.html?docid=tx000020017dnp3z&adtag=caiyuntest",
      "avatar" : "https://cdn-w.caiyunapp.com/p/app/operation/prod/banner/6454b666b2f0279b31b26aa2/e56adca10a07a8bdc4a15f6d17936e6b.jpg"
    },
    {
      "title" : "听说99%的男性都觉得防晒没必要，真的是这样吗？",
      "banner_type" : "article",
      "url" : "https://cdn-w.caiyunapp.com/p/app/operation/prod/article/6465e8ab38c25ada83ded8a1/index.html",
      "avatar" : "https://cdn-w.caiyunapp.com/p/app/operation/prod/banner/6465ece338c25ada83ded8a4/55b9a90b4d7c03230aeaf0c9f5d9e7f0.jpg"
    }
  ];
  body = JSON.stringify(obj);
}

if (url.indexOf('/feeds') !== -1) {
  obj.data = [
    {
      "avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/feeds1.jpg",
      "visits": 520,
      "author": "十点半睡觉",
      "author_avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/author.png",
      "category_times_text": "人查看",
      "title": "十点半睡觉",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "feeds1",
      "url": ""
    },
    {
      "avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/feeds2.jpg",
      "visits": 520,
      "author": "十点半睡觉",
      "author_avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/author.png",
      "category_times_text": "人查看",
      "title": "十点半睡觉",
      "category_name": "文章",
      "feed_type": "article",
      "feed_id": "feeds1",
      "url": ""
    },
    {
      "avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/feeds3.jpg",
      "visits": 520,
      "author": "十点半睡觉",
      "author_avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/author.png",
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
