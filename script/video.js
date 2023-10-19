var body = $response.body
  .replace(/<div class="player-rm rm-two rm-list">/g, '<div class="player-rm rm-two rm-list" style="width: 0%">')
  .replace(/class="player-recommend-float"/g, 'class="player-recommend-float" style="width: 0%"');
$done({ body: body });
