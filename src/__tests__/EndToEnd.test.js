// Feature 1: Filter Events by City
// Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
// Scenario 2: User should see a list of suggestions when they search for a city.
// Scenario 3: User can select a city from the suggested list.

// Feature 2: Show/hide an event details
// Scenario 1: An event element is collapsed by default.
// Scenario 2: User can expand an event to see its details.
// Scenario 3: User can collapse an event to hide its details.

import puppeteer from 'puppeteer';


describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250, // slow down by 250ms
            // ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
        

    });

    afterAll(() => {
        browser.close();
      });


    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
    
      });


      test('User can expand an event to see its details', async () => {
        await page.click('.event .show-details');
    
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeDefined();
        
      });

      test('User can collapse an event to hide its details', async () => {
        await page.click('.event .hide-details');
    
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
    
      });

});




describe('Filter events by city', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    
  });

  afterAll(async () => {
    await browser.close();
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
    await page.goto('http://localhost:3000/');
    const events = await page.$('.event');
    expect(events).toBeDefined();
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.goto('http://localhost:3000/');
    const cityInput = await page.$('.city');
    await cityInput.type('Berlin');
    const suggestions = await page.$('.suggestions li');
    expect(suggestions).toBeDefined();
  });

  test('User can select a city from the suggested list', async () => {
    await page.goto('http://localhost:3000/');
    const cityInput = await page.$('.city');
    await cityInput.type('Berlin');
    const suggestion = await page.$('.suggestions li');
    await suggestion.click();
    const selectedCity = await page.$eval('.city', (el) => el.value);
    expect(selectedCity).toBe('Berlin, Germany');
    const events = await page.$('.event');
    expect(events).toBeDefined();
  });
});



