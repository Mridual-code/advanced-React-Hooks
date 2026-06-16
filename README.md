# Advanced React Hooks Core Reference

A practical implementation guide covering essential React optimization, reference, and state synchronization hooks.

---

## 1. useContext
* **Problem Solved:** Prevents "Prop Drilling" (passing state props down multiple nested component layers).
* **Core Concept:** Establishes a global broadcast channel. Any wrapped consumer component can tap directly into the source data layer instantly.
* **Key Use Case:** User sessions, app-wide UI language localization, and global design themes.

## 2. useRef
* **Problem Solved:** Accesses native HTML DOM elements directly or retains mutable values without triggering unwanted UI page refreshes.
* **Core Concept:** Stores a stable reference container whose `.current` property stays intact across all lifecycle component phases.
* **Key Use Case:** Forcing auto-focus on text elements, tracking animation frame intervals, and measuring layout container sizes.

## 3. useMemo
* **Problem Solved:** Blocks heavy, resource-intensive mathematical sorting or calculations from slowing down normal interface interactions.
* **Core Concept:** Caches (memoizes) the *returned outcome value* of a function. It re-runs calculations only if its registered values change.
* **Key Use Case:** Filtering data tables, computing complex algorithms, or mapping massive arrays.

## 4. useCallback
* **Problem Solved:** Stops downstream child components from rendering again when parent functions are remade on a page refresh.
* **Core Concept:** Caches the *actual function definition reference* in memory instead of regenerating a new pointer reference.
* **Key Use Case:** Passing event action callbacks down to optimized child components that rely heavily on `React.memo`.
