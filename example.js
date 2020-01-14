const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://blog.testproject.io/');
//     await page.screenshot({path: 'example.png'});

//     await browser.close();
// })();

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://blog.testproject.io/', {
        waitUntil: 'networkidle2'
    });
    
    const pdf = await page.pdf({
        path: 'test3.pdf',
        format: 'A4',
        printBackground: false,
    });
    
    await browser.close();
    // console.log(pdf) // maybe do response(pdf).type('x-pdf')
})();