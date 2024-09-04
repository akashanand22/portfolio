import Image from "next/image";
import demo from "@/public/demo.webp";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#fafafa] border-t-[1px] border-t-[#eaeaea] py-16 px-10"
    >
      <h2 className="text-[2rem] tracking-[-1px] mb-12 font-bold text-center">
        Projects I've Made
      </h2>
      <div className=" max-w-6xl flex gap-6 flex-wrap items-center justify-center mx-auto">
        <div className="border-[1px] border-gray-300 hover:border-black rounded-xl max-w-[350px] transition-all">
          <div className="h-[150px] overflow-hidden rounded-t-xl">
            <Image
              src={demo}
              alt="journeys blog project decorative image"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-6">
            <h3 className="text-3xl font-bold pb-4">Health Care</h3>
            <ul className="flex gap-2">
              <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                HTML
              </li>
              <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                CSS
              </li>
              <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                JavaScript
              </li>
            </ul>
            <p className="pt-4">
              HealthCare Hub is a responsive healthcare website designed to
              facilitate online health services. Built using HTML, CSS, and
              JavaScript, the site enables users to schedule appointments,
              access telemedicine services, and track their health metrics.
              The platform prioritizes ease of use and a clean, intuitive interface
            </p>
            <div className="flex gap-2 pt-6">
              <Link
                href="https://github.com/akashanand22/Health-Care"
                target="_blank"
                className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
              >
                View on GitHub
              </Link>
              <Link
                href="https://akashanand22.github.io/Health-Care/"
                target="_blank"
                className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
              >
                Open Website
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
