const url = $request.url;
let body = $response.body;

if (url.includes("waipian29.com")) {
  .replace(/id="player_pic"/g, 'id="player_pic" style="width: 0%"')
  .replace(/<div class="player-rm rm-two rm-list">/g, '<div class="player-rm rm-two rm-list" style="width: 0%">')
  .replace(/class="player-recommend-float"/g, 'class="player-recommend-float" style="width: 0%"');
}

$done({ body: body });
