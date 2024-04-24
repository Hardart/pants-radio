import type { Article, Category } from "./article";
import type { ProgramResponse } from "./program";
import type { Track } from "./track";


export declare module API {
  type Schedule = { _id: number, programs: ProgramResponse[] }
  type NewsPage = { articles: Article[], categories: Category[] }
  type ArchivePage = { archive: Track[] }
}