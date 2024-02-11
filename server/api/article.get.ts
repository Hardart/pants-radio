export default defineEventHandler(event => {
  const news = [
    {
      id: '1233424',
      text: 'slvshvionjkdnv ejvoidjsvsv',
      slug: 'have-you-had-your-checkup-this-year-stay-on-top',
      categorySlug: 'category',
    },
    {
      id: '1233424',
      text: 'slvshvionjkdnv ejvoidjsvsv afsfdjgshgs sfhsf hsshgjskdh sgsfdhg sdhsd sdfg ldsgsdfgsdjlksj glkjklg js lksdfjglksdfnjg lsfngjls sdfjgsldjgslkjgergjreijubhiubsenkjn3h jvdfbvds hsfh',
      slug: 'employee-portraits-get-to-know-ella-and-cedric',
      categorySlug: 'category',
    },
  ]

  const { newsSlug, categorySlug } = getQuery(event)
  if (typeof newsSlug !== 'string' || typeof categorySlug !== 'string') return
  const newsItem = news.find(item => item.slug === newsSlug && item.categorySlug === categorySlug)

  if (!newsItem)
    throw createError({
      statusCode: 404,
      message: 'Product is not found',
    })

  return newsItem
})
