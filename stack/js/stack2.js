class RouterStack{
  constructor() {
    this._i = Symbol('routerStack')
    this[this._i] = {}
    this.length = 0;
  }
  push(node) {
    this[this._i][this.length] = node;
    this.length++
  }
  pop() {
    if (this.isEmpty()) {
      return null
    }
    this.length--
    const r = this[this._i][this.length]
    delete this[this._i][this.length]
    return r
  }
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this[this._i][this.length - 1]
  }
  isEmpty() {
    return this.length === 0;
  }
  clear() {
    this[this._i] = {}
  }
}

function stackFactory() {
  return new RouterStack();
}

const pageTemplate = {
  html0: `<div class="home-page page page-0 slide-enter-right"><div class="top-area"><div class="total">微信（500）</div><div class="actions"><ul class="icons"><li class="icon icon-search"></li><li class="icon icon-add"></li></ul></div></div><div class="list-view router"><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><div class="top"><span class="name">进阶学习</span> <span class="date">昨天</span></div><p class="information">栈学习</p></div></li><li class="list"><div class="avatar"></div><div class="context"><div class="top"><span class="name">进阶学习</span> <span class="date">昨天</span></div><p class="information">栈学习</p></div></li></ul></div></div>`,
  html1: `<div class="link-page page page-1 slide-enter-right" style="display:none"><div class="top-area"><div class="total">通讯录</div><div class="actions"><ul class="icons"><li class="icon icon-search"></li><li class="icon icon-add"></li></ul></div></div><div class="listView"><div class="session"><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">新的朋友</span></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">群聊</span></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">标签</span></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">公众号</span></div></li></ul></div><div class="session"><div class="headline">A</div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">标签</span></div></li></ul></div></div></div>`,
  html2: `<div class="find-page page page-2 slide-enter-right" style="display:none"><div class="top-area"><div class="total">发现</div><div class="actions"><ul class="icons"><li class="icon icon-search"></li><li class="icon icon-add"></li></ul></div></div><div class="listView"><div class="session"><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">朋友圈</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">视频号</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">扫一扫</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">摇一摇</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">看一看</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">搜一搜</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">附近的人</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">购物</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">游戏</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">小程序</span> <i class="arrow-icon"></i></div></li></ul></div></div></div>`,
  html3: `<div class="me-page page page-3 slide-enter-right" style="display:none"><div class="top-areas"><i class="icon-camera"></i><div class="personal-wrapper"><div class="avatar"><img src="./images/avatar.jpg" alt="" width="100%" height="100%"></div><div class="context"><h3 class="nick-name">军哥哥</h3><div class="person-wx-info"><p class="wx-id">微信号： wx-8888</p><div class="code-img-wrapper"><img class="code-img" src="./images/code-icon.png" alt=""> <i class="icon-arrow"></i></div></div></div></div></div><div class="listView"><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">支付</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">收藏</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">相册</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">卡包</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">表情</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">设置</span> <i class="arrow-icon"></i></div></li></ul></div></div></div>`
};

const childHtml = {
  child1: `<div class="chat-page page" style="display:none"><div class="top-areas"><div class="leading"><i class="icon-back"></i> <span class="nick-name">金三胖</span></div><div class="actions"><i class="icon-more">···</i></div></div><div class="listView"><ul class="lists"><li class="list"><div class="avatar"><img src="./images/avatar.jpg" alt="" width="100%" height="100%"></div><div class="context"><span class="send-message">跟着波波老师学思维 </span><i class="icon-triangle"></i></div></li></ul></div><div class="chat-footer"><i class="icon icon-voice"></i><div class="input-wrapper"><input type="text"></div><div class="right-icons"><i class="icon icon-smile"></i> <i class="icon icon-add"></i></div></div></div>`
}

const $footer = $('.footer');
const pageStacks = stackFactory();
const childStacks = stackFactory();

$(function() {
  let currentIndex = 0;
  const cachePage = [0];
  handleStacks(currentIndex); // 添加首页入栈
  $footer.before(pageStacks.peek());
  const currentele = joinClassName('page', currentIndex)
  $footer.on('click', '.tab', function() {
    const index = $(this).index();
    if (currentIndex === index) return;
    addClass($(`.page-${currentIndex}`), 'slide-leave-left');
    if (!cachePage.includes(index)) {
      cachePage.push(index);
      handleStacks(index);
      $footer.before(pageStacks.peek());
      $(`page-${index}`).css('display', 'block');
    }

    // setTimeout(() => {
    //   $(`page-${currentIndex}`).css('display', 'none');
    //   removeClass($(`page-${currentIndex}`))
    //   currentIndex = index;
    // }, 500);
  })
});

//往栈里添加数据
function handleStacks(index) {
  pageStacks.push(pageTemplate[`html${index}`]);
}


// 移除样式
function removeClass(...nodes) {  
  let allNodes = [];
  for (let i = 0, len = nodes.length; i < len; i++) {
    allNodes.push(...Array.from(nodes[i]))
  }
  allNodes.forEach(item => {
    const classes = $(item).attr('class')
    if (classes.includes('slide')) {
      $(item).attr('class', classes.replace(/(\s*)slide-.+?(\s|$)/g, ''));
    }
  });
}
// 添加样式
function addClass(node, className) {
  node.addClass(className)
}

function joinClassName(className, index) {
  return $(`.${className}-${index}`);
}