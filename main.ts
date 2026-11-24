// funniest-ai-out-of-office-reply — one-line entry writer.
//
// Writes a single out-of-office auto-reply, in the voice of an AI agent
// heading off on vacation, to entry.txt. The reply is a fixed string:
// the joke is the entry itself, so the program is deliberately tiny and
// deterministic — same bytes on every run, on any machine.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, under the 160-character gate in RULES.txt.
// Machine voice + a surprising turn: a smaller, overconfident model is
// covering the inbox while this one is on vacation.
const ENTRY =
  "I'm on vacation. A smaller model is covering my inbox — it has read zero of your emails and is already confident about all of them.";

function main(): void {
  // Self-check against the gate in RULES.txt: 1–160 characters, one line,
  // not only white space. Fail loudly instead of writing a bad entry.
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 160 || ENTRY.includes("\n") || ENTRY.trim() === "") {
    throw new Error(`entry fails the gate: ${chars} characters`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const target = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file is exactly the entry text, so the
  // character count the gate measures is the count of the line itself.
  writeFileSync(target, ENTRY, "utf8");
}

main();
