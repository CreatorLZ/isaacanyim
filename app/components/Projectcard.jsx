import Image from "next/image";

export default function ProjectCard({ name, image, link }) {
  return (
    <div className="lg:w-[400px] w-[400px] lg:h-[280px] h-[280px] p-4 rounded-xl backdrop-blur-xs bg-white/10 border border-white/20 shadow-[0_8px_12px_0_rgba(31,38,135,0.37)]">
      <div className="relative h-full w-full rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-xs shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <div className="absolute inset-0">
          <Image
            src={image || "/placeholder.svg?height=400&width=600"}
            alt={name}
            fill
            className="object-contain" // Changed from object-cover to object-contain
            sizes="(max-width: 400px) 100vw, 400px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
