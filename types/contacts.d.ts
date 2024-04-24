import { Contact } from "./footer"

interface IContactItem {
  title: string
  description?: string
  phones: Contact[]
  emails: Contact[]

}

export type Contacts = {
  contacts: IContactItem & { address: string }
  commercial: IContactItem
}
