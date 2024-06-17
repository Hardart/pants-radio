import type { Contacts } from './contacts'

interface IFooterInfoItem {
  iconValue: string | number
  text: string
}

export type FooterMeta = {
  smsInfo: IFooterInfoItem
  licenseInfo: IFooterInfoItem
  contacts: Contacts
}
