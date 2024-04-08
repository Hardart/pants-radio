export type MetaData = {
  tagList: string[]
  mainMenu: IMenuItem[]
  tracks: {
    archive: {
      calendar: { start: string; end: string }
    }
  }
}
