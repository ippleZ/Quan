var modifiedBody = $response.body.replace(/<div\s+class="([^"]*\s+)?ads_w(\s+[^"]*)?"[^>]*>/g, function(match) {
    if (match.includes('style="')) {
        return match.replace('style="', 'style="display: none; ');
    } else {
        return match.replace('<div', '<div style="display: none;"');
    }
});

$done({ body: modifiedBody });
