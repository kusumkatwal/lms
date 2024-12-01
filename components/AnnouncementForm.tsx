import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Announcement } from '@/types'

export function AnnouncementForm({ onSubmit }: { onSubmit: (announcement: Omit<Announcement, 'id'>) => void }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [type, setType] = useState<'announcement' | 'news'>('announcement')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ title, content, date: new Date(), type })
    setTitle('')
    setContent('')
    setType('announcement')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Announcement Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Announcement Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <Select onValueChange={(value) => setType(value as 'announcement' | 'news')} defaultValue={type}>
        <SelectTrigger>
          <SelectValue placeholder="Select Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="announcement">Announcement</SelectItem>
          <SelectItem value="news">News</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit">Create Announcement</Button>
    </form>
  )
}

