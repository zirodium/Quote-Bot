const { Bot } = require('grammy')
const getQuote = require('./src')

const bot = new Bot('2039391224:AAGBVCalPeTXIGolD5V5es9sJ43_h5AVzLo')

bot.command('start', async ctx => {
  try {
    let fname = ctx.msg.from.first_name
    await bot.api.sendMessage(ctx.msg.chat.id, `سلام ${fname}!\nبرای دریافت نقل قول جدید دستور quote رو بفرست`)
  } catch(e){
    console.log(e)
  }
})

bot.hears(/^quote$/, async ctx => {
  try {
    const quote = await getQuote()
    await bot.api.sendMessage(ctx.msg.chat.id, quote)
  } catch(e){
    console.log(e)
  }
})

bot.start()
/*
;(async () => {
  const res = await getQuote()
  console.log(res)
})()
*/
