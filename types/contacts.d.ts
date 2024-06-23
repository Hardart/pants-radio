type BaseContactItem = {
  id: string
  label: string
  priority?: number
}
export type Phone = BaseContactItem & { number: string }
export type Mail = BaseContactItem & { address: string }

export type Address = BaseContactItem & {
  info: {
    fullAddress: string
    yaMapUrl: string
  }
}

export type Contact = {
  phones: Phone[]
  emails: Mail[]
  addresses: Address[]
}
