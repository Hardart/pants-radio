export type Phone = {
  phone: string
}

export type Email = {
  mail: string
}

export type Address = {
  address: {
    href: string
    text: string
  }
}

export type Contact = { label: string } & (Phone | Email | Address)

export type Contacts = {
  phones: ({ label: string } & Phone)[]
  mails: ({ label: string } & Email)[]
  addresses: ({ label: string } & Address)[]
}
