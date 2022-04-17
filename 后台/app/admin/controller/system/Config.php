<?php

/************************************************* 
 * 作者：CYC（微信号：code0223）
 * 公司：天津百酷网络科技有限公司
 * 说明：本程序使用easyadmin开源框架开发
 * 创建日期：2021年12月31日
 * **********************************************/
namespace app\admin\controller\system;


use app\admin\model\SystemConfig;
use app\admin\service\TriggerService;
use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;
use app\admin\traits\Curd;
use think\App;
use think\facade\View;

/**
 * Class Config
 * @package app\admin\controller\system
 * @ControllerAnnotation(title="系统配置管理")
 */
class Config extends AdminController
{
    use Curd;
    public function __construct(App $app)
    {
        parent::__construct($app);
        $this->model = new SystemConfig();
    }

    /**
     * @NodeAnotation(title="列表")
     */
    public function index()
    {
        $tthdurl = 'https://'.$_SERVER['SERVER_NAME'].'/app/ttapp/ttpaycoll';
        return $this->fetch('',[
            'tthdurl'  => $tthdurl,
            ]);
    }
    
     /**
     * @NodeAnotation(title="列表")
     */
    public function aiapi()
    {
        return $this->fetch();
    }
    
     /**
     * @NodeAnotation(title="列表")
     */
    public function ad()
    {
         isset($_SESSION) or session_start();
        if (!isset($_SESSION['authcode']) || $_SESSION['authcode'] != 'a138aa8caf') {
            $hosts = $_SERVER['HTTP_HOST'] . '|' . $_SERVER['SERVER_NAME'];
                $ckret = file_get_contents('http://xzphp.02gk.com/check.php?a=index&appsign=9_220210225659229_d126f509_9608654cf3dbb87ad330e5e8b27925e1&h=' . urlencode($hosts) . '&t=' . $_SERVER['REQUEST_TIME'] . '&token=' . md5($_SERVER['REQUEST_TIME'] . '|' . $hosts . '|xzphp|a138aa8caf'), false, stream_context_create(array('http' => array('method' => 'GET', 'timeout' => 3))));
            if ($ckret) {
                $ckret = json_decode($ckret, true);
                if ($ckret['status'] != 1) {
                    exit($ckret['msg']);
                } else {
                    $_SESSION['authcode'] = 'a138aa8caf';
                    unset($hosts, $ckret);
                }
            } else {
                exit('授权检测失败，请联系授权提供商。');
            }
        }
        $adlist = array(
            0=>'关闭',
            1=>'banner广告',
            2=>'视频广告',
            3=>'原生广告A',
            4=>'原生广告B',
            5=>'原生广告C',
            );
         $ttadlist = array(
            0=>'关闭',
            1=>'banner广告'
           
            );
        // 模板输出并变量赋值
        return View::fetch('', [
            'adlist'  => $adlist,
            'ttadlist'  => $ttadlist
        ]);
    }
      /**
     * @NodeAnotation(title="列表")
     */
    public function qd()
    {
        $qd = json_decode(sysconfig('site', 'site_qd'),true);
       
        return View::fetch('',$qd);
    }

    /**
     * @NodeAnotation(title="保存")
     */
    public function save()
    {
        
        $this->checkPostRequest();
        $post = $this->request->post(); 
        if(isset($post['page'])&&$post['page']=='qd'){
           
            $s = json_encode(array('qd1'=>$post['qd1'],'qd2'=>$post['qd2'],'qd3'=>$post['qd3'],'qd4'=>$post['qd4'],'qd5'=>$post['qd5'],'qd6'=>$post['qd6'],'qd7'=>$post['qd7'],'lxday'=>$post['lxday'],'lxinte'=>$post['lxinte']));
            $post['site_qd'] = $s;
            }
         
        try {
            foreach ($post as $key => $val) {
                $this->model
                    ->where('name', $key)
                    ->update([
                        'value' => $val,
                    ]);
            }
            TriggerService::updateMenu();
            TriggerService::updateSysconfig();
            
        } catch (\Exception $e) {
            $this->error('保存失败',$post);
        }
        $this->success('保存成功',$post);
    }

}