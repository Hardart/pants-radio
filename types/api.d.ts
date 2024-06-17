import type { Article, Category } from './article'
import type { Contacts, Mail, Phone } from './contacts'
import type { Program, ProgramResponse } from './program'
import type { Slide } from './slide'
import type { Track } from './track'
import type { User } from './user'

export declare module API {
  type MainPage = { articles: Article[]; hosts: User[]; slides: Slide[] }
  type Schedule = { _id: number; programs: ProgramResponse[] }
  type NewsPage = { articles: Article[]; categories: Category[] }
  type ArchivePage = { archive: Track[]; startFrom: string }
  type Programs = { programs: Program[] }
  type ContactsPage = { contacts: Contacts; commersial: Contacts }
  type ContactsTESTPage = { phones: Phone[]; emails: Mail[]; addresses: Address[] }
  type TeamPage = { team: User[] }
}
