"use client";
import {
  Card as NextuiCard,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";

export const Card = () => {
  return (
    <NextuiCard className="py-4 w-full sm:w-8/12 flex flex-col items-center sm:flex-row sm:items-center sm:justify-start">
      <CardBody className="flex justify-center items-center overflow-visible py-2 sm:flex-shrink-0 sm:w-1/3">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <div className="flex flex-col items-center sm:items-start sm:w-2/3 text-center sm:text-left">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center sm:items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
      </div>
    </NextuiCard>
  );
};
