const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto("http://localhost:5500", {
    waitUntil: "networkidle2",
  });

  const body = await page.content();

  const $ = await cheerio.load(body);

  let data = $("div#foo");

  console.log(data.text());  // Ouput: Foo

  await browser.close();
})();
