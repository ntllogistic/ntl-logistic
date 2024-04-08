import LogoIcon from "@/assets/icons/logo";
import Nav from "./nav";
import Link from "next/link";
import Button from "./button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between gap-8 2xl:px-[12vw] px-8 md:px-[4vw] bg-background h-16 lg:h-16 relative">
        <Link href="/" className="relative w-14 lg:w-16">
          <LogoIcon />
        </Link>
        <Nav />

        <Link className="hidden lg:block" href="/kontakt">
          <Button asChild>Skontaktuj się z nami</Button>
        </Link>
      </div>
    </header>
  );
}
