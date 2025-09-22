interface SkeletonLoaderProps {
  variant?: 'card' | 'featured' | 'sidebar'
  count?: number
}

export default function SkeletonLoader({ variant = 'card', count = 1 }: SkeletonLoaderProps) {
  const skeletons = Array.from({ length: count }, (_, index) => {
    if (variant === 'featured') {
      return (
        <div
          key={index}
          className="skeleton-featured"
          style={{
            backgroundColor: 'var(--white)',
            padding: '3rem',
            borderRadius: '15px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            marginBottom: '2rem',
            textAlign: 'center',
            border: '3px solid #e0e0e0',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        >
          {/* Category skeleton */}
          <div style={{
            width: '100px',
            height: '30px',
            backgroundColor: '#e0e0e0',
            borderRadius: '20px',
            margin: '0 auto 2rem',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>

          {/* Title skeleton */}
          <div style={{
            width: '80%',
            height: '40px',
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
            margin: '0 auto 1.5rem',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>

          {/* Description skeleton */}
          <div style={{
            width: '90%',
            height: '20px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            margin: '0 auto 1rem',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>
          <div style={{
            width: '70%',
            height: '20px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            margin: '0 auto 2rem',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>

          {/* Meta info skeleton */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '80px',
              height: '16px',
              backgroundColor: '#e0e0e0',
              borderRadius: '4px',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}></div>
            <div style={{
              width: '80px',
              height: '16px',
              backgroundColor: '#e0e0e0',
              borderRadius: '4px',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}></div>
          </div>

          {/* Button skeleton */}
          <div style={{
            width: '120px',
            height: '40px',
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
            margin: '0 auto',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>
        </div>
      )
    }

    if (variant === 'sidebar') {
      return (
        <div key={index} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
          <div style={{
            width: '100%',
            height: '16px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>
          <div style={{
            width: '60%',
            height: '16px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>
          <div style={{
            width: '80px',
            height: '12px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>
        </div>
      )
    }

    // Default card variant
    return (
      <div
        key={index}
        className="skeleton-card"
        style={{
          backgroundColor: 'var(--white)',
          padding: '2rem',
          borderRadius: '12px',
          border: '3px solid #e0e0e0',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      >
        {/* Category skeleton */}
        <div style={{
          width: '80px',
          height: '24px',
          backgroundColor: '#e0e0e0',
          borderRadius: '15px',
          marginBottom: '1rem',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>

        {/* Title skeleton */}
        <div style={{
          width: '100%',
          height: '24px',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          marginBottom: '0.5rem',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
        <div style={{
          width: '80%',
          height: '24px',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          marginBottom: '1rem',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>

        {/* Description skeleton */}
        <div style={{
          width: '100%',
          height: '16px',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          marginBottom: '0.5rem',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
        <div style={{
          width: '90%',
          height: '16px',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          marginBottom: '0.5rem',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
        <div style={{
          width: '70%',
          height: '16px',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          marginBottom: '1.5rem',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>

        {/* Footer skeleton */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            width: '80px',
            height: '14px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>
          <div style={{
            width: '80px',
            height: '14px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}></div>
        </div>
      </div>
    )
  })

  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
      {variant === 'card' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {skeletons}
        </div>
      ) : (
        <>{skeletons}</>
      )}
    </>
  )
}
