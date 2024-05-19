import type { Article, Category } from './article'
import type { Program, ProgramResponse } from './program'
import type { Slide } from './slide'
import type { Track } from './track'
import type { User } from './user'

export declare module API {
  type MainPage = { articles: Article[]; hosts: User[]; slides: Slide[] }
  type Schedule = { _id: number; programs: ProgramResponse[] }
  type NewsPage = { articles: Article[]; categories: Category[] }
  type ArchivePage = { archive: Track[] }
  type Programs = { programs: Program[] }
}
