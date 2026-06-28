import Image from 'next/image'

export default function ProjectCard({ name, image, link }) {
  return (
    <div
      className="w-[450px] rounded-[24px] overflow-hidden border border-[#0000001a] bg-[#f5f5f5]/80 relative transition-all"
      style={{ boxShadow: 'inset 0px 3px 0px 0px rgb(255, 255, 255)' }}
    >
      {/* Decorative corner dots */}
      <div className="absolute top-3 left-3 w-[6px] h-[6px] rounded-full bg-[#c0c0c0] z-10" />
      <div className="absolute top-3 right-3 w-[6px] h-[6px] rounded-full bg-[#c0c0c0] z-10" />
      <div className="absolute bottom-3 left-3 w-[6px] h-[6px] rounded-full bg-[#c0c0c0] z-10" />
      <div className="absolute bottom-3 right-3 w-[6px] h-[6px] rounded-full bg-[#c0c0c0] z-10" />

      <div className="px-5 py-10 group">
        <div className="relative w-full h-[200px] rounded-[18px] overflow-hidden">
          <Image
            src={image || '/placeholder.svg?height=400&width=600'}
            alt={name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 550px) 100vw, 550px"
            priority
          />
        </div>
      </div>
    </div>
  )
}
