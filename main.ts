import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke = "My AI coding agent does exactly what I ask. I'm the bug.";

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), joke);
