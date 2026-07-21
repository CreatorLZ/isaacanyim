import Link from "next/link";

import { TwitterIcon, LinkedInIcon, GitHubIcon } from "./SocialIcons";
import { SOCIAL_LINKS } from "../lib/social-links";

export default function Footer() {
  return (
    <footer className="flex flex-col text-center pt-20 w-full items-center justify-center z-50 pb-24 lg:pb-0">
      <small className="text-text-muted">Copyright © {new Date().getFullYear()}. Isaac C. Anyim. All rights reserved.</small>
      <small className="text-text-muted">Built with ❤️ by, Isaac C Anyim</small>
      {/* Desktop Icons */}
      <div className="hidden sm:flex gap-10 items-center pt-1 md:pt-6 lg:pt-10 px-2.5 md:px-10 lg:px-36 pb-4 justify-between sm:justify-normal backdrop-blur-sm md:backdrop-blur-none">
        <Link
          href={SOCIAL_LINKS.twitter}
          className="hover:opacity-75 transition-opacity"
          aria-label="Twitter / X"
          data-cuelume-hover="tick"
        >
          <TwitterIcon className="w-6 h-6 text-text-secondary hover:text-accent transition-colors" />
        </Link>

        <Link
          href={SOCIAL_LINKS.linkedin}
          className="hover:opacity-75 transition-opacity"
          aria-label="LinkedIn"
          data-cuelume-hover="tick"
        >
          <LinkedInIcon className="w-6 h-6 text-text-secondary hover:text-accent transition-colors" />
        </Link>
        <Link
          href={SOCIAL_LINKS.github}
          className="hover:opacity-75 transition-opacity"
          aria-label="GitHub"
          data-cuelume-hover="tick"
        >
          <GitHubIcon className="w-6 h-6 text-text-secondary hover:text-accent transition-colors" />
        </Link>
      </div>

      {/* Mobile Icons — frosted dock */}
      <div className="fixed bottom-0 sm:hidden w-full z-40">
        <div className="flex items-center justify-around bg-surface/80 backdrop-blur-md border-t border-border rounded-t-2xl pb-4 pt-3 px-6">
          <Link
            href={SOCIAL_LINKS.twitter}
            className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-surface-hover transition-colors active:scale-95"
            aria-label="Twitter / X"
          >
            <TwitterIcon className="w-7 h-7 text-text-secondary hover:text-accent transition-colors" />
          </Link>

          <Link
            href={SOCIAL_LINKS.linkedin}
            className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-surface-hover transition-colors active:scale-95"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-7 h-7 text-text-secondary hover:text-accent transition-colors" />
          </Link>
          <Link
            href={SOCIAL_LINKS.github}
            className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-surface-hover transition-colors active:scale-95"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-7 h-7 text-text-secondary hover:text-accent transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
