let modifiedResponseBody = $response.body;
modifiedResponseBody = modifiedResponseBody.replace("我的车辆", "长沙");

$done({ response: { body: modifiedResponseBody } });
