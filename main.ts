// One Line of Earned Pride — entry for u-mang-one-line-of-earned-pride-a0138557.
// Writes a single line of text to entry.txt in the output folder.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: a night-shift cleaner, a corridor washed floor by floor,
// and the sunrise arriving in the shine of her own work — the pride lands
// on the last word, earned by the night's labour, never announced.
const ENTRY_LINE =
  "The night cleaner wrung out her mop, looked down the corridor she had washed floor by floor, and watched the sunrise come up in the shine.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE, "utf8");
console.log(ENTRY_LINE);
console.log(`Characters: ${ENTRY_LINE.length}`);
