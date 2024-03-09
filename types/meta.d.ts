export type MetaData = {
  tags: string[]
  navList: IMenuItem[]
  tracks: {
    archive: {
      calendar: { start: string; end: string }
    }
  }
}
