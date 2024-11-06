declare const noun: string[];
declare const adjs: string[];
declare const exclamations: string[];
declare const firstNames: string[];
declare const lastNames: string[];
declare const questions: string[];

declare function getQuestion(): string;
declare function getPersonName(): string;

export {
  getQuestion,
  getPersonName,
  noun,
  adjs,
  exclamations,
  firstNames,
  lastNames,
  questions,
};
