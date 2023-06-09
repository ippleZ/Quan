let body = $response.body;
let url = $request.url;
let obj = JSON.parse(body);

if (url.indexOf('/banners') !== -1) {
	obj.data = [{
			"title": "",
			"banner_type": "",
			"url": "",
			"avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/banner1.jpg"
		},
		{
			"title": "",
			"banner_type": "",
			"url": "",
			"avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/banner2.jpg"
		},
		{
			"title": "",
			"banner_type": "",
			"url": "",
			"avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/banner3.jpg"
		}
	];
	body = JSON.stringify(obj);
}

if (url.indexOf('/features') !== -1) {
	obj.data = [{
			"title": "",
			"url": "",
			"feature_type": "",
			"avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/icon1.jpg"
		},
		{
			"title": "",
			"url": "",
			"feature_type": "",
			"avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/icon2.jpg"
		},
		{
			"title": "",
			"url": "",
			"feature_type": "",
			"avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/icon3.jpg"
		},
		{
			"title": "",
			"url": "",
			"feature_type": "",
			"avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/icon4.jpg"
		},
		{
			"title": "",
			"url": "",
			"feature_type": "",
			"avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/icon5.jpg"
		},
		{
			"title": "",
			"url": "",
			"feature_type": "",
			"avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/icon6.jpg"
		}
	];
	body = JSON.stringify(obj);
}

if (url.indexOf('/feeds') !== -1) {
	obj.data = [{
			"avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/feeds1.jpg",
			"visits": 520,
			"author": "十点半睡觉",
			"author_avatar": "https://cdn.jsdelivr.net/gh/ippleZ/iCloud/author.png",
			"category_times_text": "人查看",
			"title": "",
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
			"title": "",
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
			"title": "",
			"category_name": "文章",
			"feed_type": "article",
			"feed_id": "feeds1",
			"url": ""
		}
	];
	body = JSON.stringify(obj);
}

$done({body});
