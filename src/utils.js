export function get_window_messages () {
  var s = ''
  s += ' 网页可见区域宽：' + document.body.clientWidth + '<br>'
  s += ' 网页可见区域高：' + document.body.clientHeight + '<br>'
  s +=
    ' 网页可见区域宽：' +
    document.body.offsetWidth +
    ' (包括边线和滚动条的宽)' +
    '<br>'
  s +=
    ' 网页可见区域高：' +
    document.body.offsetHeight +
    ' (包括边线的宽)' +
    '<br>'
  s += ' 网页正文全文宽：' + document.body.scrollWidth + '<br>'
  s += ' 网页正文全文高：' + document.body.scrollHeight + '<br>'
  s += ' 网页被卷去的高(ff)：' + document.body.scrollTop + '<br>'
  s += ' 网页被卷去的高(ie)：' + document.documentElement.scrollTop + '<br>'
  s += ' 网页被卷去的左：' + document.body.scrollLeft + '<br>'
  s += ' 网页正文部分上：' + window.screenTop + '<br>'
  s += ' 网页正文部分左：' + window.screenLeft + '<br>'
  s += ' 屏幕分辨率的高：' + window.screen.height + '<br>'
  s += ' 屏幕分辨率的宽：' + window.screen.width + '<br>'
  s += ' 屏幕可用工作区高度：' + window.screen.availHeight + '<br>'
  s += ' 屏幕可用工作区宽度：' + window.screen.availWidth + '<br>'
  s += ' 你的屏幕设置是 ' + window.screen.colorDepth + ' 位彩色' + '<br>'
  s += ' 你的屏幕设置 ' + window.screen.deviceXDPI + ' 像素/英寸' + '<br>'

  return s
}

export function set_svg_path_len (selecter) {
  const paths = document.querySelectorAll(selecter)
  paths.forEach(path => {
    const len = path.getTotalLength() + 1
    path.style.setProperty('--l', len)
  })
}

export function dqc(selector, className) {
  let dqList = document.querySelectorAll(selector);
  dqList.forEach(element => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  });
}

export function dqc_rm(selector, className) {
  let dqList = document.querySelectorAll(selector);
  dqList.forEach(element => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  });
}

export function dqc_ad(selector, className) {
  let dqList = document.querySelectorAll(selector);
  dqList.forEach(element => {
    if (!element.classList.contains(className)) {
      element.classList.add(className);
    }
  });
}