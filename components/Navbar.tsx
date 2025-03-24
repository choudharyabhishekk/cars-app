import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 sm:px-6 py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            className="object-contain"
            alt="Car Hub"
          />
        </Link>
        <Button text="sign In" type="button" />
      </nav>
    </header>
  );
};

export default Navbar;
