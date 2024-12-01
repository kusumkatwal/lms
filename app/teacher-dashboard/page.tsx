'use client';
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseForm } from "@/components/CourseForm"
import { AssignmentForm } from "@/components/AssignmentForm"
// import { DeadlineForm } from "@/components/DeadlineForm"
import { CalendarEventForm } from "@/components/CalendarEventForm"
import { AnnouncementForm } from "@/components/AnnouncementForm"
import { CourseList } from "@/components/CourseList"
import { AssignmentList } from "@/components/AssignmentList"
// import { DeadlineList } from "@/components/DeadlineList"
import { Calendar } from "@/components/Calendar"
import { AnnouncementList } from "@/components/AnnouncementList"
import { Course, Assignment, Deadline, CalendarEvent, Announcement } from '@/types'

export default function TeacherDashboard() {
  const [courses, setCourses] = useState<Course[]>([])
  const [assignments, setAssignments] = useState<Assignment[]>([])
//   const [deadlines, setDeadlines] = useState<Deadline[]>([])
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  const generateRandomId = () => Math.random().toString(36).substring(2, 9);

  const handleCourseSubmit = (course: Omit<Course, 'id'>) => {
    const id = generateRandomId();
    setCourses([...courses, { ...course, id }])
  }

  const handleAssignmentSubmit = (assignment: Omit<Assignment, 'id'>) => {
    const id = generateRandomId();
    setAssignments([...assignments, { ...assignment, id }])
  }

  const handleEventSubmit = (event: Omit<CalendarEvent, 'id'>) => {
    const id = generateRandomId();
    setEvents([...events, { ...event, id }])
  }

  const handleAnnouncementSubmit = (announcement: Omit<Announcement, 'id'>) => {
    const id = generateRandomId();
    setAnnouncements([...announcements, { ...announcement, id }])
  }

  return (
    <div className="container mx-auto p-4 text-primary">
      <h1 className="text-2xl font-bold mb-6 text-primary">Teacher Dashboard</h1>
      <Tabs defaultValue="courses">
        <TabsList className="grid w-full grid-cols-5 text-primary">
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          {/* <TabsTrigger value="deadlines">Deadlines</TabsTrigger> */}
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CourseForm onSubmit={handleCourseSubmit} />
            <CourseList courses={courses} />
          </div>
        </TabsContent>
        <TabsContent value="assignments" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AssignmentForm onSubmit={handleAssignmentSubmit} courses={courses} />
            <AssignmentList assignments={assignments} courses={courses} />
          </div>
        </TabsContent>
        {/* <TabsContent value="deadlines" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DeadlineForm onSubmit={handleDeadlineSubmit} courses={courses} />
            <DeadlineList deadlines={deadlines} courses={courses} />
          </div>
        </TabsContent> */}
        <TabsContent value="calendar" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CalendarEventForm onSubmit={handleEventSubmit} courses={courses} />
            <Calendar events={events} />
          </div>
        </TabsContent>
        <TabsContent value="announcements" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnnouncementForm onSubmit={handleAnnouncementSubmit} />
            <AnnouncementList announcements={announcements} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

