export type Phone = {
  type: 'phone'
  phone: string
} 

export type Email = {
  type: 'mail'
  mail: string
}

export type Link = {
  type: 'link'
  href: string
  text: string
}

export type Contact = { label: string } & ( Phone | Email | Link )

interface IFooterInfoItem {
  iconValue: string | number
  text: string
}

export type FooterMeta =  {
  smsInfo: IFooterInfoItem
  licenseInfo: IFooterInfoItem
  contacts: Contact[]
}