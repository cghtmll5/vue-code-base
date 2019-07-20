import Util from './util';
//此函数处理预先的代码
(function () {
  let statusBarHeight = 0;
  //处理ios头部高度增加的逻辑
  if (Util.versions().ios && Util.versions().mobile) {
    statusBarHeight = 0.4;
    //iPhoneX的状态栏高度要高一些
    if ((document.body.offsetWidth === 375 && document.body.offsetHeight === 812) || (screen.height === 812 && screen.width === 375)) {
      statusBarHeight = 0.8;
    }
    //iPhoneXR的状态栏高度要高一些
    if ((document.body.offsetWidth === 414 && document.body.offsetHeight === 896) || (screen.height === 896 && screen.width === 414)) {
      statusBarHeight = 0.85;
    }
  }
  //根据状态栏高度生成各类样式，使用时直接放入即可
  let styleList = [
    //生成标题栏高度的padding/margin/top/height
    `.title-bar-pt{padding-top:${statusBarHeight}rem}`,
    `.title-bar-mt{margin-top:${statusBarHeight}rem}`,
    `.content-top{top:${0.9 + statusBarHeight}rem}`,
    `.title-bar-height{height:${0.9 + statusBarHeight}rem}`,

    //因滚动组件必须子元素超出父元素才可滚动，所有中间可滚动的父元素和子元素的高度设置
    // 一 、顶部有tab栏选项卡的高度 1.02rem,底部有菜单栏入口的 高度 1rem
    `.headfoot-scroll-height{height:calc(100vh - ${2.92 + statusBarHeight}rem)}`,
    `.headfoot-scroll-children-height{min-height:calc(100vh - ${2.91 + statusBarHeight}rem);padding-bottom:.1rem;}`,
    // 二 、顶部有tab栏选项卡的高度 1.02rem,底部按钮类的 高度 .9rem
    `.headfootnav-scroll-height{height:calc(100vh - ${3.02 + statusBarHeight}rem)}`,
    `.headfootnav-scroll-children-height{min-height:calc(100vh - ${3.01 + statusBarHeight}rem);padding-bottom:.1rem;}`,
    // 三 、顶部有tab栏选项卡的高度 1.02rem
    `.headtab-scroll-height{height:calc(100vh - ${1.92 + statusBarHeight}rem)}`,
    `.headtab-scroll-children-height{min-height:calc(100vh - ${1.91 + statusBarHeight}rem);padding-bottom:.1rem;}`,
    // 三 、顶部有时间筛选的高度 1.12rem
    `.headtime-scroll-height{height:calc(100vh - ${2.02 + statusBarHeight}rem)}`,
    `.headtime-scroll-children-height{min-height:calc(100vh - ${1.96 + statusBarHeight}rem);}`,
    // 四 、底部有按钮的高度 .9rem
    `.footbtn-scroll-height{height:calc(100vh - ${1.8 + statusBarHeight}rem)}`,
    `.footbtn-scroll-children-height{min-height:calc(100vh - ${1.79 + statusBarHeight}rem);padding-bottom:.1rem;}`,
    // 五 、底部有菜单栏的高度 1rem
    `.footnav-scroll-height{height:calc(100vh - ${1.9 + statusBarHeight}rem)}`,
    `.footnav-scroll-children-height{min-height:calc(100vh - ${1.89 + statusBarHeight}rem);padding-bottom:.1rem;}`,
    // 六 、什么都没有的
    `.wrapper-scroll-height{height:calc(100vh - ${0.9 + statusBarHeight}rem)}`,
    `.wrapper-scroll-children-height{min-height:calc(100vh - ${0.89 + statusBarHeight}rem);padding-bottom:.1rem;}`,
    //七、顶部有时间刷选和tab
    `.headeTabTime-scroll-height{height:calc(100vh - ${3.04+ statusBarHeight}rem)}`,
    `.headeTabTime-scroll-children-height{min-height:calc(100vh - ${3.03 + statusBarHeight}rem);padding-bottom:.1rem;}`,
  ];
  let style = document.createElement("style");
  style.type = "text/css";
  try {
    style.appendChild(document.createTextNode(styleList.join("")));
  } catch (e) {
    style.styleSheet.cssText = styleList.join("");
  }
  let head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
})();
