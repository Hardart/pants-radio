import news from '../../radio.articles.json'
export default defineEventHandler(async event => {
  const { slug } = await readBody(event)
  if (typeof slug !== 'string') return
  const newsItem = news.find(item => item.slug === slug)

  if (!newsItem)
    throw createError({
      statusCode: 404,
      message: 'Product is not found',
    })

  return newsItem
})
