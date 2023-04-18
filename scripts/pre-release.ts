import { execSync } from 'node:child_process';
import pkg from '../package.json';

function checkPrefix(n: number) {
  return n > 10 ? String(n) : `0${n}`;
}

function getReleaseDate() {
  const date = new Date();
  return `${checkPrefix(date.getFullYear())}${checkPrefix(date.getMonth() + 1)}${checkPrefix(date.getDate())}`;
}

function main() {
  const { version } = pkg;
  // 升级版本号
  execSync('npx bumpp --no-commit --no-tag --no-push', { stdio: 'inherit' });

  // release/分支创建日期-待发布版本号
  const branchName = `release/${getReleaseDate()}-v${version}`;
  execSync(`git checkout -b ${branchName} dev`);
}

main();
