// main.tsx runs its work at import time, so each case imports it fresh --
// hence resetModules() between them. Both branches of the #root guard are
// exercised: the entry point is the one file with a failure mode nobody would
// notice until the page is blank.

import '@testing-library/jest-dom';
import { act } from '@testing-library/react';

describe('main', () => {
  afterEach(() => {
    jest.resetModules();
    document.body.replaceChildren();
  });

  it('mounts the app into #root', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    await act(async () => {
      await import('./main');
    });

    expect(root.querySelector('h1')).toHaveTextContent('at1234-sectionb-2026-calendar-levlimit');
  });

  it('throws a named error when #root is missing', async () => {
    await expect(import('./main')).rejects.toThrow('No #root element');
  });
});
