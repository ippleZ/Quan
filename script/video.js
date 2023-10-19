const url = $request.url;
let body = $response.body;

if (url.includes("waipian")) {
  .replace(/id="player_pic"/g, 'style="width: 0%"')
  .replace(/class="player-rm rm-two rm-list"/g, 'style="width: 0%"')
  .replace(/class="player-recommend-float"/g, 'style="width: 0%"');
} else if (url.includes("dyxs")) {
  .replace(/id="player_pic"/g, 'style="width: 0%"')
  .replace(/class="player-rm rm-two rm-list"/g, 'style="width: 0%"')
  .replace(/class="player-recommend-float"/g, 'style="width: 0%"');
}

$done({ body: body });
