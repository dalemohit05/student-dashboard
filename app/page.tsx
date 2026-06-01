import { supabase } from './lib/supabase'
import { Course } from './lib/types'
import Sidebar from './components/Sidebar/Sidebar'
import BentoGrid from './components/BentoGrid/BentoGrid'
import MobileNav from './components/Sidebar/MobileNav'
import { AlertTriangle } from 'lucide-react'

async function getCourses(): Promise<{ data: Course[]; error: string | null }> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Supabase error:', error.message)
    return { data: [], error: error.message }
  }

  return { data: data ?? [], error: null }
}

export default async function Page() {
  const { data: courses, error } = await getCourses()

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 overflow-y-auto pb-24 md:pb-6">
        {error ? (
          <div
            className="flex items-center gap-3 p-4 rounded-2xl"
            style={{
              background: '#ff000015',
              border: '1px solid #ff000040',
              color: '#ff6b6b',
            }}
          >
            <AlertTriangle size={18} />
            <div>
              <p className="font-semibold text-sm">Failed to load courses</p>
              <p style={{ fontSize: '12px', opacity: 0.7 }}>{error}</p>
            </div>
          </div>
        ) : (
          <BentoGrid courses={courses} />
        )}
      </main>

      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  )
}