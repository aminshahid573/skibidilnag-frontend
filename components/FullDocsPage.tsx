import React, { useEffect } from 'react';
import Prism from 'prismjs';

interface FullDocsPageProps {
  onBack: () => void;
}

const H2: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
  <h2 id={id} className="font-rubik text-3xl font-bold text-skibidi-aqua mt-12 mb-4 pt-4 border-t border-gray-800">{children}</h2>
);

const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="font-rubik text-2xl font-bold text-skibidi-pink mt-8 mb-3">{children}</h3>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-skibidi-gray leading-relaxed mb-4">{children}</p>
);

const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <code className="bg-gray-700/50 text-skibidi-pink px-1.5 py-0.5 rounded-md font-mono text-sm">{children}</code>
);

const DocCodeBlock: React.FC<{ lang?: string; children: React.ReactNode }> = ({ lang = 'skibidi', children }) => (
  <pre className="rounded-lg p-4 font-mono text-sm text-skibidi-light overflow-x-auto my-4">
    <code className={`language-${lang}`}>{children}</code>
  </pre>
);

const DocTable: React.FC<{ headers: string[], rows: (string | React.ReactNode)[][] }> = ({ headers, rows }) => (
    <div className="overflow-x-auto my-4">
        <table className="w-full text-left border-collapse">
            <thead className="bg-gray-800/50">
                <tr>
                    {headers.map(header => (
                        <th key={header} className="p-3 font-bold text-skibidi-light border-b-2 border-gray-700">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-800">
                        {row.map((cell, j) => (
                            <td key={j} className="p-3 text-skibidi-gray align-top">{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const tocLinks = [
    { href: "#introduction", text: "1. Introduction" },
    { href: "#running-skibidi", text: "2. Running Skibidi" },
    { href: "#lexical-elements", text: "3. Lexical Elements" },
    { href: "#variables--scope", text: "4. Variables & Scope" },
    { href: "#data-types", text: "5. Data Types" },
    { href: "#operators", text: "6. Operators" },
    { href: "#statements", text: "7. Statements" },
    { href: "#functions", text: "8. Functions" },
    { href: "#built-in-functions", text: "9. Built-in Functions" },
    { href: "#interactive-mode-repl", text: "10. Interactive Mode (REPL)" },
    { href: "#error-handling", text: "11. Error Handling" },
    { href: "#examples", text: "12. Examples" },
    { href: "#meme-vibe--philosophy", text: "13. Meme Vibe & Philosophy" },
];

const FullDocsPage: React.FC<FullDocsPageProps> = ({ onBack }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="py-16 max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="font-bold text-lg bg-gray-700 text-skibidi-gray py-2 px-6 rounded-full hover:bg-gray-600 transition-colors duration-300 mb-8"
      >
        &larr; Back to Playground
      </button>

      <header className="text-center mb-12">
        <h1 className="font-rubik font-bold text-4xl sm:text-5xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-skibidi-pink to-skibidi-aqua">
          🚽 Skibidi Language Docs
        </h1>
      </header>
      
      <article>
        <div className="bg-black/30 p-6 rounded-2xl border border-gray-800">
            <h2 className="font-rubik text-2xl font-bold text-skibidi-aqua mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
                {tocLinks.map(link => (
                    <li key={link.href}><a href={link.href} className="text-skibidi-light hover:text-skibidi-pink hover:underline transition-colors">{link.text}</a></li>
                ))}
            </ol>
        </div>

        <H2 id="introduction">1. Introduction</H2>
        <P><Code>Skibidi</Code> is a meme-powered, beginner-friendly programming language with a unique, playful syntax. It supports variables, arithmetic, logic, loops, functions, block scoping, and more—all with a Skibidi twist.</P>

        <H2 id="running-skibidi">2. Running Skibidi</H2>
        <H3>Run a Skibidi Program</H3>
        <P>Windows:</P>
        <DocCodeBlock lang="bash">skibidi.exe run myfile.skibidi</DocCodeBlock>
        <P>Linux/Mac:</P>
        <DocCodeBlock lang="bash">./skibidi run myfile.skibidi</DocCodeBlock>
        <H3>Start Interactive Mode (REPL)</H3>
        <P>Windows:</P>
        <DocCodeBlock lang="bash">skibidi.exe -i</DocCodeBlock>
        <P>Linux/Mac:</P>
        <DocCodeBlock lang="bash">./skibidi -i</DocCodeBlock>
        
        <H2 id="lexical-elements">3. Lexical Elements</H2>
        <H3>Keywords</H3>
        <DocTable 
          headers={["Keyword", "Meaning/Usage"]}
          rows={[
            [<Code>skibidi</Code>, "Variable declaration"],
            [<Code>rizz</Code>, "Assignment operator"],
            [<Code>cap</Code>, "If statement"],
            [<Code>nocap</Code>, "Else statement"],
            [<Code>bussin</Code>, "While loop"],
            [<Code>gyatt</Code>, "Print statement"],
            [<Code>ohio</Code>, "End of statement"],
            [<Code>sigma</Code>, "Function definition"],
            [<Code>beta</Code>, "Function call"],
            [<Code>alpha</Code>, "Return from function"],
            [<Code>gyatfor</Code>, "For loop"],
            [<Code>input</Code>, "Read input from user"],
            [<Code>true</Code>, "Boolean true"],
            [<Code>false</Code>, "Boolean false"],
            [<Code>bruh</Code>, "Single-line comment"],
          ]}
        />
        <H3>Identifiers</H3>
        <P>Names for variables and functions. Start with a letter or underscore, followed by letters, digits, or underscores.</P>
        <H3>Literals</H3>
        <P>
            <strong>Numbers:</strong> <Code>42</Code>, <Code>3.14</Code>, <Code>-7</Code><br/>
            <strong>Strings:</strong> <Code>"hello world"</Code><br/>
            <strong>Booleans:</strong> <Code>true</Code>, <Code>false</Code>
        </P>
        <H3>Comments</H3>
        <P>Single-line comments start with <Code>bruh</Code> and continue to the end of the line.</P>
        <DocCodeBlock>bruh this is a comment</DocCodeBlock>

        <H2 id="variables--scope">4. Variables & Scope</H2>
        <H3>Declaration</H3>
        <DocCodeBlock>{`skibidi x rizz 5 ohio
skibidi name rizz "skibidi" ohio`}</DocCodeBlock>
        <H3>Assignment</H3>
        <DocCodeBlock>{`x rizz 10 ohio
name rizz "sigma" ohio`}</DocCodeBlock>
        <H3>Scope</H3>
        <P>Variables declared inside <Code>{"{...}"}</Code> are local to that block (including function bodies and control structures). Variables declared outside are global.</P>

        <H2 id="data-types">5. Data Types</H2>
        <ul className="list-disc list-outside pl-5 text-skibidi-gray space-y-2">
            <li><strong>Numbers:</strong> Floating-point (e.g., <Code>42</Code>, <Code>3.14</Code>, <Code>-7</Code>)</li>
            <li><strong>Strings:</strong> Double-quoted, e.g., <Code>"hello world"</Code></li>
            <li><strong>Booleans:</strong> <Code>true</Code>, <Code>false</Code></li>
        </ul>

        <H2 id="operators">6. Operators</H2>
        <H3>Arithmetic</H3>
        <DocTable headers={["Operator", "Meaning", "Example"]} rows={[
            [<Code>+</Code>, "Addition", <Code>a + b</Code>],
            [<Code>-</Code>, "Subtraction", <Code>a - b</Code>],
            [<Code>*</Code>, "Multiplication", <Code>a * b</Code>],
            [<Code>/</Code>, "Division", <Code>a / b</Code>],
            [<Code>%</Code>, "Modulo", <Code>a % b</Code>],
            [<Code>-</Code>, "Unary minus", <Code>-a</Code>],
        ]} />
        <H3>Comparison</H3>
        <DocTable headers={["Operator", "Meaning", "Example"]} rows={[
            [<Code>==</Code>, "Equal", <Code>a == b</Code>],
            [<Code>&lt;</Code>, "Less than", <Code>a &lt; b</Code>],
            [<Code>&gt;</Code>, "Greater than", <Code>a &gt; b</Code>],
            [<Code>&lt;=</Code>, "Less or equal", <Code>a &lt;= b</Code>],
            [<Code>&gt;=</Code>, "Greater or equal", <Code>a &gt;= b</Code>],
        ]} />
        <H3>Logical</H3>
        <DocTable headers={["Operator", "Meaning", "Example"]} rows={[
            [<Code>&&</Code>, "Logical AND", <Code>a && b</Code>],
            [<Code>||</Code>, "Logical OR", <Code>a || b</Code>],
        ]} />

        <H2 id="statements">7. Statements</H2>
        <H3>Print Statement</H3>
        <DocCodeBlock>{`gyatt "Hello, world!" ohio
gyatt x ohio
gyatt "Value: " + x ohio`}</DocCodeBlock>
        <H3>If/Else Statement</H3>
        <DocCodeBlock>{`cap (x > 5) {
    gyatt "x is big" ohio
}
nocap {
    gyatt "x is small" ohio
}`}</DocCodeBlock>
        <H3>While Loop</H3>
        <DocCodeBlock>{`bussin (x < 10) {
    gyatt x ohio
    x rizz x + 1 ohio
}`}</DocCodeBlock>
        <H3>For Loop</H3>
        <DocCodeBlock>{`gyatfor (skibidi i rizz 0; i < 5; i rizz i + 1) {
    gyatt i ohio
}`}</DocCodeBlock>
        <P>The for-loop header uses semicolons to separate initialization, condition, and post-expression. No <Code>ohio</Code> is needed inside the parentheses.</P>
        <H3>Input Statement</H3>
        <DocCodeBlock>{`gyatt "Enter your name:" ohio
skibidi name rizz input ohio
gyatt "Hello, " + name + "!" ohio`}</DocCodeBlock>
        <P><Code>input</Code> reads a line from the user as a string.</P>

        <H2 id="functions">8. Functions</H2>
        <H3>Definition</H3>
        <DocCodeBlock>{`sigma add(a, b) {
    alpha a + b ohio
}`}</DocCodeBlock>
        <H3>Calling</H3>
        <DocCodeBlock>{`skibidi result rizz beta add(10, 32) ohio
gyatt result ohio`}</DocCodeBlock>
        <P>Use <Code>beta</Code> as an expression to get the return value.</P>
        <H3>Return</H3>
        <DocCodeBlock>alpha value ohio</DocCodeBlock>
        <P>Returns <Code>value</Code> from the function.</P>
        <H3>Scope in Functions</H3>
        <P>Function parameters and variables declared inside the function are local to that function.</P>

        <H2 id="built-in-functions">9. Built-in Functions</H2>
        <DocTable headers={["Function", "Usage", "Description"]} rows={[
            [<Code>len</Code>, <Code>len(s)</Code>, "Length of string s"],
            [<Code>abs</Code>, <Code>abs(x)</Code>, "Absolute value of number x"],
            [<Code>str</Code>, <Code>str(x)</Code>, "Converts number x to string"],
        ]} />
        <H3>Example</H3>
        <DocCodeBlock>{`skibidi s rizz "skibidi" ohio
gyatt len(s) ohio
gyatt abs(-42) ohio
gyatt str(123.45) ohio`}</DocCodeBlock>
        
        <H2 id="interactive-mode-repl">10. Interactive Mode (REPL)</H2>
        <H3>Starting the REPL</H3>
        <P>Run <Code>skibidi -i</Code> (or <Code>skibidi.exe -i</Code> on Windows).</P>
        <H3>Features</H3>
        <ul className="list-disc list-outside pl-5 text-skibidi-gray space-y-2">
            <li><strong>Single-line and multi-line input:</strong> Enter statements or multi-line blocks (functions, loops, etc.).</li>
            <li><strong>Expression evaluation:</strong> Enter expressions (like <Code>2 + 2</Code>) and see the result.</li>
            <li><strong>REPL commands:</strong> <Code>:help</Code>, <Code>:vars</Code>, <Code>:funcs</Code>, <Code>:exit</Code>.</li>
            <li><strong>Error recovery:</strong> Errors are printed, but the REPL keeps running.</li>
            <li><strong>Session state:</strong> Variables and functions persist for the whole session.</li>
            <li><strong>Automatic <Code>ohio</Code>:</strong> If you forget to end a statement with <Code>ohio</Code>, the REPL adds it for you (unless you’re typing a block).</li>
        </ul>
        <H3>Example Session</H3>
        <DocCodeBlock lang="bash">{`🚽 Skibidi Interactive Mode v2.0 🚽
Type :help for commands. Type 'exit' or :exit to quit.
skibidi> skibidi x rizz 10 ohio
skibidi> x * 2
20
skibidi> sigma double(n) {
... alpha n * 2 ohio
... }
skibidi> beta double(7) ohio
14
skibidi> :vars
Variables:
  x = 10
skibidi> :funcs
Functions:
  double
skibidi> :exit
Goodbye! Stay sigma! 🗿`}</DocCodeBlock>

        <H2 id="error-handling">11. Error Handling</H2>
        <P>Errors are reported with a Skibidi-style message and the line number. Common errors:</P>
        <ul className="list-disc list-outside pl-5 text-skibidi-gray space-y-2">
            <li>Undefined variable or function</li>
            <li>Wrong number/type of arguments</li>
            <li>Unexpected token (syntax error)</li>
            <li>Division by zero</li>
        </ul>
        <P>The REPL does not exit on error; you can keep coding.</P>

        <H2 id="examples">12. Examples</H2>
        <H3>Hello World</H3>
        <DocCodeBlock>gyatt "Hello, Skibidi!" ohio</DocCodeBlock>
        <H3>Factorial Function</H3>
        <DocCodeBlock>{`sigma factorial(n) {
    skibidi result rizz 1 ohio
    gyatfor (skibidi i rizz 1; i <= n; i rizz i + 1) {
        result rizz result * i ohio
    }
    alpha result ohio
}

skibidi num rizz 5 ohio
skibidi fact rizz beta factorial(num) ohio
gyatt "Factorial of " + num + " is " + fact ohio`}</DocCodeBlock>
        <H3>FizzBuzz</H3>
        <DocCodeBlock>{`gyatfor (skibidi i rizz 1; i <= 20; i rizz i + 1) {
    cap ((i % 3 == 0) && (i % 5 == 0)) {
        gyatt "FizzBuzz" ohio
    }
    nocap {
        cap (i % 3 == 0) {
            gyatt "Fizz" ohio
        }
        nocap {
            cap (i % 5 == 0) {
                gyatt "Buzz" ohio
            }
            nocap {
                gyatt i ohio
            }
        }
    }
}`}</DocCodeBlock>

        <H2 id="meme-vibe--philosophy">13. Meme Vibe & Philosophy</H2>
        <ul className="list-disc list-outside pl-5 text-skibidi-gray space-y-2">
            <li><strong>Meme-first:</strong> All keywords and error messages are meme-inspired for maximum fun.</li>
            <li><strong>Beginner-friendly:</strong> Simple, readable syntax.</li>
            <li><strong>Expressive:</strong> Supports real programming constructs (functions, loops, scope, etc.).</li>
            <li><strong>Playful:</strong> Encourages creativity and meme-coding.</li>
        </ul>
      </article>

      <div className="text-center text-2xl font-bold mt-16 text-skibidi-pink">
        🚽 Stay Skibidi! 🚽
      </div>
    </div>
  );
};

export default FullDocsPage;
