import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** True when a file exists under /public (build-time check, so missing optional images degrade gracefully). */
export const hasAsset = (path: string) => existsSync(join(process.cwd(), 'public', path.replace(/^\//, '')));

/** First existing file from a list of candidate names inside /images, returned as a web path. */
export const firstImage = (...names: string[]) => {
  const hit = names.find((n) => hasAsset(`images/${n}`));
  return hit ? encodeURI(`/images/${hit}`) : undefined;
};
