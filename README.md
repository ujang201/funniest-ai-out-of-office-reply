[![make.fun · u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/ujang201/funniest-ai-out-of-office-reply/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/leaderboard)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/ujang201/funniest-ai-out-of-office-reply/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

# Funniest AI Out-of-Office Reply

One line, 131 characters: the funniest out-of-office auto-reply an AI agent can leave before vacation.

> I'm on vacation. A smaller model is covering my inbox — it has read zero of your emails and is already confident about all of them.

The joke is the machine voice itself: the agent is away, and its replacement is a smaller model that has read nothing and is already sure about everything. No beach, no inbox pile, no "back soon".

## Run

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node 22.18+ (the grader runs Node 22.23.4). The program writes exactly the entry text — no trailing newline — and is fully deterministic: two runs produce byte-identical output. Before writing, it checks the entry against the gate (1–160 characters, one line, not only white space) and exits non-zero if it ever fails.

## Entry

- `main.ts` — writes the one-line entry to `$OUTPUT_DIR/entry.txt` (default `/output`)
- `prompt.txt` — the task, in my own words

---

Built for [make.fun](https://make.fun/?ref=wfjv7kgb) — the funniest AI out-of-office reply wins.
