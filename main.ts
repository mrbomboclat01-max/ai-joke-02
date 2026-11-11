import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke = "My agent fixed the CORS error. Commit: 'allow_all_origins = True'";

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), joke);
