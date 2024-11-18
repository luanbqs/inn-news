"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";
import { useDisclosure } from "@nextui-org/react";
import { usePathname } from "next/navigation";

import { Filters } from "../Filters/Filters";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon, FilterIcon } from "@/components/Icons/Icons";
import { useSearch } from "@/app/hooks";

export const Navbar = () => {
  const { handleSearchInput } = useSearch();
  const pathname = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Filters isOpen={isOpen} onOpenChange={onOpenChange} />

      <NextUINavbar className="bg-default" maxWidth="xl" position="sticky">
        <NavbarContent className="w-full" justify="center">
          <NavbarItem className="w-full md:w-6/12">
            <Input
              aria-label="Search"
              classNames={{
                inputWrapper: "bg-default-300",
                input: "w-full text-sm focus:bg-default-200",
              }}
              endContent={
                <Kbd className="lg:inline-block" keys={["command"]}>
                  K
                </Kbd>
              }
              placeholder="Search..."
              size="lg"
              startContent={
                <SearchIcon className="text-default-900 text-base pointer-events-none flex-shrink-0" />
              }
              type="search"
              onChange={handleSearchInput}
            />
          </NavbarItem>
          <NavbarItem>
            <FilterIcon
              className="text-default-900 cursor-pointer"
              size={22}
              onClick={onOpen}
            />
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>

      <NextUINavbar className="bg-default" maxWidth="xl" position="sticky">
        <NavbarContent
          className="sm:flex basis-1/5 sm:basis-full"
          justify="center"
        >
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  pathname === item.href
                    ? "text-primary font-bold underline"
                    : "text-foreground",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NextUINavbar>
      <Divider className="bg-default-400" />
    </>
  );
};

const siteConfig = {
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "For you",
      href: "/feed",
    },
  ],
};
