var body = $response.body;
    .replace(/class="video-info-items"/g, 'style="display:none"')
    .replace(/class="player-rm rm-two rm-list"/g, 'style="display:none"')
    .replace(/class="player-recommend-float"/g, 'style="display:none"');
}
$done({
  body: body
});
