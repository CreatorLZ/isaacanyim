import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ name, image, link }) {
  return (
    <div className=" lg:w-[400px] w-[400px] lg:h-[280px] h-[280px] p-4 rounded-xl backdrop-blur-xs bg-white/10 border border-white/20 shadow-[0_8px_12px_0_rgba(31,38,135,0.37)]">
      <Link
        href="/#projects"
        className="block h-full w-full"
        rel="noopener noreferrer"
      >
        <div className="relative h-full w-full rounded-lg overflow-hidden border border-white/30 bg-gradient-to-br from-white/30 to-transparent backdrop-blur-xs shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={image || "/placeholder.svg?height=400&width=600"}
              alt={name}
              fill
              className="object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
