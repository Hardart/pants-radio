export type User = {
  fullName: string
  avatar?: string
  roles: ['editor'?, 'host'?, 'admin'?]
  position: string
}