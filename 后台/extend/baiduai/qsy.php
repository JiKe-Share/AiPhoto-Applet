
       <?php
/**
 * 发起http post请求(REST API), 并获取REST请求的结果
 * @param string $url
 * @param string $param
 * @return - http response body if succeeds, else false.
 */
function request_post($url = '', $param = '')
{
    if (empty($url) || empty($param)) {
        return false;
    }

    $postUrl = $url;
    $curlPost = $param;
    // 初始化curl
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $postUrl);
    curl_setopt($curl, CURLOPT_HEADER, 0);
    // 要求结果为字符串且输出到屏幕上
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    // post提交方式
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $curlPost);
    // 运行curl
    $data = curl_exec($curl);
    curl_close($curl);

    return $data;
}

$token = '24.05b0c38f6f1859e0aa8806046d844eb1.2592000.1643208843.282335-21225598';
$url = 'https://aip.baidubce.com/rest/2.0/image-process/v1/inpainting?access_token=' . $token;
$bodys = "{\"rectangle\":[{\"width\":92,\"top\":95,\"height\":36,\"left\":543}],\"image\":\"图片base64编码\"}"
$res = request_post($url, $bodys);

var_dump($res);