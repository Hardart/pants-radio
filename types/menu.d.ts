export type MenuItem = {
  slug: string
  label: string
  childrens?: MenuItem[]
  to: string
}