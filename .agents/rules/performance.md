# Performance & Interaction Rules

To maintain high development velocity, avoid long turnaround times, and eliminate unnecessary confirmation popups:

1. **Direct Execution Over Archaeology**:
   - Never spend turns running git pickaxe searches (`git log -S`), reviewing past transcripts, or querying system process tables (`ps`, `lsof`, port inspectors) unless the user explicitly requests an investigation.
   - Jump directly to the active document and address the requested changes immediately.

2. **No Dev Server Probing**:
   - Never run `curl`, fetch, or network queries against local development ports (e.g. `localhost:4321`), as these can block and stall execution.
   - Trust Vite and Astro's Hot Module Replacement (HMR) to reflect changes in the user's browser.

3. **Surgical, Targeted Edits**:
   - Avoid monolithic file rewrites (e.g., replacing 500+ lines in a single edit).
   - Use focused, contiguous edits on only the sections requiring change to minimize generation latency, avoid tag truncation, and prevent regression bugs.

4. **Minimize Shell Commands & Popups**:
   - Do not invoke terminal commands (`run_command`) for tasks that can be answered directly or handled by file tools.
   - Reserve terminal commands strictly for essential builds (e.g., `npm run build`) and explicit user instructions.
