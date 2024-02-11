export default defineEventHandler(event => {
  const menu = [
    {
      slug: '',
      label: 'Радио',
      childrens: [
        { slug: 'schedule', label: 'Сетка вещания' },
        { slug: 'hosts', label: 'Ведущие' },
        { slug: 'podcasts', label: 'Подкасты' },
        { slug: 'live', label: 'Прямой эфир' },
        { slug: 'news', label: 'Новости' },
      ],
    },
    {
      slug: 'programs',
      label: 'Программы',
      childrens: [
        { slug: 'top-chart', label: 'TOP Chart 20' },
        { slug: '', label: 'Итоги недели' },
        // { slug: '', label: 'Лучшие треки недели' },
      ],
    },
    {
      slug: 'promo',
      label: 'Конкурсы',
      childrens: [
        { slug: 'how-get-prize', label: 'Как получить приз' },
        { slug: 'model-regulations', label: 'Правила участия в играх' },
      ],
    },
    {
      slug: 'contacts',
      label: 'Контакты',
      childrens: [
        { slug: 'about', label: 'О радиостанции' },
        { slug: 'team', label: 'Команда' },
      ],
    },
  ] as IMenuItem[]

  const menuWithLink: IMenuItem[] = addLinkToMenuItem(menu)
  return menuWithLink
})

function addLinkToMenuItem(menuItems: IMenuItem[]) {
  return menuItems.map(mapMenuItem())
}

function mapMenuItem(parentLink: string = '') {
  return function (item: IMenuItem) {
    item.link = `${parentLink}/${item.slug}`.replace('//', '/')
    item.childrens = item.childrens?.map(mapMenuItem(item.link))
    return item
  }
}
