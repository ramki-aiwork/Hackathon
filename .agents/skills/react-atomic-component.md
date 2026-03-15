---
name: React Atomic Component System
description: Guidelines on how to create React components using Atomic Design principles and the project's ThemeContext layer.
---

# React Atomic Component Strategy

This project uses an Atomic Design structure and a CSS abstraction layer to allow switching between Tailwind and potentially other CSS frameworks in the future.

When asked to create a new React component, ALWAYS follow these rules:

1. **Location**: Place the component in `frontend/src/components/atoms/`, `molecules/`, `organisms/`, or `templates/`.
2. **ThemeContext**: Do NOT hardcode CSS framework utility classes (like Tailwind's `bg-red-500`) directly on the JSX elements unless it's a one-off spacing adjustment. 
   - Instead, import `useTheme` from `context/ThemeContext`.
   - Use the `classes` object provided by the context to style the component.
   - Example: `<button className={classes.button.primary}>`
3. **Extend Theme**: If the current `ComponentClasses` interface inside `ThemeContext.tsx` does not have a property for your new component (e.g., you are building a `Modal`), you MUST first update the `ComponentClasses` interface and `tailwindTheme` implementation inside `ThemeContext.tsx` before building your component.
4. **Props**: Use TypeScript interfaces extending standard HTML attributes if wrapping an HTML element.
