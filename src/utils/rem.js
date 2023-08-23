function recalc() {
  const h = document.getElementsByTagName('html')[0];
  // w代表实际宽度,获取当前屏幕可视区域大小
  const w = document.documentElement.clientWidth || document.body.clientWidth;
  // d代表设计宽度
  const d = 375;
  // 来动态设置html根标签的字体大小
  if (w >= 640) {
    h.style.fontSize = '120px';
  } else {
    h.style.fontSize = (w / d) * 100 + 'px';
  }
}
recalc();
window.onresize = function () {
  recalc();
};

export function remToPx(res) {
  let clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = 100 * (clientWidth / 375);
  return res * fontSize;
}
