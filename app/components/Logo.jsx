export default function Logo({ className = 'w-6 h-6' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Isaac Anyim Logo"
    >
      {/* Outer disc that adapts to theme: dark in light mode, light in dark mode */}
      <circle
        cx="16"
        cy="16"
        r="15"
        className="fill-text-primary transition-colors duration-200"
      />

      {/* Fluid custom letterform cut out in theme background color */}
      <path
        d="M17.8 8.6C17.0 9.8 15.9 13.8 14.9 18.1C13.9 22.3 13.1 24.6 12.3 24.6C11.5 24.6 11.1 23.6 11.4 22.1C12.0 19.1 13.6 13.2 15.0 9.5C16.0 7.1 17.1 6.9 17.8 7.5C18.2 7.9 18.1 8.1 17.8 8.6Z"
        className="fill-bg transition-colors duration-200"
      />
    </svg>
  )
}
