export default {
  setRem() {
      var winW = document.documentElement.clientWidth || document.body.clientWidth;
      var ui_W = 375;
      var rate = winW / ui_W;
      document.getElementsByTagName('html')[0].style.fontSize = rate * 100 + "px";
  }
}