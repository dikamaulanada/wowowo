"use client";
import Container from "../container/page";
import { Data } from "../container/data";

export default function CryptoSpotTrading() {
  const currentId = "48";
  const nextModuleData = Data.find(item => item.id === "49");
  
  return <Container searchParams={{ id: currentId, next: nextModuleData?.link }} />;
}
