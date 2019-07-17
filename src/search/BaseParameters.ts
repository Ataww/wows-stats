export enum Languages {
  EN = "en",
  CS = "cs",
  DE = "de",
  ES = "es",
  FR = "fr",
  JA = "ja",
  PL = "pl",
  RU = "ru",
  TH = "th",
  ZH_TW = "zh-tw"
}

export interface BaseParameters {
  application_id?: string;
  language?: Languages;
  fields?: string[];
  [key: string]: any;
}
