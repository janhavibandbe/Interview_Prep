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
        id: "JavaScriptFundamentals",
        name: "JavaScript Fundamentals",
        theory:
          `<h3>What is JavaScript?</h3>
          <p>
            JavaScript is a high-level, interpreted programming language mainly used
            to make web pages interactive and dynamic. It can run in the browser as
            well as on servers using environments like Node.js.
          </p>
          <p>
            JavaScript supports features such as variables, functions, objects,
            asynchronous programming, and event handling. It is one of the core
            technologies of web development, along with HTML and CSS.
          </p>

          <h3>Why is JavaScript an Interpreted Language?</h3>
          <p>
            The JavaScript engine can start executing the code without first compiling
            the entire program into machine code.
          </p>
          <p>For example, when we write:</p>
          <pre><code>let a = 10;
let b = 20;
console.log(a + b);</code></pre>
          <p>
            The JavaScript engine reads the code, parses it, and starts executing it.
            This makes JavaScript convenient for web development because developers
            don't have to perform a separate compilation step before running their code.
          </p>
          <p>
            The main drawback of pure interpretation is performance.
          </p>
          <p>
            If the same piece of code is executed many times, a purely interpreted
            engine would repeatedly spend time interpreting the code, which can make
            execution slower compared with already compiled machine code.
          </p>
          <h3>What is JIT Compilation?</h3>
          <p>
            Modern JavaScript engines use
            <strong>JIT (Just-In-Time) compilation</strong>
            to improve performance.
          </p>
          <p>The basic process is:</p>
          <p>
            <strong>
              JavaScript Code → Parse → Execute → Identify frequently executed code
              → JIT Compile &amp; Optimize → Machine Code
            </strong>
          </p>
          <p>
            The engine monitors the code while it is running. When it finds
            <strong>hot code</strong> (code that executes frequently), the JIT compiler
            compiles and optimizes that code into machine code.
          </p>
          <p>
            The next time that code runs, the engine can execute the optimized machine
            code instead of repeatedly interpreting the same code.
          </p>

          <h3>Simple Example</h3>
          <pre><code>function add(a, b) {
  return a + b;
}

for (let i = 0; i &lt; 1000000; i++) {
  add(i, i);
}</code></pre>
          <p>
            The <code>add()</code> function is called many times, so the JavaScript
            engine can recognize it as frequently executed code.
          </p>
          <p>
            The JIT compiler can optimize it so that subsequent executions are much faster.
          </p>

          <h3>Dynamic Typing </h3>
          <p>Dynamic typing means that we don't have to explicitly specify the data type of a variable when declaring it. The type is determined at runtime based on the value assigned to the variable.</p>
          <p>For example:</p>
          <pre><code>let value = 10; // Number 
value = "Hello"; // String 
value = true; // Boolean</code></pre>
          <p>Here, the same variable value can hold different types of values during the execution of the program.<p>
      `},

      {
        id: "Variables",
        name: "Variables",
        theory:
        `<h3>What are var, let, and const in JavaScript?</h3>
        <p><code>var</code>, <code>let</code>, and <code>const</code> are keywords used to declare variables in JavaScript.The main difference is their scope and whether we can reassign or redeclare them.</p>
        <p><code>var</code> is function-scoped and can be both reassigned and redeclared.
        <br/><code>let</code> is block-scoped. We can reassign it, but we cannot redeclare it in the same scope.
        <br/><code>const</code> is also block-scoped, but we cannot reassign or redeclare it, and it must be initialized when we declare it.</p>
      `},

      {
        id: "DataTypes",
        name: "Data Types",

        theory:
          `<h3>Data Types</h3>
          <p>JavaScript has two main categories of data types: Primitive and Non-Primitive (Reference) types.</p>
          <p>1. Primitive Data Types — 7 types:</p>
          <p><ul>
            <li><strong>String</strong> – represents text: "Hello"</li>
            <li><strong>Number</strong> – represents integers and decimals: 10, 3.14</li>
            <li><strong>BigInt</strong> – represents very large integers: 12345678901234567890n</li>
            <li><strong>Boolean</strong> – represents true or false</li>
            <li><strong>Undefined</strong> – a variable that has been declared but not assigned a value</li>
            <li><strong>Null</strong> – represents an intentional absence of a value</li>
            <li><strong>Symbol</strong> – creates unique identifiers</li>
          </ul></p>
          <p>2. Non-Primitive (Reference) Data Types:</p>
          <p><ul>
            <li><strong>Object</strong> – collection of key-value pairs</li>
            <li><strong>Array</strong> – ordered collection of values</li>
            <li><strong>Function</strong> – reusable block of code</li>
          </ul></p>

          <p><code>typeof</code> is a JavaScript operator used to determine the type of a value. It returns the type as a string.</p>

          <pre><code>typeof null // "object"</code></pre>
          <p>This is a historical behavior/legacy quirk in JavaScript. <code>null</code> is actually a primitive value, but <code>typeof</code> reports "object" for compatibility reasons.</p>

          <pre><code>typeof [] // "object"</code></pre>
          <p>An array is an object in JavaScript.</code> reports "object" for compatibility reasons.</p>

      `},

      {
        id: "TypeConversion",
        name: "Type Conversion & Type Coercion",

        theory:
          `<p>Type conversion means converting a value from one data type to another. In JavaScript, conversion can happen in two ways: implicit conversion and explicit conversion.</p>
          <h3>1. Explicit Type Conversion</h3>
          <p>We manually convert the type using functions like String(), Number(), and Boolean().</p>
          <pre><code>let value = "100";

Number(value);   // 100
String(100);     // "100"
Boolean(100);    // true</code></pre>
          
          <h3>2. Implicit Type Conversion — Type Coercion</h3>
          <p>JavaScript automatically converts types when an operation requires it.</p>
          <pre><code>let result = "5" + 10; // "510" (string concatenation)
let sum = "5" - 2;     // 3 (number subtraction)</code></pre>
          <p>In the first example, JavaScript converts the number 10 to a string and concatenates it with "5". In the second example, it converts the string "5" to a number and performs subtraction.</p>
          

          <h3>3. == vs ===</h3>
          <p><strong>Loose equality == performs type coercion:</strong></p>
          <pre><code>5 == "5"; // true</code></pre>
          <p>JavaScript converts "5" to 5 before comparison.</p>
          <p><strong>Strict equality === does not perform this type conversion:</strong></p>
          <pre><code>5 === "5"; // false</code></pre>
          <p>Because the types are different.</p>
          <p>Prefer === and !== in normal code because they avoid unexpected type coercion.</p>

          <h3>4. Truthy and Falsy Values</h3>
          <p>Truthy and falsy describe how a value behaves when JavaScript expects a Boolean value. A truthy value behaves like true, while a falsy value behaves like false.</p>
          <p><strong>Falsy Values</strong></p>
          <p>JavaScript has a small set of values that are considered falsy:</p>
          <pre><code>false
0
-0
0n
""
null
undefined
NaN</code></pre>
          <p><strong>Truthy Values</strong></p>
          <p>Anything that is not falsy is truthy.</p>
          <pre><code>"Hello"   // truthy
"0"       // truthy
"false"   // truthy
1         // truthy
-1        // truthy
[]        // truthy
{}        // truthy</code></pre>
      `},

      {
      id: "Functions",
      name: "Functions",
      theory:
      `      
      `},

      {
      id: "Scope",
      name: "Scope",
      theory:
      `      
      `},

      {
      id: "Hoisting",
      name: "Hoisting",
      theory:
      `      
      `},

      {
      id: "Closures",
      name: "Closures",
      theory:
      `      
      `},

      {
      id: "thisKeyword",
      name: "this Keyword",
      theory:
      `      
      `},

      {
      id: "Objects",
      name: "Objects",
      theory:
      `      
      `},

      {
      id: "Arrays",
      name: "Arrays",
      theory:
      `      
      `},

      {
      id: "Destructuring",
      name: "Destructuring",
      theory:
      `      
      `},

      {
      id: "Spread&Rest",
      name: "Spread & Rest Operators",
      theory:
      `      
      `},

      {
      id: "HigherOrderFunctions",
      name: "Higher-Order Functions",
      theory:
      `      
      `},

      {
      id: "Callbacks",
      name: "Callbacks",
      theory:
      `      
      `},

      {
      id: "Promises",
      name: "Promises",
      theory:
      `      
      `},

      {
      id: "AsyncAwait",
      name: "Async/Await",
      theory:
      `      
      `},

      {
      id: "EventLoop",
      name: "Event Loop",
      theory:
      `      
      `},

      {
      id: "SyncAsync",
      name: "Synchronous vs Asynchronous JavaScript",
      theory:
      `      
      `},

      {
      id: "DOM",
      name: "DOM Manipulation",
      theory:
      `      
      `},

      {
      id: "Events",
      name: "JavaScript Events",
      theory:
      `      
      `},

      {
      id: "FetchAPI",
      name: "Fetch API",
      theory:
      `      
      `},

      {
      id: "ES6+",
      name: "ES6+ Features",
      theory:
      `      
      `},

      {
      id: "CallStack",
      name: "Call Stack",
      theory:
      `      
      `},

      {
      id: "ShallowDeep",
      name: "Shallow Copy vs Deep Copy",
      theory:
      `      
      `},

      {
      id: "Local&Session",
      name: "Local Storage & Session Storage",
      theory:
      `      
      `},

      {
      id: "Debouncing",
      name: "Debouncing",
      theory:
      `      
      `},

      {
      id: "Throttling",
      name: "Throttling",
      theory:
      `      
      `},
    ],

    
  },

  excel: {
    concepts: [
      {
        id: "ExcelFundamentals",
        name: "Excel Fundamentals",
        theory: 
        `<h3>Workbook vs Worksheet</h3>
        <p>A workbook is the complete Excel file that we work with. It can contain multiple worksheets, along with things like charts, tables, formulas, and other Excel objects. For example, if I have an Excel file called <code>Sales_Report.xlsx</code>, that entire file is the workbook.</p>
        <p>Imagine you have a sales analysis file:</p>
        <p><strong>Sales_Report.xlsx</strong> → Workbook</p>
        <p>Inside it, you might have:</br>
        <strong>Sales Data</strong> → raw transaction data</br>
        <strong>Customers</strong> → customer information</br>
        <strong>Products</strong> → product details</br>
        <strong>Dashboard</strong> → charts and KPIs</br>
        All of these are contained within the same workbook.</p>

        <h3>Rows, columns, cells</h3>
        <p><strong>Rows:</strong> A row is a horizontal set of cells in an Excel worksheet. Rows are identified by numbers. In data analysis, we generally use a row to represent one record or observation. For example, in a sales dataset, one row could represent one customer transaction.</p>
        <p><strong>Columns:</strong> A column is a vertical set of cells in an Excel worksheet. Columns are identified by letters. In data analysis, a column generally represents a variable or attribute. For example, in a sales dataset, Customer, Product, Sales, and Date can each be separate columns.</p>
        <p><strong>Cells:</strong> A cell is the intersection of a row and a column. Each cell has a unique address based on its column letter and row number. For example, the intersection of column B and row 5 is cell B5. We can store values, text, formulas, or dates in a cell.</p>

        <h3>Cell References</h3>
        <p>A cell reference is the address used to identify a particular cell or range of cells in Excel. We use cell references in formulas to tell Excel which data should be used for a calculation. For example, if <code>A1</code> contains 100 and <code>B1</code> contains 200, I can use the formula <code>=A1+B1</code> to get 300. Excel has different types of cell references, mainly relative, absolute, and mixed references.</p>
        <p><strong>Relative reference:</strong> A relative cell reference changes when the formula is copied to another cell. For example, if I use <code>A2</code> multiplied by <code>B2</code> and drag the formula down, Excel automatically changes it to <code>A3</code> multiplied by <code>B3</code>. This is useful when performing the same calculation for multiple rows.</p>
        <p><strong>Absolute reference:</strong> An absolute reference is used when I want a particular cell to remain fixed while copying a formula. We use the dollar sign to lock both the row and column. For example, <code>$B$1</code> will remain the same even if I copy the formula to other cells.</p>
        <p><strong>Mixed reference:</strong> A mixed reference locks either the row or the column. For example, <code>$A1</code> locks column A while allowing the row to change, whereas <code>A$1</code> locks row 1 while allowing the column to change.</p>

        <h3>Freeze Panes</h3>
        <p>Freeze Panes is used to keep specific rows or columns visible while scrolling through a large worksheet. Its main purpose is to help us remember what the data represents. For example, if I have thousands of rows of sales data, I can freeze the header row so that column names like Customer, Date, Product, and Sales remain visible while I scroll down.</p>
        <p><strong>1. Freeze Top Row:</strong> If you only want to keep the header visible</br>
            <code>View → Freeze Panes → Freeze Top Row</code></p>
        <p><strong>2. Freeze First Column:</strong> If you want the first column to remain visible</br>
            <code>View → Freeze Panes → Freeze First Column</code></p>
        <p><strong>3. Freeze Multiple Rows/Columns:</strong> Suppose you want to freeze <code>Rows 1–2</code> and <code>Columns A–B</code>.You select the cell <code>C3</code>, then go to:</br>
            <code>View → Freeze Panes → Freeze Panes</code></p>
      `},

      {
        id: "MathFunctions",
        name: "Basic Mathematical Functions",
        theory: `
        <div style="width: 100%; overflow-x: auto; margin: 20px 0;">
          <table>
            <thead>
                <tr>
                    <th>Function</th>
                    <th>Purpose</th>
                    <th>Syntax</th>
                    <th>Example</th>
                    <th>Result</th>
                    <th>Interview Explanation</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td class="function">SUM()</td>
                    <td>Adds numbers</td>
                    <td><code>=SUM(A1:A5)</code></td>
                    <td>10, 20, 30</td>
                    <td>60</td>
                    <td>
                        SUM adds all numeric values in a given range.
                    </td>
                </tr>

                <tr>
                    <td class="function">AVERAGE()</td>
                    <td>Calculates arithmetic mean</td>
                    <td><code>=AVERAGE(A1:A5)</code></td>
                    <td>10, 20, 30</td>
                    <td>20</td>
                    <td>
                        AVERAGE calculates the mean of the values in a range.
                    </td>
                </tr>

                <tr>
                    <td class="function">MIN()</td>
                    <td>Finds smallest value</td>
                    <td><code>=MIN(A1:A5)</code></td>
                    <td>10, 20, 5, 30</td>
                    <td>5</td>
                    <td>
                        MIN returns the smallest numeric value from a range.
                    </td>
                </tr>

                <tr>
                    <td class="function">MAX()</td>
                    <td>Finds largest value</td>
                    <td><code>=MAX(A1:A5)</code></td>
                    <td>10, 20, 50, 30</td>
                    <td>50</td>
                    <td>
                        MAX returns the largest numeric value from a range.
                    </td>
                </tr>

                <tr>
                    <td class="function">COUNT()</td>
                    <td>Counts numeric cells</td>
                    <td><code>=COUNT(A1:A5)</code></td>
                    <td>10, "Apple", 20, blank, 30</td>
                    <td>3</td>
                    <td>
                        COUNT counts only cells containing numbers.
                    </td>
                </tr>

                <tr>
                    <td class="function">COUNTA()</td>
                    <td>Counts non-empty cells</td>
                    <td><code>=COUNTA(A1:A5)</code></td>
                    <td>10, "Apple", 20, blank, 30</td>
                    <td>4</td>
                    <td>
                        COUNTA counts all non-empty cells, including text,
                        numbers, and dates.
                    </td>
                </tr>

                <tr>
                    <td class="function">COUNTBLANK()</td>
                    <td>Counts empty cells</td>
                    <td><code>=COUNTBLANK(A1:A5)</code></td>
                    <td>10, blank, 20, blank, 30</td>
                    <td>2</td>
                    <td>
                        COUNTBLANK counts the number of empty cells in a range.
                    </td>
                </tr>

                <tr>
                    <td class="function">PRODUCT()</td>
                    <td>Multiplies numbers</td>
                    <td><code>=PRODUCT(A1:A3)</code></td>
                    <td>2, 3, 4</td>
                    <td>24</td>
                    <td>
                        PRODUCT multiplies all the numbers in a range together.
                    </td>
                </tr>

                <tr>
                    <td class="function">ROUND()</td>
                    <td>Rounds to specified decimal places</td>
                    <td><code>=ROUND(A1,2)</code></td>
                    <td>12.567</td>
                    <td>12.57</td>
                    <td>
                        ROUND rounds a number to the specified number of
                        decimal places.
                    </td>
                </tr>

                <tr>
                    <td class="function">ROUNDUP()</td>
                    <td>Always rounds away from zero</td>
                    <td><code>=ROUNDUP(A1,2)</code></td>
                    <td>12.561</td>
                    <td>12.57</td>
                    <td>
                        ROUNDUP always rounds the number away from zero.
                    </td>
                </tr>

                <tr>
                    <td class="function">ROUNDDOWN()</td>
                    <td>Always rounds toward zero</td>
                    <td><code>=ROUNDDOWN(A1,2)</code></td>
                    <td>12.569</td>
                    <td>12.56</td>
                    <td>
                        ROUNDDOWN always rounds the number toward zero.
                    </td>
                </tr>

            </tbody>
        </table>
      </div>
      `},

      {
        id: "LogicalFunctions",
        name: "Logical Functions",
        theory: `
        <p>Logical functions in Excel are used to evaluate conditions and return a result based on whether those conditions are true or false.</p>
        <div style="width: 100%; overflow-x: auto; margin: 20px 0;">
          <table>
            <thead>
                <tr>
                    <th>Function</th>
                    <th>Purpose</th>
                    <th>Syntax</th>
                    <th>Example</th>
                    <th>Result / Use</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>IF()</td>
                    <td>Checks a condition and returns one value if TRUE and another if FALSE</td>
                    <td><code>=IF(condition, value_if_true, value_if_false)</code></td>
                    <td><code>=IF(B2&gt;=50,"Pass","Fail")</code></td>
                    <td>Returns Pass if marks ≥ 50, otherwise Fail</td>
                </tr>

                <tr>
                    <td>Nested IF()</td>
                    <td>Checks multiple conditions sequentially</td>
                    <td><code>=IF(condition1,result1,IF(condition2,result2,...))</code></td>
                    <td><code>=IF(B2&gt;=80,"A",IF(B2&gt;=60,"B",IF(B2&gt;=40,"C","Fail")))</code></td>
                    <td>Assigns grades based on marks</td>
                </tr>

                <tr>
                    <td>IFS()</td>
                    <td>Checks multiple conditions without repeatedly nesting IF</td>
                    <td><code>=IFS(condition1,result1,condition2,result2,...)</code></td>
                    <td><code>=IFS(B2&gt;=80,"A",B2&gt;=60,"B",B2&gt;=40,"C",TRUE,"Fail")</code></td>
                    <td>Cleaner alternative to Nested IF</td>
                </tr>

                <tr>
                    <td>AND()</td>
                    <td>Returns TRUE only if all conditions are TRUE</td>
                    <td><code>=AND(condition1,condition2,...)</code></td>
                    <td><code>=AND(B2&gt;=50,C2="Yes")</code></td>
                    <td>TRUE only when both conditions are met</td>
                </tr>

                <tr>
                    <td>OR()</td>
                    <td>Returns TRUE if at least one condition is TRUE</td>
                    <td><code>=OR(condition1,condition2,...)</code></td>
                    <td><code>=OR(B2="Mumbai",B2="Nashik")</code></td>
                    <td>TRUE if either condition is met</td>
                </tr>

                <tr>
                    <td>NOT()</td>
                    <td>Reverses TRUE/FALSE result</td>
                    <td><code>=NOT(condition)</code></td>
                    <td><code>=NOT(B2="Completed")</code></td>
                    <td>TRUE if B2 is not "Completed"</td>
                </tr>

                <tr>
                    <td>IFERROR()</td>
                    <td>Replaces formula errors with a specified value</td>
                    <td><code>=IFERROR(value,value_if_error)</code></td>
                    <td><code>=IFERROR(A2/B2,0)</code></td>
                    <td>Returns 0 instead of #DIV/0!</td>
                </tr>
            </tbody>
        </table>
        </div>
      `},

      {
        id: "ConditionalAggregation",
        name: "Conditional Aggregation",
        theory: `
        <p>Conditional aggregation means calculating a summary (aggregate) only for data that meets a specific condition or set of conditions.</p>
        <div style="width: 100%; overflow-x: auto; margin: 20px 0;">
          <table>
            <thead>
                <tr>
                    <th>Function</th>
                    <th>Purpose</th>
                    <th>Syntax</th>
                    <th>Example</th>
                    <th>What it does</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>SUMIF()</td>
                    <td>Adds values based on one condition</td>
                    <td>
                        <code>=SUMIF(range,criteria,sum_range)</code>
                    </td>
                    <td>
                        <code>=SUMIF(A2:A10,"Sales",C2:C10)</code>
                    </td>
                    <td>
                        Adds sales amount where department is Sales
                    </td>
                </tr>

                <tr>
                    <td>SUMIFS()</td>
                    <td>Adds values based on multiple conditions</td>
                    <td>
                        <code>=SUMIFS(sum_range,criteria_range1,criteria1,...)</code>
                    </td>
                    <td>
                        <code>=SUMIFS(D2:D10,A2:A10,"Sales",B2:B10,"North")</code>
                    </td>
                    <td>
                        Adds sales for Sales department AND North region
                    </td>
                </tr>

                <tr>
                    <td>COUNTIF()</td>
                    <td>Counts cells based on one condition</td>
                    <td>
                        <code>=COUNTIF(range,criteria)</code>
                    </td>
                    <td>
                        <code>=COUNTIF(B2:B10,"Completed")</code>
                    </td>
                    <td>
                        Counts how many orders are Completed
                    </td>
                </tr>

                <tr>
                    <td>COUNTIFS()</td>
                    <td>Counts cells based on multiple conditions</td>
                    <td>
                        <code>=COUNTIFS(range1,criteria1,range2,criteria2,...)</code>
                    </td>
                    <td>
                        <code>=COUNTIFS(A2:A10,"Sales",B2:B10,"North")</code>
                    </td>
                    <td>
                        Counts records where department is Sales AND region is North
                    </td>
                </tr>

                <tr>
                    <td>AVERAGEIF()</td>
                    <td>Calculates average based on one condition</td>
                    <td>
                        <code>=AVERAGEIF(range,criteria,average_range)</code>
                    </td>
                    <td>
                        <code>=AVERAGEIF(A2:A10,"Sales",C2:C10)</code>
                    </td>
                    <td>
                        Calculates average sales for the Sales department
                    </td>
                </tr>

                <tr>
                    <td>AVERAGEIFS()</td>
                    <td>Calculates average based on multiple conditions</td>
                    <td>
                        <code>=AVERAGEIFS(average_range,criteria_range1,criteria1,...)</code>
                    </td>
                    <td>
                        <code>=AVERAGEIFS(D2:D10,A2:A10,"Sales",B2:B10,"North")</code>
                    </td>
                    <td>
                        Calculates average sales for Sales + North
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
      `},

      {
        id: "LookupFunctions",
        name: "Lookup Functions",
        theory: `
        <p>Lookup functions in Excel are used to search for a specific value in a dataset and retrieve related information from the same row, column, or corresponding position. They are commonly used in data analysis to combine information from different tables, find customer details using Customer ID, find product prices using Product ID, or retrieve employee information using Employee ID.</p>
        <p><strong>Simple example</strong></p>
        <p>Suppose I have this employee table:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>E101</td>
                <td>Rahul</td>
                <td>Sales</td>
                <td>45,000</td>
              </tr>
              <tr>
                <td>E102</td>
                <td>Priya</td>
                <td>HR</td>
                <td>52,000</td>
              </tr>
              <tr>
                <td>E103</td>
                <td>Amit</td>
                <td>IT</td>
                <td>65,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>If I have E103 and want to find the employee's salary, I perform a lookup.</br>
          I'm essentially telling Excel:</br>
          <code>"Find Employee ID E103, and give me the corresponding Salary."</code></br>
          The result is ₹65,000.</p>

        <h3>VLOOKUP</h3>
        <p>VLOOKUP stands for Vertical Lookup. It searches for a value in the first column of a table and returns a corresponding value from another column in the same row. It is commonly used when I need to retrieve information based on a unique identifier such as Employee ID, Product ID, or Customer ID</p>
        <p><strong>Syntax: </strong></p>
        <pre><code>=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</code></pre>
        <p>lookup_value	- The value we want to search for</br>
          table_array -	The range/table where we want to search</br>
          col_index_num	- The column number from which we want to return the result</br>
          range_lookup -	Whether we want an exact or approximate match</p>

        <p><strong>Exact Match: </strong></p>
        <p>For an exact match, we use <code>FALSE</code> or <code>0</code></br>
          For example:</br>
          <code>=VLOOKUP("E103",A2:D5,4,FALSE)</code></br>
          Excel searches for E103 exactly in the first column.</br>
          If it finds E103, it returns the corresponding salary.</br>
          If it doesn't find E103, VLOOKUP returns: <code>#N/A</code></p>
        <p>I would use exact matching when working with identifiers or specific values, such as Employee ID</p>
      
        <p><strong>Approximate  Match: </strong></p>
        <p>For an approximate match, we use <code>TRUE</code> or <code>1</code></br>
          Example:</br>
          <code>=VLOOKUP(75,A2:B6,2,TRUE)</code></br>
          It will return salary corresponding to <code>75</code> if it present in the table. If it is not present then VLOOKUP finds the largest value that is less than or equal to 72.</p>
        <p>For approximate matching, the first column must be sorted in ascending order. If the data isn't properly sorted, VLOOKUP can return an incorrect result.</p>
        <p>Approximate matching mainly used for ranges or slabs such as tax brackets, grades, or commission rates.</p>

        <p><strong>Limitations of VLOOKUP: </strong></p>
        <p>Limitation 1: It can only look from left to right - VLOOKUP searches in the first column of the selected table and returns a value from a column to its right.</p>
        <p>Limitation 2: Column number can be fragile - If someone inserts or rearranges columns, the formula can become problematic because the lookup depends on a hard-coded column index.</p>
        <p>Limitation 3: Lookup value must be in the first column</p>
        <p>Limitation 4: Approximate match requires sorted data - When using pproximate matching the lookup column should be sorted in ascending order. Otherwise, VLOOKUP can give unexpected or incorrect results.</p>
        <p>Limitation 5: Duplicate lookup values - If the lookup column contains duplicates, VLOOKUP normally returns the first matching occurrence.</p>

        <h3>HLOOKUP</h3>
        <p>HLOOKUP stands for Horizontal Lookup. It searches for a value in the first row of a table and returns a corresponding value from a specified row.</p>
        <pre><code>=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])</code></pre>
        <p>lookup_value → The value you want to search for.</br>
          table_array → The range containing the data.</br>
          row_index_num → The row number from which you want to return the result.</br>
          range_lookup → Specifies whether you want an exact or approximate match.</p>
        <p>VLOOKUP searches vertically in the first column and returns a value from another column, whereas HLOOKUP searches horizontally in the first row and returns a value from another row.</p>

        <h3>XLOOKUP</h3>
        <p>XLOOKUP is a modern lookup function in Excel that searches for a value in one range and returns the corresponding value from another range. It is more flexible than VLOOKUP because it can perform both left-to-right and right-to-left lookups, and it doesn't require a column index number.</p>
        <pre><code>=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])</code></pre>
        <p>lookup_value → The value you want to search for.</br>
          lookup_array → The range where Excel should search for that value.</br>
          return_array → The range from which Excel should return the corresponding result.</br>
          [if_not_found] → Optional. What to display if no match is found.</br>
          [match_mode] → Optional. Controls exact/approximate matching.</br>
          [search_mode] → Optional. Controls the direction in which Excel searches.</p>
        
        <h3>INDEX + MATCH</h3>
        <p><strong>MATCH</strong></p>
        <p>The MATCH function returns the position of a value in a row, column, or table, rather than the actual value itself. For Example, if you’re looking for the number "50" in a list of numbers and it’s the 5th item, the function will return the number 5.</p>
        <pre><code>=MATCH(lookup_value, lookup_array, [match_type])</code></pre>
        <p>lookup_value: The value you want to find in the array (e.g., a number, text, or logical value).</br>
          lookup_array: The range of cells to search within.</br>
          [match_type] (optional):</br>
          &emsp;1 (default): Finds the largest value less than or equal to the lookup_value. The array must be sorted in ascending order.</br>
          &emsp;0: Finds an exact match.</br>
          &emsp;1: Finds the smallest value greater than or equal to the lookup_value. The array must be sorted in descending order.</p>
        <p><strong>INDEX</strong></p>
        <p>INDEX returns a value from a specified range based on its row or column position. For example, if I tell INDEX to return the third value from a list, it returns the value present at position three.</p>
        <pre><code>=INDEX(array, row_num, [column_num])</code></pre>
        <p>Where:</br>
          array → The range from which you want to return a value.</br>
          row_num → The row position of the value you want.</br>
          column_num → Optional; used when your range has multiple columns.</p>
        <p><strong>INDEX+MATCH</strong></p>
        <p>INDEX + MATCH is a combination of two Excel functions used to look up and retrieve data. MATCH finds the position of a specific value within a range, and INDEX returns the value from another range at that position.
          Compared with VLOOKUP, INDEX + MATCH is more flexible because it can look up values from either left or right, and it doesn't depend on a fixed column number.</p>
        
        <p><strong>How Does INDEX + MATCH Work?</strong></p>
        <p>Think of it as two simple steps:</p>
        <ol>
            <li><strong>MATCH</strong> → “Where is the value?”</li>
            <li><strong>INDEX</strong> → “Give me the value from that position.”</li>
        </ol>
        <p><strong>Example</strong></p>
        <p>Suppose you have the following employee data:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
              <thead>
                  <tr>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Salary</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>101</td>
                      <td>Rahul</td>
                      <td>45,000</td>
                  </tr>
                  <tr>
                      <td>102</td>
                      <td>Priya</td>
                      <td>55,000</td>
                  </tr>
                  <tr>
                      <td>103</td>
                      <td>Amit</td>
                      <td>60,000</td>
                  </tr>
                  <tr>
                      <td>104</td>
                      <td>Neha</td>
                      <td>50,000</td>
                  </tr>
              </tbody>
          </table>
        </div>
        <p>You want to find <strong>Amit's salary</strong>.</p>
        <p>Step 1: MATCH<p>
        <pre><code>=MATCH("Amit",B2:B5,0)</code></pre>
        <p>
            MATCH searches for <strong>Amit</strong> in the range <code>B2:B5</code>.
        </p>
        <p>Result:</p>
        <pre><code>3</code></pre>
        <p>
            This is because Amit is the <strong>3rd item</strong> in the range.
        </p>

        <p>Step 2: INDEX</p>
        <pre><code>=INDEX(C2:C5,3)</code></pre>
        <p>
            INDEX goes to the <strong>3rd position</strong> in the salary range.
        </p>
        <p>Result:</p>
        <pre><code>60000</code></pre>
        
        <p>Combine Them</p>
        <p>
            Instead of using two separate formulas, you can combine INDEX and MATCH:
        </p>
        <pre><code>=INDEX(C2:C5,MATCH("Amit",B2:B5,0))</code></pre>
        <p>Result:</p>
        <pre><code>60,000</code></pre>
        <p>
            This is the classic <strong>INDEX + MATCH</strong> formula.
        </p>

        <p><strong>Why Use INDEX + MATCH Instead of VLOOKUP?</strong></p>
        <p>
            This is a very common interview follow-up question.
        </p>
        <p>You can say:</p>
        <blockquote>
            <p>
                “The main advantage of INDEX + MATCH is flexibility. VLOOKUP normally
                searches in the first column and returns a value from a column to the
                right. INDEX + MATCH doesn't have that limitation. It can perform a
                lookup in either direction. It is also less affected if columns are
                inserted or moved because MATCH identifies the position based on the
                lookup range rather than relying on a hard-coded column number.”
            </p>
        </blockquote>

        <p>VLOOKUP Example</p>
        <pre><code>=VLOOKUP(A2,A2:D10,4,FALSE)</code></pre>
        <p>
            Here, <code>4</code> means return the value from the <strong>4th column</strong>.
        </p>
        <p>
            If the structure of the table changes, that hard-coded column number can
            become problematic.
        </p>

        <p>INDEX + MATCH Example</p>
        <pre><code>=INDEX(D2:D10,MATCH(A2,A2:A10,0))</code></pre>
        <p>Here:</p>
        <ul>
            <li><strong>MATCH</strong> determines the row position.</li>
            <li><strong>INDEX</strong> retrieves the corresponding value.</li>
        </ul>
      `},

      {
        id: "TextFunctions",
        name: "Text Functions",
        theory: `
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table> 
            <thead> <tr> <th>Function</th> <th>What it does</th> <th>Syntax</th> <th>Example</th> <th>Result</th> <th>Interview Point</th> </tr> </thead>
            <tbody>
              <tr>
                  <td><strong>CONCAT()</strong></td>
                  <td>Combines text from multiple cells/values</td>
                  <td><code>=CONCAT(text1,text2,...)</code></td>
                  <td><code>=CONCAT(A2," ",B2)</code></td>
                  <td>Rahul Sharma</td>
                  <td>Modern function for combining text</td>
              </tr>

              <tr>
                  <td><strong>CONCATENATE()</strong></td>
                  <td>Combines text values</td>
                  <td><code>=CONCATENATE(text1,text2,...)</code></td>
                  <td><code>=CONCATENATE(A2," ",B2)</code></td>
                  <td>Rahul Sharma</td>
                  <td>Older function; CONCAT is preferred for new formulas</td>
              </tr>

              <tr>
                  <td><strong>TEXTJOIN()</strong></td>
                  <td>Combines text using a delimiter and can ignore blanks</td>
                  <td><code>=TEXTJOIN(delimiter,ignore_empty,text1,...)</code></td>
                  <td><code>=TEXTJOIN(", ",TRUE,A2:C2)</code></td>
                  <td>Rahul, Sharma, Analyst</td>
                  <td>More flexible than CONCAT when separators are required</td>
              </tr>

              <tr>
                  <td><strong>LEFT()</strong></td>
                  <td>Extracts characters from the beginning of text</td>
                  <td><code>=LEFT(text,num_chars)</code></td>
                  <td><code>=LEFT("EMP10245",3)</code></td>
                  <td>EMP</td>
                  <td>Useful for extracting prefixes</td>
              </tr>

              <tr>
                  <td><strong>RIGHT()</strong></td>
                  <td>Extracts characters from the end of text</td>
                  <td><code>=RIGHT(text,num_chars)</code></td>
                  <td><code>=RIGHT("EMP10245",5)</code></td>
                  <td>10245</td>
                  <td>Useful for extracting suffixes/last digits</td>
              </tr>

              <tr>
                  <td><strong>MID()</strong></td>
                  <td>Extracts characters from a specified position</td>
                  <td><code>=MID(text,start_num,num_chars)</code></td>
                  <td><code>=MID("EMP10245",4,5)</code></td>
                  <td>10245</td>
                  <td>Useful when the required text is in the middle</td>
              </tr>

              <tr>
                  <td><strong>LEN()</strong></td>
                  <td>Counts the number of characters</td>
                  <td><code>=LEN(text)</code></td>
                  <td><code>=LEN("Rahul Sharma")</code></td>
                  <td>12</td>
                  <td>Includes spaces; useful for data validation</td>
              </tr>

              <tr>
                  <td><strong>TRIM()</strong></td>
                  <td>Removes unnecessary spaces</td>
                  <td><code>=TRIM(text)</code></td>
                  <td><code>=TRIM(" Rahul Sharma ")</code></td>
                  <td>Rahul Sharma</td>
                  <td>Very useful for data cleaning</td>
              </tr>

              <tr>
                  <td><strong>UPPER()</strong></td>
                  <td>Converts text to uppercase</td>
                  <td><code>=UPPER(text)</code></td>
                  <td><code>=UPPER("mumbai")</code></td>
                  <td>MUMBAI</td>
                  <td>Useful for standardizing text</td>
              </tr>

              <tr>
                  <td><strong>LOWER()</strong></td>
                  <td>Converts text to lowercase</td>
                  <td><code>=LOWER(text)</code></td>
                  <td><code>=LOWER("RAHUL@GMAIL.COM")</code></td>
                  <td>rahul@gmail.com</td>
                  <td>Useful for standardizing emails/text</td>
              </tr>

              <tr>
                  <td><strong>PROPER()</strong></td>
                  <td>Capitalizes the first letter of each word</td>
                  <td><code>=PROPER(text)</code></td>
                  <td><code>=PROPER("rahul sharma")</code></td>
                  <td>Rahul Sharma</td>
                  <td>Useful for formatting names</td>
              </tr>

              <tr>
                  <td><strong>FIND()</strong></td>
                  <td>Finds the position of text within another text</td>
                  <td><code>=FIND(find_text,within_text)</code></td>
                  <td><code>=FIND("a","Rahul")</code></td>
                  <td>2</td>
                  <td>Case-sensitive</td>
              </tr>

              <tr>
                  <td><strong>SEARCH()</strong></td>
                  <td>Finds the position of text within another text</td>
                  <td><code>=SEARCH(find_text,within_text)</code></td>
                  <td><code>=SEARCH("A","Rahul")</code></td>
                  <td>2</td>
                  <td>Not case-sensitive; supports wildcards</td>
              </tr>

              <tr>
                  <td><strong>REPLACE()</strong></td>
                  <td>Replaces characters based on their position</td>
                  <td><code>=REPLACE(old_text,start_num,num_chars,new_text)</code></td>
                  <td><code>=REPLACE("EMP12345",4,5,"67890")</code></td>
                  <td>EMP67890</td>
                  <td>Works based on position</td>
              </tr>

              <tr>
                  <td><strong>SUBSTITUTE()</strong></td>
                  <td>Replaces specific text with another text</td>
                  <td><code>=SUBSTITUTE(text,old_text,new_text)</code></td>
                  <td><code>=SUBSTITUTE("Mumbai India","Mumbai","Delhi")</code></td>
                  <td>Delhi India</td>
                  <td>Works based on text/value, not position</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Important Differences for Interview</h3>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table> 
            <thead> <tr> <th>Comparison</th> <th>Key Difference</th> <th>Easy Way to Remember</th> </tr> </thead>
            <tbody>
                <tr>
                    <td><strong>CONCAT vs CONCATENATE</strong></td>
                    <td>CONCAT is newer; CONCATENATE is older</td>
                    <td>CONCAT = newer</td>
                </tr>

                <tr>
                    <td><strong>CONCAT vs TEXTJOIN</strong></td>
                    <td>TEXTJOIN allows delimiter and can ignore blanks</td>
                    <td>TEXTJOIN = Join + Separator</td>
                </tr>

                <tr>
                    <td><strong>LEFT vs RIGHT vs MID</strong></td>
                    <td>LEFT = beginning, RIGHT = end, MID = specified position</td>
                    <td>L → R → Middle</td>
                </tr>

                <tr>
                    <td><strong>FIND vs SEARCH</strong></td>
                    <td>FIND is case-sensitive; SEARCH is not</td>
                    <td>FIND = strict, SEARCH = flexible</td>
                </tr>

                <tr>
                    <td><strong>REPLACE vs SUBSTITUTE</strong></td>
                    <td>REPLACE uses position; SUBSTITUTE uses actual text</td>
                    <td>REPLACE = Position, SUBSTITUTE = Text</td>
                </tr>

                <tr>
                    <td><strong>LEN vs TRIM</strong></td>
                    <td>LEN counts characters; TRIM cleans extra spaces</td>
                    <td>LEN = Count, TRIM = Clean</td>
                </tr>

                <tr>
                    <td><strong>UPPER vs LOWER vs PROPER</strong></td>
                    <td>Uppercase, lowercase, first letter capitalization</td>
                    <td>Format/standardize text</td>
                </tr>
            </tbody>
          </table>
        </diV>
      `},

      {
        id: "Date&Time",
        name: "Date & Time Functions",
        theory: `
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table> 
            <thead> <tr> <th>Function</th> <th>What it does</th> <th>Syntax</th> <th>Example</th> <th>Result / Meaning</th> <th>Interview Point</th> </tr> </thead>
            <tbody>
                <tr>
                    <td><strong>TODAY()</strong></td>
                    <td>Returns the current date</td>
                    <td><code>=TODAY()</code></td>
                    <td><code>=TODAY()</code></td>
                    <td>Current date</td>
                    <td>Updates automatically when the workbook recalculates</td>
                </tr>

                <tr>
                    <td><strong>NOW()</strong></td>
                    <td>Returns the current date and time</td>
                    <td><code>=NOW()</code></td>
                    <td><code>=NOW()</code></td>
                    <td>Current date + time</td>
                    <td>Unlike TODAY(), it includes the current time</td>
                </tr>

                <tr>
                    <td><strong>DATE()</strong></td>
                    <td>Creates a date from year, month, and day</td>
                    <td><code>=DATE(year,month,day)</code></td>
                    <td><code>=DATE(2026,9,2)</code></td>
                    <td>02-Sep-2026</td>
                    <td>Useful when year/month/day are stored separately</td>
                </tr>

                <tr>
                    <td><strong>DAY()</strong></td>
                    <td>Extracts the day from a date</td>
                    <td><code>=DAY(serial_number)</code></td>
                    <td><code>=DAY("02-Sep-2026")</code></td>
                    <td>2</td>
                    <td>Returns day of the month</td>
                </tr>

                <tr>
                    <td><strong>MONTH()</strong></td>
                    <td>Extracts the month number</td>
                    <td><code>=MONTH(serial_number)</code></td>
                    <td><code>=MONTH("02-Sep-2026")</code></td>
                    <td>9</td>
                    <td>Returns 1–12</td>
                </tr>

                <tr>
                    <td><strong>YEAR()</strong></td>
                    <td>Extracts the year</td>
                    <td><code>=YEAR(serial_number)</code></td>
                    <td><code>=YEAR("02-Sep-2026")</code></td>
                    <td>2026</td>
                    <td>Useful for year-based analysis</td>
                </tr>

                <tr>
                    <td><strong>HOUR()</strong></td>
                    <td>Extracts the hour from a time</td>
                    <td><code>=HOUR(serial_number)</code></td>
                    <td><code>=HOUR("14:35:20")</code></td>
                    <td>14</td>
                    <td>Returns 0–23</td>
                </tr>

                <tr>
                    <td><strong>MINUTE()</strong></td>
                    <td>Extracts the minute from a time</td>
                    <td><code>=MINUTE(serial_number)</code></td>
                    <td><code>=MINUTE("14:35:20")</code></td>
                    <td>35</td>
                    <td>Returns 0–59</td>
                </tr>

                <tr>
                    <td><strong>SECOND()</strong></td>
                    <td>Extracts seconds from a time</td>
                    <td><code>=SECOND(serial_number)</code></td>
                    <td><code>=SECOND("14:35:20")</code></td>
                    <td>20</td>
                    <td>Returns 0–59</td>
                </tr>

                <tr>
                    <td><strong>DATEDIF()</strong></td>
                    <td>Calculates difference between two dates in specified units</td>
                    <td><code>=DATEDIF(start_date,end_date,unit)</code></td>
                    <td><code>=DATEDIF(A2,B2,"Y")</code></td>
                    <td>Completed years</td>
                    <td>Useful for age, tenure, and duration calculations; has some limitations</td>
                </tr>

                <tr>
                    <td><strong>EDATE()</strong></td>
                    <td>Returns a date a specified number of months before/after a date</td>
                    <td><code>=EDATE(start_date,months)</code></td>
                    <td><code>=EDATE("02-Sep-2026",3)</code></td>
                    <td>02-Dec-2026</td>
                    <td>Useful for month-based calculations</td>
                </tr>

                <tr>
                    <td><strong>EOMONTH()</strong></td>
                    <td>Returns the last day of a month</td>
                    <td><code>=EOMONTH(start_date,months)</code></td>
                    <td><code>=EOMONTH("02-Sep-2026",0)</code></td>
                    <td>30-Sep-2026</td>
                    <td>Very useful for month-end reporting</td>
                </tr>

                <tr>
                    <td><strong>WEEKDAY()</strong></td>
                    <td>Returns the day-of-week number</td>
                    <td><code>=WEEKDAY(serial_number,[return_type])</code></td>
                    <td><code>=WEEKDAY(A2,2)</code></td>
                    <td>1–7</td>
                    <td>With 2: Monday = 1, Sunday = 7</td>
                </tr>

                <tr>
                    <td><strong>WEEKNUM()</strong></td>
                    <td>Returns the week number of a date</td>
                    <td><code>=WEEKNUM(serial_number,[return_type])</code></td>
                    <td><code>=WEEKNUM(A2,2)</code></td>
                    <td>Week number</td>
                    <td>Useful for weekly sales/operations analysis</td>
                </tr>
            </tbody>
          </table>
        </div>
      `},

      {
        id: "DataCleaning",
        name: "Data Cleaning",
        theory: `
        <h3>Remove duplicates</h3>
        <p><strong>1. Using the Remove Duplicates Feature</strong></p>
        <p>The easiest and most common way is Excel's built-in Remove Duplicates feature.</br>
          1.Select the range of data or the entire table.</br>
          2. Go to the Data tab.</br>
          3. Click Remove Duplicates.</br>
          4. In the dialog box, select the columns you want Excel to check for duplicates.</br>
          5. Click OK.</br>
          6. Excel will remove duplicate rows and display a message showing how many duplicates were removed.
        </p>
        <p><strong>2. Using the UNIQUE Function</strong></p>
        <p><code>UNIQUE()</code> function to create a duplicate-free list without deleting the original data.</p>
        <p><strong>3. Using Conditional Formatting</strong></p>
        <p>1.Select the data.</br>
          2. Go to Home → Conditional Formatting.</br>
          3. Select Highlight Cells Rules → Duplicate Values.</br>
          4. Choose a formatting style.</br>
          5. Excel highlights duplicate values.</br>
          You can then review them and decide which records to remove.
        </p>

        <h3>Handle blank cells/Missing values</h3>
        <p><strong>1. Using Filters</strong></p>
        <p>1. Select your data and apply a filter using Data → Filter.</br>
          2. Open the filter dropdown for the column where you want to find blank cells.</br>
          3. Select only (Blanks).</br>
          4. Excel will display only the rows where that column is blank.</br>
          5. Review the filtered records.</br>
          6. Select the unwanted rows, right-click, and choose Delete Row.</br>
          7. Clear the filter to display the remaining data.</p>
        <p><strong>2. Handle Blank Cells Using a Formula</strong></p>
        <p>You can check whether a cell is blank using IF.</br>
          <code>=IF(A2="","N/A",A2)</code></br>
          If A2 is blank, the formula returns N/A; otherwise, it returns the value from A2.</br>
          Another commonly used function is IFBLANK-style logic through IF</br>
          <code>=IF(ISBLANK(A2),"N/A",A2)</code></br>
          ISBLANK(A2) may return FALSE if the cell contains a formula that returns an empty string ("").
        </p>
        <p><strong>3. Find Blank Cells Using Go To Special</strong></p>
        <p>
          1. Select the required range.</br>
          2. Press Ctrl + G or F5.</br>
          3. Select Special.</br>
          4. Choose Blanks.</br>
          5. Click OK.</br>
          Excel will select all blank cells in the selected range.</br>
          This method is particularly useful when you want to fill, highlight, or otherwise modify the blank cells.
        </p>
        <p><strong>4. Find Missing Values Using Conditional Formatting</strong></p>
        <p>
          1. Select the required range.</br>
          2. Go to Home → Conditional Formatting.</br>
          3. Choose New Rule or a suitable blank-cell rule.</br>
          4. Configure the rule to identify blank cells.</br>
          5. Apply a highlight color.</br>
          This is useful when you want to quickly visualize missing data rather than filter the records.
        </p>

        <h3>Replace values</h3>
        <p><strong>1. Find and Replace method</strong></p>
        <p>
          The most common method is the Find and Replace feature.</br>
          1. Select the required data range.</br>
          2. Press Ctrl + H.</br>
          3. Enter the value you want to find in Find what.</br>
          4. Enter the new value in Replace with.</br>
          5. Click Replace to replace one occurrence.</br>
          6. Click Replace All to replace all matching occurrences.
        </p>
        <p><strong>2. Using Formulas</strong></p>
        <p>
          You can use formulas when you want to create a new column with the replaced values while keeping the original data unchanged.</br>
          Using IF</br>
          For example, if you want to change M to Male:</br>
          <code>=IF(A2="M","Male",A2)</code></br>
          If A2 contains M, the formula returns Male. Otherwise, it returns the original value.</br>
          Using SUBSTITUTE</br>
          SUBSTITUTE() is useful when you want to replace specific text within a cell.</br>
          <code>=SUBSTITUTE(A2,"Old","New")</code>
        </p>
        <p><strong>3. Using Flash Fill</p></strong>
        <p>Flash Fill can automatically recognize a pattern and fill the remaining values.</p>
        <p><strong>4. Using Power Query</p></strong>
        <p>
          For larger datasets or repeatable data-cleaning processes, Power Query is a powerful option.</br>
          Basic Process</br>
          1. Load the data into Power Query.</br>
          2. Select the required column.</br>
          3. Use Replace Values.</br>
          4. Enter the old value.</br>
          5. Enter the new value.</br>
          6. Apply the transformation.</br>
          7. Load the cleaned data back into Excel.</br>
          Power Query is particularly useful when you receive similar datasets regularly and need to perform the same replacement steps repeatedly.
        </p>
        <p><strong>5. Using VBA for Automated Replacement</p></strong>
        <p>
          For repetitive tasks, VBA can automate replacements.</br>
          For example:</br>
          <pre><code>Columns("B").Replace What:="IT", Replacement:="Information Technology", _
              LookAt:=xlWhole</code></pre></br>
          This replaces the complete cell value IT with Information Technology in column B.</br>
          VBA is useful when the same replacement operation needs to be performed repeatedly across multiple files or worksheets.
        </p>

        <h3>Standardize Text</h3>
        <p><strong>What does it mean?</strong></p>
        <p>
          Standardizing text means making text values consistent.
        </p>
        <p>You can standardize them using functions such as:</p>
        <p><strong>UPPER()</strong></br>
          Converts text to uppercase.</br>
          <code>=UPPER(A2)</code></br>
          Sales → SALES
        </p>
        <p><strong>LOWER()</strong></br>
          Converts text to lowercase.</br>
          <code>=LOWER(A2)</code></br>
          Sales → sales
        </p>
        <p><strong>PROPER()</strong></br>
          Capitalizes the first letter of each word.</br>
          <code>=PROPER(A2)</code></br>
          john smith → John Smith
        </p>
        <p><strong>Interview answer</strong></br>
          “I standardize text using functions like UPPER, LOWER, and PROPER depending on the requirement. This helps maintain consistency before performing analysis, filtering, grouping, or joining data.”
        </p>

        <h3>Remove Unnecessary Spaces</h3>
        <p>
          A very common data-cleaning problem is extra spaces.
        </p>
        <p><strong>Method 1: TRIM()</strong></br>
          It removes unnecessary spaces and keeps a single space between words.</br>
          <strong>Example:</strong></br>
          "  John   Smith  "</br>
          becomes:</br>
          "John Smith"
        </p>

        <p><strong>Method 2: Find &amp; Replace</strong></br>
          You can also use:</br>
          <code>Ctrl + H</code> → Find what → Replace with</br>
          For example, you can search for spaces and replace them, but this method needs caution because replacing every space would remove spaces between words.
        </p>

        <p><strong>Method 3: Power Query</strong></br>
          For larger datasets:</br>
          Data → From Table/Range → Transform → Format → Trim</br>
          Power Query is particularly useful when the same cleaning process needs to be repeated.
        </p>

        <h3>Split Columns</h3>
        <p>Suppose you have:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>John Smith</td></tr>
              <tr><td>Rahul Patil</td></tr>
              <tr><td>Priya Shah</td></tr>
            </tbody>
          </table>
        </div>

        <p>And you want:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>John</td><td>Smith</td></tr>
              <tr><td>Rahul</td><td>Patil</td></tr>
              <tr><td>Priya</td><td>Shah</td></tr>
            </tbody>
          </table>
        </div>

        <p>There are several ways.</p>

        <p><strong>Method 1: Text to Columns</strong></br>
          Select the column.</br>
          Go to:</br>
          Data → Text to Columns</br>
          Choose:</br>
          Delimited</br>
          Then select the delimiter.
        </p>

        <p>For example:</p>
        <pre><code>John Smith</code></pre>
        <p>Delimiter = Space</p>
        <p>Excel splits it into:</p>
        <pre><code>John | Smith</code></pre>

        <p><strong>Method 2: TEXTSPLIT()</strong></p>
        <p>In newer Excel versions:</p>
        <p><code>=TEXTSPLIT(A2," ")</code></p>
        <p>This splits the text based on the space.</p>
        <p>For:</p>
        <p>John Smith</p>

        <p>Result:</p>
        <p>John | Smith</p>

        <p>You can also split using commas:</p>
        <p><code>=TEXTSPLIT(A2,",")</code></p>

        <p><strong>Method 3: Flash Fill</strong></p>
        <p>
          Type the desired output manually for the first few rows and press:
        </p>
        <p><code>Ctrl + E</code></p>

        <p>
          Excel recognizes the pattern and fills the remaining rows.
        </p>

        <p><strong>Method 4: LEFT, RIGHT, FIND</strong></p>
        <p>
          For older Excel versions, you can use functions such as:
        </p>

        <p><code>=LEFT(A2,FIND(" ",A2)-1)</code></p>
        <p>to extract the first name.</p>

        <p>And:</p>

        <p><code>=RIGHT(A2,LEN(A2)-FIND(" ",A2))</code></p>
        <p>to extract the last name.</p>

        <p><strong>Interview answer</strong></p>
        <p>
          “To split columns, I can use Text to Columns when the data has a consistent delimiter, such as comma or space. In newer Excel versions, I can also use TEXTSPLIT. For pattern-based splitting, Flash Fill can be useful.”
        </p>


        <h3>4. Combine Columns</h3>

        <p>Suppose you have:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>John</td><td>Smith</td></tr>
              <tr><td>Rahul</td><td>Patil</td></tr>
            </tbody>
          </table>
        </div>

        <p>And you want:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>John Smith</td></tr>
              <tr><td>Rahul Patil</td></tr>
            </tbody>
          </table>
        </div>

        <p>There are several methods.</p>

        <p><strong>Method 1: &amp; operator</strong></p>
        <p><code>=A2&amp;" "&amp;B2</code></p>

        <p>Result:</p>
        <p>John Smith</p>

        <p><strong>Method 2: CONCAT()</strong></p>
        <p><code>=CONCAT(A2," ",B2)</code></p>

        <p><strong>Method 3: TEXTJOIN()</strong></p>
        <p>
          This is especially useful when you have multiple columns.
        </p>

        <p><code>=TEXTJOIN(" ",TRUE,A2:B2)</code></p>

        <p>
          The first argument is the delimiter.
        </p>

        <p>Here:</p>
        <p><code>" "</code></p>

        <p>means separate values with a space.</p>

        <p>
          TRUE means ignore empty cells.
        </p>

        <p><strong>Method 4: Power Query</strong></p>
        <p>
          In Power Query:
        </p>
        <p>Transform → Merge Columns</p>

        <p>
          Select the columns and choose the separator.
        </p>

        <p><strong>Interview answer</strong></p>
        <p>
          “I can combine columns using the ampersand operator, CONCAT, or TEXTJOIN. I prefer TEXTJOIN when I need to combine multiple columns and ignore blank cells.”
        </p>


        <h3>5. Convert Text to Numbers</h3>

        <p>
          Sometimes numbers are stored as text.
        </p>

        <p>For example:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>'1000</td></tr>
              <tr><td>'2500</td></tr>
              <tr><td>'3500</td></tr>
            </tbody>
          </table>
        <div>

        <p>
          They look like numbers but Excel may treat them as text.
        </p>

        <p>This can cause problems with:</p>
        <p>
          SUM<br>
          AVERAGE<br>
          Sorting<br>
          Calculations<br>
          Charts
        </p>

        <p><strong>Method 1: Convert to Number</strong></p>
        <p>
          If Excel shows a warning icon:
        </p>
        <p>
          Select the cells → click the warning icon → Convert to Number.
        </p>

        <p><strong>Method 2: VALUE()</strong></p>
        <p><code>=VALUE(A2)</code></p>

        <p>Example:</p>
        <p>"1000"</p>
        <p>becomes:</p>
        <p>1000</p>

        <p><strong>Method 3: Multiply by 1</strong></p>
        <p><code>=A2*1</code></p>

        <p>
          This forces Excel to interpret the text as a number.
        </p>

        <p><strong>Method 4: Add 0</strong></p>
        <p><code>=A2+0</code></p>

        <p><strong>Method 5: Text to Columns</strong></p>
        <p>Select the column:</p>
        <p>Data → Text to Columns → Finish</p>

        <p>
          This can often convert numeric text into actual numbers.
        </p>

        <p><strong>Method 6: Power Query</strong></p>
        <p>In Power Query:</p>
        <p>Transform → Data Type → Whole Number / Decimal Number</p>

        <p>
          This is preferable for repeatable data-cleaning workflows.
        </p>

        <p><strong>Interview answer</strong></p>
        <p>
          “If numeric values are stored as text, I can convert them using VALUE, multiplying by 1, or Excel's Convert to Number option. For larger or recurring datasets, I would typically set the correct data type in Power Query.”
        </p>


        <h3>6. Convert Text to Dates</h3>

        <p>
          This is extremely important because dates can come in different formats.
        </p>

        <p>For example:</p>
        <p>
          01/02/2026<br>
          2026-02-01<br>
          Feb 1, 2026
        </p>

        <p>
          Excel may interpret some of these as dates and others as text.
        </p>

        <p><strong>Method 1: DATEVALUE()</strong></p>
        <p>
          If the text is recognizable as a date:
        </p>
        <p><code>=DATEVALUE(A2)</code></p>

        <p>Example:</p>
        <p>"01-Jan-2026"</p>

        <p>
          becomes an actual Excel date serial value, which you can format as a date.
        </p>

        <p><strong>Method 2: Text to Columns</strong></p>
        <p>Select the column:</p>
        <p>Data → Text to Columns</p>

        <p>Then:</p>
        <p>
          Choose Delimited<br>
          Click Next<br>
          Click Next<br>
          Under Column data format, choose Date<br>
          Select the correct format, such as DMY<br>
          Click Finish
        </p>

        <p>
          This is useful when dates are consistently formatted but stored as text.
        </p>

        <p><strong>Method 3: DATE()</strong></p>
        <p>
          If the date is separated into year, month, and day:
        </p>

        <p><code>=DATE(year,month,day)</code></p>

        <p>For example:</p>
        <p><code>=DATE(A2,B2,C2)</code></p>

        <p><strong>Method 4: Power Query</strong></p>
        <p>In Power Query:</p>
        <p>Transform → Data Type → Date</p>

        <p>
          If the source format is ambiguous, you can use:
        </p>

        <p>Data Type → Using Locale</p>

        <p>
          This is useful for handling differences such as:
        </p>

        <p>
          DD/MM/YYYY
        </p>

        <p>vs.</p>

        <p>
          MM/DD/YYYY
        </p>

        <p><strong>Important interview point</strong></p>
        <p>
          Excel stores dates internally as serial numbers.
        </p>

        <p>
          For example, a date might internally be represented as a number, while Excel displays it as:
        </p>

        <p>01-Jan-2026</p>

        <p>
          That's why formatting and actual date conversion are different things.
        </p>

        <p><strong>Interview answer</strong></p>
        <p>
          “First, I check whether the values are actual Excel dates or just text that looks like dates. Depending on the format, I can use DATEVALUE, Text to Columns, or Power Query to convert them into proper date values. I also make sure the day-month-year interpretation is correct.”
        </p>


        <h3>7. Find and Replace</h3>

        <p>
          This is useful for correcting or replacing specific values.
        </p>

        <p><strong>Shortcut:</strong></p>
        <p><code>Ctrl + H</code></p>

        <p>Suppose you have:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Mumbai</td></tr>
              <tr><td>Bombay</td></tr>
              <tr><td>Mumbai</td></tr>
              <tr><td>Bombay</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          You want to standardize Bombay to Mumbai.
        </p>

        <p>Go to:</p>
        <p><code>Ctrl + H</code></p>

        <p>Then:</p>

        <p><strong>Find what:</strong></p>
        <p>Bombay</p>

        <p><strong>Replace with:</strong></p>
        <p>Mumbai</p>

        <p>Click:</p>
        <p>Replace All</p>

        <p><strong>Other uses</strong></p>
        <p>You can use Find &amp; Replace to:</p>
        <p>
          Correct spelling mistakes<br>
          Replace inconsistent categories<br>
          Remove unwanted characters<br>
          Replace symbols<br>
          Standardize values
        </p>

        <p>For example:</p>

        <p>
          M<br>
          Male<br>
          MALE
        </p>

        <p>could potentially be standardized to:</p>

        <p>Male</p>

        <p><strong>Important caution</strong></p>
        <p>
          Don't blindly click Replace All.
        </p>

        <p>For example, replacing:</p>
        <p>IN</p>

        <p>with:</p>
        <p>India</p>

        <p>
          could unintentionally modify words containing in.
        </p>

        <p>
          Use Find whole cells only when appropriate.
        </p>

        <p><strong>Interview answer</strong></p>
        <p>
          “I use Find and Replace when I need to make targeted corrections or standardize specific values. I usually verify the matches first rather than blindly using Replace All, because an overly broad replacement can modify valid data.”
        </p>


        <h3>8. Text to Columns</h3>

        <p>
          This deserves separate attention because it is one of the most commonly used Excel data-cleaning tools.
        </p>

        <p>Suppose:</p>

        <p><code>Janhavi,Data Analyst,Nashik</code></p>

        <p>
          is in one cell.
        </p>

        <p>You want:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Janhavi</td>
                <td>Data Analyst</td>
                <td>Nashik</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Steps</strong></p>
        <p>
          Select the column.<br>
          Go to Data.<br>
          Select Text to Columns.<br>
          Select Delimited.<br>
          Click Next.<br>
          Select the delimiter — here, Comma.<br>
          Preview the result.<br>
          Choose the destination if necessary.<br>
          Click Finish.
        </p>

        <p><strong>Common delimiters</strong></p>
        <p>You can split data using:</p>
        <p>
          Comma ,<br>
          Space<br>
          Tab<br>
          Semicolon ;<br>
          Pipe |<br>
          Other custom characters
        </p>

        <p>For example:</p>

        <p><code>101|Rahul|Sales|50000</code></p>

        <p>Delimiter:</p>
        <p><code>|</code></p>

        <p><strong>Fixed Width</strong></p>
        <p>
          Text to Columns also has another option:
        </p>

        <p>Fixed Width</p>

        <p>
          This is useful when fields are separated based on character positions rather than delimiters.
        </p>

        <p>For example:</p>

        <p><code>101   Rahul     Sales</code></p>

        <p>
          You can define where each column should start/end.
        </p>

        <p><strong>Interview answer</strong></p>
        <p>
          “Text to Columns is useful when multiple pieces of information are stored in a single column. I can split the data either using a delimiter such as comma, space, or pipe, or by using fixed-width positions.”
        </p>


        <h3>9. Flash Fill</h3>

        <p>
          Flash Fill is useful when Excel can identify a pattern from examples.
        </p>

        <p>Suppose:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>First Name</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Rahul Patil</td><td>Rahul</td></tr>
              <tr><td>Priya Shah</td><td>Priya</td></tr>
              <tr><td>Amit Kulkarni</td><td></td></tr>
            </tbody>
          </table>
        </div>

        <p>
          You type:
        </p>

        <p>Amit</p>

        <p>
          in the next row.
        </p>

        <p>Then press:</p>

        <p><code>Ctrl + E</code></p>

        <p>
          Excel recognizes the pattern and fills the remaining values.
        </p>

        <p><strong>Example: Extract email usernames</strong></p>

        <p>Suppose:</p>

        <p>
          janhavi@gmail.com<br>
          rahul@yahoo.com<br>
          amit@outlook.com
        </p>

        <p>You want:</p>

        <p>
          janhavi<br>
          rahul<br>
          amit
        </p>

        <p>
          Type the first expected result:
        </p>

        <p>janhavi</p>

        <p>Then press:</p>

        <p><code>Ctrl + E</code></p>

        <p>
          Excel automatically detects the pattern.
        </p>

        <p><strong>Flash Fill can also combine data</strong></p>

        <p>Suppose:</p>
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Rahul</td><td>Patil</td><td>Rahul Patil</td></tr>
              <tr><td>Priya</td><td>Shah</td><td>Priya Shah</td></tr>
              <tr><td>Amit</td><td>Joshi</td><td></td></tr>
            </tbody>
          </table>
        </div>

        <p>
          Type:
        </p>

        <p>Amit Joshi</p>

        <p>
          and press:
        </p>

        <p><code>Ctrl + E</code></p>

        <p><strong>Important limitation</strong></p>
        <p>
          Flash Fill is pattern-based, not formula-based.
        </p>

        <p>
          If your data changes later, the Flash Fill results don't dynamically recalculate like formulas.
        </p>

        <p>
          For repeatable data-cleaning workflows, formulas or Power Query are often better.
        </p>

        <p><strong>Interview answer</strong></p>
        <p>
          “Flash Fill automatically detects a pattern from the examples I provide and applies it to the remaining rows. It's useful for quick tasks like extracting first names, formatting phone numbers, or combining columns. However, unlike formulas, the resulting values don't dynamically update when the source data changes.”
        </p>
      `},

      {
        id: "Sorting&Filtering",
        name: "Sorting & Filtering",
        theory: `
        <p>Sorting and filtering are fundamental Excel skills for a Data Analyst. They are mainly used to <strong>organize, inspect, and analyze data</strong> without changing the underlying values.</p>

        <h3>Basic Sort</h3>

        <p><strong>Sorting</strong> means arranging data in a particular order.</p>

        <p>For example, suppose you have:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>IT</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>HR</td>
                <td>45000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>IT</td>
                <td>75000</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>Finance</td>
                <td>55000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You can sort the Salary column:</p>

        <p><strong>Smallest → Largest</strong></p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Priya</td>
                <td>HR</td>
                <td>45000</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>Finance</td>
                <td>55000</td>
              </tr>
              <tr>
                <td>Rahul</td>
                <td>IT</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>IT</td>
                <td>75000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Or:</p>

        <p><strong>Largest → Smallest</strong></p>

        <h3>How to do it</h3>

        <ol>
          <li>Select your dataset.</li>
          <li>Go to <strong>Data → Sort</strong>.</li>
          <li>Select the column you want to sort by.</li>
          <li>Choose:
            <ul>
              <li>Smallest to Largest, or</li>
              <li>Largest to Smallest.</li>
            </ul>
          </li>
          <li>Click <strong>OK</strong>.</li>
        </ol>

        <p>You can also use the <strong>A→Z</strong> and <strong>Z→A</strong> buttons from the Data tab.</p>

        <p><strong>Important point</strong></p>

        <p>When sorting a dataset, you should sort the <strong>entire table</strong>, not just one column.</p>

        <p>Otherwise, employee names could become mismatched with their salaries.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Sorting is used to arrange data in a specific order, such as ascending or descending. For example, I can sort employees based on salary from highest to lowest. When sorting, I make sure the complete dataset is included so that relationships between columns are maintained.”</p>
        </blockquote>


        <h3>Multi-Level Sort</h3>

        <p>Sometimes sorting by only one column isn't enough.</p>

        <p>Suppose you have:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>IT</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>HR</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>IT</td>
                <td>75000</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>HR</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Raj</td>
                <td>IT</td>
                <td>60000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You might want:</p>

        <ol>
          <li>Sort by <strong>Department</strong> alphabetically.</li>
          <li>Within each department, sort by <strong>Salary</strong> from highest to lowest.</li>
        </ol>

        <p>This is called <strong>multi-level sorting</strong>.</p>

        <h3>How to do it</h3>

        <p>Go to:</p>

        <p><strong>Data → Sort</strong></p>

        <p>Then configure:</p>

        <p><strong>Sort by:</strong> Department → A to Z</p>

        <p>Click <strong>Add Level</strong></p>

        <p><strong>Then by:</strong> Salary → Largest to Smallest</p>

        <p>Result:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Neha</td>
                <td>HR</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>HR</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>IT</td>
                <td>75000</td>
              </tr>
              <tr>
                <td>Rahul</td>
                <td>IT</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Raj</td>
                <td>IT</td>
                <td>60000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Multi-level sorting is useful when I need to sort data based on more than one condition. For example, I can first sort employees by department and then sort their salaries within each department in descending order.”</p>
        </blockquote>

        <p><strong>Important concept</strong></p>

        <p>The <strong>first sorting level has higher priority</strong>.</p>

        <p>Think of it like SQL:</p>

        <pre><code>ORDER BY department ASC, salary DESC;</code></pre>

        <p>This is a very good connection to mention in a Data Analyst interview.</p>


        <h3>Filter</h3>

        <h3>What is Filtering?</h3>

        <p>Filtering means <strong>displaying only the rows that satisfy a particular condition while temporarily hiding the others</strong>.</p>

        <p>For example:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>IT</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>HR</td>
                <td>45000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>IT</td>
                <td>75000</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>Finance</td>
                <td>55000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Suppose I only want to see IT employees.</p>

        <p>Apply:</p>

        <p><strong>Department → IT</strong></p>

        <p>Excel displays:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>IT</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>IT</td>
                <td>75000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The other rows aren't deleted. They are simply hidden by the filter.</p>

        <h3>How to apply a filter</h3>

        <ol>
          <li>Select your dataset.</li>
          <li>Go to <strong>Data → Filter</strong>.</li>
          <li>Dropdown arrows appear on the column headers.</li>
          <li>Select the values or conditions you want.</li>
        </ol>

        <p><strong>Shortcut:</strong></p>

        <pre><code>Ctrl + Shift + L</code></pre>

        <p><strong>Important</strong></p>

        <p>Filtering <strong>does not delete data</strong>.</p>

        <p>Removing a filter makes the hidden rows visible again.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Filtering allows me to display only the records that meet specific conditions while keeping the other records in the dataset. For example, I can filter employees whose department is IT or whose salary is greater than 50,000.”</p>
        </blockquote>


        <h3>Advanced Filter</h3>

        <p>The <strong>Advanced Filter</strong> feature is useful when filtering requires more complex criteria or when you want to extract filtered records to another location.</p>

        <p>For example, suppose you want:</p>

        <p>Employees from IT <strong>AND</strong> salary greater than ₹60,000.</p>

        <p>You can create a criteria range such as:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IT</td>
                <td>&gt;60000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Then use:</p>

        <p><strong>Data → Advanced</strong></p>

        <p>and specify:</p>

        <ul>
          <li>List range → original dataset</li>
          <li>Criteria range → your criteria table</li>
        </ul>

        <h3>AND vs OR conditions</h3>

        <p>This is an important interview concept.</p>

        <p><strong>AND condition</strong></p>

        <p>Put conditions in the <strong>same row</strong>.</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IT</td>
                <td>&gt;60000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Meaning:</p>

        <pre><code>Department = IT AND Salary &gt; 60000</code></pre>

        <p><strong>OR condition</strong></p>

        <p>Put conditions in <strong>different rows</strong>.</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IT</td>
              </tr>
              <tr>
                <td>HR</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Meaning:</p>

        <pre><code>Department = IT OR Department = HR</code></pre>

        <h3>Another useful feature</h3>

        <p>Advanced Filter can also:</p>

        <p><strong>Copy the filtered records to another location.</strong></p>

        <p>This is useful when you don't want to modify the appearance of your original dataset.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Advanced Filter is useful when I have more complex filtering requirements, especially when I need multiple AND or OR criteria or want to copy the filtered results to another location.”</p>
        </blockquote>


        <h3>Sort by Custom List</h3>

        <p>Normal sorting follows alphabetical or numerical order.</p>

        <p>But sometimes you need a <strong>business-specific order</strong>.</p>

        <p>For example, suppose you have:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Low</td>
              </tr>
              <tr>
                <td>High</td>
              </tr>
              <tr>
                <td>Medium</td>
              </tr>
              <tr>
                <td>High</td>
              </tr>
              <tr>
                <td>Low</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Alphabetical sorting would give:</p>

        <pre><code>High
        Low
        Medium</code></pre>

        <p>But perhaps the business wants:</p>

        <pre><code>High
        Medium
        Low</code></pre>

        <p>This is where <strong>Custom List</strong> is useful.</p>

        <h3>How to do it</h3>

        <p>Go to:</p>

        <p><strong>Data → Sort</strong></p>

        <p>Under <strong>Order</strong>, select:</p>

        <p><strong>Custom List</strong></p>

        <p>Create/select:</p>

        <pre><code>High
        Medium
        Low</code></pre>

        <p>Then Excel sorts according to that order.</p>

        <h3>Other examples</h3>

        <p>Custom lists are useful for:</p>

        <p><strong>Months</strong></p>

        <pre><code>January
        February
        March
        ...
        December</code></pre>

        <p><strong>Days</strong></p>

        <pre><code>Monday
        Tuesday
        Wednesday
        ...</code></pre>

        <p><strong>Business priority</strong></p>

        <pre><code>Critical
        High
        Medium
        Low</code></pre>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Custom List sorting is useful when the required order is not alphabetical or numerical. For example, if I want to sort priorities as Critical, High, Medium, and Low, I can define that order using a custom list.”</p>
        </blockquote>


        <h3>Filter by Number</h3>

        <p>If a column contains numerical values, Excel provides <strong>Number Filters</strong>.</p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>45000</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>65000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>80000</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>55000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You can filter:</p>

        <ul>
          <li>Equals</li>
          <li>Does Not Equal</li>
          <li>Greater Than</li>
          <li>Greater Than or Equal To</li>
          <li>Less Than</li>
          <li>Less Than or Equal To</li>
          <li>Between</li>
          <li>Top 10</li>
          <li>Above Average</li>
          <li>Below Average</li>
        </ul>

        <h3>Example</h3>

        <p>To find employees earning more than ₹60,000:</p>

        <p><strong>Salary → Number Filters → Greater Than → 60000</strong></p>

        <p>Result:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Priya</td>
                <td>65000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>80000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Number filters allow me to filter numerical columns using conditions such as greater than, less than, equal to, between, top 10, or above average.”</p>
        </blockquote>


        <h3>Filter by Text</h3>

        <p>Text filters allow you to filter based on text conditions.</p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>IT</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>HR</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>Information Technology</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>Finance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You can use:</p>

        <ul>
          <li>Equals</li>
          <li>Does Not Equal</li>
          <li>Begins With</li>
          <li>Ends With</li>
          <li>Contains</li>
          <li>Does Not Contain</li>
        </ul>

        <h3>Example</h3>

        <p>Find departments containing:</p>

        <pre><code>IT</code></pre>

        <p>Use:</p>

        <p><strong>Department → Text Filters → Contains → IT</strong></p>

        <p>This could return:</p>

        <pre><code>IT
        Information Technology</code></pre>

        <p><strong>Another example</strong></p>

        <p>Find employees whose names start with <code>A</code>:</p>

        <p><strong>Text Filters → Begins With → A</strong></p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Text filters are useful for filtering categorical or string data. I can filter values based on conditions such as equals, contains, begins with, or ends with.”</p>
        </blockquote>


        <h3>Filter by Date</h3>

        <p>Excel provides specialized <strong>Date Filters</strong>.</p>

        <p>Suppose you have:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Joining Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>01-Jan-2025</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>15-Feb-2025</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>10-Jan-2026</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>20-Feb-2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You can filter by:</p>

        <ul>
          <li>Equals</li>
          <li>Before</li>
          <li>After</li>
          <li>Between</li>
          <li>Today</li>
          <li>Tomorrow</li>
          <li>Yesterday</li>
          <li>This Week</li>
          <li>Last Week</li>
          <li>Next Week</li>
          <li>This Month</li>
          <li>Last Month</li>
          <li>Next Month</li>
          <li>This Year</li>
          <li>Last Year</li>
          <li>Next Year</li>
        </ul>

        <h3>Example</h3>

        <p>Find employees who joined in 2026:</p>

        <p><strong>Joining Date → Date Filters → Between</strong></p>

        <p>Set:</p>

        <pre><code>01-Jan-2026
        31-Dec-2026</code></pre>

        <p><strong>Important interview point</strong></p>

        <p>This only works reliably when Excel recognizes the values as <strong>actual dates</strong>, not text that merely looks like a date.</p>

        <p>That's why date cleaning/conversion is important before filtering.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Date filters allow me to filter records based on specific dates or relative periods such as this month, last month, this year, or a custom date range. Before filtering, I make sure the date column contains actual Excel date values.”</p>
        </blockquote>


        <h3>Filter by Color</h3>

        <p>Excel can filter based on:</p>

        <ul>
          <li>Cell color</li>
          <li>Font color</li>
          <li>Conditional formatting color</li>
        </ul>

        <p>Suppose you have a sales table where underperforming products are highlighted in red.</p>

        <p>You can select:</p>

        <p><strong>Filter → Filter by Color → Red</strong></p>

        <p>Excel will display only the rows with that color.</p>

        <h3>Example</h3>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>100000 🟢</td>
              </tr>
              <tr>
                <td>B</td>
                <td>30000 🔴</td>
              </tr>
              <tr>
                <td>C</td>
                <td>90000 🟢</td>
              </tr>
              <tr>
                <td>D</td>
                <td>25000 🔴</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Filter by red → only B and D appear.</p>

        <p><strong>Important analyst point</strong></p>

        <p>Color-based filtering is useful for <strong>quick inspection</strong>, but it isn't a good substitute for a proper data field.</p>

        <p>For example, if:</p>

        <pre><code>Red = Low Sales
        Green = High Sales</code></pre>

        <p>it's better to have a proper <code>Performance</code> column containing:</p>

        <pre><code>Low
        High</code></pre>

        <p>because categorical values are easier to analyze, query, and automate.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Excel allows filtering based on cell color, font color, or conditional formatting. It's useful for quickly identifying flagged records, but for analytical workflows I prefer having an explicit data field representing the condition rather than relying only on color.”</p>
        </blockquote>


        <h3>Sorting vs Filtering</h3>

        <p>This is a <strong>very common interview question</strong>.</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Sorting</th>
                <th>Filtering</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arranges data in a particular order</td>
                <td>Displays only records meeting a condition</td>
              </tr>
              <tr>
                <td>Changes the order of rows</td>
                <td>Hides rows that don't meet the condition</td>
              </tr>
              <tr>
                <td>Can be ascending or descending</td>
                <td>Can use conditions such as equals, greater than, contains, etc.</td>
              </tr>
              <tr>
                <td>All records generally remain visible</td>
                <td>Some records become temporarily hidden</td>
              </tr>
              <tr>
                <td>Example: Salary high → low</td>
                <td>Example: Salary &gt; ₹60,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Simple example</h3>

        <p>Original:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>45000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>80000</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>55000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Sorting by Salary descending</strong></p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amit</td>
                <td>80000</td>
              </tr>
              <tr>
                <td>Rahul</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>55000</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>45000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>All four employees are still there. The order changed.</strong></p>

        <p><strong>Filtering Salary &gt; 55,000</strong></p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>80000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Only qualifying records are displayed.</strong></p>


        <h3>Best Interview Answer: Sorting vs Filtering</h3>

        <p>If an interviewer asks:</p>

        <p><strong>"What is the difference between sorting and filtering in Excel?"</strong></p>

        <p>You can say:</p>

        <blockquote>
          <p><strong>“Sorting and filtering are both used to analyze and organize data, but they serve different purposes. Sorting changes the order of the records based on a particular column, such as arranging salaries from highest to lowest. Filtering, on the other hand, displays only the records that satisfy a particular condition, such as showing employees whose salary is greater than 60,000. Filtering doesn't delete the other records; it temporarily hides them.”</strong></p>
        </blockquote>


        <h3>Data Analyst Perspective</h3>

        <p>In an actual analysis, you might combine both.</p>

        <p>For example, your manager asks:</p>

        <blockquote>
          <p><strong>"Show me IT employees earning more than ₹60,000, with the highest-paid employee at the top."</strong></p>
        </blockquote>

        <p><strong>Step 1 — Filter</strong></p>

        <pre><code>Department = IT</code></pre>

        <p><strong>Step 2 — Filter</strong></p>

        <pre><code>Salary &gt; 60000</code></pre>

        <p><strong>Step 3 — Sort</strong></p>

        <pre><code>Salary → Largest to Smallest</code></pre>

        <p>This gives you the exact subset you need.</p>

      `},

      {
        id: "PivotTables",
        name: "Pivot Tables",
        theory: `
        <p>A <strong>Pivot Table</strong> is one of the most important Excel features for a Data Analyst. It allows you to <strong>summarize, aggregate, group, and analyze large datasets without writing formulas for every calculation</strong>.</p>

        <p>For example, from a raw sales dataset containing thousands of transactions, you can quickly answer:</p>

        <ul>
          <li>What is the total revenue by region?</li>
          <li>What is monthly revenue?</li>
          <li>Which region has the highest sales?</li>
          <li>How many orders were placed?</li>
          <li>What percentage of total revenue comes from each region?</li>
        </ul>

        <h3>1. Creating a Pivot Table</h3>

        <p>Suppose your raw sales data looks like this:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Region</th>
                <th>Product</th>
                <th>Sales</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05-Jan-2026</td>
                <td>North</td>
                <td>Laptop</td>
                <td>50000</td>
                <td>2</td>
              </tr>
              <tr>
                <td>10-Jan-2026</td>
                <td>South</td>
                <td>Mouse</td>
                <td>5000</td>
                <td>10</td>
              </tr>
              <tr>
                <td>15-Feb-2026</td>
                <td>North</td>
                <td>Keyboard</td>
                <td>8000</td>
                <td>5</td>
              </tr>
              <tr>
                <td>20-Feb-2026</td>
                <td>West</td>
                <td>Laptop</td>
                <td>60000</td>
                <td>2</td>
              </tr>
              <tr>
                <td>10-Mar-2026</td>
                <td>South</td>
                <td>Laptop</td>
                <td>55000</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Steps</strong></p>

        <ol>
          <li>Select any cell inside the dataset.</li>
          <li>Go to <strong>Insert → PivotTable</strong>.</li>
          <li>Select the table/range.</li>
          <li>Choose where you want the Pivot Table:
            <ul>
              <li>New Worksheet</li>
              <li>Existing Worksheet</li>
            </ul>
          </li>
          <li>Click <strong>OK</strong>.</li>
        </ol>

        <p>Excel will create an empty Pivot Table with four main areas:</p>

        <pre><code>Rows
        Columns
        Values
        Filters</code></pre>

        <p>You then drag fields into these areas.</p>


        <h3>2. Rows</h3>

        <p>The <strong>Rows</strong> area determines what you want to see as individual categories down the rows.</p>

        <p>For example:</p>

        <pre><code>Region → Rows</code></pre>

        <p>You might get:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
              </tr>
              <tr>
                <td>South</td>
              </tr>
              <tr>
                <td>West</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>If you put <code>Product</code> into Rows:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Keyboard</td>
              </tr>
              <tr>
                <td>Laptop</td>
              </tr>
              <tr>
                <td>Mouse</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Interview explanation</strong></p>

        <blockquote>
          <p>“The Rows area determines the categories that I want to analyze vertically. For example, if I put Region in Rows, the Pivot Table will create a separate row for each region.”</p>
        </blockquote>


        <h3>3. Columns</h3>

        <p>The <strong>Columns</strong> area creates categories horizontally.</p>

        <p>For example:</p>

        <pre><code>Region → Rows
        Month → Columns</code></pre>

        <p>You might get:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>50,000</td>
                <td>8,000</td>
                <td>20,000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>5,000</td>
                <td>15,000</td>
                <td>55,000</td>
              </tr>
              <tr>
                <td>West</td>
                <td>10,000</td>
                <td>60,000</td>
                <td>25,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>This is useful for comparing categories across another dimension.</p>

        <p><strong>Interview explanation</strong></p>

        <blockquote>
          <p>“The Columns area creates categories horizontally. I can use it when I want to compare values across dimensions, such as monthly revenue across different regions.”</p>
        </blockquote>


        <h3>4. Values</h3>

        <p>The <strong>Values</strong> area contains the actual calculation.</p>

        <p>For example:</p>

        <pre><code>Region → Rows
        Sales → Values</code></pre>

        <p>Excel might produce:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Sum of Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>78,000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>60,000</td>
              </tr>
              <tr>
                <td>West</td>
                <td>85,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Excel automatically determines an aggregation based on the data type.</p>

        <p>For numerical data, it commonly uses <strong>Sum</strong>.</p>


        <h3>5. Filters</h3>

        <p>The <strong>Filters</strong> area lets you filter the entire Pivot Table based on a field.</p>

        <p>For example:</p>

        <pre><code>Region → Rows
        Sales → Values
        Product → Filters</code></pre>

        <p>Now you can select:</p>

        <pre><code>Product = Laptop</code></pre>

        <p>and the Pivot Table will show only laptop sales.</p>

        <p><strong>Interview explanation</strong></p>

        <blockquote>
          <p>“The Filters area allows me to apply a filter to the overall Pivot Table. For example, I can create a region-wise sales report and then filter it to show only a particular product.”</p>
        </blockquote>


        <h3>The Four Areas — Easy Way to Remember</h3>

        <p>Think of a business question:</p>

        <blockquote>
          <p><strong>"Show me total sales by region for each month, only for laptops."</strong></p>
        </blockquote>

        <p>You would configure:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Pivot Area</th>
                <th>Field</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rows</strong></td>
                <td>Region</td>
              </tr>
              <tr>
                <td><strong>Columns</strong></td>
                <td>Month</td>
              </tr>
              <tr>
                <td><strong>Values</strong></td>
                <td>Sales</td>
              </tr>
              <tr>
                <td><strong>Filters</strong></td>
                <td>Product</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>This is the core logic behind Pivot Tables.</p>


        <h3>Aggregation in Pivot Tables</h3>

        <p>Aggregation means <strong>summarizing multiple records into a single value</strong>.</p>

        <p>The major aggregations you should know are:</p>

        <ul>
          <li>Sum</li>
          <li>Count</li>
          <li>Average</li>
          <li>Min</li>
          <li>Max</li>
        </ul>


        <h3>6. Sum</h3>

        <p><strong>Sum</strong> adds all values together.</p>

        <p>Example:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>North</td>
                <td>20,000</td>
              </tr>
              <tr>
                <td>North</td>
                <td>30,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Pivot Table:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Sum of Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>60,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>How to select Sum</strong></p>

        <p>In the Values area:</p>

        <p><strong>Click field → Value Field Settings → Sum</strong></p>

        <p><strong>Use case</strong></p>

        <blockquote>
          <p>Total revenue by region.</p>
        </blockquote>


        <h3>7. Count</h3>

        <p>Count tells you <strong>how many records/items exist</strong>.</p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>North</td>
              </tr>
              <tr>
                <td>102</td>
                <td>North</td>
              </tr>
              <tr>
                <td>103</td>
                <td>North</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Put:</p>

        <pre><code>Region → Rows
        Order ID → Values</code></pre>

        <p>Choose:</p>

        <p><strong>Value Field Settings → Count</strong></p>

        <p>Result:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Count of Order ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Important distinction</strong></p>

        <p><strong>Sum</strong> answers:</p>

        <blockquote>
          <p>How much?</p>
        </blockquote>

        <p><strong>Count</strong> answers:</p>

        <blockquote>
          <p>How many?</p>
        </blockquote>

        <p><strong>Interview example</strong></p>

        <blockquote>
          <p>“I can use Count to determine the number of orders per region, while Sum would tell me the total sales value.”</p>
        </blockquote>


        <h3>8. Average</h3>

        <p>Average calculates the mean of the values.</p>

        <p>Example:</p>

        <pre><code>Sales:
        10,000
        20,000
        30,000</code></pre>

        <p>Average:</p>

        <pre><code>20,000</code></pre>

        <p>In the Pivot Table:</p>

        <p><strong>Value Field Settings → Average</strong></p>

        <p><strong>Use cases</strong></p>

        <ul>
          <li>Average order value</li>
          <li>Average salary</li>
          <li>Average sales per employee</li>
          <li>Average transaction amount</li>
        </ul>


        <h3>9. Min</h3>

        <p><strong>Min</strong> returns the smallest value.</p>

        <p>Example:</p>

        <pre><code>Sales:
        10,000
        25,000
        15,000</code></pre>

        <p>Min:</p>

        <pre><code>10,000</code></pre>

        <p>Useful for questions like:</p>

        <blockquote>
          <p>"What was the lowest sale in each region?"</p>
        </blockquote>


        <h3>10. Max</h3>

        <p><strong>Max</strong> returns the largest value.</p>

        <p>Example:</p>

        <pre><code>Sales:
        10,000
        25,000
        15,000</code></pre>

        <p>Max:</p>

        <pre><code>25,000</code></pre>

        <p>Useful for:</p>

        <blockquote>
          <p>"What was the highest transaction in each region?"</p>
        </blockquote>


        <h3>Grouping Dates</h3>

        <p>This is <strong>very important for Data Analyst interviews</strong>.</p>

        <p>Suppose your dataset contains individual transaction dates:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05-Jan-2026</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>10-Jan-2026</td>
                <td>20,000</td>
              </tr>
              <tr>
                <td>15-Jan-2026</td>
                <td>15,000</td>
              </tr>
              <tr>
                <td>05-Feb-2026</td>
                <td>30,000</td>
              </tr>
              <tr>
                <td>20-Feb-2026</td>
                <td>25,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>If you simply put Date into Rows, you may get every individual date.</p>

        <p>Instead, you can group dates by:</p>

        <ul>
          <li>Years</li>
          <li>Quarters</li>
          <li>Months</li>
          <li>Days</li>
        </ul>

        <h3>How to do it</h3>

        <ol>
          <li>Put <strong>Date</strong> into Rows.</li>
          <li>Right-click any date in the Pivot Table.</li>
          <li>Select <strong>Group</strong>.</li>
          <li>Select:
            <ul>
              <li>Months</li>
              <li>Quarters</li>
              <li>Years</li>
            </ul>
          </li>
          <li>Click <strong>OK</strong>.</li>
        </ol>

        <p>Now you can get:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Sum of Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jan</td>
                <td>45,000</td>
              </tr>
              <tr>
                <td>Feb</td>
                <td>55,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“If I have transaction-level dates but need a monthly or quarterly report, I can group the Date field in a Pivot Table by month, quarter, or year instead of creating separate formulas.”</p>
        </blockquote>

        <p><strong>Important warning</strong></p>

        <p>If Excel doesn't allow date grouping, the Date column may contain:</p>

        <ul>
          <li>Text instead of actual dates</li>
          <li>Blank cells</li>
          <li>Invalid dates</li>
        </ul>

        <p>So <strong>data cleaning comes first</strong>.</p>


        <h3>Grouping Numbers</h3>

        <p>You can also group numerical values into ranges.</p>

        <p>Suppose you have customer ages:</p>

        <pre><code>18
        22
        25
        31
        37
        42
        48
        55
        63</code></pre>

        <p>Instead of analyzing every age individually, you could create groups:</p>

        <pre><code>18–29
        30–39
        40–49
        50–59
        60–69</code></pre>

        <h3>How to do it</h3>

        <ol>
          <li>Put Age into Rows.</li>
          <li>Right-click an age.</li>
          <li>Select <strong>Group</strong>.</li>
          <li>Specify:
            <ul>
              <li>Starting at</li>
              <li>Ending at</li>
              <li>By</li>
            </ul>
          </li>
        </ol>

        <p>For example:</p>

        <pre><code>Starting at: 18
        Ending at: 68
        By: 10</code></pre>

        <p>Excel creates ranges.</p>

        <p><strong>Use cases</strong></p>

        <ul>
          <li>Age groups</li>
          <li>Salary ranges</li>
          <li>Sales ranges</li>
          <li>Customer spending ranges</li>
          <li>Order value buckets</li>
        </ul>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I use numerical grouping when I want to convert continuous numerical values into meaningful ranges, such as grouping customers into age bands or transactions into sales-value ranges.”</p>
        </blockquote>


        <h3>Calculated Fields</h3>

        <p>A <strong>Calculated Field</strong> allows you to create a new calculation inside a Pivot Table using existing fields.</p>

        <p>Suppose your dataset has:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Revenue</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>100000</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>B</td>
                <td>80000</td>
                <td>50000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You want:</p>

        <pre><code>Profit = Revenue - Cost</code></pre>

        <p>Instead of adding a Profit column to the original dataset, you can create a calculated field.</p>

        <h3>How to do it</h3>

        <p>In the Pivot Table:</p>

        <p><strong>PivotTable Analyze → Fields, Items &amp; Sets → Calculated Field</strong></p>

        <p>Then:</p>

        <p><strong>Name:</strong></p>

        <pre><code>Profit</code></pre>

        <p><strong>Formula:</strong></p>

        <pre><code>=Revenue-Cost</code></pre>

        <p>Click <strong>Add → OK</strong>.</p>

        <p>Excel adds the calculated field to the Pivot Table.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“A calculated field allows me to create a new calculation within a Pivot Table using existing fields. For example, if I have Revenue and Cost, I can create a Profit calculated field as Revenue minus Cost.”</p>
        </blockquote>

        <p><strong>Important caveat</strong></p>

        <p>Calculated fields have limitations compared with normal worksheet formulas and modern data-model calculations. For complex analytical models, <strong>Power Pivot/DAX</strong> is generally more powerful.</p>

        <p>For a basic Excel Data Analyst interview, however, you should know the concept.</p>


        <h3>Show Values As</h3>

        <p>This is another <strong>high-value interview topic</strong>.</p>

        <p>Normally, a Pivot Table shows actual values:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>100,000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>200,000</td>
              </tr>
              <tr>
                <td>West</td>
                <td>300,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>But sometimes you want to see <strong>percentages or cumulative values instead</strong>.</p>

        <p>You can use:</p>

        <p><strong>Value Field Settings → Show Values As</strong></p>


        <h3>% of Grand Total</h3>

        <p>This shows each value as a percentage of the overall total.</p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>100,000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>200,000</td>
              </tr>
              <tr>
                <td>West</td>
                <td>300,000</td>
              </tr>
              <tr>
                <td><strong>Grand Total</strong></td>
                <td><strong>600,000</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Then:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>% of Grand Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>16.67%</td>
              </tr>
              <tr>
                <td>South</td>
                <td>33.33%</td>
              </tr>
              <tr>
                <td>West</td>
                <td>50.00%</td>
              </tr>
              <tr>
                <td><strong>Grand Total</strong></td>
                <td><strong>100%</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>How to do it</h3>

        <ol>
          <li>Put Sales into Values.</li>
          <li>Right-click a value.</li>
          <li>Select <strong>Show Values As</strong>.</li>
          <li>Select <strong>% of Grand Total</strong>.</li>
        </ol>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“% of Grand Total shows each category's contribution to the overall total. For example, I can determine what percentage of total company revenue comes from each region.”</p>
        </blockquote>


        <h3>% of Row Total</h3>

        <p>This is especially useful when you have <strong>multiple columns/categories</strong>.</p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>20</td>
                <td>30</td>
                <td>50</td>
              </tr>
              <tr>
                <td>South</td>
                <td>40</td>
                <td>40</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>For North:</p>

        <pre><code>Total = 20 + 30 + 50 = 100</code></pre>

        <p>Therefore:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>20%</td>
                <td>30%</td>
                <td>50%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Each row totals <strong>100%</strong>.</p>

        <p><strong>Use case</strong></p>

        <blockquote>
          <p>"What percentage of each region's annual revenue came from each month?"</p>
        </blockquote>


        <h3>Running Total</h3>

        <p>A running total shows cumulative values over time.</p>

        <p>Suppose monthly revenue is:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jan</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>Feb</td>
                <td>20,000</td>
              </tr>
              <tr>
                <td>Mar</td>
                <td>15,000</td>
              </tr>
              <tr>
                <td>Apr</td>
                <td>25,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Running total becomes:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Revenue</th>
                <th>Running Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jan</td>
                <td>10,000</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>Feb</td>
                <td>20,000</td>
                <td>30,000</td>
              </tr>
              <tr>
                <td>Mar</td>
                <td>15,000</td>
                <td>45,000</td>
              </tr>
              <tr>
                <td>Apr</td>
                <td>25,000</td>
                <td>70,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>How to do it</h3>

        <ol>
          <li>Put Date/Month into Rows.</li>
          <li>Put Sales into Values.</li>
          <li>Right-click the value.</li>
          <li>Select <strong>Show Values As → Running Total In</strong>.</li>
          <li>Select the base field, such as Month.</li>
        </ol>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“A running total shows cumulative performance over time. For example, if I have monthly revenue, I can use Running Total to see cumulative revenue from the beginning of the year.”</p>
        </blockquote>


        <h3>Refresh Pivot Table</h3>

        <p>A Pivot Table doesn't always automatically reflect changes to its underlying source data.</p>

        <p>Suppose you initially had:</p>

        <pre><code>1000 records</code></pre>

        <p>and later added:</p>

        <pre><code>200 new records</code></pre>

        <p>You need to refresh the Pivot Table.</p>

        <h3>How to refresh</h3>

        <p>Right-click inside the Pivot Table:</p>

        <p><strong>Refresh</strong></p>

        <p>Or:</p>

        <p><strong>PivotTable Analyze → Refresh</strong></p>

        <p><strong>Shortcut:</strong></p>

        <pre><code>Alt + F5</code></pre>

        <p>For refreshing all Pivot Tables:</p>

        <pre><code>Ctrl + Alt + F5</code></pre>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“After the underlying data changes, I refresh the Pivot Table so that the summarized results reflect the latest data.”</p>
        </blockquote>


        <h3>Change Data Source</h3>

        <p>Sometimes your Pivot Table needs to use a different or expanded dataset.</p>

        <p>For example:</p>

        <p><strong>Initially:</strong></p>

        <pre><code>A1:E1000</code></pre>

        <p>Later, your data becomes:</p>

        <pre><code>A1:E1500</code></pre>

        <p>You need to update the source.</p>

        <h3>How to do it</h3>

        <p>Click inside Pivot Table:</p>

        <p><strong>PivotTable Analyze → Change Data Source</strong></p>

        <p>Then select the new range/table.</p>


        <h3>Better Approach: Excel Table</h3>

        <p>For recurring analysis, I recommend converting raw data into an <strong>Excel Table</strong> first.</p>

        <p>Shortcut:</p>

        <pre><code>Ctrl + T</code></pre>

        <p>Then create the Pivot Table from that table.</p>

        <p><strong>Why?</strong></p>

        <p>When new rows are added to the table, the table expands automatically, and after refreshing the Pivot Table, the new records are included.</p>

        <p>This is much better than repeatedly changing a hard-coded range.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“For recurring reports, I prefer converting the source data into an Excel Table before creating the Pivot Table. This allows the source range to expand automatically when new rows are added; I then refresh the Pivot Table to include the new data.”</p>
        </blockquote>


        <h3>Complete Example: Region-wise Monthly Revenue Report</h3>

        <p>This is the most important practical exercise from your list.</p>

        <p>Suppose your raw sales data looks like this:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Region</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05-Jan-2026</td>
                <td>North</td>
                <td>Laptop</td>
                <td>2</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>10-Jan-2026</td>
                <td>South</td>
                <td>Mouse</td>
                <td>10</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>15-Jan-2026</td>
                <td>North</td>
                <td>Keyboard</td>
                <td>5</td>
                <td>8000</td>
              </tr>
              <tr>
                <td>20-Feb-2026</td>
                <td>West</td>
                <td>Laptop</td>
                <td>2</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>05-Feb-2026</td>
                <td>South</td>
                <td>Laptop</td>
                <td>1</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>10-Mar-2026</td>
                <td>North</td>
                <td>Laptop</td>
                <td>3</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>15-Mar-2026</td>
                <td>West</td>
                <td>Mouse</td>
                <td>20</td>
                <td>10000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Your manager asks:</p>

        <blockquote>
          <p><strong>"Create a region-wise monthly revenue report."</strong></p>
        </blockquote>

        <p>And you are told:</p>

        <blockquote>
          <p><strong>Don't use formulas.</strong></p>
        </blockquote>

        <p>Here's exactly what you do.</p>


        <h3>Step 1 — Convert the data to a Table</h3>

        <p>Select the dataset.</p>

        <p>Press:</p>

        <pre><code>Ctrl + T</code></pre>

        <p>Confirm:</p>

        <p><strong>My table has headers</strong></p>

        <p>Click OK.</p>


        <h3>Step 2 — Create Pivot Table</h3>

        <p>Click anywhere inside the table.</p>

        <p>Go to:</p>

        <p><strong>Insert → PivotTable</strong></p>

        <p>Select:</p>

        <p><strong>New Worksheet</strong></p>

        <p>Click OK.</p>


        <h3>Step 3 — Configure Rows</h3>

        <p>Drag:</p>

        <pre><code>Region → Rows</code></pre>


        <h3>Step 4 — Configure Columns</h3>

        <p>Drag:</p>

        <pre><code>Date → Columns</code></pre>

        <p>Excel might initially show individual dates.</p>

        <p>Right-click a date.</p>

        <p>Select:</p>

        <p><strong>Group</strong></p>

        <p>Choose:</p>

        <pre><code>Months</code></pre>

        <p>If your report spans multiple years, also select:</p>

        <pre><code>Years</code></pre>

        <p>For a single-year dataset, Month is sufficient.</p>


        <h3>Step 5 — Configure Values</h3>

        <p>Drag:</p>

        <pre><code>Revenue → Values</code></pre>

        <p>Excel should use:</p>

        <pre><code>Sum of Revenue</code></pre>

        <p>If it shows Count instead:</p>

        <p><strong>Value Field Settings → Sum</strong></p>


        <h3>Result</h3>

        <p>You get something like:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
                <th>Grand Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>₹108,000</td>
                <td>₹0</td>
                <td>₹150,000</td>
                <td>₹258,000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>₹5,000</td>
                <td>₹50,000</td>
                <td>₹0</td>
                <td>₹55,000</td>
              </tr>
              <tr>
                <td>West</td>
                <td>₹0</td>
                <td>₹100,000</td>
                <td>₹10,000</td>
                <td>₹110,000</td>
              </tr>
              <tr>
                <td><strong>Grand Total</strong></td>
                <td><strong>₹113,000</strong></td>
                <td><strong>₹150,000</strong></td>
                <td><strong>₹160,000</strong></td>
                <td><strong>₹423,000</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>No SUMIFS. No formulas.</strong></p>

        <p>Just:</p>

        <pre><code>Region → Rows
        Date → Columns → Group by Month
        Revenue → Values → Sum</code></pre>

        <p>That's the core Pivot Table skill you need.</p>


        <h3>How to Think About Pivot Tables</h3>

        <p>Don't memorize the four boxes independently. Think about the <strong>business question</strong>.</p>

        <p>Suppose the question is:</p>

        <blockquote>
          <p><strong>"What is the average revenue generated by each product in every region?"</strong></p>
        </blockquote>

        <p>Think:</p>

        <pre><code>What am I grouping by?
                ↓
        Region + Product
                ↓
        Rows

        What am I calculating?
                ↓
        Average Revenue
                ↓
        Values</code></pre>

        <p>Or:</p>

        <blockquote>
          <p><strong>"Show monthly revenue for each region."</strong></p>
        </blockquote>

        <pre><code>Region → Rows
        Month → Columns
        Revenue → Values</code></pre>

        <p>Or:</p>

        <blockquote>
          <p><strong>"Show only laptop revenue by region."</strong></p>
        </blockquote>

        <pre><code>Region → Rows
        Revenue → Values
        Product → Filters</code></pre>


        <h3>Pivot Table vs Normal Formulas</h3>

        <p>This is another useful interview discussion.</p>

        <p>Suppose you need:</p>

        <blockquote>
          <p>Region-wise total revenue.</p>
        </blockquote>

        <p>You could use:</p>

        <pre><code>=SUMIFS(...)</code></pre>

        <p>But a Pivot Table can summarize it without writing formulas.</p>

        <p><strong>Pivot Table advantages</strong></p>

        <ul>
          <li>Quick summarization</li>
          <li>Easy grouping</li>
          <li>Multiple aggregations</li>
          <li>Interactive filtering</li>
          <li>Easy percentage calculations</li>
          <li>Good for exploratory analysis</li>
          <li>Handles large datasets relatively conveniently</li>
        </ul>

        <p><strong>Formula advantages</strong></p>

        <ul>
          <li>More control over individual calculations</li>
          <li>Better when you need a specific result embedded into a report</li>
          <li>Formulas update based on their referenced cells</li>
        </ul>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I would use a Pivot Table when I need to quickly explore or summarize a dataset across multiple dimensions. If I need a specific calculation embedded into a structured report or dashboard, formulas may be more appropriate. In practice, I often use both.”</p>
        </blockquote>


        <h3>Most Important Interview Questions</h3>

        <p><strong>Q1. What is a Pivot Table?</strong></p>

        <blockquote>
          <p>“A Pivot Table is an Excel feature used to quickly summarize and analyze large datasets. It allows me to group data and perform aggregations such as sum, count, and average without manually writing formulas for each category.”</p>
        </blockquote>

        <p><strong>Q2. What are Rows, Columns, Values, and Filters?</strong></p>

        <blockquote>
          <p>“Rows define the categories displayed vertically, Columns create categories horizontally, Values contain the calculations or aggregations, and Filters allow me to filter the overall Pivot Table based on specific criteria.”</p>
        </blockquote>

        <p><strong>Q3. How would you create a monthly sales report?</strong></p>

        <blockquote>
          <p>“I would create a Pivot Table from the sales data, put the Date field into Columns and group it by Month, put the required category such as Region into Rows, and put Revenue into Values using Sum.”</p>
        </blockquote>

        <p><strong>Q4. How do you calculate percentage contribution?</strong></p>

        <blockquote>
          <p>“I would put the metric into Values, then use Show Values As and select % of Grand Total.”</p>
        </blockquote>

        <p><strong>Q5. How would you calculate a cumulative revenue?</strong></p>

        <blockquote>
          <p>“I would put the date or month into Rows and revenue into Values, then use Show Values As → Running Total In and select the date field as the base field.”</p>
        </blockquote>

        <p><strong>Q6. What happens when the source data changes?</strong></p>

        <blockquote>
          <p>“I need to refresh the Pivot Table so that the summary reflects the updated source data. For recurring reports, I prefer using an Excel Table as the source so that newly added rows are included automatically after refreshing.”</p>
        </blockquote>

        <p><strong>Q7. Can Pivot Tables perform calculations other than Sum?</strong></p>

        <blockquote>
          <p>“Yes. Depending on the requirement, I can use Sum, Count, Average, Min, Max, and other calculations. I can also use Show Values As for percentages and running totals.”</p>
        </blockquote>
      `},

      {
        id: "Charts&Visualization",
        name: "Charts & Visualization",
        theory: `
        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Chart Type</th>
                <th>Best Used For</th>
                <th>Example</th>
                <th>Key Interview Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Column Chart</strong></td>
                <td>Comparing categories</td>
                <td>Sales by region</td>
                <td>Best for comparing discrete categories</td>
              </tr>
              <tr>
                <td><strong>Bar Chart</strong></td>
                <td>Comparing categories, especially many categories</td>
                <td>Revenue by product</td>
                <td>Horizontal bars make long category names easier to read</td>
              </tr>
              <tr>
                <td><strong>Line Chart</strong></td>
                <td>Trends over time</td>
                <td>Monthly revenue</td>
                <td>Best choice for time-series data</td>
              </tr>
              <tr>
                <td><strong>Pie Chart</strong></td>
                <td>Part-to-whole relationship</td>
                <td>Revenue share by region</td>
                <td>Use only when there are few categories</td>
              </tr>
              <tr>
                <td><strong>Doughnut Chart</strong></td>
                <td>Part-to-whole relationship</td>
                <td>Market share by segment</td>
                <td>Similar to pie; generally less precise for comparisons</td>
              </tr>
              <tr>
                <td><strong>Area Chart</strong></td>
                <td>Trend + magnitude over time</td>
                <td>Monthly sales volume</td>
                <td>Useful when showing cumulative/magnitude changes</td>
              </tr>
              <tr>
                <td><strong>Stacked Column Chart</strong></td>
                <td>Composition across categories</td>
                <td>Monthly sales by region</td>
                <td>Shows both total and individual components</td>
              </tr>
              <tr>
                <td><strong>100% Stacked Column</strong></td>
                <td>Percentage composition</td>
                <td>Regional percentage contribution by month</td>
                <td>Every column represents 100%</td>
              </tr>
              <tr>
                <td><strong>Scatter Plot</strong></td>
                <td>Relationship/correlation between two numerical variables</td>
                <td>Advertising spend vs revenue</td>
                <td>Useful for identifying correlation and outliers</td>
              </tr>
              <tr>
                <td><strong>Histogram</strong></td>
                <td>Distribution of numerical data</td>
                <td>Distribution of customer ages</td>
                <td>Shows frequency across numerical ranges</td>
              </tr>
              <tr>
                <td><strong>Box &amp; Whisker</strong></td>
                <td>Distribution, spread, and outliers</td>
                <td>Salary distribution by department</td>
                <td>Useful for comparing distributions and identifying outliers</td>
              </tr>
              <tr>
                <td><strong>Waterfall Chart</strong></td>
                <td>Showing how values increase/decrease to reach a final value</td>
                <td>Revenue → expenses → profit</td>
                <td>Common in financial/business analysis</td>
              </tr>
              <tr>
                <td><strong>Funnel Chart</strong></td>
                <td>Showing stages in a process</td>
                <td>Leads → Qualified → Interview → Hired</td>
                <td>Useful for conversion pipelines</td>
              </tr>
              <tr>
                <td><strong>Combo Chart</strong></td>
                <td>Comparing different metrics/scales</td>
                <td>Revenue + Profit Margin</td>
                <td>Combines chart types, commonly column + line</td>
              </tr>
              <tr>
                <td><strong>Treemap</strong></td>
                <td>Hierarchical part-to-whole data</td>
                <td>Sales by category and product</td>
                <td>Useful for hierarchical categorical data</td>
              </tr>
              <tr>
                <td><strong>Sunburst Chart</strong></td>
                <td>Hierarchical data</td>
                <td>Region → Category → Product</td>
                <td>Shows multiple levels of hierarchy</td>
              </tr>
              <tr>
                <td><strong>Map Chart</strong></td>
                <td>Geographic data</td>
                <td>Sales by state/country</td>
                <td>Useful when location is an important dimension</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Most important for Data Analyst interviews</h3>

        <p>Focus strongly on:</p>

        <p><strong>Column/Bar → Line → Pie → Stacked → Scatter → Histogram → Box &amp; Whisker → Combo</strong></p>

        <p>And remember this simple rule:</p>

        <blockquote>
          <p><strong>Comparison → Bar/Column</strong></p>
          <p><strong>Trend over time → Line</strong></p>
          <p><strong>Part of a whole → Pie/100% Stacked</strong></p>
          <p><strong>Relationship between two numeric variables → Scatter</strong></p>
          <p><strong>Distribution → Histogram/Box Plot</strong></p>
          <p><strong>Multiple metrics with different scales → Combo</strong></p>
        </blockquote>

        <h3>Example interview question</h3>

        <p><strong>Q: Which chart would you use to show monthly revenue for the last 12 months?</strong></p>

        <blockquote>
          <p>“I would use a line chart because the data is time-based and the main objective is to show the trend in revenue over the 12-month period.”</p>
        </blockquote>

        <p><strong>Q: Which chart would you use to compare sales across 20 products?</strong></p>

        <blockquote>
          <p>“I would use a horizontal bar chart because there are many categories, and it makes the product names easier to read and compare.”</p>
        </blockquote>

        <p><strong>Q: Which chart would you use to analyze the relationship between advertising spend and revenue?</strong></p>

        <blockquote>
          <p>“I would use a scatter plot because both variables are numerical, and the chart can help identify whether there is a relationship or correlation between advertising spend and revenue.”</p>
        </blockquote>
      `},

      {
        id: "ConditionalFormatting",
        name: "Conditional Formatting",
        theory: `
        <p><strong>Conditional Formatting</strong> is an Excel feature that automatically changes the <strong>appearance of cells based on their values or a condition</strong>.</p>

        <p>For a Data Analyst, it is mainly used to <strong>identify patterns, outliers, exceptions, trends, and important records quickly</strong>.</p>

        <p>For example, if sales below ₹50,000 should be highlighted, Conditional Formatting can automatically highlight those cells.</p>

        <blockquote>
          <p><strong>Important distinction:</strong> Conditional Formatting changes how data is displayed; it does <strong>not change the underlying data</strong>.</p>
        </blockquote>

        <h3>1. Highlight Cell Rules</h3>

        <p><strong>Highlight Cell Rules</strong> are predefined rules used to highlight cells that satisfy a particular condition.</p>

        <p>Go to:</p>

        <p><strong>Home → Conditional Formatting → Highlight Cells Rules</strong></p>

        <p>You can use:</p>

        <ul>
          <li>Greater Than</li>
          <li>Less Than</li>
          <li>Between</li>
          <li>Equal To</li>
          <li>Text That Contains</li>
          <li>A Date Occurring</li>
          <li>Duplicate Values</li>
        </ul>

        <p><strong>Example: Sales greater than ₹50,000</strong></p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laptop</td>
                <td>80,000</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>20,000</td>
              </tr>
              <tr>
                <td>Keyboard</td>
                <td>60,000</td>
              </tr>
              <tr>
                <td>Monitor</td>
                <td>40,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Select the Sales column:</p>

        <p><strong>Conditional Formatting → Highlight Cells Rules → Greater Than</strong></p>

        <p>Enter:</p>

        <pre><code>50000</code></pre>

        <p>Excel highlights:</p>

        <pre><code>80000
        60000</code></pre>

        <p><strong>Use cases</strong></p>

        <ul>
          <li>Highlight high sales</li>
          <li>Identify low salaries</li>
          <li>Find overdue values</li>
          <li>Highlight negative numbers</li>
          <li>Find specific text</li>
        </ul>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Highlight Cell Rules allow me to quickly identify cells that meet a specific condition, such as sales greater than 50,000 or values below a particular threshold.”</p>
        </blockquote>

        <h3>2. Top/Bottom Rules</h3>

        <p>These rules identify the highest or lowest values in a dataset.</p>

        <p>Go to:</p>

        <p><strong>Home → Conditional Formatting → Top/Bottom Rules</strong></p>

        <p>Available options include:</p>

        <ul>
          <li>Top 10 Items</li>
          <li>Top 10%</li>
          <li>Bottom 10 Items</li>
          <li>Bottom 10%</li>
          <li>Above Average</li>
          <li>Below Average</li>
        </ul>

        <p><strong>Example: Top 10 Products</strong></p>

        <p>Suppose you have 100 products and their sales.</p>

        <p>You can select the Sales column and choose:</p>

        <p><strong>Top/Bottom Rules → Top 10 Items</strong></p>

        <p>Excel highlights the 10 products with the highest sales.</p>

        <p>You can also change <code>10</code> to another number.</p>

        <p>For example:</p>

        <pre><code>Top 5 Items</code></pre>

        <p><strong>Top 10%</strong></p>

        <p>This is different from Top 10 Items.</p>

        <p><strong>Top 10 Items:</strong></p>

        <p>Top 10 actual records.</p>

        <p><strong>Top 10%:</strong></p>

        <p>Top 10% of all records.</p>

        <p>If you have 1000 records:</p>

        <pre><code>Top 10 Items → 10 records
        Top 10% → 100 records</code></pre>

        <p><strong>Above/Below Average</strong></p>

        <p>You can also highlight values above or below the average.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Top and Bottom Rules help identify high-performing or low-performing records quickly. For example, I can highlight the top 10 products based on revenue or identify values below the average.”</p>
        </blockquote>

        <h3>3. Data Bars</h3>

        <p><strong>Data Bars</strong> display a horizontal bar inside each cell based on the magnitude of its value.</p>

        <p>Example:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>██████████ 100,000</td>
              </tr>
              <tr>
                <td>B</td>
                <td>█████ 50,000</td>
              </tr>
              <tr>
                <td>C</td>
                <td>███ 30,000</td>
              </tr>
              <tr>
                <td>D</td>
                <td>███████ 70,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The longer the bar, the larger the value.</p>

        <p><strong>How to apply</strong></p>

        <p>Select your values:</p>

        <p><strong>Home → Conditional Formatting → Data Bars</strong></p>

        <p>Choose a style.</p>

        <p><strong>Why useful?</strong></p>

        <p>Data Bars allow you to compare values <strong>visually without creating a separate chart</strong>.</p>

        <p><strong>Use cases</strong></p>

        <ul>
          <li>Sales comparison</li>
          <li>Revenue comparison</li>
          <li>Performance scores</li>
          <li>Inventory levels</li>
          <li>Project completion</li>
        </ul>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Data Bars provide a visual representation of the magnitude of values directly inside cells. They're useful when I want to compare values quickly without creating a separate chart.”</p>
        </blockquote>

        <h3>4. Color Scales</h3>

        <p><strong>Color Scales</strong> use different colors to represent low, medium, and high values.</p>

        <p>For example:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>20,000</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>50,000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>90,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>A color scale might visually represent:</p>

        <pre><code>Low     → one color
        Medium  → another color
        High    → another color</code></pre>

        <p><strong>How to apply</strong></p>

        <p>Select the values:</p>

        <p><strong>Home → Conditional Formatting → Color Scales</strong></p>

        <p>Choose a color scale.</p>

        <p>Commonly:</p>

        <pre><code>Low → Middle → High</code></pre>

        <p><strong>Use case</strong></p>

        <p>Suppose you have sales for:</p>

        <pre><code>20 regions × 12 months</code></pre>

        <p>A color scale can make high and low-performing regions/months immediately visible.</p>

        <p>This is essentially a simple <strong>heatmap</strong>.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Color Scales represent the relative magnitude of values using different colors. They're useful for identifying patterns, high and low values, and creating simple heatmaps.”</p>
        </blockquote>

        <h3>5. Icon Sets</h3>

        <p><strong>Icon Sets</strong> add symbols to cells based on their values.</p>

        <p>Examples include:</p>

        <ul>
          <li>Arrows</li>
          <li>Traffic lights</li>
          <li>Flags</li>
          <li>Ratings</li>
          <li>Symbols</li>
        </ul>

        <p>For example:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Performance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>95 🟢</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>72 🟡</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>45 🔴</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The icons indicate performance categories.</p>

        <p><strong>How to apply</strong></p>

        <p>Select the values:</p>

        <p><strong>Home → Conditional Formatting → Icon Sets</strong></p>

        <p>Choose an icon set.</p>

        <p><strong>Use cases</strong></p>

        <ul>
          <li>KPI dashboards</li>
          <li>Performance monitoring</li>
          <li>Sales targets</li>
          <li>Risk indicators</li>
          <li>Growth/decline indicators</li>
        </ul>

        <p><strong>Important point</strong></p>

        <p>Icon Sets are based on <strong>thresholds or relative values</strong>, depending on the configuration.</p>

        <p>You can customize the rules.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Icon Sets provide a visual indication of performance or status. For example, I can use green, yellow, and red indicators to quickly identify whether employees are above, near, or below a performance target.”</p>
        </blockquote>

        <h3>6. Duplicate Values</h3>

        <p>Conditional Formatting can quickly identify duplicate or unique values.</p>

        <p>Go to:</p>

        <p><strong>Home → Conditional Formatting → Highlight Cells Rules → Duplicate Values</strong></p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>EMP001</td></tr>
              <tr><td>EMP002</td></tr>
              <tr><td>EMP003</td></tr>
              <tr><td>EMP002</td></tr>
              <tr><td>EMP004</td></tr>
              <tr><td>EMP001</td></tr>
            </tbody>
          </table>
        </div>

        <p>Excel highlights:</p>

        <pre><code>EMP001
        EMP002</code></pre>

        <p>because they occur more than once.</p>

        <p><strong>Why is this useful?</strong></p>

        <p>This is extremely useful during <strong>data quality checks</strong>.</p>

        <p>You might want to check:</p>

        <ul>
          <li>Duplicate employee IDs</li>
          <li>Duplicate customer IDs</li>
          <li>Duplicate order IDs</li>
          <li>Duplicate invoice numbers</li>
          <li>Duplicate email addresses</li>
        </ul>

        <p><strong>Important distinction</strong></p>

        <p>Conditional Formatting <strong>identifies</strong> duplicates.</p>

        <p>It does <strong>not remove</strong> them.</p>

        <p>To remove duplicates:</p>

        <p><strong>Data → Remove Duplicates</strong></p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I can use Conditional Formatting to identify duplicate records or IDs during data-quality checks. However, highlighting duplicates doesn't remove them; if duplicates need to be deleted, I would use the Remove Duplicates feature after verifying that they are actually invalid duplicates.”</p>
        </blockquote>

        <h3>7. Custom Formulas</h3>

        <p>This is the <strong>most important advanced Conditional Formatting concept</strong>.</p>

        <p>Instead of using Excel's predefined rules, you can write your own formula.</p>

        <p>Go to:</p>

        <p><strong>Home → Conditional Formatting → New Rule → Use a formula to determine which cells to format</strong></p>

        <p>The formula must evaluate to:</p>

        <pre><code>TRUE</code></pre>

        <p>for the formatting to be applied.</p>

        <p><strong>Example 1: Highlight Entire Rows</strong></p>

        <p>Suppose you have:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>IT</td>
                <td>80000</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>HR</td>
                <td>40000</td>
              </tr>
              <tr>
                <td>Amit</td>
                <td>IT</td>
                <td>90000</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>Finance</td>
                <td>30000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You want to highlight the <strong>entire row</strong> when Sales &gt; ₹50,000.</p>

        <p>Select:</p>

        <pre><code>A2:C5</code></pre>

        <p>Create a custom rule:</p>

        <pre><code>=$C2&gt;50000</code></pre>

        <p>Then choose your formatting.</p>

        <p>Excel highlights:</p>

        <pre><code>Rahul | IT | 80000
        Amit  | IT | 90000</code></pre>

        <p><strong>Why <code>$C2</code>?</strong></p>

        <p>This is an important interview concept.</p>

        <pre><code>$C</code></pre>

        <p>locks the column.</p>

        <pre><code>2</code></pre>

        <p>remains relative so the formula can adjust for each row.</p>

        <p><strong>Example 2: Highlight Overdue Tasks</strong></p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Report</td>
                <td>01-Sep-2026</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Analysis</td>
                <td>10-Sep-2026</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>Dashboard</td>
                <td>25-Aug-2026</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You want to highlight tasks that are:</p>

        <p><strong>Past their due date AND still pending.</strong></p>

        <p>Use:</p>

        <pre><code>=AND($B2&lt;TODAY(),$C2="Pending")</code></pre>

        <p>This is a very realistic Data Analyst/business-reporting example.</p>

        <p><strong>Example 3: Highlight Duplicate IDs with a Formula</strong></p>

        <p>Suppose IDs are in column A.</p>

        <p>Use:</p>

        <pre><code>=COUNTIF($A$2:$A$100,A2)&gt;1</code></pre>

        <p>Any ID appearing more than once will be highlighted.</p>

        <p><strong>Example 4: Highlight Above-Average Sales</strong></p>

        <p>You can use:</p>

        <pre><code>=C2&gt;AVERAGE($C$2:$C$100)</code></pre>

        <p>This highlights every sales value above the overall average.</p>

        <p><strong>Example 5: Highlight Missing Values</strong></p>

        <p>You can highlight blank cells with:</p>

        <pre><code>=A2=""</code></pre>

        <p>or:</p>

        <pre><code>=ISBLANK(A2)</code></pre>

        <p>This can be useful when checking a dataset for missing information.</p>

        <h3>Conditional Formatting vs Data Validation</h3>

        <p>This is a <strong>good interview comparison</strong>.</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Conditional Formatting</th>
                <th>Data Validation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Used to visually identify data</td>
                <td>Used to control data entry</td>
              </tr>
              <tr>
                <td>Highlights existing values</td>
                <td>Prevents/restricts invalid values</td>
              </tr>
              <tr>
                <td>Does not normally change the data</td>
                <td>Controls what can be entered</td>
              </tr>
              <tr>
                <td>Example: highlight sales &gt; ₹50K</td>
                <td>Example: allow only sales &gt; 0</td>
              </tr>
              <tr>
                <td>Useful for analysis and monitoring</td>
                <td>Useful for data-entry quality</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Simple way to remember</strong></p>

        <blockquote>
          <p><strong>Data Validation = "Can I enter this value?"</strong></p>
          <p><strong>Conditional Formatting = "How should I visually flag this value?"</strong></p>
        </blockquote>

        <h3>Conditional Formatting vs Sorting</h3>

        <p>Another useful distinction:</p>

        <p><strong>Sorting</strong></p>

        <p>Changes the <strong>order</strong> of records.</p>

        <pre><code>100
        80
        50
        20</code></pre>

        <p><strong>Conditional Formatting</strong></p>

        <p>Keeps the order but <strong>visually highlights</strong> values.</p>

        <pre><code>100 → highlighted
        80
        50
        20 → highlighted differently</code></pre>

        <p>So Conditional Formatting doesn't reorganize your dataset.</p>

        <h3>Practical Data Analyst Example</h3>

        <p>Imagine you're given a sales dataset:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Product</th>
                <th>Sales</th>
                <th>Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>Laptop</td>
                <td>100000</td>
                <td>80000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>Mouse</td>
                <td>30000</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>West</td>
                <td>Keyboard</td>
                <td>70000</td>
                <td>70000</td>
              </tr>
              <tr>
                <td>East</td>
                <td>Monitor</td>
                <td>40000</td>
                <td>60000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You could use Conditional Formatting to:</p>

        <p><strong>1. Highlight sales above ₹75,000</strong></p>

        <p><strong>Highlight Cell Rules → Greater Than → 75000</strong></p>

        <p><strong>2. Identify the top 10% performers</strong></p>

        <p><strong>Top/Bottom Rules → Top 10%</strong></p>

        <p><strong>3. Visualize sales magnitude</strong></p>

        <p><strong>Data Bars</strong></p>

        <p><strong>4. Create a sales heatmap</strong></p>

        <p><strong>Color Scales</strong></p>

        <p><strong>5. Show performance status</strong></p>

        <p><strong>Icon Sets</strong></p>

        <p><strong>6. Identify duplicate product/customer IDs</strong></p>

        <p><strong>Duplicate Values</strong></p>

        <p><strong>7. Highlight under-target sales</strong></p>

        <p>Custom formula:</p>

        <pre><code>=$C2&lt;$D2</code></pre>

        <p>This last one is particularly useful because you're comparing <strong>two columns</strong>.</p>

        <h3>Quick Interview Cheat Sheet</h3>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>What It Does</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Highlight Cell Rules</strong></td>
                <td>Highlights values meeting a condition</td>
                <td>Sales &gt; ₹50K</td>
              </tr>
              <tr>
                <td><strong>Top/Bottom Rules</strong></td>
                <td>Identifies highest/lowest values</td>
                <td>Top 10 products</td>
              </tr>
              <tr>
                <td><strong>Data Bars</strong></td>
                <td>Shows magnitude visually</td>
                <td>Sales comparison</td>
              </tr>
              <tr>
                <td><strong>Color Scales</strong></td>
                <td>Shows low → high values using colors</td>
                <td>Sales heatmap</td>
              </tr>
              <tr>
                <td><strong>Icon Sets</strong></td>
                <td>Shows status/performance using icons</td>
                <td>KPI indicators</td>
              </tr>
              <tr>
                <td><strong>Duplicate Values</strong></td>
                <td>Identifies duplicate/unique values</td>
                <td>Duplicate customer IDs</td>
              </tr>
              <tr>
                <td><strong>Custom Formula</strong></td>
                <td>Creates your own logical rule</td>
                <td>Sales &lt; Target</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>⭐ Interview-Level Points to Remember</h3>

        <p>For a Data Analyst interview, make sure you can explain these five things:</p>

        <p><strong>1. Conditional Formatting doesn't modify data</strong></p>

        <p>It changes <strong>visual appearance</strong>, not the underlying value.</p>

        <p><strong>2. It is useful for data-quality checks</strong></p>

        <p>For example:</p>

        <ul>
          <li>Duplicates</li>
          <li>Missing values</li>
          <li>Invalid values</li>
          <li>Outliers</li>
          <li>Values outside thresholds</li>
        </ul>

        <p><strong>3. Custom formulas are powerful</strong></p>

        <p>You can use:</p>

        <pre><code>=AND(...)
        =OR(...)
        =COUNTIF(...)
        =ISBLANK(...)
        =TODAY()
        =AVERAGE(...)</code></pre>

        <p>to build business-specific rules.</p>

        <p><strong>4. Absolute and relative references matter</strong></p>

        <p>For example:</p>

        <pre><code>=$C2&gt;50000</code></pre>

        <p>is different from:</p>

        <pre><code>=C$2&gt;50000</code></pre>

        <p>Understanding <code>$</code> is important when applying a formula to an entire range.</p>

        <p><strong>5. Don't overuse formatting</strong></p>

        <p>A common analyst mistake is turning a spreadsheet into a wall of colors.</p>

        <p>Use Conditional Formatting to <strong>communicate something meaningful</strong>, not simply because Excel provides the feature.</p>

        <p><strong>Strong interview answer: "Why do you use Conditional Formatting?"</strong></p>

        <blockquote>
          <p><strong>“I use Conditional Formatting to quickly identify important patterns or exceptions in a dataset without changing the underlying data. For example, I can highlight sales below target, identify duplicate IDs, show top-performing products, or use color scales to identify high and low values. For more complex business rules, I can create custom formula-based conditions.”</strong></p>
        </blockquote>
      `},

      {
        id: "DataValidation",
        name: "Data Validation",
        theory: `
        <p><strong>Data Validation</strong> is an Excel feature used to <strong>control what users can enter into a cell</strong>.</p>

        <p>From a Data Analyst perspective, it is mainly used to <strong>prevent invalid or inconsistent data at the point of entry</strong>.</p>

        <p>For example, if a column should contain only:</p>

        <pre><code>Male
        Female
        Other</code></pre>

        <p>you don't want users entering:</p>

        <pre><code>male
        M
        MALE
        Femalee
        Unknown</code></pre>

        <p>Data Validation can restrict the allowed inputs.</p>

        <h3>1. How to Open Data Validation</h3>

        <p>Select the cells where you want to apply validation.</p>

        <p>Go to:</p>

        <p><strong>Data → Data Validation → Data Validation</strong></p>

        <p>You will see options such as:</p>

        <pre><code>Allow:
            Any value
            Whole number
            Decimal
            List
            Date
            Time
            Text length
            Custom</code></pre>

        <p>There are also tabs for:</p>

        <ul>
          <li><strong>Input Message</strong></li>
          <li><strong>Error Alert</strong></li>
        </ul>

        <h3>2. Dropdown Lists</h3>

        <p>A dropdown list restricts users to predefined values.</p>

        <h3>Example</h3>

        <p>Suppose you have a <code>Department</code> column and only want:</p>

        <pre><code>IT
        HR
        Finance
        Sales
        Marketing</code></pre>

        <h3>How to create it</h3>

        <ol>
          <li>Select the cells.</li>
          <li>Go to <strong>Data → Data Validation</strong>.</li>
          <li>Under <strong>Allow</strong>, select <strong>List</strong>.</li>
          <li>In <strong>Source</strong>, enter:</li>
        </ol>

        <pre><code>IT,HR,Finance,Sales,Marketing</code></pre>

        <ol start="5">
          <li>Click <strong>OK</strong>.</li>
        </ol>

        <p>The cell now contains a dropdown.</p>

        <h3>Better approach for larger lists</h3>

        <p>Instead of manually typing the values, keep them in another range:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>A</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>IT</td></tr>
              <tr><td>HR</td></tr>
              <tr><td>Finance</td></tr>
              <tr><td>Sales</td></tr>
              <tr><td>Marketing</td></tr>
            </tbody>
          </table>
        </div>

        <p>Then use that range as the source.</p>

        <p>For example:</p>

        <pre><code>=$A$2:$A$6</code></pre>

        <h3>Why is this useful?</h3>

        <p>It prevents inconsistent entries.</p>

        <p>Without validation:</p>

        <pre><code>IT
        it
        Information Technology
        I.T.</code></pre>

        <p>With a dropdown:</p>

        <pre><code>IT
        HR
        Finance
        Sales
        Marketing</code></pre>

        <h3>Interview answer</h3>

        <blockquote>
          <p>“I use a dropdown list when a field should contain values from a predefined set of categories. It helps prevent inconsistent entries and improves data quality.”</p>
        </blockquote>

        <h3>3. Whole Number Restrictions</h3>

        <p>You can restrict a cell to accept only whole numbers.</p>

        <p>For example, suppose:</p>

        <pre><code>Number of employees</code></pre>

        <p>must be between <strong>1 and 500</strong>.</p>

        <h3>How to do it</h3>

        <p><strong>Data → Data Validation</strong></p>

        <p>Set:</p>

        <pre><code>Allow: Whole number
        Data: between
        Minimum: 1
        Maximum: 500</code></pre>

        <p>Now:</p>

        <pre><code>100    ✓
        25     ✓
        0      ✗
        501    ✗
        10.5   ✗
        ABC    ✗</code></pre>

        <h3>Other conditions</h3>

        <p>You can choose:</p>

        <ul>
          <li>Between</li>
          <li>Not between</li>
          <li>Equal to</li>
          <li>Not equal to</li>
          <li>Greater than</li>
          <li>Less than</li>
          <li>Greater than or equal to</li>
          <li>Less than or equal to</li>
        </ul>

        <h3>Interview example</h3>

        <blockquote>
          <p>“If I'm creating an employee data-entry sheet and the employee age should be between 18 and 60, I can use Whole Number validation with a minimum of 18 and maximum of 60.”</p>
        </blockquote>

        <h3>4. Decimal Restrictions</h3>

        <p>Decimal validation is useful when values can contain decimal numbers.</p>

        <p>For example:</p>

        <pre><code>Discount = 0% to 100%</code></pre>

        <p>or:</p>

        <pre><code>Product Rating = 0.0 to 5.0</code></pre>

        <h3>Example: Rating</h3>

        <p>Set:</p>

        <pre><code>Allow: Decimal
        Data: between
        Minimum: 0
        Maximum: 5</code></pre>

        <p>Then:</p>

        <pre><code>4.5    ✓
        3.2    ✓
        5      ✓
        6      ✗
        -1     ✗</code></pre>

        <h3>Interview answer</h3>

        <blockquote>
          <p>“I use Decimal validation when the field can contain fractional values. For example, I can restrict a product rating to values between 0 and 5.”</p>
        </blockquote>

        <h3>5. Date Restrictions</h3>

        <p>You can restrict users to entering dates within a specific range.</p>

        <h3>Example</h3>

        <p>Suppose employees can enter dates only within the year 2026.</p>

        <p>Set:</p>

        <pre><code>Allow: Date
        Data: between
        Start date: 01-Jan-2026
        End date: 31-Dec-2026</code></pre>

        <p>Now:</p>

        <pre><code>15-Mar-2026    ✓
        20-Dec-2026    ✓
        01-Jan-2027    ✗</code></pre>

        <h3>Dynamic date validation</h3>

        <p>You can also use formulas.</p>

        <p>For example, to prevent users from entering a future date:</p>

        <pre><code>=A2&lt;=TODAY()</code></pre>

        <p>This is particularly useful for:</p>

        <ul>
          <li>Birth dates</li>
          <li>Transaction dates</li>
          <li>Joining dates</li>
          <li>Order dates</li>
          <li>Submission dates</li>
        </ul>

        <h3>Interview answer</h3>

        <blockquote>
          <p>“Date validation allows me to restrict dates to a specific range. For example, I can prevent future transaction dates from being entered by using a custom validation rule based on TODAY().”</p>
        </blockquote>

        <h3>6. Text Length</h3>

        <p>Text Length validation restricts the number of characters that can be entered.</p>

        <h3>Example</h3>

        <p>Suppose an employee ID must contain at most 10 characters.</p>

        <p>Set:</p>

        <pre><code>Allow: Text length
        Data: less than or equal to
        Maximum: 10</code></pre>

        <p>Then:</p>

        <pre><code>EMP10234       ✓
        EMP1234567     ✓
        EMP1234567890  ✗</code></pre>

        <h3>Other possibilities</h3>

        <p>You can set:</p>

        <ul>
          <li>Equal to</li>
          <li>Not equal to</li>
          <li>Greater than</li>
          <li>Less than</li>
          <li>Greater than or equal to</li>
          <li>Less than or equal to</li>
          <li>Between</li>
          <li>Not between</li>
        </ul>

        <h3>Use cases</h3>

        <ul>
          <li>Employee IDs</li>
          <li>PIN codes</li>
          <li>Product codes</li>
          <li>Phone numbers</li>
          <li>Short descriptions</li>
        </ul>

        <h3>Interview answer</h3>

        <blockquote>
          <p>“Text Length validation is useful when I need to control the size of a text field, such as limiting an employee ID to a fixed or maximum number of characters.”</p>
        </blockquote>

        <h3>7. Custom Formulas</h3>

        <p>This is one of the <strong>most important advanced Data Validation concepts</strong>.</p>

        <p>The <strong>Custom</strong> option allows you to create your own validation rule using an Excel formula.</p>

        <p>Instead of choosing a predefined condition, you tell Excel:</p>

        <blockquote>
          <p>"Allow the value only if this formula evaluates to TRUE."</p>
        </blockquote>

        <h3>Example 1: Prevent Duplicate Employee IDs</h3>

        <p>Suppose employee IDs are in column A, starting from A2.</p>

        <p>You want every ID to be unique.</p>

        <p>Select:</p>

        <pre><code>A2:A100</code></pre>

        <p>Go to:</p>

        <p><strong>Data → Data Validation → Allow: Custom</strong></p>

        <p>Use:</p>

        <pre><code>=COUNTIF($A$2:$A$100,A2)=1</code></pre>

        <h3>How it works</h3>

        <p><code>COUNTIF</code> counts how many times the current value appears.</p>

        <p>If it appears once:</p>

        <pre><code>COUNTIF = 1</code></pre>

        <p>Validation:</p>

        <pre><code>1 = 1 → TRUE</code></pre>

        <p>Allowed.</p>

        <p>If it appears twice:</p>

        <pre><code>COUNTIF = 2</code></pre>

        <p>Validation:</p>

        <pre><code>2 = 1 → FALSE</code></pre>

        <p>Rejected.</p>

        <h3>Example 2: Prevent Future Dates</h3>

        <p>Suppose the date is entered in A2.</p>

        <p>Use:</p>

        <pre><code>=A2&lt;=TODAY()</code></pre>

        <p>Excel accepts the date only if it isn't in the future.</p>

        <h3>Example 3: Require Positive Sales</h3>

        <p>Suppose sales are entered in B2.</p>

        <p>Use:</p>

        <pre><code>=B2&gt;0</code></pre>

        <p>This prevents:</p>

        <pre><code>-500     ✗
        0        ✗
        500      ✓</code></pre>

        <h3>Example 4: Conditional Validation</h3>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee Type</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full-Time</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>Intern</td>
                <td>15000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You might want different minimum salary rules depending on employee type.</p>

        <p>A custom formula can implement conditional logic.</p>

        <p>For example:</p>

        <pre><code>=IF(A2="Intern",B2&gt;=5000,B2&gt;=20000)</code></pre>

        <p>This is where Custom Validation becomes much more powerful than simple dropdowns.</p>

        <h3>Interview answer</h3>

        <blockquote>
          <p>“Custom validation allows me to create validation rules using formulas. For example, I can use COUNTIF to prevent duplicate IDs, TODAY to prevent future dates, or conditional formulas when the validation rule depends on another cell.”</p>
        </blockquote>

        <h3>8. Input Messages</h3>

        <p>An <strong>Input Message</strong> provides instructions when the user selects a cell.</p>

        <p>For example, suppose you're collecting employee age.</p>

        <p>You can configure:</p>

        <p><strong>Title:</strong></p>

        <pre><code>Employee Age</code></pre>

        <p><strong>Input message:</strong></p>

        <pre><code>Enter age between 18 and 60.</code></pre>

        <p>When the user clicks the cell, Excel displays the instruction.</p>

        <h3>How to configure it</h3>

        <p>Go to:</p>

        <p><strong>Data → Data Validation → Input Message</strong></p>

        <p>Enter:</p>

        <p><strong>Title</strong></p>

        <p>and</p>

        <p><strong>Input message</strong></p>

        <h3>Why is it useful?</h3>

        <p>It tells users <strong>what they are expected to enter before they make a mistake</strong>.</p>

        <h3>Interview answer</h3>

        <blockquote>
          <p>“Input Messages provide guidance to users when they select a validated cell. They improve data-entry quality by explaining what type or range of value should be entered.”</p>
        </blockquote>

        <h3>9. Error Alerts</h3>

        <p>An <strong>Error Alert</strong> determines what Excel should do when a user enters an invalid value.</p>

        <p>Go to:</p>

        <p><strong>Data → Data Validation → Error Alert</strong></p>

        <p>There are three styles.</p>

        <h3>Stop</h3>

        <p>This is the strictest option.</p>

        <p>The invalid value is rejected.</p>

        <p>Example:</p>

        <pre><code>Age must be between 18 and 60.</code></pre>

        <p>If the user enters:</p>

        <pre><code>15</code></pre>

        <p>Excel prevents the entry.</p>

        <h4>Use when:</h4>

        <p>The data <strong>must</strong> follow the rule.</p>

        <h3>Warning</h3>

        <p>Excel warns the user but may allow them to continue.</p>

        <p>Useful when the rule is important but exceptions are possible.</p>

        <h3>Information</h3>

        <p>Excel displays an informational message but is less restrictive.</p>

        <p>Useful when you want to guide rather than strictly enforce.</p>

        <h3>Example</h3>

        <p>Suppose:</p>

        <pre><code>Age: 18–60</code></pre>

        <p>You can configure:</p>

        <p><strong>Style: Stop</strong></p>

        <p><strong>Title: Invalid Age</strong></p>

        <p><strong>Error message:</strong></p>

        <pre><code>Please enter an age between 18 and 60.</code></pre>

        <h3>Interview answer</h3>

        <blockquote>
          <p>“Error Alerts control how Excel responds when invalid data is entered. Stop prevents invalid data, Warning gives the user the option to continue, and Information provides a less restrictive notification.”</p>
        </blockquote>

        <h3>Complete Example: Employee Data Entry Form</h3>

        <p>Imagine you're building an employee data-entry sheet:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Joining Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EMP001</td>
                <td>Rahul</td>
                <td>IT</td>
                <td>25</td>
                <td>60000</td>
                <td>15-Jan-2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You can apply:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Validation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Employee ID</td>
                <td>Custom → Prevent duplicates</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>Text Length</td>
              </tr>
              <tr>
                <td>Department</td>
                <td>Dropdown List</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>Whole Number → 18–60</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>Decimal → Greater than 0</td>
              </tr>
              <tr>
                <td>Joining Date</td>
                <td>Date → Cannot be future</td>
              </tr>
              <tr>
                <td>All fields</td>
                <td>Input Message + Error Alert</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>This is a realistic example of how <strong>Data Validation improves data quality at the point of entry</strong>.</p>

        <h3>Data Validation vs Data Cleaning</h3>

        <p>This distinction is useful in interviews.</p>

        <h3>Data Validation</h3>

        <p>Prevents bad data <strong>from being entered</strong>.</p>

        <pre><code>User enters data
              ↓
        Validation rule
              ↓
        Valid → Accept
        Invalid → Reject/Warn</code></pre>

        <h3>Data Cleaning</h3>

        <p>Fixes or handles <strong>data that already exists</strong>.</p>

        <p>For example:</p>

        <pre><code>Raw data
          ↓
        Remove duplicates
          ↓
        Fix inconsistent text
          ↓
        Handle missing values
          ↓
        Correct data types</code></pre>

        <p>So:</p>

        <blockquote>
          <p><strong>Validation is mainly preventive. Cleaning is mainly corrective.</strong></p>
        </blockquote>

        <h3>Interview answer</h3>

        <blockquote>
          <p>“Data Validation is primarily a preventive technique because it restricts invalid data during data entry. Data Cleaning is corrective because it identifies and fixes problems that already exist in a dataset.”</p>
        </blockquote>

        <h3>Quick Interview Cheat Sheet</h3>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>List</strong></td>
                <td>Restrict values to predefined options</td>
                <td>IT, HR, Finance</td>
              </tr>
              <tr>
                <td><strong>Whole Number</strong></td>
                <td>Allow only integers within a rule</td>
                <td>Age 18–60</td>
              </tr>
              <tr>
                <td><strong>Decimal</strong></td>
                <td>Allow decimal values within a rule</td>
                <td>Rating 0–5</td>
              </tr>
              <tr>
                <td><strong>Date</strong></td>
                <td>Restrict dates</td>
                <td>Date ≤ Today</td>
              </tr>
              <tr>
                <td><strong>Text Length</strong></td>
                <td>Restrict number of characters</td>
                <td>ID ≤ 10 characters</td>
              </tr>
              <tr>
                <td><strong>Custom</strong></td>
                <td>Create formula-based rules</td>
                <td>Prevent duplicate IDs</td>
              </tr>
              <tr>
                <td><strong>Input Message</strong></td>
                <td>Guide users before entry</td>
                <td>"Enter age 18–60"</td>
              </tr>
              <tr>
                <td><strong>Error Alert</strong></td>
                <td>Respond to invalid input</td>
                <td>Stop invalid values</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>What you should remember for the interview</h3>

        <p>The most important concepts are:</p>

        <p><strong>Dropdown → Whole Number → Decimal → Date → Text Length → Custom Formula → Input Message → Error Alert</strong></p>

        <p>And if asked <strong>"Why is Data Validation important?"</strong>, a strong answer is:</p>

        <blockquote>
          <p><strong>“Data Validation helps maintain data quality at the point of entry by restricting users to valid values. For example, I can use dropdowns for categorical fields, numerical restrictions for quantities, date restrictions for transaction dates, and custom formulas for rules such as preventing duplicate IDs. This reduces inconsistent and invalid data before it reaches the analysis stage.”</strong></p>
        </blockquote>
      `},

      {
        id: "Power Query",
        name: "PowerQuery",
        theory: `
        <p><strong>Power Query</strong> is one of the most important Excel features for a Data Analyst, especially when working with <strong>repetitive data-cleaning and transformation tasks</strong>.</p>

        <p>It allows you to <strong>import, clean, transform, combine, and load data</strong> using a repeatable workflow.</p>

        <p>The key idea is:</p>

        <blockquote>
          <p><strong>Instead of manually cleaning the same data every month, you perform the steps once in Power Query and refresh them whenever new data arrives.</strong></p>
        </blockquote>

        <h3>1. What is Power Query?</h3>

        <p>Power Query is Excel's <strong>data extraction and transformation tool</strong>.</p>

        <p>It is mainly used for:</p>

        <ul>
          <li>Importing data from different sources</li>
          <li>Cleaning messy data</li>
          <li>Transforming data</li>
          <li>Combining multiple datasets</li>
          <li>Automating repetitive data preparation</li>
          <li>Loading the final result into Excel or a Data Model</li>
        </ul>

        <p>A typical workflow is:</p>

        <pre><code>Raw Data
          ↓
        Import
          ↓
        Clean
          ↓
        Transform
          ↓
        Combine
          ↓
        Load
          ↓
        Analysis / Pivot Table / Dashboard</code></pre>

        <p>Power Query follows a <strong>step-based transformation approach</strong>. Every transformation you perform is recorded as a step, which can be rerun when you refresh the query.</p>

        <h3>2. Where is Power Query in Excel?</h3>

        <p>Depending on your Excel version, you can access it from:</p>

        <p><strong>Data → Get &amp; Transform Data</strong></p>

        <p>Common options include:</p>

        <ul>
          <li>From Table/Range</li>
          <li>From Workbook</li>
          <li>From Text/CSV</li>
          <li>From Folder</li>
          <li>From Database</li>
          <li>From Web</li>
          <li>Other Sources</li>
        </ul>

        <p>When you open Power Query, you work inside the <strong>Power Query Editor</strong>.</p>

        <h3>Import</h3>

        <p>Power Query can import data from many sources.</p>

        <h3>3. Import from Excel</h3>

        <p>Suppose you receive:</p>

        <pre><code>Sales_January.xlsx</code></pre>

        <p>You can import it into Power Query.</p>

        <p><strong>Steps</strong></p>

        <p><strong>Data → Get Data → From File → From Excel Workbook</strong></p>

        <p>Select the workbook.</p>

        <p>Excel shows available:</p>

        <ul>
          <li>Worksheets</li>
          <li>Tables</li>
          <li>Named ranges</li>
        </ul>

        <p>Select the required data and click:</p>

        <p><strong>Transform Data</strong></p>

        <p>This opens Power Query Editor.</p>

        <p><strong>Why use it?</strong></p>

        <p>Suppose every month you receive:</p>

        <pre><code>January.xlsx
        February.xlsx
        March.xlsx
        ...</code></pre>

        <p>You can create a repeatable transformation process rather than manually cleaning each file.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Power Query can import data from Excel workbooks and then apply repeatable cleaning and transformation steps before loading the result into Excel.”</p>
        </blockquote>

        <h3>4. Import from CSV</h3>

        <p>CSV files are extremely common in analytics.</p>

        <p><strong>Example:</strong></p>

        <pre><code>customer_id,name,city,sales
        101,Rahul,Mumbai,50000
        102,Priya,Pune,60000</code></pre>

        <p><strong>Steps</strong></p>

        <p><strong>Data → Get Data → From File → From Text/CSV</strong></p>

        <p>Select the CSV file.</p>

        <p>Power Query detects:</p>

        <ul>
          <li>Columns</li>
          <li>Delimiters</li>
          <li>Data types</li>
        </ul>

        <p>Then click:</p>

        <p><strong>Transform Data</strong></p>

        <p>if you need to clean or transform the data.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I can use Power Query to import CSV files, automatically detect their structure and data types, and then apply transformations before loading them into Excel.”</p>
        </blockquote>

        <h3>5. Import from Folder</h3>

        <p>This is a <strong>very important Power Query feature for Data Analysts</strong>.</p>

        <p>Suppose you receive one sales CSV every month:</p>

        <pre><code>Sales/
          January.csv
          February.csv
          March.csv
          April.csv</code></pre>

        <p>Instead of importing each file separately, Power Query can connect to the <strong>folder</strong> and combine the files.</p>

        <p><strong>Steps</strong></p>

        <p><strong>Data → Get Data → From File → From Folder</strong></p>

        <p>Select the folder.</p>

        <p>Power Query shows the files.</p>

        <p>Select:</p>

        <p><strong>Combine &amp; Transform Data</strong></p>

        <p>Power Query can combine files that have the same or compatible structure.</p>

        <p><strong>Why this is powerful</strong></p>

        <p>Next month:</p>

        <pre><code>May.csv</code></pre>

        <p>is added to the folder.</p>

        <p>After refreshing the query, Power Query can include the new file automatically, assuming the structure is compatible.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I use the Folder connector when I receive multiple files with the same structure, such as monthly sales CSVs. Power Query can combine them into one dataset and apply the same transformation steps to all files, which makes recurring reporting much easier.”</p>
        </blockquote>

        <h3>6. Import from Database</h3>

        <p>Power Query can connect to databases such as:</p>

        <ul>
          <li>SQL Server</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>Oracle</li>
          <li>Other supported databases</li>
        </ul>

        <p>For example:</p>

        <p><strong>Data → Get Data → From Database</strong></p>

        <p>Then select the appropriate database connector.</p>

        <p>You provide the connection information and select the required tables or queries.</p>

        <p><strong>Why use it?</strong></p>

        <p>Instead of exporting database data to Excel manually every month, Power Query can maintain a connection to the source and refresh the data.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Power Query can connect directly to databases, allowing me to retrieve data, transform it, and load the required result into Excel without manually exporting and cleaning the data every time.”</p>
        </blockquote>

        <h3>Cleaning Data with Power Query</h3>

        <p>Power Query is particularly strong at repeatable data cleaning.</p>

        <h3>7. Remove Duplicates</h3>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>Rahul</td>
              </tr>
              <tr>
                <td>102</td>
                <td>Priya</td>
              </tr>
              <tr>
                <td>101</td>
                <td>Rahul</td>
              </tr>
              <tr>
                <td>103</td>
                <td>Amit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You want unique records.</p>

        <p><strong>Steps</strong></p>

        <p>Select the relevant columns.</p>

        <p><strong>Home → Remove Rows → Remove Duplicates</strong></p>

        <p>Power Query records this as a transformation step.</p>

        <p><strong>Important point</strong></p>

        <p>Be careful about <strong>which columns you select</strong>.</p>

        <p>If you select only <code>Customer ID</code>, Power Query identifies duplicates based on Customer ID.</p>

        <p>If you select multiple columns, duplicates are determined based on the combination of those columns.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I can remove duplicate records in Power Query by selecting the relevant columns and using Remove Duplicates. I make sure I choose the correct columns because the definition of a duplicate depends on the business key.”</p>
        </blockquote>

        <h3>8. Remove Errors</h3>

        <p>Sometimes a column contains errors such as:</p>

        <pre><code>Error</code></pre>

        <p>This can happen because of:</p>

        <ul>
          <li>Invalid data type conversion</li>
          <li>Invalid calculations</li>
          <li>Unexpected values</li>
          <li>Transformation problems</li>
        </ul>

        <p><strong>Steps</strong></p>

        <p>Select the column.</p>

        <p><strong>Home → Remove Rows → Remove Errors</strong></p>

        <p>Or right-click the column and select:</p>

        <p><strong>Remove Errors</strong></p>

        <p><strong>Important analyst point</strong></p>

        <p>Don't automatically delete errors.</p>

        <p>First understand <strong>why the errors occurred</strong>.</p>

        <p>For example:</p>

        <pre><code>"ABC"</code></pre>

        <p>in a column expected to contain numbers might indicate a data-quality problem.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Power Query allows me to remove error rows, but I wouldn't blindly delete them. I would first investigate the cause because an error could indicate a genuine data-quality issue.”</p>
        </blockquote>

        <h3>9. Replace Values</h3>

        <p>Suppose your dataset contains:</p>

        <pre><code>Mumbai
        Bombay
        Mumbai
        MUMBAI</code></pre>

        <p>You want to standardize them.</p>

        <p><strong>Steps</strong></p>

        <p>Select the column:</p>

        <p><strong>Transform → Replace Values</strong></p>

        <p>For example:</p>

        <pre><code>Value to find: Bombay
        Replace with: Mumbai</code></pre>

        <p>You can perform multiple replacements if needed.</p>

        <p><strong>Use cases</strong></p>

        <ul>
          <li>Correct spelling</li>
          <li>Standardize categories</li>
          <li>Replace obsolete values</li>
          <li>Replace placeholders</li>
        </ul>

        <p>Example:</p>

        <pre><code>N/A
        NA
        -</code></pre>

        <p>could potentially be standardized to a missing/null value, depending on your analysis requirements.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I use Replace Values when I need to standardize or correct specific values in a column. Because the replacement is recorded as a query step, it can be repeated automatically during future refreshes.”</p>
        </blockquote>

        <h3>10. Fill Missing Values</h3>

        <p>Power Query can fill values <strong>down</strong> or <strong>up</strong>.</p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>null</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>null</td>
                <td>70000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>40000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The blank Region values may be intended to belong to North.</p>

        <p>You can use:</p>

        <p><strong>Transform → Fill → Down</strong></p>

        <p>Result:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>North</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>North</td>
                <td>70000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>40000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Important warning</strong></p>

        <p><strong>Fill Down is not the same as general missing-value imputation.</strong></p>

        <p>You should only use it when the data structure logically indicates that the missing values inherit the previous value.</p>

        <p>Don't blindly fill every null with the previous value.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Power Query can fill missing values up or down. Fill Down is particularly useful when hierarchical or grouped data has a value specified only on the first row of a group. I would use it only when the business logic supports carrying the value forward.”</p>
        </blockquote>

        <h3>11. Change Data Types</h3>

        <p>This is one of the <strong>most important Power Query concepts</strong>.</p>

        <p>Columns should have appropriate data types:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Column</th>
                <th>Data Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customer ID</td>
                <td>Whole Number</td>
              </tr>
              <tr>
                <td>Revenue</td>
                <td>Decimal Number</td>
              </tr>
              <tr>
                <td>Order Date</td>
                <td>Date</td>
              </tr>
              <tr>
                <td>Customer Name</td>
                <td>Text</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>Whole Number</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>How to change</strong></p>

        <p>Select the column.</p>

        <p>Go to:</p>

        <p><strong>Transform → Data Type</strong></p>

        <p>Choose:</p>

        <ul>
          <li>Text</li>
          <li>Whole Number</li>
          <li>Decimal Number</li>
          <li>Date</li>
          <li>Date/Time</li>
          <li>Percentage</li>
          <li>Currency</li>
          <li>etc.</li>
        </ul>

        <p><strong>Why important?</strong></p>

        <p>Incorrect data types can cause:</p>

        <ul>
          <li>Calculation errors</li>
          <li>Incorrect sorting</li>
          <li>Failed joins</li>
          <li>Incorrect date grouping</li>
          <li>Transformation errors</li>
        </ul>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I always check and correct data types during data preparation because transformations and analysis depend on the correct type. For example, a transaction date should be a Date type and revenue should be numeric rather than text.”</p>
        </blockquote>

        <h3>12. Split Columns</h3>

        <p>Suppose you have:</p>

        <pre><code>Full Name</code></pre>

        <p>containing:</p>

        <pre><code>Rahul Patil
        Priya Shah
        Amit Joshi</code></pre>

        <p>You want:</p>

        <pre><code>First Name | Last Name</code></pre>

        <p><strong>Steps</strong></p>

        <p>Select the column.</p>

        <p><strong>Transform → Split Column</strong></p>

        <p>You can split by:</p>

        <ul>
          <li>Delimiter</li>
          <li>Number of characters</li>
          <li>Position</li>
          <li>Other available options</li>
        </ul>

        <p>For names:</p>

        <p><strong>Split by Delimiter → Space</strong></p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I use Split Column when multiple pieces of information are stored in one column. For example, I can split a full name into first and last name using a space delimiter.”</p>
        </blockquote>

        <h3>13. Merge Columns</h3>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul</td>
                <td>Patil</td>
              </tr>
              <tr>
                <td>Priya</td>
                <td>Shah</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You want:</p>

        <pre><code>Full Name</code></pre>

        <p><strong>Steps</strong></p>

        <p>Select the columns.</p>

        <p><strong>Transform → Merge Columns</strong></p>

        <p>Choose the separator:</p>

        <pre><code>Space</code></pre>

        <p>Result:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rahul Patil</td>
              </tr>
              <tr>
                <td>Priya Shah</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Important distinction</strong></p>

        <p>There are <strong>two different meanings of "Merge" in Power Query</strong>:</p>

        <p><strong>Merge Columns</strong> → combine columns within the same table.</p>

        <p><strong>Merge Queries</strong> → join two different tables.</p>

        <p>Don't confuse them in an interview.</p>

        <h3>Transformation</h3>

        <p>Now we move beyond basic cleaning.</p>

        <h3>14. Filter Rows</h3>

        <p>Power Query can filter rows based on conditions.</p>

        <p>For example:</p>

        <pre><code>Revenue &gt; 50000</code></pre>

        <p><strong>Steps</strong></p>

        <p>Click the filter dropdown on the column.</p>

        <p>Choose:</p>

        <p><strong>Number Filters → Greater Than</strong></p>

        <p>Enter:</p>

        <pre><code>50000</code></pre>

        <p>You can also filter by:</p>

        <ul>
          <li>Text</li>
          <li>Date</li>
          <li>Number</li>
          <li>Blank/null</li>
          <li>Multiple conditions</li>
        </ul>

        <p><strong>Important difference from Excel Filter</strong></p>

        <p>A normal Excel filter generally changes <strong>what is displayed</strong>.</p>

        <p>A Power Query filter is a <strong>transformation step</strong> that determines what data gets loaded from the query.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I use Power Query filters to remove or retain records based on business conditions. Unlike a normal worksheet filter, the filtering operation becomes part of the query transformation process and is repeated whenever the query is refreshed.”</p>
        </blockquote>

        <h3>15. Group By</h3>

        <p><strong>Group By</strong> is used to aggregate data based on one or more columns.</p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>North</td>
                <td>30000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>40000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Group by:</p>

        <pre><code>Region</code></pre>

        <p>and calculate:</p>

        <pre><code>Sum of Revenue</code></pre>

        <p>Result:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Total Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>80000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>100000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Available operations include</strong></p>

        <ul>
          <li>Sum</li>
          <li>Average</li>
          <li>Median</li>
          <li>Min</li>
          <li>Max</li>
          <li>Count Rows</li>
          <li>Count Distinct Rows</li>
          <li>etc.</li>
        </ul>

        <p><strong>How to do it</strong></p>

        <p><strong>Home → Group By</strong></p>

        <p>Choose:</p>

        <pre><code>Group by: Region
        Operation: Sum
        Column: Revenue</code></pre>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Group By allows me to aggregate records based on one or more columns. For example, I can group sales by region and calculate total revenue for each region.”</p>
        </blockquote>

        <h3>16. Pivot</h3>

        <p>Power Query's <strong>Pivot Column</strong> transformation converts values from rows into separate columns.</p>

        <p>Suppose:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Month</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>Jan</td>
                <td>100</td>
              </tr>
              <tr>
                <td>North</td>
                <td>Feb</td>
                <td>200</td>
              </tr>
              <tr>
                <td>South</td>
                <td>Jan</td>
                <td>150</td>
              </tr>
              <tr>
                <td>South</td>
                <td>Feb</td>
                <td>250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>After pivoting Month:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Jan</th>
                <th>Feb</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>100</td>
                <td>200</td>
              </tr>
              <tr>
                <td>South</td>
                <td>150</td>
                <td>250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Steps</strong></p>

        <p>Select the column you want to turn into columns:</p>

        <p><strong>Transform → Pivot Column</strong></p>

        <p>Select the values column for aggregation if necessary.</p>

        <p><strong>Use case</strong></p>

        <p>Turning <strong>long-format data into a wider format</strong>.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Pivot in Power Query transforms unique values from a column into separate columns. It's useful when I need to reshape long-format data into a wider format.”</p>
        </blockquote>

        <h3>17. Unpivot</h3>

        <p>Unpivot does the opposite.</p>

        <p>Suppose you have:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>100</td>
                <td>200</td>
                <td>300</td>
              </tr>
              <tr>
                <td>South</td>
                <td>150</td>
                <td>250</td>
                <td>350</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>This is wide-format data.</p>

        <p>Select:</p>

        <pre><code>Jan
        Feb
        Mar</code></pre>

        <p>Then:</p>

        <p><strong>Transform → Unpivot Columns</strong></p>

        <p>Result:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Attribute</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>Jan</td>
                <td>100</td>
              </tr>
              <tr>
                <td>North</td>
                <td>Feb</td>
                <td>200</td>
              </tr>
              <tr>
                <td>North</td>
                <td>Mar</td>
                <td>300</td>
              </tr>
              <tr>
                <td>South</td>
                <td>Jan</td>
                <td>150</td>
              </tr>
              <tr>
                <td>South</td>
                <td>Feb</td>
                <td>250</td>
              </tr>
              <tr>
                <td>South</td>
                <td>Mar</td>
                <td>350</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You can rename:</p>

        <pre><code>Attribute → Month
        Value → Sales</code></pre>

        <p><strong>Why is Unpivot important?</strong></p>

        <p>This is <strong>extremely useful in analytics</strong> because many analytical tools work better with normalized/long-format data.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Unpivot converts columns into rows. I use it when data is stored in a wide format but I need a normalized structure for analysis. For example, I can convert Jan, Feb, and Mar columns into a single Month column and a Sales column.”</p>
        </blockquote>

        <h3>Pivot vs Unpivot</h3>

        <p>Remember:</p>

        <pre><code>PIVOT
        Rows → Columns

        UNPIVOT
        Columns → Rows</code></pre>

        <p><strong>Simple example</strong></p>

        <p>Before:</p>

        <pre><code>Region | Jan | Feb
        North  | 100 | 200</code></pre>

        <p>Unpivot:</p>

        <pre><code>Region | Month | Sales
        North  | Jan   | 100
        North  | Feb   | 200</code></pre>

        <h3>18. Merge Queries</h3>

        <p><strong>Merge Queries means joining two tables together.</strong></p>

        <p>Suppose you have:</p>

        <p><strong>Sales</strong></p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P101</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>P102</td>
                <td>30000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Products</strong></p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P101</td>
                <td>Laptop</td>
                <td>Electronics</td>
              </tr>
              <tr>
                <td>P102</td>
                <td>Mouse</td>
                <td>Accessories</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You want to add Product Name and Category to Sales.</p>

        <p>You can use:</p>

        <p><strong>Home → Merge Queries</strong></p>

        <p>Select:</p>

        <pre><code>Sales.Product ID</code></pre>

        <p>and:</p>

        <pre><code>Products.Product ID</code></pre>

        <p>Then choose the join type.</p>

        <p><strong>Common Join Types</strong></p>

        <p>Power Query supports join types such as:</p>

        <ul>
          <li>Left Outer</li>
          <li>Right Outer</li>
          <li>Full Outer</li>
          <li>Inner</li>
          <li>Left Anti</li>
          <li>Right Anti</li>
        </ul>

        <p>This is closely related to SQL JOINs.</p>

        <p><strong>Left Outer</strong></p>

        <p>Keep all records from the first table and matching records from the second.</p>

        <p>Equivalent concept:</p>

        <pre><code>SELECT *
        FROM Sales s
        LEFT JOIN Products p
        ON s.Product_ID = p.Product_ID;</code></pre>

        <p><strong>Inner</strong></p>

        <p>Keep only matching records.</p>

        <pre><code>SELECT *
        FROM Sales s
        INNER JOIN Products p
        ON s.Product_ID = p.Product_ID;</code></pre>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Merge Queries is used to join two tables based on one or more matching columns, similar to SQL JOINs. For example, I can merge a Sales table with a Product table using Product ID to bring product details into the sales data.”</p>
        </blockquote>

        <h3>19. Append Queries</h3>

        <p><strong>Append Queries means stacking tables vertically.</strong></p>

        <p>Suppose:</p>

        <p><strong>January</strong></p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laptop</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>10000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>February</strong></p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laptop</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>12000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Append them:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laptop</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>10000</td>
              </tr>
              <tr>
                <td>Laptop</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>12000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Think of it as:</strong></p>

        <pre><code>Table A
          ↓
        Table B
          ↓
        Table C
          ↓
        One combined table</code></pre>

        <p><strong>How to do it</strong></p>

        <p><strong>Home → Append Queries</strong></p>

        <p>Select:</p>

        <ul>
          <li>Two tables, or</li>
          <li>Three or more tables</li>
        </ul>

        <p><strong>Merge vs Append</strong></p>

        <p>This is a <strong>very common interview question</strong>.</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Merge</th>
                <th>Append</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Combines tables horizontally</td>
                <td>Combines tables vertically</td>
              </tr>
              <tr>
                <td>Similar to SQL JOIN</td>
                <td>Similar to stacking rows</td>
              </tr>
              <tr>
                <td>Uses matching key columns</td>
                <td>Usually requires similar column structures</td>
              </tr>
              <tr>
                <td>Adds columns</td>
                <td>Adds rows</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Easy way to remember</strong></p>

        <pre><code>MERGE = JOIN → adds columns
        APPEND = UNION-like → adds rows</code></pre>

        <p>Strictly speaking, SQL <code>UNION</code> has specific column/order/type requirements, so don't claim Power Query Append is identical to SQL UNION in every detail.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Merge combines tables horizontally based on matching keys, similar to a SQL JOIN, while Append stacks tables vertically and adds rows. For example, I would merge Sales with Product details, but append January and February sales tables.”</p>
        </blockquote>

        <h3>ETL</h3>

        <p>This is one of the <strong>most important concepts to understand for interviews</strong>.</p>

        <p><strong>What is ETL?</strong></p>

        <p><strong>ETL = Extract → Transform → Load</strong></p>

        <p><strong>E — Extract</strong></p>

        <p>Get data from a source.</p>

        <p>Examples:</p>

        <pre><code>Excel
        CSV
        Database
        API
        Folder</code></pre>

        <p>Power Query performs this part when you connect to a data source.</p>

        <p><strong>T — Transform</strong></p>

        <p>Clean and prepare the data.</p>

        <p>Examples:</p>

        <pre><code>Remove duplicates
        Change data types
        Replace values
        Filter rows
        Split columns
        Merge columns
        Group By
        Pivot
        Unpivot
        Merge Queries
        Append Queries</code></pre>

        <p><strong>L — Load</strong></p>

        <p>Send the transformed data to a destination.</p>

        <p>In Excel, you can load it into:</p>

        <ul>
          <li>Worksheet</li>
          <li>Excel Table</li>
          <li>Pivot Table</li>
          <li>Data Model</li>
        </ul>

        <p><strong>ETL Flow</strong></p>

        <pre><code>Excel / CSV / Database
                  ↓
              EXTRACT
                  ↓
              TRANSFORM
                  ↓
          Clean + Reshape + Combine
                  ↓
                LOAD
                  ↓
        Excel / Data Model
                  ↓
        Analysis / Dashboard</code></pre>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“ETL stands for Extract, Transform, and Load. Extract means obtaining data from sources such as Excel, CSV files, or databases. Transform means cleaning and reshaping the data, such as removing duplicates, changing data types, filtering, or joining tables. Load means putting the transformed data into the destination, such as an Excel worksheet or data model. Power Query is commonly used in Excel to perform these ETL tasks.”</p>
        </blockquote>

        <h3>Why Power Query Is Better Than Repeating 20 Excel Steps Every Month</h3>

        <p>This is probably the <strong>most important practical question</strong> from this topic.</p>

        <p>Imagine every month you receive a raw sales file.</p>

        <p>Your manual process is:</p>

        <pre><code>Open file
        ↓
        Remove duplicates
        ↓
        Fix column names
        ↓
        Remove errors
        ↓
        Replace values
        ↓
        Change date format
        ↓
        Change number format
        ↓
        Split column
        ↓
        Remove unwanted rows
        ↓
        Filter data
        ↓
        Combine datasets
        ↓
        Create summary
        ...</code></pre>

        <p>Maybe <strong>20 steps</strong>.</p>

        <p>Next month, you repeat all 20 steps.</p>

        <p>That's a terrible workflow.</p>

        <p><strong>With Power Query</strong></p>

        <p>You perform those transformations <strong>once</strong>.</p>

        <p>Power Query records them as steps:</p>

        <pre><code>Source
        ↓
        Changed Type
        ↓
        Removed Duplicates
        ↓
        Replaced Values
        ↓
        Split Column
        ↓
        Filtered Rows
        ↓
        Merged Queries
        ↓
        Removed Errors
        ↓
        Final Dataset</code></pre>

        <p>Next month:</p>

        <pre><code>New Raw File
              ↓
          Refresh
              ↓
        Same transformation steps
              ↓
        Clean Dataset</code></pre>

        <p>You don't manually repeat the 20 operations.</p>

        <h3>Why This Matters for a Data Analyst</h3>

        <p><strong>1. Saves time</strong></p>

        <p>Instead of manually repeating the process every month, you refresh the query.</p>

        <p><strong>2. Reduces human error</strong></p>

        <p>Manual repetitive processes are prone to mistakes.</p>

        <p>For example, you might accidentally:</p>

        <ul>
          <li>Filter the wrong value</li>
          <li>Forget to remove duplicates</li>
          <li>Miss a column</li>
          <li>Apply a transformation to only part of the data</li>
        </ul>

        <p>Power Query follows the recorded transformation steps consistently.</p>

        <p><strong>3. Makes the process reproducible</strong></p>

        <p>Someone else can open the workbook and inspect the transformation steps.</p>

        <p><strong>4. Easier maintenance</strong></p>

        <p>If the business rule changes, you modify the query step rather than manually changing dozens of operations.</p>

        <p><strong>5. Handles multiple files</strong></p>

        <p>The Folder connector can combine recurring files automatically.</p>

        <p><strong>6. Separates data preparation from analysis</strong></p>

        <p>Instead of putting dozens of formulas into your worksheet, you can prepare a clean dataset first and then build:</p>

        <ul>
          <li>Pivot Tables</li>
          <li>Charts</li>
          <li>Dashboards</li>
          <li>Reports</li>
        </ul>

        <p>on top of it.</p>

        <h3>A Realistic Interview Example</h3>

        <p><strong>Interviewer:</strong></p>

        <blockquote>
          <p>"Suppose every month I give you a CSV containing 100,000 sales records. You need to clean it using 20 steps and create a report. Would you manually repeat those steps every month?"</p>
        </blockquote>

        <p>A strong answer:</p>

        <blockquote>
          <p><strong>“No. If the structure of the files is consistent, I would use Power Query. I would perform the 20 cleaning and transformation steps once, and Power Query would record those steps. For subsequent months, I could replace or add the new source data and refresh the query. Power Query would rerun the same transformations automatically. This reduces manual effort, makes the process more consistent, and minimizes the risk of human errors.”</strong></p>
        </blockquote>

        <h3>Power Query vs Excel Formulas</h3>

        <p>This is also worth knowing.</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Power Query</th>
                <th>Excel Formulas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Designed for data import and transformation</td>
                <td>Designed primarily for calculations</td>
              </tr>
              <tr>
                <td>Steps are recorded and repeatable</td>
                <td>Formulas need to be maintained across ranges</td>
              </tr>
              <tr>
                <td>Excellent for cleaning large datasets</td>
                <td>Good for cell-level calculations</td>
              </tr>
              <tr>
                <td>Can combine files</td>
                <td>Can reference other cells/files</td>
              </tr>
              <tr>
                <td>Can connect to databases</td>
                <td>Can retrieve data through certain functions/connections</td>
              </tr>
              <tr>
                <td>Great for ETL</td>
                <td>Great for calculations and reporting</td>
              </tr>
              <tr>
                <td>Refresh-based workflow</td>
                <td>Usually recalculates automatically</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Important nuance</strong></p>

        <p>Don't say:</p>

        <blockquote>
          <p>"Power Query completely replaces formulas."</p>
        </blockquote>

        <p>That's wrong.</p>

        <p>A Data Analyst may use:</p>

        <pre><code>Power Query
            ↓
        Clean/Transform
            ↓
        Excel formulas
            ↓
        Pivot Tables
            ↓
        Charts/Dashboard</code></pre>

        <p>They complement each other.</p>

        <h3>Power Query vs Pivot Table</h3>

        <p>They solve different problems.</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Power Query</th>
                <th>Pivot Table</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cleans and transforms data</td>
                <td>Summarizes/analyzes data</td>
              </tr>
              <tr>
                <td>ETL tool</td>
                <td>Analysis/reporting tool</td>
              </tr>
              <tr>
                <td>Removes duplicates</td>
                <td>Aggregates data</td>
              </tr>
              <tr>
                <td>Changes data types</td>
                <td>Sum/Count/Average</td>
              </tr>
              <tr>
                <td>Merges/Append tables</td>
                <td>Groups and summarizes</td>
              </tr>
              <tr>
                <td>Unpivot/Pivot data</td>
                <td>Shows summaries</td>
              </tr>
              <tr>
                <td>Produces a clean dataset</td>
                <td>Produces analytical reports</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Simple workflow</strong></p>

        <pre><code>Raw Data
          ↓
        Power Query
          ↓
        Clean Data
          ↓
        Pivot Table
          ↓
        Report/Dashboard</code></pre>

        <p>This is a very realistic Excel Data Analyst workflow.</p>
      `},

      {
        id: "ExcelTables",
        name: "Excel Tables",
        theory: `
        <p>An <strong>Excel Table</strong> is a structured range of data that Excel treats as a single data object.</p>

        <p>For a Data Analyst, Excel Tables are useful because they make datasets <strong>easier to manage, filter, reference, expand, and use as sources for Pivot Tables and Power Query</strong>.</p>

        <p>Instead of treating data as something like:</p>

        <pre><code>A1:E500</code></pre>

        <p>Excel Table gives the dataset a name and structured columns.</p>

        <h3>1. Create Table</h3>

        <p>Suppose you have raw sales data:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Region</th>
                <th>Product</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>01-Jan-26</td>
                <td>North</td>
                <td>Laptop</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>102</td>
                <td>05-Jan-26</td>
                <td>South</td>
                <td>Mouse</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>103</td>
                <td>10-Jan-26</td>
                <td>West</td>
                <td>Keyboard</td>
                <td>8000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>How to create a Table</strong></p>

        <ol>
          <li>Select any cell inside the dataset.</li>
          <li>Press:</li>
        </ol>

        <pre><code>Ctrl + T</code></pre>

        <ol start="3">
          <li>Excel identifies the data range.</li>
          <li>Check <strong>My table has headers</strong>.</li>
          <li>Click <strong>OK</strong>.</li>
        </ol>

        <p>You can also use:</p>

        <p><strong>Insert → Table</strong></p>

        <p><strong>What happens after creating the Table?</strong></p>

        <p>Excel automatically provides:</p>

        <ul>
          <li>Filter dropdowns</li>
          <li>Table formatting</li>
          <li>Automatic expansion</li>
          <li>Structured references</li>
          <li>Calculated columns</li>
          <li>Table name</li>
        </ul>

        <p>For example, Excel may name the table:</p>

        <pre><code>Table1</code></pre>

        <p>You can rename it from:</p>

        <p><strong>Table Design → Table Name</strong></p>

        <p>For example:</p>

        <pre><code>SalesData</code></pre>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“I create an Excel Table using Ctrl+T when I want Excel to treat a dataset as a structured data range. Tables provide automatic filtering, structured references, calculated columns, and automatic expansion, which makes them useful for recurring analysis.”</p>
        </blockquote>

        <h3>2. Structured References</h3>

        <p>This is one of the most important features of Excel Tables.</p>

        <p>Normally, you might write:</p>

        <pre><code>=SUM(E2:E100)</code></pre>

        <p>If <code>E</code> contains Revenue.</p>

        <p>But if your table is called <code>SalesData</code>, you can use:</p>

        <pre><code>=SUM(SalesData[Revenue])</code></pre>

        <p>This is called a <strong>structured reference</strong>.</p>

        <p>Instead of referring to cells by coordinates, you refer to:</p>

        <ul>
          <li>Table name</li>
          <li>Column name</li>
        </ul>

        <p><strong>Example</strong></p>

        <p>Suppose your table is:</p>

        <pre><code>SalesData</code></pre>

        <p>and has:</p>

        <pre><code>Order ID
        Date
        Region
        Product
        Revenue</code></pre>

        <p>To calculate total revenue:</p>

        <pre><code>=SUM(SalesData[Revenue])</code></pre>

        <p>To calculate average revenue:</p>

        <pre><code>=AVERAGE(SalesData[Revenue])</code></pre>

        <p>To count orders:</p>

        <pre><code>=COUNTA(SalesData[Order ID])</code></pre>

        <p><strong>Why are structured references useful?</strong></p>

        <p><strong>Easier to understand</strong></p>

        <p>Compare:</p>

        <pre><code>=SUM(E2:E5000)</code></pre>

        <p>with:</p>

        <pre><code>=SUM(SalesData[Revenue])</code></pre>

        <p>The second one is much clearer.</p>

        <p><strong>Automatically adjust</strong></p>

        <p>If new rows are added to the Table, the reference automatically expands.</p>

        <p><strong>Reduce hard-coded ranges</strong></p>

        <p>You don't have to keep changing:</p>

        <pre><code>E2:E500</code></pre>

        <p>to:</p>

        <pre><code>E2:E1000</code></pre>

        <p>when the dataset grows.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Structured references allow me to refer to Table columns by their names instead of cell ranges. For example, instead of SUM(E2:E1000), I can use SUM(SalesData[Revenue]). They're easier to read and automatically adjust when the Table expands.”</p>
        </blockquote>

        <h3>3. Calculated Columns</h3>

        <p>A <strong>calculated column</strong> automatically applies the same formula to every row in an Excel Table.</p>

        <p>Suppose your table contains:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Revenue</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laptop</td>
                <td>100000</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>20000</td>
                <td>12000</td>
              </tr>
              <tr>
                <td>Keyboard</td>
                <td>30000</td>
                <td>18000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>You want:</p>

        <pre><code>Profit = Revenue - Cost</code></pre>

        <p>Add a new column:</p>

        <pre><code>Profit</code></pre>

        <p>In the first row, enter:</p>

        <pre><code>=[@Revenue]-[@Cost]</code></pre>

        <p>Excel automatically fills the formula down the entire Table.</p>

        <p>Result:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Revenue</th>
                <th>Cost</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laptop</td>
                <td>100000</td>
                <td>60000</td>
                <td>40000</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>20000</td>
                <td>12000</td>
                <td>8000</td>
              </tr>
              <tr>
                <td>Keyboard</td>
                <td>30000</td>
                <td>18000</td>
                <td>12000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>What does <code>[@Revenue]</code> mean?</strong></p>

        <p>Inside a Table:</p>

        <pre><code>[@Revenue]</code></pre>

        <p>means:</p>

        <p>Revenue value from the <strong>current row</strong>.</p>

        <p>Similarly:</p>

        <pre><code>[@Cost]</code></pre>

        <p>means:</p>

        <p>Cost value from the current row.</p>

        <p>Therefore:</p>

        <pre><code>=[@Revenue]-[@Cost]</code></pre>

        <p>means:</p>

        <p>Revenue of this row minus Cost of this row.</p>

        <p><strong>Another example</strong></p>

        <p>Suppose you want:</p>

        <pre><code>Total = Quantity × Price</code></pre>

        <p>Use:</p>

        <pre><code>=[@Quantity]*[@Price]</code></pre>

        <p>Excel automatically fills the entire column.</p>

        <p><strong>Why calculated columns are useful</strong></p>

        <p>Without a Table, you might have to:</p>

        <ol>
          <li>Write a formula in one cell.</li>
          <li>Drag it down.</li>
          <li>Extend it when new rows are added.</li>
        </ol>

        <p>With a Table, Excel automatically applies the formula to new rows.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“A calculated column is a Table column where one formula is automatically applied to all rows. For example, if I have Revenue and Cost columns, I can create a Profit column using <code>=[@Revenue]-[@Cost]</code>, and Excel automatically fills the formula for the entire Table and new rows.”</p>
        </blockquote>

        <h3>4. Table Filters</h3>

        <p>Excel Tables automatically provide filter dropdowns in their headers.</p>

        <p>For example:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Region ▼</th>
                <th>Product ▼</th>
                <th>Revenue ▼</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North</td>
                <td>Laptop</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>South</td>
                <td>Mouse</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>North</td>
                <td>Keyboard</td>
                <td>8000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Clicking the dropdown allows you to filter.</p>

        <p>You can filter by:</p>

        <ul>
          <li>Text</li>
          <li>Number</li>
          <li>Date</li>
          <li>Color</li>
          <li>Multiple conditions</li>
        </ul>

        <p><strong>Example</strong></p>

        <p>Click:</p>

        <p><strong>Region ▼ → North</strong></p>

        <p>Excel displays only North records.</p>

        <p>You can also combine filters.</p>

        <p>For example:</p>

        <pre><code>Region = North
        AND
        Revenue &gt; 50000</code></pre>

        <p><strong>Important point</strong></p>

        <p>Filtering a Table <strong>doesn't delete the records</strong>.</p>

        <p>It temporarily hides rows that don't satisfy the condition.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“Excel Tables automatically provide filter dropdowns, allowing me to filter the dataset by text, numbers, dates, colors, or multiple conditions without manually creating a filter range.”</p>
        </blockquote>

        <h3>5. Table Expansion</h3>

        <p>This is one of the biggest advantages of Excel Tables.</p>

        <p>Suppose your Table currently contains:</p>

        <pre><code>Rows 2–100</code></pre>

        <p>You enter a new record immediately below it:</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Region</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>North</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
              <tr>
                <td>100</td>
                <td>South</td>
                <td>40000</td>
              </tr>
              <tr>
                <td><strong>101</strong></td>
                <td><strong>West</strong></td>
                <td><strong>60000</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Excel automatically expands the Table to include the new row.</p>

        <p><strong>What gets expanded?</strong></p>

        <p>Usually, Excel automatically carries over:</p>

        <ul>
          <li>Table formatting</li>
          <li>Formulas/calculated columns</li>
          <li>Filters</li>
          <li>Structured references</li>
        </ul>

        <p><strong>Why is this important?</strong></p>

        <p>Imagine you have:</p>

        <pre><code>SalesData</code></pre>

        <p>and a formula:</p>

        <pre><code>=SUM(SalesData[Revenue])</code></pre>

        <p>If new records are added to the Table, the structured reference automatically includes them.</p>

        <p>You don't need to manually change:</p>

        <pre><code>=SUM(E2:E100)</code></pre>

        <p>to:</p>

        <pre><code>=SUM(E2:E101)</code></pre>

        <p><strong>Table expansion and Pivot Tables</strong></p>

        <p>There's an important distinction here:</p>

        <blockquote>
          <p><strong>The Table expands automatically, but the Pivot Table still generally needs to be refreshed to reflect the new data.</strong></p>
        </blockquote>

        <p>This is a common interview trap.</p>

        <p><strong>Interview answer</strong></p>

        <blockquote>
          <p>“An Excel Table automatically expands when new records are added, and formulas and structured references adjust accordingly. If the Table is used as a Pivot Table source, I still need to refresh the Pivot Table to update its results.”</p>
        </blockquote>

        <h3>6. Using Tables as Pivot Table Sources</h3>

        <p>This is particularly important for <strong>recurring reports</strong>.</p>

        <p>Suppose your raw data is stored in:</p>

        <pre><code>SalesData</code></pre>

        <p>as an Excel Table.</p>

        <p>You can create a Pivot Table using it as the source.</p>

        <p><strong>Steps</strong></p>

        <ol>
          <li>Click anywhere inside the Table.</li>
          <li>Go to: <strong>Insert → PivotTable</strong></li>
          <li>Excel automatically recognizes the Table.</li>
          <li>Select where to place the Pivot Table.</li>
          <li>Click <strong>OK</strong>.</li>
        </ol>

        <p>Now configure your Pivot Table.</p>

        <p>For example:</p>

        <pre><code>Region → Rows
        Date → Columns
        Revenue → Values</code></pre>

        <p><strong>Why is using a Table better than a normal range?</strong></p>

        <p>Suppose your source is:</p>

        <pre><code>A1:E1000</code></pre>

        <p>Next month, there are 1500 records.</p>

        <p>If your Pivot Table source is a fixed range:</p>

        <pre><code>A1:E1000</code></pre>

        <p>the new 500 records aren't automatically part of that source.</p>

        <p>But if the source is:</p>

        <pre><code>SalesData</code></pre>

        <p>and you add the new records to the Table, the Table expands.</p>

        <p>After refreshing the Pivot Table, the new records are included.</p>

        <h3>Practical Example</h3>

        <p>Suppose you receive monthly sales data.</p>

        <p><strong>January</strong></p>

        <pre><code>1000 rows</code></pre>

        <p><strong>February</strong></p>

        <pre><code>1500 rows</code></pre>

        <p><strong>March</strong></p>

        <pre><code>2000 rows</code></pre>

        <p>A good workflow is:</p>

        <pre><code>Raw Sales Data
              ↓
        Excel Table
              ↓
        SalesData
              ↓
        Power Query / Pivot Table
              ↓
        Monthly Report</code></pre>

        <p>Instead of constantly changing source ranges.</p>

        <h3>Excel Table vs Normal Range</h3>

        <p>This is a useful interview question.</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Excel Table</th>
                <th>Normal Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Structured data object</td>
                <td>Basic cell range</td>
              </tr>
              <tr>
                <td>Automatic filters</td>
                <td>Filters must be applied manually</td>
              </tr>
              <tr>
                <td>Structured references</td>
                <td>Cell references like A1:A100</td>
              </tr>
              <tr>
                <td>Automatically expands</td>
                <td>Doesn't automatically behave as a Table</td>
              </tr>
              <tr>
                <td>Calculated columns</td>
                <td>Formulas usually need to be copied</td>
              </tr>
              <tr>
                <td>Good for Pivot Table sources</td>
                <td>Can be used but fixed ranges can be inconvenient</td>
              </tr>
              <tr>
                <td>Better for recurring datasets</td>
                <td>Better for simple/static data</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Excel Table vs Pivot Table</h3>

        <p>Don't confuse these two.</p>

        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
          <table>
            <thead>
              <tr>
                <th>Excel Table</th>
                <th>Pivot Table</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Organizes source data</td>
                <td>Summarizes source data</td>
              </tr>
              <tr>
                <td>Stores detailed records</td>
                <td>Aggregates records</td>
              </tr>
              <tr>
                <td>Provides filtering</td>
                <td>Provides analytical grouping</td>
              </tr>
              <tr>
                <td>Supports structured references</td>
                <td>Supports aggregations</td>
              </tr>
              <tr>
                <td>Can be a Pivot source</td>
                <td>Uses a Table/range as a source</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Think:</p>

        <pre><code>Excel Table
            ↓
        Detailed / Clean Dataset
            ↓
        Pivot Table
            ↓
        Summary / Analysis</code></pre>

        <h3>Excel Table + Power Query</h3>

        <p>This combination is particularly useful.</p>

        <pre><code>CSV / Database
              ↓
        Power Query
              ↓
        Clean + Transform
              ↓
        Excel Table
              ↓
        Pivot Table
              ↓
        Dashboard</code></pre>

        <p>For example:</p>

        <ul>
          <li><strong>Power Query</strong> → clean and transform</li>
          <li><strong>Excel Table</strong> → store structured dataset</li>
          <li><strong>Pivot Table</strong> → summarize</li>
          <li><strong>Charts</strong> → visualize</li>
        </ul>

        <p>This is a very realistic Excel Data Analyst workflow.</p>

        <h3>⭐ Interview Questions You Should Know</h3>

        <p><strong>Q1. What is an Excel Table?</strong></p>

        <blockquote>
          <p>“An Excel Table is a structured range of data that provides features such as automatic filtering, structured references, calculated columns, and automatic expansion. It's particularly useful for datasets that grow over time.”</p>
        </blockquote>

        <p><strong>Q2. What are structured references?</strong></p>

        <blockquote>
          <p>“Structured references allow me to refer to Table columns using their names instead of cell ranges. For example, <code>SalesData[Revenue]</code> refers to the Revenue column of the SalesData Table. They are easier to read and automatically adjust when the Table expands.”</p>
        </blockquote>

        <p><strong>Q3. What is a calculated column?</strong></p>

        <blockquote>
          <p>“A calculated column is a Table column where the same formula is automatically applied to all rows. For example, <code>=[@Revenue]-[@Cost]</code> calculates profit for each row and automatically extends to new records.”</p>
        </blockquote>

        <p><strong>Q4. What happens when you add a new row to an Excel Table?</strong></p>

        <blockquote>
          <p>“The Table normally expands automatically to include the new row. Formatting, filters, calculated columns, and structured references adjust accordingly. If the Table is being used as a Pivot Table source, I would refresh the Pivot Table to reflect the new data.”</p>
        </blockquote>

        <p><strong>Q5. Why use an Excel Table as a Pivot Table source?</strong></p>

        <blockquote>
          <p>“I prefer using an Excel Table because the source range can expand automatically when new records are added. After refreshing the Pivot Table, the new records are included without manually changing the source range.”</p>
        </blockquote>

        <p><strong>Q6. What is the advantage of Excel Tables over normal ranges?</strong></p>

        <blockquote>
          <p>“Tables make datasets more structured and easier to maintain. They provide automatic filters, structured references, calculated columns, and automatic expansion, which is particularly useful for recurring reports and growing datasets.”</p>
        </blockquote>
      `},

      {
        id: "Dashboard",
        name: "Dashboard",
        theory: ``,
      },

      {
        id: "PowerPivot",
        name: "Power Pivot",
        theory: ``,
      },

      {
        id: "Macros&VBA",
        name: "Macros & VBA",
        theory: ``,
      },
    ]
  }
};