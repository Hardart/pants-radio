import type { Article, Category } from './article'
import type { Contact, Contacts, Mail, Phone } from './contacts'
import type { Program, ProgramSchedule } from './program'
import type { Slide } from './slide'
import type { Track } from './track'
import type { User } from './user'

export declare module API {
  type MainPage = { articles: Article[]; hosts: User[]; slides: Slide[] }
  type Schedule = { _id: number; programs: ProgramSchedule[] }
  type NewsPage = { articles: Article[]; categories: Category[] }
  type ArchivePage = { archive: Track[]; startFrom: string }
  type Programs = { programs: Program[] }
  type ContactsPage = { contacts: Contact; commersial: Contacts }
  type ContactsTESTPage = Contact
  type TeamPage = { team: User[] }
}
