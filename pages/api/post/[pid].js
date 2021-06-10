const puppeteer = require('puppeteer');

export default function handler(req, res) {
    
 

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
 await page.setDefaultNavigationTimeout(0);
 
   try {
  await page.goto('http://www.jionlab.co.kr');
} catch (e) {
  if (e instanceof puppeteer.errors.TimeoutError) {
    // Do something if this is a timeout.
  }
}
 
   const   buffer = await page.screenshot( );
  await browser.close();
     res.contentType('image/jpeg');
   res.end(buffer, 'binary');
})();


 

  }