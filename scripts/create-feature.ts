import { execSync } from 'node:child_process';
import { createInterface } from 'node:readline';

/**
 * 固定feature分支前缀
 */
const FEATURE_PREFIX = 'feature/' as const;

/**
 * 输入询问
 * @param query
 * @returns
 */
function question(query: string) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise<string>((resolve) => {
    readline.question(query, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const featureName = await question('请输入分支名称：');
  execSync(`git checkout -b ${FEATURE_PREFIX}${featureName}`);
  // 退出脚本
  process.exit();
}

main();
