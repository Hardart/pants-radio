import metadata from '../local/menu.json'
export default defineEventHandler(event => {
  const menu = metadata as IMenuItem[]
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
