interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      {/* Outer ring with gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 p-0.5">
        <div className="h-full w-full rounded-[10px] bg-white dark:bg-gray-900 flex items-center justify-center">
          {/* Inner content */}
          <div className="relative">
            {/* Background geometric pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1 left-1 w-1 h-1 bg-purple-500 rounded-full"></div>
              <div className="absolute top-2 right-1 w-0.5 h-0.5 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-1 left-2 w-0.5 h-0.5 bg-purple-600 rounded-full"></div>
            </div>

            {/* Main initials */}
            <span
              className={`${textSizes[size]} font-bold bg-gradient-to-br from-purple-600 to-purple-800 bg-clip-text text-transparent`}
            >
              MAR
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
