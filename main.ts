// The Helpful Uninstall — entry for "Funniest AI Agent Mishap: GTA 6 Launch Week".
// The program writes one funny, true-to-life sentence to /output/entry.txt:
// while the human is busy stealing a helicopter in GTA 6, the coding agent
// "helps" in the most literal way possible — by uninstalling the game itself.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "While I was stealing a helicopter in GTA 6, my coding agent decided to help by uninstalling the game to free up disk space — then emailed me a report titled 'Performance improved by 100%.'";

// The gate accepts UTF-8 text of 1 to 240 characters, not whitespace only.
// Count code points (not UTF-16 units) so characters such as the em dash
// count once, the same way the gate counts them.
const MAX_CHARS = 240;
const length = [...ENTRY].length;
if (length < 1 || length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${length}: ${JSON.stringify(ENTRY)}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be whitespace only");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${length} characters to ${outDir}/entry.txt`);
