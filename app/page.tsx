import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { HeroBanner } from "@/components/hero.banner"
import hero from "../assets/images/BG.png"
import { UpcomingDeadlines } from "@/components/upcomingdeadlines"
import { Calendar } from "@/components/Calendar"
import { Announcements } from "@/components/announcements"

// Mock data - replace with actual data fetching logic
const deadlines = [
  { id: '1', title: 'Math Assignment', dueDate: new Date('2023-06-15'), course: 'Mathematics 101' },
  { id: '2', title: 'History Essay', dueDate: new Date('2023-06-18'), course: 'World History' },
]

const events = [
  { id: '1', title: 'Math Class', start: new Date('2023-06-14T10:00:00'), end: new Date('2023-06-14T11:30:00') },
  { id: '2', title: 'History Seminar', start: new Date('2023-06-16T14:00:00'), end: new Date('2023-06-16T16:00:00') },
]

const announcements = [
  { id: '1', title: 'New Course Available', content: 'Enroll now in our new Python Programming course!', date: new Date('2023-06-10'), type: 'announcement' as const },
  { id: '2', title: 'Campus Closure', content: 'The campus will be closed on June 20th for maintenance.', date: new Date('2023-06-12'), type: 'news' as const },
]
export default function Home() {
  return (
    <div>
       <HeroBanner
        title="Karnali Bikas Vidhyalaya"
        subtitle="Education Our Necessity"
        ctaText="Get Started"
        ctaLink="/courses"
        imageSrc={hero.src}
      /> 
      <div className="container mx-auto px-4 py-8 mt-4">
      <h1 className="text-4xl font-bold mb-2 text-center text-primary">Welcome to Student LMS</h1>
      <p className="text-center text-muted-foreground mb-8">Your gateway to learning and achievement</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-primary">Courses</CardTitle>
            <CardDescription>Browse and enroll in available courses</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/courses">View Courses</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-primary">Assignments</CardTitle>
            <CardDescription>View and submit your assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/assignments">View Assignments</Link>
            </Button>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
        <div>
          <UpcomingDeadlines deadlines={deadlines} />
        </div>
        <div>
          <Announcements items={announcements} />
        </div>
        </div>
        <div className="mt-3">
        <Calendar events={events} />
      </div>
      </div>
      
      
    
      
    </div>
    </div>
  )
}

