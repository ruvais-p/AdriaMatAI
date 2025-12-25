"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import * as englishData from "@/app/api/data";
import * as croatianData from "@/app/api/data_croatian";

export const useData = () => {
  const { language } = useLanguage();

  if (language === "hr") {
    return croatianData;
  }
  return englishData;
};