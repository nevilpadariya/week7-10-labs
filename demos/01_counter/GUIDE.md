# Demo 1 — Counter with useState (10–12 min)

## Goal
Show how `useState` gives a component memory and triggers re-render on updates.

## Steps
1) Import `useState` from React.
2) Initialize: `const [count, setCount] = useState(0)`.
3) Render `count` and a `+1` button.
4) On click → `setCount(count + 1)`.

## Talking Points
- Plain variables reset each render; state persists.
- React updates the UI declaratively.
