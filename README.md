# Nord Studio — Task Manager

A compact, browser-based task manager built with vanilla HTML, CSS, and JavaScript. It supports creating tasks, assigning priorities, filtering the list, and clearing completed work.

## Features

- Create tasks with low, medium, or high priority
- Filter tasks by all, active, or completed
- Track remaining tasks
- Clear completed tasks
- Delete individual tasks
- Tasks persist in the browser's `localStorage`; a storage failure shows an error instead of failing silently
- Accessible controls: labelled inputs, `aria-pressed` filters and toggles, a live region for the list
- Minimal interface with no framework or build step

## Run locally

Clone the repository and open `index.html` in a modern browser. Or serve it locally:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Project structure

- `index.html` — accessible page structure
- `style.css` — layout and visual styling
- `app.js` — task creation, filtering, and list interactions

## Tests

```bash
node --test tests/*.test.mjs
```

## Notes

Tasks are stored only in your browser on this device. Avoid entering sensitive information into the task list.

## Future improvements

- Edit existing tasks and undo deletes
- Add due dates and sorting
- Behavioural browser tests for filtering and task-state transitions

## Licence

Copyright (c) 2026 Kaustubh Dua. All rights reserved. See `LICENSE`.
