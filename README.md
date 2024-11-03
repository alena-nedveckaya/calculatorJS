<body>

<h1>Calculator App</h1>

<p>This is a simple calculator application built with JavaScript, HTML, and CSS. The app performs basic arithmetic operations and includes both light and dark themes. It uses Webpack as a module bundler and Babel for JavaScript transpilation.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#running-the-app">Running the App</a></li>
    <li><a href="#build-instructions">Build Instructions</a></li>
</ul>

<h2 id="features">Features</h2>
<ul>
    <li>Basic arithmetic operations: addition, subtraction, multiplication, division, and percentage calculations.</li>
    <li>Light and dark themes with a toggle switch.</li>
    <li>Hot Module Replacement (HMR) for a smooth development experience.</li>
</ul>

<h2 id="project-structure">Project Structure</h2>

<p>The project is organized into the following folders:</p>

<pre>
calculator-app/
├── src/                # Contains the source code for the application.
|   ├── js
|   |  ├── calculator
|   |  |  ├── calculator.js   # Contains the core logic for performing arithmetic calculations.
|   │  │  ├── theme/          # Handles the theme switching logic.
|   │  │  ├── utils/          # Contains helper functions used across the app.

|   |  ├── keyboard
|   |  |  ├── keyboard   # Contains keyboard functions.

│   ├── index.js        # The main entry point for the app, initializes and renders the calculator.
│   ├── styles.css/     # Contains CSS files for styling the calculator and themes.
│   ├── index.html/     # The main page.
│   
├── .prettierrc.json      # prettier configuration for code linting.
├── eslint.config.mjs      # ESLint configuration for code linting.
├── package.json        # Lists project dependencies and scripts.
├── webpack.config.js   # Webpack configuration file for bundling and dev server.
└── README.html         # Documentation file.
</pre>

<h2 id="getting-started">Getting Started</h2>

<p>To get a local copy of this app running on your machine, follow these steps.</p>

<h3>Prerequisites</h3>
<p>Make sure you have the following software installed on your system:</p>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li>npm (comes with Node.js)</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/alena-nedveckaya/calculatorJS.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd calculatorJS</code></pre>
    </li>
    <li>Install the dependencies:
        <pre><code>npm install</code></pre>
    </li>
</ol>

<h2 id="running-the-app">Running the App</h2>
<p>To start the app in development mode with hot reloading:</p>
<pre><code>npm start</code></pre>
<p>This will start a local development server at <code>http://localhost:8080</code>, and any changes made to the code will automatically be reflected in the browser.</p>

<h2 id="build-instructions">Build Instructions</h2>
<p>To create a production build of the app:</p>
<pre><code>npm run build</code></pre>
<p>This command will create a <code>dist</code> folder with optimized and minified files ready for deployment.</p>

<h3>Cleaning up the output</h3>
<p>Each time you run <code>npm run build</code>, the <code>dist</code> folder will be cleared automatically due to the <code>clean</code> option in the Webpack configuration. This ensures no outdated files are left in the build.</p>

