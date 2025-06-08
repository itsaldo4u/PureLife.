// src/data/surveyData.ts
import { type SurveyQuestion } from "./surveyTypes";

export const surveyQuestions: {
  nutrition: SurveyQuestion[];
  lifestyle: SurveyQuestion[];
  wellbeing: SurveyQuestion[];
} = {
  nutrition: [
    {
      name: "fruits",
      question: "Sa shpesh konsumon fruta?",
      type: "radio",
      options: [
        { label: "Shpesh", value: "often" },
        { label: "Ndonjëherë", value: "sometimes" },
        { label: "Rrallë", value: "rarely" },
      ],
    },
    {
      name: "protein",
      question: "Sa mirë e përfshin proteinën në dietën tënde?",
      type: "radio",
      options: [
        { label: "Shpesh", value: "often" },
        { label: "Ndonjëherë", value: "sometimes" },
        { label: "Rrallë", value: "rarely" },
      ],
    },
    {
      name: "water",
      question: "Sa ujë konsumon çdo ditë?",
      type: "radio",
      options: [
        { label: "Shumë (2L+)", value: "often" },
        { label: "Mjaftueshëm", value: "sometimes" },
        { label: "Pak", value: "rarely" },
      ],
    },
  ],
  lifestyle: [
    {
      name: "processedFoods",
      question: "Sa shpesh konsumon ushqime të përpunuara?",
      type: "radio",
      options: [
        { label: "Rrallë", value: "often" },
        { label: "Ndonjëherë", value: "sometimes" },
        { label: "Shpesh", value: "rarely" },
      ],
    },
    {
      name: "exercise",
      question: "Sa shpesh ushtron gjatë javës?",
      type: "radio",
      options: [
        { label: "3+ herë", value: "often" },
        { label: "1-2 herë", value: "sometimes" },
        { label: "Aspak", value: "rarely" },
      ],
    },
    {
      name: "sleep",
      question: "Sa orë gjumë bën zakonisht?",
      type: "radio",
      options: [
        { label: "7-8 orë", value: "often" },
        { label: "5-6 orë", value: "sometimes" },
        { label: "Më pak se 5 orë", value: "rarely" },
      ],
    },
  ],
  wellbeing: [
    {
      name: "stress",
      question: "Si e vlerëson nivelin tënd të stresit?",
      type: "radio",
      options: [
        { label: "I ulët", value: "often" },
        { label: "Mesatar", value: "sometimes" },
        { label: "I lartë", value: "rarely" },
      ],
    },
    {
      name: "goals",
      question: "Cilat janë objektivat e tua për shëndetin dhe mirëqenien?",
      type: "textarea",
      placeholder: "Përshkruaji këtu...",
    },
  ],
};
