import type { Contact } from './contacts'

interface IFooterInfoItem {
  iconValue: string | number
  text: string
}

export type FooterMeta = Contact & {
  smsInfo: IFooterInfoItem
  licenseInfo: IFooterInfoItem
}
