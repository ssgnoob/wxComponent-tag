

let globalTipUserConfig = {};

// 获取页面上下文
function getPageCtx() {
  
    const pages = getCurrentPages();
     return pages[pages.length - 1];
  

  
}

// 获取当前页面的 Tip 配置数据
function getPageTipConfig(pageCtx) {
  const zanuiData = pageCtx.data.zanui || {};
  return zanuiData.__zanTipPageConfig || {};
}

// Tip 显示函数
function Tip(options) {
  // 参数格式化处理
  // 如果是文字，默认为 message
 
   
  let ctx = getPageCtx();
  const pageTipUserSetting = getPageTipConfig(ctx);
  const parsedOptions = {
    ...globalTipUserConfig,
    ...pageTipUserSetting,
    ...options
  };
  const TipCtx = ctx.selectComponent(parsedOptions.selector);

  if (!TipCtx) {
    console.error('无法找到对应的Tip组件，请于页面中注册并在 wxml 中声明 Tip 自定义组件');
    return;
  }
  TipCtx.clear()

  TipCtx.show({
    ...parsedOptions,
    show: true
  },parsedOptions.selector);


}


module.exports = Tip;
