class BaseHW {
  async navigate(url) {
    await browser.url(url);
  }
}

module.exports = BaseHW;
