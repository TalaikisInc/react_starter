const puppeteer = require('puppeteer')
const faker = require('faker')
const devices = require('puppeteer/DeviceDescriptors')
const iPhone = devices['iPhone 6']
const URL = 'http://localhost:3000/'

const user = {
  email: faker.internet.email(),
  password: 'test',
}

const isDebugging = () => {
  let debugging_mode = {
    headless: false,
    slowMo: 50,
    devtools: true,
  }

  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

let browser
let page
beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging())
  page = await browser.newPage()
  await page.goto(URL)
  page.emulate(iPhone)
})

describe('on page load ', () => {
  test(
    'h1 loads correctly',
    async () => {
      const html = await page.$eval('.title', e => e.innerHTML)

      expect(html).toBe('Yo, there!')
    },
    1600000
  )

  /*test('nav loads correctly', async () => {
    const navbar = await page.$eval('.navbar', el => (el ? true : false));
    const listItems = await page.$$('.nav-li');

    expect(navbar).toBe(true);
    expect(listItems.length).toBe(4);
  })*/

  test('monkey test it', async () => {
    (async () => {
      const browser = await puppeteer.launch({headless: false})
      const page = await browser.newPage()
      await page.goto(URL)
      await page.addScriptTag({ url: 'https://rawgithub.com/marmelab/gremlins.js/master/gremlins.min.js' })
      await page.evaluate(() => {
        window.gremlins.createHorde().unleash()
      })
    })()
  })

  /*test('login form works correctly', async () => {
      const firstNameEl = await page.$('[data-testid="firstName"]');
      const lastNameEl = await page.$('[data-testid="lastName"]');
      const emailEl = await page.$('[data-testid="email"]');
      const passwordEl = await page.$('[data-testid="password"]');
      const submitEl = await page.$('[data-testid="submit"]');

      await firstNameEl.tap();
      await page.type('[data-testid="firstName"]', user.firstName);

      await lastNameEl.tap();
      await page.type('[data-testid="lastName"]', user.lastName);

      await emailEl.tap();
      await page.type('[data-testid="email"]', user.email);

      await passwordEl.tap();
      await page.type('[data-testid="password"]', user.password);

      await submitEl.tap();

      await page.waitForSelector('[data-testid="success"]');
    },
    1600000
  );*/
});

afterAll(() => {
  if (isDebugging()) {
    browser.close()
  }
})
