// A Gnat Reads My Fingerprint
// Entry for the make.fun bounty "Everyday Wonder, Two Days to Find the Line".
// The program writes one sentence about a small everyday wonder to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The wonder: a gnat touring the unread landscape of my own fingerprint.
// Forty years of carrying that landscape, and only a gnat ever bothered to read it.
const wonderLine =
  "A gnat stood on my thumb and walked the whorl of my fingerprint, and I realised I have carried that tiny landscape for forty years without once reading it.";

const MAX_CHARS = 200;

function main(): void {
  const sentence = wonderLine.trim();
  if (sentence.length < 1 || sentence.length > MAX_CHARS) {
    throw new Error(
      `entry must be between 1 and ${MAX_CHARS} characters, got ${sentence.length}`,
    );
  }
  if (sentence.includes("\n")) {
    throw new Error("entry must be a single sentence on one line");
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), wonderLine + "\n", "utf8");
}

main();
