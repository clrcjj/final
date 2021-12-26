const Router = require('koa-router');
let route = new Router();

route.prefix('/manage');


let loginRouter = require('./manage/login');
let mainRouter = require('./manage/main');
let logRouter = require('./manage/log');
let videoRouter = require('./manage/video');
let articleRouter = require('./manage/article');
let userRouter = require('./manage/user');
let messageRouter = require('./manage/message');
let navRouter = require('./manage/nav_type');
let linkRouter = require('./manage/link');
let advertRouter = require('./manage/advert');
let configRouter = require('./manage/config');


// 登录
route.use(loginRouter.routes()).use(loginRouter.allowedMethods());
// 首页
route.use(mainRouter.routes()).use(mainRouter.allowedMethods());
// 日志
route.use(logRouter.routes()).use(logRouter.allowedMethods());
// 视频
route.use(videoRouter.routes()).use(videoRouter.allowedMethods());
// 文章
route.use(articleRouter.routes()).use(articleRouter.allowedMethods());
// 用户
route.use(userRouter.routes()).use(userRouter.allowedMethods());
// 留言
route.use(messageRouter.routes()).use(messageRouter.allowedMethods());
// 导航
route.use(navRouter.routes()).use(navRouter.allowedMethods());
// 外链
route.use(linkRouter.routes()).use(linkRouter.allowedMethods());
// 广告
route.use(advertRouter.routes()).use(advertRouter.allowedMethods());
// 配置
route.use(configRouter.routes()).use(configRouter.allowedMethods());


module.exports = route