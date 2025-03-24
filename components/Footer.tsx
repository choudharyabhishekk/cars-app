import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    // Fix: Footer Responsiveness
    <footer className="flex max-md:flex-col flex-wrap justify-between items-center px-6 py-10">
      <div className="flex flex-col gap-4">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            className="object-contain"
            alt="Car Hub"
          />
        </Link>
        <p>
          Carhub 2025 <br />
          All Rights Reserved &copy;
        </p>
      </div>
      <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20 ">
        {footerLinks.map((link) => (
          <div
            key={link.title}
            className="flex flex-col gap-6 text-base min-w-[170px]"
          >
            <h3 className="text-xl font-bold">{link.title}</h3>
            {link.links.map((item) => (
              <Link key={item.title} href={item.url}>
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
