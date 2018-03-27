const puppeteer = require('puppeteer');
const {screenshot} = require( './config/default');

(async()=>{
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.baidu.com');
  await page.screenshot({
  path: '${screenshot}/${Data.now()}.png'
});
  await browser.close();
})();