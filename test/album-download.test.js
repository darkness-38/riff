'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

test('album view contains Play and Download buttons in the actions toolbar', () => {
  const html = fs.readFileSync(path.join(__dirname, '../src/renderer/index.html'), 'utf8');
  assert.ok(html.includes('id="btn-play-album"'), 'btn-play-album must exist in index.html');
  assert.ok(html.includes('id="btn-download-album"'), 'btn-download-album must exist in index.html');
  assert.ok(html.includes('class="album-actions"'), 'album-actions toolbar must wrap album buttons');
});

test('album actions CSS styles play and download buttons', () => {
  const css = fs.readFileSync(path.join(__dirname, '../src/renderer/styles.css'), 'utf8');
  assert.ok(css.includes('.album-actions'), '.album-actions must be styled in styles.css');
  assert.ok(css.includes('#btn-download-album'), '#btn-download-album must be styled in styles.css');
});
