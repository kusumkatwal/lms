export type Course = {
    id: string
    title: string
    description: string
  }
  
  export type Assignment = {
    id: string
    title: string
    description: string
    courseId: string
    dueDate: Date
  }
  
  export type Deadline = {
    id: string
    title: string
    dueDate: Date
    courseId: string
  }
  
  export type CalendarEvent = {
    id: string
    title: string
    start: Date
    end: Date
    courseId: string
  }
  
  export type Announcement = {
    id: string
    title: string
    content: string
    date: Date
    type: 'announcement' | 'news'
  }
  
  