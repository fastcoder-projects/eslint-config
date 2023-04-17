import { resolve } from 'node:path';
import { writeFileSync, readFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { describe, test, expect } from 'vitest';
import consola from 'consola';

const execSyc = promisify(exec);

// 配置正常运行
describe('eslint-config-ts', () => {
  const getPath = (path: string) => {
    return resolve(__dirname, path);
  };
  const tempPath = getPath('../test-temp');

  // 先清除
  existsSync(tempPath) && rmSync(tempPath, {
    recursive: true,
  });

  // 再创建
  mkdirSync(tempPath);

  test('lint success', async () => {
    const isSuccess = true;
    const data = readFileSync(getPath('./data/success-example.txt'));
    writeFileSync(`${tempPath}/success-example.ts`, data);
    try {
      await execSyc(`cd ${resolve(__dirname, '../')} && pnpm run lint`);
      expect(isSuccess).toBe(true);
    }
    catch (error) {
      consola.info('3333', error.stdout);
      throw error;
    }
  });

  test('lint fail', async () => {
    const data = readFileSync(getPath('./data/error-example.txt'));
    writeFileSync(`${tempPath}/error-example.ts`, data);
    try {
      await execSyc(`cd ${resolve(__dirname, '../')} && pnpm run lint`);
    }
    catch (error) {
      // 应该正确报错
      if (
        !String(error.stdout).includes('Missing semicolon')
      ) {
        consola.info('lint fail --> error', error.stdout);
        throw new Error(error);
      }
      // 测试
      expect(String(error.stdout)).toContain('Missing semicolon');
      return;
    }
    // 默认应该报错被捕获
    expect(true).toBe(false);
  });
});
