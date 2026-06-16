# Advanced React Hooks 

---

## Task 1: useContext

### Hook Overview
* **What it does:** Provides a way to pass data down the component tree without having to pass props manually at every single level (prop drilling).
* **Why it is used:** It creates a global data layer that any nested child component can access instantly, removing structural dependency between parents and distant children.

### Use Cases
* **Real-world examples:** Shared user authentication states, global visual theme toggles (dark/light mode), and multi-language localization settings.

### Implementation Details
* **Setup:** Implemented a centralized `UserContext` and a `UserProvider` wrapping the application dashboard layout.
* **State Syncing:** A shared object containing `name`, `email`, and `role` state fields along with an `updateUser` modifier function is distributed to two separate consumer child components (`UserProfile` and `EditUser`).

### Screenshots
![User Profile Dashboard](./task%201/Screenshot%20(169).png)

### Challenges Faced
* **Stale State Merging:** Updating a specific user property initially wiped out the other unmodified fields. Fix: Applied the object spread operator (`...prevUser`) to safely merge existing values with new incoming modifications inside the state setter.
* **Component Over-Rendering:** Every consumer component re-renders whenever any single property inside the context object updates, even if that specific consumer does not use that property.

### How it improves React applications
* Eliminates messy prop drilling.
* Simplifies state architecture by grouping global contexts together.
* Makes components modular since child components do not need properties explicitly fed to them by direct parents.

---

##  Task 2: useRef

### Hook Overview
* **What it does:** Returns a mutable reference object whose `.current` property holds a persistent value across re-renders without triggering a view update itself.
* **Why it is used:** It provides direct access to real browser HTML DOM nodes and stores persistent variables that shouldn't force the component to re-draw.

### Use Cases
* **Real-world examples:** Automatically focusing text input areas on page initialization, manipulating media playback elements (Play/Pause video), and tracking previous state values.

### Implementation Details
* **Setup:** Declared an `inputRef` variable initialized to `null`.
* **DOM Linkage:** Tied the reference hook directly to the form's HTML text element via the standard `ref={inputRef}` JSX attribute.
* **Execution:** Triggered `inputRef.current.focus()` from inside a single-run `useEffect` layout block on initial page mount.

### Screenshots
![Auto Focus Input Form](./task%202/Screenshot%20(171).png)

### Challenges Faced
* **Premature DOM Access:** Attempting to focus or read properties from `inputRef.current` during the initial script evaluation phase threw `undefined` errors. Fix: Deferred all direct element operations into a `useEffect` block so the code waits until the DOM structure fully mounts.

### How it improves React applications
* Safely bridges the gap between React's declarative nature and imperative browser DOM actions.
* Optimizes performance by maintaining tracking metadata values completely separate from the rendering engine cycle.

---

##  Task 3: useMemo

### Hook Overview
* **What it does:** Caches (memoizes) the computed result of an expensive, resource-heavy mathematical calculation or data layout procedure.
* **Why it is used:** It intercepts unnecessary recalculations during normal component re-renders, checking if the underlying input dependencies have changed before running logic.

### Use Cases
* **Real-world examples:** Sorting large data collections, mapping complex relational arrays, and calculating heavy algorithms (like factorials or Fibonacci sequences) in data dashboards.

### Implementation Details
* **Setup:** Created a resource-heavy `calculateFactorial` iteration function containing explicit logging checkpoints.
* **Optimization:** Wrapped the process inside a `useMemo` hook, caching the result value against a tracking dependency array looking at the `[number]` primitive state variable.

### Screenshots
![Factorial Calculator](./task%203/Screenshot%20(172).png)

### Challenges Faced
* **Tracking Non-Dependency Updates:** Structural layout components refreshed whenever the visual UI visual theme toggled, which initially caused the execution log to run again. Fix: Isolated the calculation so it only listens to changes in the core `number` value.

### How it improves React applications
* Eliminates frame drops and app freezing caused by repeating heavy processes on unrelated page updates.
* Drastically reduces CPU computation workloads.

---

##  Task 4: useCallback

### Hook Overview
* **What it does:** Caches the actual function definition reference itself between component re-render passes.
* **Why it is used:** In JavaScript, functions are treated as unique objects. Every time a component updates, inline functions are recreated with a brand new memory address, which causes pure child elements to re-render. `useCallback` keeps function memory references identical.

### Use Cases
* **Real-world examples:** Passing highly interactive button click actions to deeply nested listing trees, or supplying stable event functions to custom utility hooks.

### Implementation Details
* **Setup:** Combined `useCallback` with pure child elements wrapped inside the `React.memo` compiler optimization layer.
* **Caching:** Structured individual increment functions (`incrementA`, `incrementB`) targeting discrete local counters to block mutual layout triggers.

### Screenshots
![Optimized Counter](./task%204/Screenshot%20(173).png)

### Challenges Faced
* **Missing React.memo Partnership:** Using `useCallback` on the parent functions didn't stop the child button components from rendering again at first. Fix: Remembered that `useCallback` *only* keeps the function reference stable; the child element itself must be explicitly wrapped in `React.memo` to check those stable references.

### How it improves React applications
* Prevents cascades of unnecessary child re-renders down large component trees.
* Keeps memory allocation clean by reusing identical function pointers instead of generating new garbage-collection items on every user click.
