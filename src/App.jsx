import React from 'react'
import Content from './Content';
import './App.css';

const App = () => {
  const items = [
    {
      title: "HTML",
      content: "Learn the structure and elements used to build web pages."
    },
    {
      title: "CSS",
      content: "Learn styling, layouts, colors, and responsive web design."
    },
    {
      title: "JavaScript",
      content: "Learn variables, functions, arrays, objects, and programming logic."
    },
    {
      title: "React",
      content: "Learn components, props, state, hooks, and modern UI development."
    },
    {
      title: "Java",
      content: "Learn object-oriented programming, collections, and core Java concepts."
    },
    {
      title: "SQL",
      content: "Learn databases, queries, joins, filtering, and data management."
    }
  ];
  return (
    <div>
      <Content items={items} /> 
    </div>
  )
}

export default App
