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

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/Icons/Icons";
import { useSearch } from "@/app/(home)/hooks";

export const Navbar = () => {
  const { handleSearchInput } = useSearch();

  return (
    <>
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
                <SearchIcon className="text-default-900 text-base text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="search"
              onChange={handleSearchInput}
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
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
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
