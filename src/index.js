const { get } = require('axios')
const { load } = require('cheerio')

const url = 'https://time.ir'

async function getQuote(){
  try {
    const { data } = await get(url)
    const $ = load(data)
    const quote = $('.quoteText').text()
    const author = $('.quoteAuthor').text()
    const result = `${quote}\n\n[${author}]`
    return result
  } catch(e){
    console.error(`error! -> ${e}`)
  }
}

module.exports = getQuote
