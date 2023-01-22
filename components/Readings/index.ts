import { ReactNode } from "react";
import Reading from "./Reading";
import ReadingBlock from "./ReadingBlock";
import Readings from "./Readings";
import { ReadingViewer } from "./ReadingViewer";
import ReadingsPast from "./ReadingsPast";

export interface IReading {
  title: string;
  description?: ReactNode[];
  link: string;
  image: {
    id: string;
    format?: string;
  };
  author: string;
  category: string;
}

export { Readings, ReadingBlock, Reading, ReadingViewer, ReadingsPast };
