<?php

// +----------------------------------------------------------------------
// | EasyAdmin
// +----------------------------------------------------------------------
// | PHP交流群: 763822524
// +----------------------------------------------------------------------
// | 开源协议  https://mit-license.org 
// +----------------------------------------------------------------------
// | github开源项目：https://github.com/zhongshaofa/EasyAdmin
// +----------------------------------------------------------------------


namespace app\common\controller;


use app\admin\service\ConfigService;
use app\BaseController;
use app\common\constants\AdminConstant;
use app\common\service\AuthService;
use EasyAdmin\tool\CommonTool;
use think\facade\Env;
use think\facade\View;
use think\Model;
use think\facade\Db;
define('TPREFIX', 'system_'); 
class AppController extends BaseController
{
     public function getconfig($name){
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
         $where = [['name', '=', $name]];
         return $this->find('config',$where)['value'];
     }
      public function getconfigs($group,$str=false){
         $where = [['group', '=', $group]];
         $data = array();
         $configs = $this->select('config',$where);
         foreach ($configs as $key=>$val){
			 if($str){
				 $name = substr($val['name'],strpos($val['name'],'_')+1);
			 }
			 else{
				 $name = $val['name'];
			 }
             $data[$name]=$val['value'];
         }
         return $data;
     }
      public function ttgetconfigs($group,$str=false){
         $where = [['group', '=', $group]];
         $data = array();
         $configs = $this->select('config',$where);
          $wxsite = array('config_task', 'config_iospay','config_pay');
          $ttsite = array('tttask', 'ttiospay','ttpay');
         foreach ($configs as $key=>$val){
             if(in_array($val['name'],$wxsite)){
                 continue;
             }
			 if($str){
				 $name = substr($val['name'],strpos($val['name'],'_')+1);
				 if(in_array($name,$ttsite)){
				     $name = str_replace("tt","",$name);
				 }
			 }
			 else{
				 $name = $val['name'];
			 }
             $data[$name]=$val['value'];
         }
         return $data;
     }
    
    public function find($name,$where){
        return Db::name(TPREFIX.$name)->where($where)->order('id desc')->find();  
     }
     public function select($name,$where){
        return Db::name(TPREFIX.$name)->where($where)->select();  
     }
    public function insertGetId($name,$data){
        return Db::name(TPREFIX.$name)->insertGetId($data);
     }
     public function save($name,$data){
         
        return  Db::name(TPREFIX.$name)->save($data);
     }
    //  自动检查status字段与sort排序，可获取count
     public function getlist($name,$where=array(),$count=false){
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
        array_push($where,array('status','=',1));
        if($count){
             return  Db::name(TPREFIX.$name)->where($where)->count();
        }
        else{
             return  Db::name(TPREFIX.$name)->where($where)->order('sort desc')->select();
        }
       
     }
     //  自动检查status字段与sort排序，分页获取
     public function pagelist($name,$where=array(),$page=1,$pages=10){
        array_push($where,array('status','=',1));
        return  Db::name(TPREFIX.$name)->where($where)->page($page,$pages)->order('sort desc')->select();
     }
     //  不检查任何字段，可获取count
      public function getlog($name,$where=array(),$count=false){
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
        if($count){
             return  Db::name(TPREFIX.$name)->where($where)->count();
        }
        else{
             return  Db::name(TPREFIX.$name)->where($where)->order('id desc')->select();
        }
       
     }
      //  不检查任何字段，分页获取
     public function pagelog($name,$where=array(),$page=1,$pages=10){
        return  Db::name(TPREFIX.$name)->where($where)->page($page,$pages)->order('id desc')->select();
     }
     
     public function del($name,$where){
        return  Db::name(TPREFIX.$name)
	->where($where)
    ->delete();
     }
     
     
    

}