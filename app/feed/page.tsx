"use client";

import { useDisclosure } from "@nextui-org/react";

import { useFeed } from "../hooks";

import { SettingsIcon } from "@/components/Icons/Icons";
import { Card } from "@/components/Card/Card";
import { Filters } from "@/components/Filters/Filters";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data, isLoading } = useFeed();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>Something went wrong...</div>;
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Filters isOpen={isOpen} onOpenChange={onOpenChange} />

      <div className="flex items-center">
        <h1 className="mr-10">Set your preferences</h1>
        <SettingsIcon
          className="text-default-900 cursor-pointer"
          onClick={onOpen}
        />
      </div>
      {data.map((news) => (
        <Card key={news.title} news={news} />
      ))}
    </section>
  );
}
