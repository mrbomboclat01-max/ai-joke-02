import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke = "I tell my AI coding agent what I want. It does something else. I read the diff. I ship it.";

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), joke);
