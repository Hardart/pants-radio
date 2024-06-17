type BaseContactItem = {
  id: string
  label: string
  showIn: ['footer'?, 'contacts'?, 'commersial'?]
  priority?: number
}
export type Phone = BaseContactItem & { number: string }

export type Mail = BaseContactItem & { address: string }

export type Address = BaseContactItem & {
  address: string
  city: string
  state: string
  zip: number
  mapUrl: {
    yandex: string
  }
}

export type Contacts = {
  phones: Phone[]
  emails: Mail[]
  addresses: Address[]
}
