import { resolve } from 'node:path';
import { describe, test, expect } from 'vitest';
import { ESLint } from 'eslint';

function getText(data: string) {
  return data;
}

const eslint = new ESLint({
  baseConfig: {
    extends: [
      resolve(__dirname, '../index.js'),
    ],
  },
});

// 配置正常运行
describe('eslint-config-ts', () => {
  test('a is assigned a value but never used.', async () => {
    const testText = getText(`
      const a = '';
    `);
    const { messages } = (await eslint.lintText(testText))[0];
    const result = messages.find((item) => {
      if (item.ruleId === '@typescript-eslint/no-unused-vars') {
        return true;
      }
      return false;
    });
    const rule = '\'a\' is assigned a value but never used.';
    expect(result?.message).toBe(rule);
  });

  test('missing semicolon.', async () => {
    const testText = getText(`
      const a = ''
    `);
    const { messages } = (await eslint.lintText(testText))[0];
    const result = messages.find((item) => {
      if (item.ruleId === '@typescript-eslint/semi') {
        return true;
      }
      return false;
    });
    const rule = 'Missing semicolon.';
    expect(result?.message).toBe(rule);
  });
});
