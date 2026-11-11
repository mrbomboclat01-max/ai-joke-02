import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke = "My coding agent resolved the merge conflict. Commit: 'Theirs was probably right.'";

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), joke);
