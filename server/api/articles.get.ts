import news from '../local/articles.json'
export default defineEventHandler(event => {
  const query = getQuery(event)
  const page = Number(query.page) || 1
  let filteredNews = news
  if ('tag' in query) {
    filteredNews = filteredNews.filter(filterNews)
  }

  if ('limit' in query) filteredNews = filteredNews.slice(0, Number(query.limit))

  function sliceNews(): ICard[] {
    const start = (page - 1) * 4
    const end = 4 * page
    return filteredNews.slice(start, end)
  }

  function filterNews(article: any) {
    if (article.tags.some((tag: any) => tag.title == query.tag)) return article
  }
  // if (!newsItem)
  //   throw createError({
  //     statusCode: 404,
  //     message: 'Product is not found',
  //   })

  return { news: sliceNews(), total: filteredNews.length }
})
