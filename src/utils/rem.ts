(function init(screenRatioByDesign = 16 / 9) {
  const docEle = document.documentElement;
  function setHtmlFontSize() {
    const screenRatio = docEle.clientWidth / docEle.clientHeight;
    const fontSize = (
      screenRatio > screenRatioByDesign
        ? (screenRatioByDesign / screenRatio)
        : 1
    ) * docEle.clientWidth / 10;
    docEle.style.fontSize = `${fontSize.toFixed(3)}px`;
  }
  setHtmlFontSize();
  window.addEventListener('resize', setHtmlFontSize);
})();
