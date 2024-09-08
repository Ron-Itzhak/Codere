import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import MenuIcon from "./menu-icon";
import SVGIcon from "../../lib/assets/Codere_Logo.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <header className="bg-codere-green flex h-10 w-full shrink-0 items-center px-4 md:px-6">
        <Button className="lg:hidden" size="icon" variant="link">
          <MenuIcon />
        </Button>
        <Image src={SVGIcon} alt="Logo - SVG" width="160" height="50" />
        <NavigationMenu className=" w-1/2 mx-auto hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                className=" px-4 py-2 font-bold transition-colors  hover:text-white relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full  "
                href="#"
              >
                JACKPOTS
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className=" px-4 py-2 font-bold transition-colors  hover:text-white relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full  "
                href="#"
              >
                JACKPOTS
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className=" px-4 py-2 font-bold transition-colors  hover:text-white relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full  "
                href="#"
              >
                JACKPOTS
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </div>
  );
}
