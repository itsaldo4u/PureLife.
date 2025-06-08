// src/data/surveyTypes.ts

export type RadioQuestion = {
  name: string;
  question: string;
  type: "radio";
  options: {
    label: string;
    value: string;
  }[];
};

export type TextareaQuestion = {
  name: string;
  question: string;
  type: "textarea";
  placeholder: string;
};

export type SurveyQuestion = RadioQuestion | TextareaQuestion;
