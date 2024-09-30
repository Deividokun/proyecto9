const puppeteer = require('puppeteer')
const fs = require('fs')

const ArrayDeJuegos = []

const scrapper = async (url) => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url)
  repeat(page, browser)
}

const repeat = async (page, browser) => {
  const Adivs = await page.$$('.force-badge')

  for (const div of Adivs) {
    let price
    let title = await div.$eval('.title', (el) => el.textContent)
    let img = await div.$eval('img', (el) => el.src)

    try {
      price = await div.$eval('.price', (el) =>
        parseFloat(el.textContent.slice(0, el.textContent.length - 1))
      )
      const gameModel = {
        title,
        price,
        img
      }
      ArrayDeJuegos.push(gameModel)
    } catch (error) {
      const gameModel = {
        title,
        img,
        stock: false
      }
      ArrayDeJuegos.push(gameModel)
    }
  }

  try {
    await page.$eval("[title='Next']", (el) => el.click())
    await page.waitForNavigation()
    repeat(page, browser)
  } catch (eror) {
    write(ArrayDeJuegos)
    await browser.close()
  }
}

const write = (ArrayDeJuegos) => {
  fs.writeFile('games.json', JSON.stringify(ArrayDeJuegos), () => {
    console.log('Archivo escrito')
  })
}

scrapper('https://www.instant-gaming.com/es/pc/steam/tendencias/')
