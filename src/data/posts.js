export const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "April 10, 2026",
    author: "Jane Doe",
    category: "React",
    summary: "Learn how to set up your first React project and understand the core concepts that make React so powerful.",
    content: `React is a JavaScript library for building user interfaces. It was created by Facebook and is now maintained by Meta and the open-source community.

## Why React?

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

## Core Concepts

**Components** are the building blocks of any React application. A component is a self-contained module that renders some output. You can write UI components as simple functions.

**JSX** is a syntax extension to JavaScript that looks similar to HTML. It lets you write UI structure in a familiar, readable way directly inside your JavaScript code.

**State & Props** — Props are inputs to a React component. State is data managed within the component itself that can change over time.

## Getting Started

\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
\`\`\`

You're now ready to build amazing things with React!`,
  },
  {
    id: 2,
    title: "CSS Tips Every Developer Should Know",
    date: "April 12, 2026",
    author: "John Smith",
    category: "CSS",
    summary: "A collection of practical CSS tricks to level up your frontend skills and write cleaner, more maintainable stylesheets.",
    content: `CSS has evolved a lot over the years. Modern CSS gives us powerful tools to create beautiful layouts without relying on external libraries.

## Flexbox

Flexbox is a one-dimensional layout method for arranging items in rows or columns. It solves many common layout problems effortlessly.

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
\`\`\`

## CSS Grid

CSS Grid is a two-dimensional layout system. It's perfect for page-level layout and complex component designs.

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
\`\`\`

## Custom Properties (Variables)

CSS custom properties (variables) let you reuse values throughout your stylesheet, making theming and maintenance much easier.

\`\`\`css
:root {
  --primary: #6366f1;
  --bg: #f9fafb;
}
\`\`\`

These three features alone will transform how you write CSS!`,
  },
  {
    id: 3,
    title: "JavaScript ES2024 Features",
    date: "April 14, 2026",
    author: "Alex Lee",
    category: "JavaScript",
    summary: "Explore the latest JavaScript features that make your code cleaner, more expressive, and easier to maintain.",
    content: `JavaScript continues to evolve with each new edition of the ECMAScript specification. Here are some highlights from recent editions.

## Array Grouping

Group array elements by a key using \`Object.groupBy\`:

\`\`\`js
const people = [
  { name: "Alice", dept: "Engineering" },
  { name: "Bob", dept: "Design" },
  { name: "Carol", dept: "Engineering" },
];

const byDept = Object.groupBy(people, p => p.dept);
\`\`\`

## Promise.withResolvers

A cleaner way to create a deferred promise:

\`\`\`js
const { promise, resolve, reject } = Promise.withResolvers();
\`\`\`

## Temporal API (Stage 3)

A modern replacement for the \`Date\` object with a much better API for working with dates and times.

## Pattern Matching (Proposal)

Upcoming pattern matching syntax will make conditional logic far more expressive than \`switch\` statements.

Keep an eye on the TC39 proposals repository for what's coming next!`,
  },
];
