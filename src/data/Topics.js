import React from 'react'

export const topics = [
  {
    id: "javascript",
    name: "JavaScript",
    description: "Core JavaScript concepts and interview questions",
    category: "Web Development",
  },
  {
    id: "react",
    name: "React",
    description: "React concepts, hooks, components and patterns",
    category: "Web Development",
  },
  {
    id: "node",
    name: "Node.js",
    description: "Node.js fundamentals and backend concepts",
    category: "Backend",
  },
  {
    id: "express",
    name: "Express.js",
    description: "Express.js, APIs, middleware and routing",
    category: "Backend",
  },
  {
    id: "git-github",
    name: "Git / GitHub",
    description: "Version control and GitHub interview concepts",
    category: "Tools",
  },
  {
    id: "docker",
    name: "Docker",
    description: "Containers, images and Docker concepts",
    category: "DevOps",
  },
  {
    id: "software-development",
    name: "Software Development",
    description: "SDLC, Agile, testing and software engineering concepts",
    category: "Software Engineering",
  },
  {
    id: "excel",
    name: "Excel",
    description: "Excel functions, analysis and interview concepts",
    category: "Data",
  },
  {
    id: "powerbi",
    name: "Power BI",
    description: "Data visualization, DAX and Power BI concepts",
    category: "Data",
  },
  {
    id: "numpy",
    name: "NumPy",
    description: "Numerical computing and array operations",
    category: "Data Science",
  },
  {
    id: "python",
    name: "Python",
    description: "Python fundamentals and interview concepts",
    category: "Programming",
  },
  {
    id: "pandas",
    name: "Pandas",
    description: "Data manipulation and analysis with Pandas",
    category: "Data Science",
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    description: "Data visualization using Matplotlib",
    category: "Data Science",
  },
  {
    id: "core-java",
    name: "Core Java",
    description: "Java fundamentals, OOP and advanced concepts",
    category: "Programming",
  },
  {
    id: "spring-boot",
    name: "Spring / Spring Boot",
    description: "Spring framework and Spring Boot concepts",
    category: "Backend",
  },
  {
    id: "hibernate",
    name: "Hibernate",
    description: "ORM, mappings and Hibernate concepts",
    category: "Backend",
  },
];

export const topicContent = {
  javascript: {
    concepts: [
      {
        id: "variables",
        name: "Variables",

        theory:
          "Variables are used to store data values in JavaScript. JavaScript provides var, let, and const for declaring variables. In modern JavaScript, let and const are generally preferred because they provide block scope.",

        code: `let name = "Janhavi";
const age = 22;

console.log(name);
console.log(age);`,
      },

      {
        id: "hoisting",
        name: "Hoisting",

        theory:
          "Hoisting is JavaScript's behavior of processing declarations before executing the code. Function declarations are fully hoisted, while let and const declarations are hoisted but remain in the Temporal Dead Zone until their declaration is reached.",

        diagram: "https://scaler.com/topics/images/const-variable-lifecyle.webp",

        code: `console.log(a);

var a = 10;`,

        trickyQuestions: [
          "What is hoisting in JavaScript?",
          "Are let and const hoisted?",
          "What is the Temporal Dead Zone?",
        ],
      },

      {
        id: "Async-Await",
        name: "Async/Await",

        theory:
          "Variables are used to store data values in JavaScript. JavaScript provides var, let, and const for declaring variables. In modern JavaScript, let and const are generally preferred because they provide block scope.",

        code: `let name = "Janhavi";
const age = 22;

console.log(name);
console.log(age);`,
      },

      {
        id: "Promises",
        name: "Promises",

        theory:
          "Hoisting is JavaScript's behavior of processing declarations before executing the code. Function declarations are fully hoisted, while let and const declarations are hoisted but remain in the Temporal Dead Zone until their declaration is reached.",

        diagram: "https://scaler.com/topics/images/const-variable-lifecyle.webp",

        code: `console.log(a);

var a = 10;`,

        trickyQuestions: [
          "What is hoisting in JavaScript?",
          "Are let and const hoisted?",
          "What is the Temporal Dead Zone?",
        ],
      },
    ],
  },
};