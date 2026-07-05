import type { VerticalContent } from "./types";
import { hvacPlumbing } from "./hvac-plumbing";
import { dentists } from "./dentists";
import { roofers } from "./roofers";
import { landscapers } from "./landscapers";
import { medSpas } from "./med-spas";
import { realtors } from "./realtors";
import { accountingFirms } from "./accounting-firms";
import { lawPractices } from "./law-practices";
import { contractors } from "./contractors";
import { autoShops } from "./auto-shops";
import { tutoring } from "./tutoring";

export type { VerticalContent } from "./types";

export const VERTICALS: VerticalContent[] = [
  hvacPlumbing,
  roofers,
  contractors,
  dentists,
  medSpas,
  landscapers,
  autoShops,
  realtors,
  accountingFirms,
  lawPractices,
  tutoring,
];

export const getVertical = (slug: string) =>
  VERTICALS.find((v) => v.slug === slug);
