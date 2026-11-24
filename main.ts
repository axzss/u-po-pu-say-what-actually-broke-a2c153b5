// Say What Actually Broke
// make.fun bounty: u-po-pu-say-what-actually-broke-a2c153b5
//
// Writes the single line of error copy to $MAKEFUN_OUTPUT_DIR/entry.txt
// (the grader's /output/entry.txt), and prints it to stdout.
// Node 22, standard library only, no network.
//
// Revision: the first draft said "Autosave was writing" — past tense let
// the bug off the hook as something over and done with. The failure is
// ongoing, which is the whole joke: the autosave is still, right now,
// faithfully saving nothing. "has been writing" keeps the bug alive, and
// dropping the extra "it" before "faithfully saving nothing" tightens the
// punchline to a single beat. The line names the real failure (autosave
// pointed at a nonexistent folder), tells the brutal truth first (the
// changes are gone), and stays shippable: a team can put this in a dialog
// because it admits a bug without admitting it deliberately destroyed
// anyone's work.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Your changes are gone. Autosave has been writing to a folder that doesn't exist \u2014 faithfully saving nothing for three years.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
