"use client";
import { useNews } from "./hooks";

import { Card } from "@/components/Card/Card";

export default function Home() {
  const { data, isLoading } = useNews();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>Something went wrong...</div>;
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {data.map((news) => (
        <Card key={news.title} news={news} />
      ))}
    </section>
  );
}
