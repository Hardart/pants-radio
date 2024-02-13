import news from '../local/articles.json'
export default defineEventHandler(async event => {
  const { page } = await readBody(event)

  // if (typeof page !== 'string') throw createError('ERROR')

  function sliceNews(): ICard[] {
    const start = (page - 1) * 4
    const end = 4 * page
    return news.slice(start, end)
  }
  const filteredNews = sliceNews()
  return { news: filteredNews, total: news.length }
})
