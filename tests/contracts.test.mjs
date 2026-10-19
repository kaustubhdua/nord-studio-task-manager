import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const app = await readFile(new URL('../app.js', import.meta.url), 'utf8');
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('task persistence rejects malformed JSON and validates stored records', () => {
  assert.match(app, /JSON\.parse\(localStorage\.getItem\(STORAGE_KEY\)/);
  assert.match(app, /Number\.isSafeInteger\(task\.id\)/);
  assert.match(app, /typeof task\.text === "string"/);
  assert.match(app, /typeof task\.completed === "boolean"/);
  assert.match(app, /catch\s*\{/);
});

test('storage write failures are surfaced instead of pretending a task was saved', () => {
  assert.match(app, /localStorage\.setItem\(STORAGE_KEY/);
  assert.match(app, /renderStorageError\(\)/);
  assert.match(app, /Your latest change was not saved/);
});

test('task text is rendered safely and user input is trimmed', () => {
  assert.match(app, /const text = taskInput\.value\.trim\(\)/);
  assert.match(app, /textContent\s*=/);
  assert.doesNotMatch(app, /\.innerHTML\s*=/);
});

test('task filters expose pressed state and clear-completed preserves active tasks', () => {
  assert.match(app, /setAttribute\("aria-pressed", String\(active\)\)/);
  assert.match(app, /tasks\.filter\(\(task\) => !task\.completed\)/);
  assert.match(html, /id="task-list"/);
  assert.match(html, /id="task-count"/);
});
