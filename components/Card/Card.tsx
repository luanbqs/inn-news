"use client";
import {
  Card as NextuiCard,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

import { NewsProps } from "@/api/interfaces";

interface CardProps {
  news: NewsProps;
}
export const Card = ({ news }: CardProps) => {
  return (
    <NextuiCard className="py-4 w-full sm:w-8/12 flex flex-col items-center sm:flex-row sm:items-center sm:justify-start">
      <CardBody className="flex justify-center items-center overflow-visible py-2 sm:flex-shrink-0 sm:w-1/3">
        <Image
          alt="Card background"
          className="object-cover rounded-xl min-h-[150px] max-h-[300px]"
          fallbackSrc="https://nextui.org/images/hero-card-complete.jpeg"
          src={news.image}
          width={270}
        />
      </CardBody>
      <div className="flex px-px flex-col items-center sm:items-start sm:w-2/3 text-center sm:text-left">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center sm:items-start">
          <h4 className="font-bold text-large">{news.title}</h4>
          <p className="text-tiny text-default-600 font-bold my-3 line-clamp-3 text-ellipsis">
            {news.description}
          </p>
          <small className="text-default-500">{news.category}</small>
        </CardHeader>
        <CardFooter className="flex flex-col sm:flex-row gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">Source:</p>
            <p className=" text-default-400 text-small">{news.source}</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">
              Published at:
            </p>
            <p className="text-default-400 text-small">
              {new Date(news.date).toDateString()}
            </p>
          </div>
        </CardFooter>
      </div>
    </NextuiCard>
  );
};
