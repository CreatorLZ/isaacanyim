import Link from "next/link";

import { TwitterIcon, LinkedInIcon, GitHubIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col text-center pt-20 w-full items-center justify-center z-50 pb-24 lg:pb-0">
      <small>Copyright © {new Date().getFullYear()}. Isaac C. Anyim. All rights reserved.</small>
      <small>Bulit with ❤️ by, Isaac C Anyim</small>
      {/* Desktop Icons */}
      <div className="hidden sm:flex gap-10 items-center pb-4 pt-1 md:pt-6 lg:pt-10 p-2.5 md:px-10 lg:px-36 justify-between sm:justify-normal backdrop-blur-sm md:backdrop-blur-none">
        <Link
          href="https://x.com/Fathe__r"
          className="hover:opacity-75 transition-opacity"
          aria-label="Twitter / X"
        >
          <TwitterIcon className="w-6 h-6 text-gray-700 hover:text-primary transition-colors" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/isaac-anyim-76221b269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="hover:opacity-75 transition-opacity"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-6 h-6 text-gray-700 hover:text-primary transition-colors" />
        </Link>
        <Link
          href="https://github.com/CreatorLZ"
          className="hover:opacity-75 transition-opacity"
          aria-label="GitHub"
        >
          <GitHubIcon className="w-6 h-6 text-gray-700 hover:text-primary transition-colors" />
        </Link>
      </div>

      {/* Mobile Icons — frosted dock */}
      <div className="fixed bottom-0 sm:hidden w-full z-40">
        <div className="flex items-center justify-around bg-white/80 backdrop-blur-md border-t border-gray-200/80 rounded-t-2xl pb-4 pt-3 px-6">
          <Link
            href="https://x.com/Fathe__r"
            className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-gray-100 transition-colors active:scale-95"
            aria-label="Twitter / X"
          >
            <TwitterIcon className="w-7 h-7 text-gray-700 hover:text-primary transition-colors" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/isaac-anyim-76221b269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-gray-100 transition-colors active:scale-95"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-7 h-7 text-gray-700 hover:text-primary transition-colors" />
          </Link>
          <Link
            href="https://github.com/CreatorLZ"
            className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-gray-100 transition-colors active:scale-95"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-7 h-7 text-gray-700 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
