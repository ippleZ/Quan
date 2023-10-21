const url = $request.url;
let body = $response.body;

if (url.includes("waipian")) {
  .replace(/id="player_pic"/g, 'style="display:none"')
  .replace(/class="player-rm rm-two rm-list"/g, style="display:none"')
  .replace(/class="player-recommend-float"/g, style="display:none"');
} else if (url.includes("dyxs")) {
  .replace(/id="player_pic"/g, style="display:none"')
  .replace(/class="player-rm rm-two rm-list"/g, style="display:none"')
  .replace(/class="player-recommend-float"/g, style="display:none"');
}

$done({ body: body });
