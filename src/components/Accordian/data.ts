const reactQuestions = [
  {
    id: 1,
    question: 'What is React?',
    answer:
      'React is a JavaScript library for building user interfaces, primarily developed and maintained by Facebook. It allows developers to create large web applications that can update and render efficiently in response to data changes.',
  },
  {
    id: 2,
    question: 'What is a component in React?',
    answer:
      'A component in React is a reusable piece of UI that can be either a function or a class. Components accept inputs called props and return React elements that describe what should appear on the screen.',
  },
  {
    id: 3,
    question: 'What is the virtual DOM in React?',
    answer:
      'The virtual DOM is a lightweight, in-memory representation of the real DOM in React. React uses the virtual DOM to optimize updates, making the rendering process more efficient by minimizing direct manipulation of the actual DOM.',
  },
  {
    id: 4,
    question: 'What is JSX?',
    answer:
      'JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is used with React to describe the UI structure and is transpiled into regular JavaScript by tools like Babel.',
  },
  {
    id: 5,
    question: 'How do you create a state in a React component?',
    answer:
      "In a functional component, state is created using the useState hook, which returns a state variable and a function to update it. In a class component, state is defined as an object within the component's constructor.",
  },
  {
    id: 6,
    question: 'What is the difference between props and state in React?',
    answer:
      'Props are inputs passed to components from their parent, and they are immutable within the component. State is a local data store that is mutable and managed within the component. State is used to handle dynamic data that changes over time.',
  },
  {
    id: 7,
    question: 'What are React hooks?',
    answer:
      'React hooks are functions that let you use state and other React features in functional components. The most common hooks are useState for state management, useEffect for side effects, and useContext for context API usage.',
  },
  {
    id: 8,
    question: 'What is the purpose of useEffect in React?',
    answer:
      'The useEffect hook allows you to perform side effects in functional components. These can include data fetching, manual DOM manipulation, or subscribing to external events. It runs after the component renders and can clean up resources when necessary.',
  },
  {
    id: 9,
    question: 'How do you lift state up in React?',
    answer:
      'Lifting state up involves moving state to the nearest common ancestor of the components that need to share it. This allows multiple components to access and manipulate the shared state, ensuring consistency across the application.',
  },
  {
    id: 10,
    question: 'What is context in React?',
    answer:
      'Context in React is a way to pass data through the component tree without having to pass props down manually at every level. The useContext hook or the Context.Provider component is used to share values like themes, user data, or settings globally across components.',
  },
];

export default reactQuestions;
