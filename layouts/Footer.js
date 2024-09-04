import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-black flex items-end justify-between text-[#E6E6E6] text-sm">
      <h3>© Akash Anand 2023</h3>
      <ul className="sm:flex grid grid-cols-2 sm:flex-row gap-2 sm:gap-4">
        <li>
          <Link
            href="https://www.linkedin.com/in/akash-anand-264041229/"
            target="_blank"
            className="hover:text-[#bfbfbf]"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/akashanand22"
            target="_blank"
            className="hover:text-[#bfbfbf]"
          >
            GitHub
          </Link>
        </li>
        
        <li>
          <Link
            href="https://www.instagram.com/akash_anand._/"
            target="_blank"
            className="hover:text-[#bfbfbf]"
          >
            Instagram
          </Link>
        </li>
      </ul>
    </footer>
  );
}
