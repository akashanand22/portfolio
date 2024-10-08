import akash from "@/public/akash.jpg";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center flex-col md:flex-row justify-center md:justify-between h-[90vh] mx-auto md:max-w-2xl lg:max-w-4xl px-10 md:px-0">
      <div>
        <div className="md:text-left text-center">
          <p className="text-4xl font-medium mb-4 max-[400px]:hidden">👋🏻</p>
          <h2 className="text-6xl font-extrabold mb-4">I'm Akash.</h2>
          <p className="text-lg font-medium text-gray-500 mb-5">
            Full-stack Web Developer,
            <br />
            Digital Nomad
          </p>
          <div className="mx-auto mb-8 rounded-full w-64 sm:w-80 md:hidden aspect-[1/1] overflow-hidden">
            <Image
              src={akash}
              alt="akash's photo, smiling"
              style={{ objectFit: "cover" }}
            />
          </div>
          <Link
            className="mx-auto md:mx-0 text-lg py-4 px-4 sm:px-8 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg mb-10 md:mb-0 border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
            href="https://drive.google.com/file/d/1vTt1emsp4pSVM_xT7MzzI625N5GSf_bh/view?usp=sharing"
            target="_blank"
          >
            <FaFileDownload />
            <span>
              <span className="hidden sm:inline">Download My </span>Resume
            </span>
          </Link>
        </div>

        
      </div>

      <div className="rounded-full hidden md:block md:w-80 aspect-[1/1] overflow-hidden">
        <Image
          src={akash}
          alt="akash's photo, smiling"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
