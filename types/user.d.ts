export type User = {
  fullName: string
  avatar?: string
  roles: ['editor'?, 'host'?, 'admin'?, 'dj'?, 'press'?]
  position: string[]
}
