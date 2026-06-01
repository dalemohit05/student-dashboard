import SkeletonTile from './components/ui/SkeletonTile'

export default function Loading() {
  return (
    <div className="flex min-h-screen">
      <div
        className="hidden md:block w-[220px] shrink-0"
        style={{ background: '#111118', borderRight: '1px solid #ffffff0f' }}
      />
      <main className="flex-1 p-6">
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
        >
          <SkeletonTile className="col-span-2 !min-h-[180px]" />
          <SkeletonTile />
          <SkeletonTile />
          <SkeletonTile />
          <SkeletonTile />
          <SkeletonTile className="col-span-2" />
        </div>
      </main>
    </div>
  )
}