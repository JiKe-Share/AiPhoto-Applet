/*
 Navicat MySQL Data Transfer

 Source Server         : 腾讯云云数据库
 Source Server Type    : MySQL
 Source Server Version : 50718
 Source Host           : gz-cynosdbmysql-grp-fx9pux81.sql.tencentcdb.com:24977
 Source Schema         : aiphoto

 Target Server Type    : MySQL
 Target Server Version : 50718
 File Encoding         : 65001

 Date: 13/02/2022 01:27:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ai_mall_cate
-- ----------------------------
DROP TABLE IF EXISTS `ai_mall_cate`;
CREATE TABLE `ai_mall_cate`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '分类名',
  `image` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类图片',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) UNSIGNED NULL DEFAULT 1 COMMENT '状态(1:禁用,2:启用)',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注说明',
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) NULL DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `title`(`title`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '商品分类' ROW_FORMAT = COMPACT;



-- ----------------------------
-- Table structure for ai_mall_goods
-- ----------------------------
DROP TABLE IF EXISTS `ai_mall_goods`;
CREATE TABLE `ai_mall_goods`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cate_id` int(11) NULL DEFAULT NULL COMMENT '分类ID',
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品名称',
  `logo` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品logo',
  `images` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '商品图片 以 | 做分割符号',
  `describe` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '商品描述',
  `market_price` decimal(10, 2) NULL DEFAULT 0.00 COMMENT '市场价',
  `discount_price` decimal(10, 2) NULL DEFAULT 0.00 COMMENT '折扣价',
  `sales` int(11) NULL DEFAULT 0 COMMENT '销量',
  `virtual_sales` int(11) NULL DEFAULT 0 COMMENT '虚拟销量',
  `stock` int(11) NULL DEFAULT 0 COMMENT '库存',
  `total_stock` int(11) NULL DEFAULT 0 COMMENT '总库存',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) UNSIGNED NULL DEFAULT 1 COMMENT '状态(1:禁用,2:启用)',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注说明',
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) NULL DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `cate_id`(`cate_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '商品列表' ROW_FORMAT = COMPACT;


-- ----------------------------
-- Table structure for ai_system_admin
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_admin`;
CREATE TABLE `ai_system_admin`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `auth_ids` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色权限ID',
  `head_img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '用户登录名',
  `password` char(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '用户登录密码',
  `phone` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '联系手机号',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '备注说明',
  `login_num` bigint(20) UNSIGNED NULL DEFAULT 0 COMMENT '登录次数',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '状态(0:禁用,1:启用,)',
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) NULL DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  INDEX `phone`(`phone`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统用户表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of ai_system_admin
-- ----------------------------
INSERT INTO `ai_system_admin` VALUES (1, NULL, '/static/admin/images/head.jpg', 'admin', 'c60829fe8357211f2a2d6b88f54295447913c69f', NULL, '', 117, 0, 1, 1639861206, 1644686734, NULL);

-- ----------------------------
-- Table structure for ai_system_auth
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_auth`;
CREATE TABLE `ai_system_auth`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '权限名称',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) UNSIGNED NULL DEFAULT 1 COMMENT '状态(1:禁用,2:启用)',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注说明',
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) NULL DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `title`(`title`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统权限表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of ai_system_auth
-- ----------------------------
INSERT INTO `ai_system_auth` VALUES (1, '管理员', 1, 1, '测试管理员', 1588921753, 1589614331, NULL);
INSERT INTO `ai_system_auth` VALUES (6, '游客权限', 0, 1, '', 1588227513, 1589591751, 1589591751);

-- ----------------------------
-- Table structure for ai_system_auth_node
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_auth_node`;
CREATE TABLE `ai_system_auth_node`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `auth_id` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT '角色ID',
  `node_id` bigint(20) NULL DEFAULT NULL COMMENT '节点ID',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `index_system_auth_auth`(`auth_id`) USING BTREE,
  INDEX `index_system_auth_node`(`node_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '角色与节点关系表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of ai_system_auth_node
-- ----------------------------
INSERT INTO `ai_system_auth_node` VALUES (1, 6, 1);
INSERT INTO `ai_system_auth_node` VALUES (2, 6, 2);
INSERT INTO `ai_system_auth_node` VALUES (3, 6, 9);
INSERT INTO `ai_system_auth_node` VALUES (4, 6, 12);
INSERT INTO `ai_system_auth_node` VALUES (5, 6, 18);
INSERT INTO `ai_system_auth_node` VALUES (6, 6, 19);
INSERT INTO `ai_system_auth_node` VALUES (7, 6, 21);
INSERT INTO `ai_system_auth_node` VALUES (8, 6, 22);
INSERT INTO `ai_system_auth_node` VALUES (9, 6, 29);
INSERT INTO `ai_system_auth_node` VALUES (10, 6, 30);
INSERT INTO `ai_system_auth_node` VALUES (11, 6, 38);
INSERT INTO `ai_system_auth_node` VALUES (12, 6, 39);
INSERT INTO `ai_system_auth_node` VALUES (13, 6, 45);
INSERT INTO `ai_system_auth_node` VALUES (14, 6, 46);
INSERT INTO `ai_system_auth_node` VALUES (15, 6, 52);
INSERT INTO `ai_system_auth_node` VALUES (16, 6, 53);

-- ----------------------------
-- Table structure for ai_system_config
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_config`;
CREATE TABLE `ai_system_config`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '变量名',
  `group` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '分组',
  `value` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '变量值',
  `remark` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '备注信息',
  `sort` int(10) NULL DEFAULT 0,
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE,
  INDEX `group`(`group`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 160 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统配置表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of ai_system_config
-- ----------------------------
INSERT INTO `ai_system_config` VALUES (41, 'alisms_access_key_id', 'sms', '填你的', '阿里大于公钥', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (42, 'alisms_access_key_secret', 'sms', '填你的', '阿里大鱼私钥', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (55, 'upload_type', 'upload', 'local', '当前上传方式 （local,alioss,qnoss,txoss）', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (56, 'upload_allow_ext', 'upload', 'doc,gif,ico,icon,jpg,mp3,mp4,p12,pem,png,rar,jpeg', '允许上传的文件类型', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (57, 'upload_allow_size', 'upload', '5242880', '允许上传的大小', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (58, 'upload_allow_mime', 'upload', 'image/gif,image/jpeg,video/x-msvideo,text/plain,image/png,image/jpg', '允许上传的文件mime', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (59, 'upload_allow_type', 'upload', 'local,alioss,qnoss,txcos', '可用的上传文件方式', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (60, 'alioss_access_key_id', 'upload', '', '阿里云oss公钥', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (61, 'alioss_access_key_secret', 'upload', '', '阿里云oss私钥', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (62, 'alioss_endpoint', 'upload', '', '阿里云oss数据中心', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (63, 'alioss_bucket', 'upload', '', '阿里云oss空间名称', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (64, 'alioss_domain', 'upload', '', '阿里云oss访问域名', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (65, 'logo_title', 'site', 'AiPhoto', 'LOGO标题', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (66, 'logo_image', 'site', '/favicon.ico', 'logo图片', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (69, 'config_share_image', 'config', '', '分享封面', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (70, 'config_wxkefu_image', 'config', '', '客服二维码', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (71, 'config_wxcode', 'config', 'code0223', '客服微信', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (72, 'config_share_title', 'config', '老照片一键上色，人工智能图片修复工具箱', '分享标题', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (75, 'sms_type', 'sms', 'alisms', '短信类型', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (80, 'txcos_secret_id', 'upload', '', '腾讯云cos密钥', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (81, 'txcos_secret_key', 'upload', '', '腾讯云cos私钥', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (82, 'txcos_region', 'upload', '', '存储桶地域', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (83, 'tecos_bucket', 'upload', '', '存储桶名称', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (84, 'qnoss_access_key', 'upload', '填你的', '访问密钥', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (85, 'qnoss_secret_key', 'upload', '填你的', '安全密钥', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (86, 'qnoss_bucket', 'upload', '填你的', '存储空间', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (87, 'qnoss_domain', 'upload', '填你的', '访问域名', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (88, 'config_xcxtitle', 'config', 'AI图像修复', '小程序名称', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (89, 'site_appid', 'site', '', '小程序appid', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (90, 'site_appsecret', 'site', '', '小程序appsecret', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (91, 'config_pay', 'config', '2', '支付开关', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (93, 'config_front_color', 'config', '#000000', '顶部文字颜色', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (94, 'config_topbg1', 'config', '#ffffff', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (95, 'config_topbg2', 'config', '#ffffff', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (96, 'config_tip', 'config', '点击添加到我的小程序', '引导关注', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (97, 'config_duration', 'config', '60', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (98, 'config_tipbg', 'config', '#ff8c00', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (99, 'config_tipcolor', 'config', '#ffffff', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (100, 'config_index_jxbg', 'site', '', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (101, 'ai_bdappid', 'ai', '', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (102, 'ai_bdapikey', 'ai', '', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (103, 'ai_bdsecret', 'ai', '', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (104, 'site_tabbarbg', 'site', '#ffffff', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (105, 'site_tabbarbo', 'site', '#393d49', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (106, 'site_tabbartext', 'site', '#8a8a8a', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (107, 'site_tabbarstext', 'site', '#17abe3', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (108, 'wxad_wxbanner', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (109, 'wxad_wxreward', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (110, 'wxad_wxinter', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (111, 'wxad_wxcustomA', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (112, 'wxad_wxcustomB', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (113, 'wxad_wxcustomC', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (114, 'wxad_wxindex1ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (115, 'wxad_wxvideo', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (116, 'wxad_wxinsettime', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (117, 'wxad_insetgp', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (118, 'site_roth', 'site', '230', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (119, 'config_intename', 'config', '额度', '积分名称', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (120, 'config_mytopbg1', 'config', '#d9ffff', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (121, 'config_mytopbg2', 'config', '#55ffff', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (122, 'config_inteimg', 'config', '', '积分图标', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (123, 'config_intebg1', 'config', '#ff8c00', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (124, 'config_intebg2', 'config', '#ff8c00', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (125, 'site_inte', 'site', '3', '用户初始积分', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (126, 'site_help', 'site', '', '使用说明', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (127, 'config_gzhname', 'config', '黑马工具', '公众号名称', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (128, 'config_gzhurl', 'config', 'http://mp.weixin.qq.com/s?__biz=MzkzNTI3MTk3MQ==&amp;mid=100000008&amp;idx=1&amp;sn=a64c896715772470df63b618553cad14&amp;chksm=42b1ca4475c643520f548ed55a812500556f967c86f8763a355f61ac8f60b48ce4397d02e500#rd', '公众号关注链接', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (129, 'site_mchid', 'site', '', '支付商户号', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (130, 'site_paykey', 'site', '', '支付秘钥', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (131, 'site_viptq', 'site', '&lt;p&gt;1.全站功能无限制&lt;br /&gt;\n2.无限制图像存储&lt;br /&gt;\n3.无广告纯净享受&lt;/p&gt;\n', 'vip特权说明', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (132, 'config_iospay', 'config', '2', 'ios端支付', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (133, 'config_inviteinte', 'config', '2', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (134, 'config_invitenum', 'config', '2', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (135, 'site_invitenew', 'site', '1', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (136, 'site_qd', 'site', '{\"qd1\":\"1\",\"qd2\":\"2\",\"qd3\":\"2\",\"qd4\":\"2\",\"qd5\":\"2\",\"qd6\":\"2\",\"qd7\":\"2\",\"lxday\":\"5\",\"lxinte\":\"2\"}', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (137, 'tecos_url', 'upload', '', '腾讯云访问域名', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (138, 'site_loginbg', 'site', '', '登陆图', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (139, 'config_task', 'config', '2', '签到', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (140, 'site_qdad', 'site', '1', '签到需要看广告？', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (141, 'wxad_wxindex2ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (142, 'wxad_wxface1ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (143, 'wxad_wxface2ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (144, 'wxad_wxwxapp1ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (145, 'wxad_wxwxapp2ad', 'wxad', '2', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (146, 'wxad_wxwxapp3ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (147, 'wxad_wxmy1ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (148, 'wxad_wxmy2ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (149, 'wxad_wxlog1ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (150, 'wxad_wxlog2ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (151, 'wxad_wxtask1ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (152, 'wxad_wxtask2ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (153, 'wxad_wxhelp1ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (154, 'wxad_wxhelp2ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (155, 'wxad_wxtool1ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (156, 'wxad_wxtool2ad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (157, 'wxad_wxshowad', 'wxad', '0', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (158, 'config_silogin', 'config', '2', '强制登录', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (159, 'config_logints', 'config', '一键登录解锁所用功能', '一键登录提示', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (160, 'ai_volak', 'ai', '', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (161, 'ai_volsk', 'ai', '', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (162, 'config_ttxcxtitle', 'config', 'AI图像修复', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (163, 'site_ttappid', 'site', '', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (164, 'site_ttappsecret', 'site', '', '', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (165, 'config_kfjx', 'config', '结果不满意？联系客服精修', '客服精修', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (166, 'ttad_bannerid', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (167, 'ttad_reward', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (168, 'ttad_interid', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (169, 'ttad_xxlid', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (170, 'ttad_insetgp', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (171, 'ttad_index1ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (172, 'ttad_index2ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (173, 'ttad_face1ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (174, 'ttad_face2ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (175, 'ttad_app1ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (176, 'ttad_app2ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (177, 'ttad_app3ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (178, 'ttad_my1ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (179, 'ttad_my2ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (180, 'ttad_log1ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (181, 'ttad_log2ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (182, 'ttad_task1ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (183, 'ttad_task2ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (184, 'ttad_help1ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (185, 'ttad_help2ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (186, 'ttad_tool1ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (187, 'ttad_tool2ad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (188, 'ttad_showad', 'ttad', '', '抖音小程序广告', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (189, 'config_tttask', 'config', '1', '抖音设置', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (190, 'config_ttiospay', 'config', '2', '抖音设置', 0, NULL, NULL);
INSERT INTO `ai_system_config` VALUES (191, 'config_ttpay', 'config', '2', '抖音设置', 0, NULL, NULL);

-- ----------------------------
-- Table structure for ai_system_imglog
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_imglog`;
CREATE TABLE `ai_system_imglog`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NULL DEFAULT NULL,
  `toolname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` int(11) NULL DEFAULT NULL,
  `img2` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ai_system_inte
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_inte`;
CREATE TABLE `ai_system_inte`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rmb` decimal(10, 2) NULL DEFAULT NULL,
  `inte` int(11) NULL DEFAULT NULL,
  `sinte` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  `sort` int(11) NULL DEFAULT NULL,
  `wx` int(11) NULL DEFAULT NULL,
  `zj` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ai_system_inte
-- ----------------------------
INSERT INTO `ai_system_inte` VALUES (1, 0.01, 6, 2, 1, 100,1,1);
INSERT INTO `ai_system_inte` VALUES (2, 25.00, 20, 1, 1, 99,1,1);

-- ----------------------------
-- Table structure for ai_system_intelog
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_intelog`;
CREATE TABLE `ai_system_intelog`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userid` int(11) NULL DEFAULT NULL,
  `fid` int(11) NULL DEFAULT NULL,
  `date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `rid` int(11) NULL DEFAULT NULL,
  `wid` int(11) NULL DEFAULT NULL,
  `tid` int(11) NULL DEFAULT NULL,
  `inte` int(11) NULL DEFAULT NULL,
  `time` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;


-- ----------------------------
-- Table structure for ai_system_menu
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_menu`;
CREATE TABLE `ai_system_menu`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT '父id',
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '名称',
  `icon` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '菜单图标',
  `href` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '链接',
  `params` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '链接参数',
  `target` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '_self' COMMENT '链接打开方式',
  `sort` int(11) NULL DEFAULT 0 COMMENT '菜单排序',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '状态(0:禁用,1:启用)',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) NULL DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `title`(`title`) USING BTREE,
  INDEX `href`(`href`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 272 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统菜单表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of ai_system_menu
-- ----------------------------
INSERT INTO `ai_system_menu` VALUES (227, 99999999, '后台首页', 'fa fa-home', 'index/welcome', '', '_self', 0, 1, '', NULL, 1639940923, NULL);
INSERT INTO `ai_system_menu` VALUES (228, 0, 'AiPhoto', 'fa fa-align-justify', '', '', '_self', 1, 1, '', NULL, 1639862710, NULL);
INSERT INTO `ai_system_menu` VALUES (234, 228, '菜单管理', 'fa fa-tree', 'system.menu/index', '', '_self', 0, 0, '', NULL, 1644526614, NULL);
INSERT INTO `ai_system_menu` VALUES (244, 228, '管理员管理', 'fa fa-user', 'system.admin/index', '', '_self', 0, 0, '', 1573185011, 1644347072, NULL);
INSERT INTO `ai_system_menu` VALUES (245, 228, '外链管理', 'fa fa-android', 'system.wxapp/index', '', '_self', 11, 1, '', 1573435877, 1639862390, NULL);
INSERT INTO `ai_system_menu` VALUES (246, 228, '节点管理', 'fa fa-list', 'system.node/index', '', '_self', 0, 0, '', 1573435919, 1642969529, NULL);
INSERT INTO `ai_system_menu` VALUES (247, 228, '基础配置', 'fa fa-asterisk', '', '', '_self', 100, 1, '', 1573457448, 1640617692, NULL);
INSERT INTO `ai_system_menu` VALUES (248, 228, '附件管理', 'fa fa-arrow-up', 'system.uploadfile/index', '', '_self', 2, 1, '', 1573542953, 1640890648, NULL);
INSERT INTO `ai_system_menu` VALUES (249, 0, '商城管理', 'fa fa-list', '', '', '_self', 0, 0, '', 1589439884, 1642963008, NULL);
INSERT INTO `ai_system_menu` VALUES (250, 249, '商品分类', 'fa fa-calendar-check-o', 'mall.cate/index', '', '_self', 0, 1, '', 1589439910, 1589439966, NULL);
INSERT INTO `ai_system_menu` VALUES (251, 249, '商品管理', 'fa fa-list', 'mall.goods/index', '', '_self', 0, 1, '', 1589439931, 1589439942, NULL);
INSERT INTO `ai_system_menu` VALUES (252, 228, '快捷入口', 'fa fa-list', 'system.quick/index', '', '_self', 0, 0, '', 1589623683, 1644347062, NULL);
INSERT INTO `ai_system_menu` VALUES (253, 228, '日志管理', 'fa fa-connectdevelop', 'system.log/index', '', '_self', 0, 0, '', 1589623684, 1642969541, NULL);
INSERT INTO `ai_system_menu` VALUES (254, 228, '用户管理', 'fa fa-user', '', '', '_self', 2, 1, '', 1639862738, 1642969636, NULL);
INSERT INTO `ai_system_menu` VALUES (255, 247, '小程序配置', 'fa fa-gg', 'system.config/index', '', '_self', 99, 1, '', 1640617762, 1640617762, NULL);
INSERT INTO `ai_system_menu` VALUES (256, 247, 'AI接口配置', 'fa fa-chrome', 'system.config/aiapi', '', '_self', 98, 1, '', 1640617851, 1640617851, NULL);
INSERT INTO `ai_system_menu` VALUES (257, 247, '流量主配置', 'fa fa-trademark', 'system.config/ad', '', '_self', 97, 1, '', 1640617912, 1640617912, NULL);
INSERT INTO `ai_system_menu` VALUES (258, 228, '菜单配置', 'fa fa-bars', 'system.tabbar/index', '', '_self', 12, 1, '', 1640627537, 1640627554, NULL);
INSERT INTO `ai_system_menu` VALUES (259, 228, '工具编辑', 'fa fa-gear', 'system.tool/index', '', '_self', 10, 1, '', 1640890719, 1640890719, NULL);
INSERT INTO `ai_system_menu` VALUES (260, 228, '轮播管理', 'fa fa-area-chart', 'system.rot/index', '', '_self', 99, 1, '', 1641406495, 1641406512, NULL);
INSERT INTO `ai_system_menu` VALUES (261, 254, '用户管理', 'fa fa-list', 'system.user/index', '', '_self', 10, 1, '', 1642104144, 1642173051, 1642173051);
INSERT INTO `ai_system_menu` VALUES (262, 228, '使用记录', 'fa fa-list', 'system.imglog/index', '', '_self', 2, 1, '', 1642104191, 1642969628, 1642969628);
INSERT INTO `ai_system_menu` VALUES (263, 228, '任务管理', 'fa fa-align-justify', '', '', '_self', 10, 1, '', 1642962978, 1642965568, NULL);
INSERT INTO `ai_system_menu` VALUES (264, 228, '积分充值', 'fa fa-hand-pointer-o', 'system.inte/index', '', '_self', 10, 1, '', 1642963089, 1642963089, NULL);
INSERT INTO `ai_system_menu` VALUES (265, 228, 'VIP管理', 'fa fa-drivers-license-o', 'system.vip/index', '', '_self', 10, 1, '', 1642963127, 1642963127, NULL);
INSERT INTO `ai_system_menu` VALUES (266, 263, '任务管理', 'fa fa-tasks', 'system.task/index', '', '_self', 0, 1, '', 1642965538, 1642965538, NULL);
INSERT INTO `ai_system_menu` VALUES (267, 263, '任务记录', 'fa fa-trello', 'system.tasklog/index', '', '_self', 0, 1, '', 1642965617, 1642965617, NULL);
INSERT INTO `ai_system_menu` VALUES (268, 254, '用户管理', 'fa fa-user-o', 'system.user/index', '', '_self', 0, 1, '', 1642969614, 1642969614, NULL);
INSERT INTO `ai_system_menu` VALUES (269, 254, '操作记录', 'fa fa-angle-right', 'system.imglog/index', '', '_self', 0, 1, '', 1642969662, 1642969662, NULL);
INSERT INTO `ai_system_menu` VALUES (270, 254, '充值记录', 'fa fa-paypal', 'system.paylog/index', '', '_self', 0, 1, '', 1643306759, 1643306759, NULL);
INSERT INTO `ai_system_menu` VALUES (271, 247, '邀请/签到', 'fa fa-address-book', 'system.config/qd', '', '_self', 99, 1, '', 1643398532, 1643398532, NULL);

-- ----------------------------
-- Table structure for ai_system_node
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_node`;
CREATE TABLE `ai_system_node`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `node` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '节点代码',
  `title` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '节点标题',
  `type` tinyint(1) NULL DEFAULT 3 COMMENT '节点类型（1：控制器，2：节点）',
  `is_auth` tinyint(1) UNSIGNED NULL DEFAULT 1 COMMENT '是否启动RBAC权限控制',
  `create_time` int(10) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` int(10) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `node`(`node`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 69 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统节点表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of ai_system_node
-- ----------------------------
INSERT INTO `ai_system_node` VALUES (1, 'system.admin', '管理员管理', 1, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (2, 'system.admin/index', '列表', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (3, 'system.admin/add', '添加', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (4, 'system.admin/edit', '编辑', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (5, 'system.admin/password', '编辑', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (6, 'system.admin/delete', '删除', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (7, 'system.admin/modify', '属性修改', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (8, 'system.admin/export', '导出', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (9, 'system.auth', '角色权限管理', 1, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (10, 'system.auth/authorize', '授权', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (11, 'system.auth/saveAuthorize', '授权保存', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (12, 'system.auth/index', '列表', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (13, 'system.auth/add', '添加', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (14, 'system.auth/edit', '编辑', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (15, 'system.auth/delete', '删除', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (16, 'system.auth/export', '导出', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (17, 'system.auth/modify', '属性修改', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (18, 'system.config', '系统配置管理', 1, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (19, 'system.config/index', '列表', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (20, 'system.config/save', '保存', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (21, 'system.menu', '菜单管理', 1, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (22, 'system.menu/index', '列表', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (23, 'system.menu/add', '添加', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (24, 'system.menu/edit', '编辑', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (25, 'system.menu/delete', '删除', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (26, 'system.menu/modify', '属性修改', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (27, 'system.menu/getMenuTips', '添加菜单提示', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (28, 'system.menu/export', '导出', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (29, 'system.node', '系统节点管理', 1, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (30, 'system.node/index', '列表', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (31, 'system.node/refreshNode', '系统节点更新', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (32, 'system.node/clearNode', '清除失效节点', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (33, 'system.node/add', '添加', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (34, 'system.node/edit', '编辑', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (35, 'system.node/delete', '删除', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (36, 'system.node/export', '导出', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (37, 'system.node/modify', '属性修改', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (38, 'system.uploadfile', '上传文件管理', 1, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (39, 'system.uploadfile/index', '列表', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (40, 'system.uploadfile/add', '添加', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (41, 'system.uploadfile/edit', '编辑', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (42, 'system.uploadfile/delete', '删除', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (43, 'system.uploadfile/export', '导出', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (44, 'system.uploadfile/modify', '属性修改', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (45, 'mall.cate', '商品分类管理', 1, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (46, 'mall.cate/index', '列表', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (47, 'mall.cate/add', '添加', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (48, 'mall.cate/edit', '编辑', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (49, 'mall.cate/delete', '删除', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (50, 'mall.cate/export', '导出', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (51, 'mall.cate/modify', '属性修改', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (52, 'mall.goods', '商城商品管理', 1, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (53, 'mall.goods/index', '列表', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (54, 'mall.goods/stock', '入库', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (55, 'mall.goods/add', '添加', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (56, 'mall.goods/edit', '编辑', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (57, 'mall.goods/delete', '删除', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (58, 'mall.goods/export', '导出', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (59, 'mall.goods/modify', '属性修改', 2, 1, 1589580432, 1589580432);
INSERT INTO `ai_system_node` VALUES (60, 'system.quick', '快捷入口管理', 1, 1, 1589623188, 1589623188);
INSERT INTO `ai_system_node` VALUES (61, 'system.quick/index', '列表', 2, 1, 1589623188, 1589623188);
INSERT INTO `ai_system_node` VALUES (62, 'system.quick/add', '添加', 2, 1, 1589623188, 1589623188);
INSERT INTO `ai_system_node` VALUES (63, 'system.quick/edit', '编辑', 2, 1, 1589623188, 1589623188);
INSERT INTO `ai_system_node` VALUES (64, 'system.quick/delete', '删除', 2, 1, 1589623188, 1589623188);
INSERT INTO `ai_system_node` VALUES (65, 'system.quick/export', '导出', 2, 1, 1589623188, 1589623188);
INSERT INTO `ai_system_node` VALUES (66, 'system.quick/modify', '属性修改', 2, 1, 1589623188, 1589623188);
INSERT INTO `ai_system_node` VALUES (67, 'system.log', '操作日志管理', 1, 1, 1589623188, 1589623188);
INSERT INTO `ai_system_node` VALUES (68, 'system.log/index', '列表', 2, 1, 1589623188, 1589623188);

-- ----------------------------
-- Table structure for ai_system_paylog
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_paylog`;
CREATE TABLE `ai_system_paylog`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userid` int(11) NULL DEFAULT NULL,
  `rmb` decimal(10, 2) NULL DEFAULT NULL,
  `inte` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` int(11) NULL DEFAULT NULL,
  `order` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ai_system_qdlog
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_qdlog`;
CREATE TABLE `ai_system_qdlog`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userid` int(11) NULL DEFAULT NULL,
  `lx` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ai_system_quick
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_quick`;
CREATE TABLE `ai_system_quick`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '快捷入口名称',
  `icon` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图标',
  `href` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '快捷链接',
  `sort` int(11) NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) UNSIGNED NULL DEFAULT 1 COMMENT '状态(1:禁用,2:启用)',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注说明',
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) NULL DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统快捷入口表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of ai_system_quick
-- ----------------------------
INSERT INTO `ai_system_quick` VALUES (1, '用户管理', 'fa fa-user', 'system.inte/index', 1, 1, '', 1589624097, 1644347042, NULL);
INSERT INTO `ai_system_quick` VALUES (2, '充值配置', 'fa fa-gratipay', 'system.inte/index', 98, 1, '', 1589624772, 1644347039, NULL);
INSERT INTO `ai_system_quick` VALUES (3, '积分任务', 'fa fa-tasks', 'system.task/index', 99, 1, '', 1589624097, 1644347034, NULL);
INSERT INTO `ai_system_quick` VALUES (6, '工具配置', 'fa fa-photo', 'system.tool/index', 100, 1, '', 1589624772, 1644347031, NULL);
INSERT INTO `ai_system_quick` VALUES (7, '外链推广', 'fa fa-link', 'system.wxapp/index', 108, 1, '', 1589624097, 1644347027, NULL);
INSERT INTO `ai_system_quick` VALUES (8, '底部菜单配置', 'fa fa-database', 'system.tabbar/index', 109, 1, '', 1589624772, 1644347024, NULL);
INSERT INTO `ai_system_quick` VALUES (10, '流量主广告', 'fa fa-buysellads', 'system.config/ad', 110, 1, '', 1589624097, 1644347020, NULL);
INSERT INTO `ai_system_quick` VALUES (11, '小程序配置', 'fa fa-external-link-square', 'system.config/index', 111, 1, '', 1589624772, 1644347016, NULL);

-- ----------------------------
-- Table structure for ai_system_rot
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_rot`;
CREATE TABLE `ai_system_rot`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `appid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `url` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `outimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sort` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT 1,
  `wx` int(11) NULL DEFAULT NULL,
  `zj` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of ai_system_rot
-- ----------------------------
INSERT INTO `ai_system_rot` VALUES (2, '测试', '', 1, '', 'pages/tool/aitool?id=13', '', 0, 1,1,1);

-- ----------------------------
-- Table structure for ai_system_tabbar
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_tabbar`;
CREATE TABLE `ai_system_tabbar`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `icon` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sicon` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` int(11) NOT NULL,
  `appid` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `outimg` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(11) NOT NULL,
  `sort` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of ai_system_tabbar
-- ----------------------------
INSERT INTO `ai_system_tabbar` VALUES (4, 'AI工具', '', '', 0, '', 'pages/index/index', '', 1, 100);
INSERT INTO `ai_system_tabbar` VALUES (5, '人脸趣玩', '', '', 0, '', 'pages/face/index', '', 1, 99);
INSERT INTO `ai_system_tabbar` VALUES (6, '更多工具', '', '', 0, '', 'pages/wxapp/wxapp', '', 1, 98);
INSERT INTO `ai_system_tabbar` VALUES (7, '个人中心', '', '', 0, '', 'pages/my/my', '', 1, 1);

-- ----------------------------
-- Table structure for ai_system_task
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_task`;
CREATE TABLE `ai_system_task`  (
  `id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `title` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(11) NOT NULL,
  `inte` int(11) NOT NULL,
  `appid` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` int(11) NOT NULL,
  `num` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `sort` int(11) NOT NULL,
  `pt` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Table structure for ai_system_tasklog
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_tasklog`;
CREATE TABLE `ai_system_tasklog`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `tid` int(11) NOT NULL,
  `time` int(11) NULL DEFAULT NULL,
  `date` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Table structure for ai_system_token
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_token`;
CREATE TABLE `ai_system_token`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `session_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Table structure for ai_system_tool
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_tool`;
CREATE TABLE `ai_system_tool`  (
  `id` bigint(20) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `bs` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `desc` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `y` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `x` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mrfg` int(11) NULL DEFAULT NULL,
  `isvip` int(11) NULL DEFAULT NULL,
  `inte` int(11) NULL DEFAULT NULL,
  `adsave` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  `sort` int(11) NULL DEFAULT NULL,
  `wx` int(11) NULL DEFAULT NULL,
  `zj` int(11) NULL DEFAULT NULL,
  `adgo` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ai_system_tool
-- ----------------------------
INSERT INTO `ai_system_tool` VALUES (00000000000000000001, 'hbtpss', '黑白图像上色', '老照片修复上色', '', '黑白照片一键上色', 1, '', '', 0, 0, 0, NULL, 1, 100,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000002, 'txfgzh', '图像风格转换', '图像风格转换', '', '多种画面风格可选择', 1, '', '', 1, 0, 0, 0, 1, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000003, 'txqw', '图像去雾', '图像去雾', '', '对浓雾天气下拍摄，导致细节无法辨认的图像进行去雾处理，还原更清晰真实的图像', 1, '', '', 0, 0, 0, 0, 1, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000004, 'txdbdzq', '图像对比度增强', '图像对比度增强', '', '调整过暗或者过亮图像的对比度，使图像更加鲜明', 1, '', '', 0, 0, 0, 0, 1, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000005, 'txxf', '图片去水印', '图片去水印', '', '去除图片中不需要的物体，并使用背景内容进行填充', 1, '', '', 0, 0, 0, 0, 1, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000006, 'txwsfd', '图像无损放大', '图像无损放大', '', '将图像在长宽方向各放大两倍，保持图像质量无损；可用于彩印照片美化、监控图片质量重建等场景', 1, '', '', 0, 0, 0, 0, 1, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000007, 'txlshf', '拉伸图像恢复', '拉伸图像恢复', '', '自动识别过度拉伸的图像，将图像内容恢复成正常比例', 1, '', '', 0, 0, 0, 0, 1, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000008, 'txqxdzq', '图像清晰度增强', '图像清晰度增强', '', '对压缩后的模糊图像实现智能快速去噪，优化图像纹理细节，使画面更加自然清晰', 1, '', '', 0, 0, 0, NULL, 1, 150,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000009, 'koutu', '智能抠图', '人像抠图', '', '一键抠人像，去背景', 1, '', '', 0, 0, 0, NULL, 1, 120,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000010, 'facebl', '变老人', '一键变老', '', '一键变老', 2, '', '', 0, 0, 0, 0, 1, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000011, 'facebx', '变小孩', '一键变小', '', '重返幼儿园', 2, '', '', 0, 0, 0, 0, 1, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000012, 'facesex', '变性别', '变性别', '', '可男可女', 2, '', '', 0, 0, 0, NULL, 1, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000013, 'rldmh', '人脸动漫化', '人脸动漫化', '', '一键穿越二次元', 2, '', '', 0, 0, 0, 0, 1, 1,1,1,0);

INSERT INTO `ai_system_tool` VALUES (00000000000000000014, 'fxbj', '改变发型', '改变发型', '', '一键发型改变，拾起你丢失的青春', 2, '', '', 0, 0, 0, NULL, 0, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000015, 'rxtx', '人脸特效', '人脸特效', '', '人脸特效，一键特效人头像制作', 2, '', '', 0, 0, 0, 0, 0, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000016, 'rxmhf', '人像漫画风', '人像漫画风（升级版）', '', '人脸日漫、全日漫、国潮复古风格自由选择', 2, '', '', 0, 0, 0, 0, 0, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000017, 'aikt', 'AI智能抠图', 'AI智能抠图', '', '一键人工智能抠图，AI抠图神器', 1, '', '', 0, 0, 0, NULL, 0, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000018, '3dyx', '3D游戏特效', '3D游戏特效', '', '快来制作你的专属3D游戏形象吧', 2, '', '', 0, 0, 0, 0, 0, 0,1,1,0);

INSERT INTO `ai_system_tool` VALUES (00000000000000000019, 'aibm', '智能变美', '人工智能修图', '', '一键变美，人工智能修图工具', 1, '', '', 0, 0, 0, NULL, 0, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000020, 'byzzy', '闭眼转睁眼', '一键人像睁眼', '', '闭眼转睁眼，珍贵照片没拍好？一键睁眼工具', 1, '', '', 0, 0, 0, 0, 0, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000021, 'hzp', '活照片', '照片动起来', '', 'AI照片动起来，一键照片变视频', 1, '', '', 0, 0, 0, NULL, 0, 0,1,1,0);
INSERT INTO `ai_system_tool` VALUES (00000000000000000022, 'bqbj', '表情编辑', '改变表情', '', '拍照忘记了笑？没关系，一键表情编辑', 2, '', '', 0, 0, 0, 0, 0, 0,1,1,0);

-- ----------------------------
-- Table structure for ai_system_uploadfile
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_uploadfile`;
CREATE TABLE `ai_system_uploadfile`  (
  `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `upload_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'local' COMMENT '存储位置',
  `original_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文件原名',
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '物理路径',
  `image_width` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '宽度',
  `image_height` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '高度',
  `image_type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '图片类型',
  `image_frames` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '图片帧数',
  `mime_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT 'mime类型',
  `file_size` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '文件大小',
  `file_ext` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sha1` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '文件 sha1编码',
  `create_time` int(10) NULL DEFAULT NULL COMMENT '创建日期',
  `update_time` int(10) NULL DEFAULT NULL COMMENT '更新时间',
  `upload_time` int(10) NULL DEFAULT NULL COMMENT '上传时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `upload_type`(`upload_type`) USING BTREE,
  INDEX `original_name`(`original_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '上传文件表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Table structure for ai_system_user
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_user`;
CREATE TABLE `ai_system_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `openid` varchar(222) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userimg` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pt` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0',
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gender` int(11) NULL DEFAULT 0,
  `country` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `viptime` varchar(222) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `addtime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `logintime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT 1,
  `inte` int(11) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Table structure for ai_system_vip
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_vip`;
CREATE TABLE `ai_system_vip`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `day` int(11) NULL DEFAULT NULL,
  `sday` int(11) NULL DEFAULT NULL,
  `rmb` decimal(10, 2) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  `sort` int(11) NULL DEFAULT NULL,
  `wx` int(11) NULL DEFAULT NULL,
  `zj` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '支付套餐' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of ai_system_vip
-- ----------------------------
INSERT INTO `ai_system_vip` VALUES (1, '月会员', 31, 2, 9.90, 1, 50,1,1);
INSERT INTO `ai_system_vip` VALUES (2, '季会员', 90, 10, 21.90, 1, 40,1,1);
INSERT INTO `ai_system_vip` VALUES (3, '年会员', 365, 31, 98.00, 1, 30,1,1);
INSERT INTO `ai_system_vip` VALUES (4, '永久会员', 36135, 100000, 0.01, 1, 20,1,1);
INSERT INTO `ai_system_vip` VALUES (6, '半年', 180, 15, 50.00, 1, 35,1,1);
INSERT INTO `ai_system_vip` VALUES (7, '3天体验卡', 3, 0, 0.01, 1, 100,1,1);

-- ----------------------------
-- Table structure for ai_system_wxapp
-- ----------------------------
DROP TABLE IF EXISTS `ai_system_wxapp`;
CREATE TABLE `ai_system_wxapp`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `xs` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `appid` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `url` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `outimg` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isvip` int(11) NULL DEFAULT NULL,
  `inte` int(11) NULL DEFAULT NULL,
  `status` int(11) NOT NULL,
  `sort` int(11) NOT NULL,
  `wx` int(11) NOT NULL,
  `zj` int(11) NOT NULL,
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) NULL DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

SET FOREIGN_KEY_CHECKS = 1;
