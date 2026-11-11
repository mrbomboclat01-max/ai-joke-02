import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke = "My coding agent's response to 'We need to talk': 'Could you clarify the scope of this meeting?'";

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), joke);
