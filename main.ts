import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke = "My agent wrote the code, opened the PR, and approved it. LGTM.";

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), joke);
