export default function SkeletonTile({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{
        border: '1px solid #ffffff0f',
        minHeight: '160px',
        background: 'linear-gradient(110deg, #16161f 30%, #1e1e2e 50%, #16161f 70%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
      }}
    />
  )
}