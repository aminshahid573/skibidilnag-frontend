import React, { useEffect } from 'react';
import Prism from 'prismjs';

interface DocsProps {
  onCodeSelect: (code: string) => void;
  onViewFullDocs: () => void;
}

const docSections = [
  {
    title: "Variables: `skibidi` & `rizz`",
    description: "Use `skibidi` to declare a variable and `rizz` to assign a value. Every complete statement must end with `ohio`.",
    code: `skibidi my_variable rizz "Ohio" ohio
my_variable rizz "Sigma" ohio`,
  },
  {
    title: "Printing Output: `gyatt`",
    description: "The `gyatt` command prints text or variable values to the output. Use `+` to concatenate strings.",
    code: `skibidi user rizz "Chad" ohio
gyatt "Hello, " + user + " 🔱" ohio`,
  },
  {
    title: "Conditionals: `cap` & `nocap`",
    description: "Use `cap (condition)` for if-statements. No cap. Use `nocap` for the else block.",
    code: `skibidi my_rizz rizz 100 ohio
cap (my_rizz > 50) {
  gyatt "Rizz is bussin!" ohio
}`,
  },
  {
    title: "Loops: `bussin` & `gyatfor`",
    description: "Use `bussin` for while-loops and `gyatfor` for for-loops. Let the code spin.",
    code: `gyatfor (skibidi i rizz 0; i < 3; i rizz i + 1) {
  gyatt "Loop " + i ohio
}`,
  },
  {
    title: "Functions: `sigma`, `beta`, `alpha`",
    description: "Define functions with `sigma`, call them with `beta`, and return values with `alpha`.",
    code: `sigma greet(name) {
  alpha "What's up, " + name + "!" ohio
}
gyatt beta greet("alpha") ohio`,
  }
];

const CodeBlock: React.FC<{ children: React.ReactNode, onSelect: () => void }> = ({ children, onSelect }) => (
  <div className="relative group">
    <pre className="rounded-lg p-4 pr-24 font-mono text-sm text-skibidi-light overflow-x-auto">
      <code className="language-skibidi">{children}</code>
    </pre>
    <button
      onClick={onSelect}
      className="absolute top-2 right-2 bg-gray-700 text-skibidi-light text-xs font-bold py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-skibidi-pink"
    >
      Try in Editor
    </button>
  </div>
);


const Docs: React.FC<DocsProps> = ({ onCodeSelect, onViewFullDocs }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="font-rubik text-3xl sm:text-4xl font-bold text-center">
        SkibidiLang Cheatsheet 🚽
      </h2>
      <p className="mt-4 text-lg text-skibidi-gray text-center leading-relaxed">
        Master the language of the sigmas. Here's everything you need to know.
      </p>

      <div className="mt-12 space-y-10">
        {docSections.map((section) => (
          <div key={section.title} className="bg-black/20 border border-gray-800 p-6 rounded-xl">
            <h3 className="font-rubik text-2xl font-bold text-skibidi-aqua mb-2">{section.title}</h3>
            <p className="text-skibidi-gray mb-4">{section.description}</p>
            <CodeBlock onSelect={() => onCodeSelect(section.code)}>
              {section.code}
            </CodeBlock>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
          <button
            onClick={onViewFullDocs}
            className="font-bold text-lg text-skibidi-aqua border border-skibidi-aqua py-3 px-8 rounded-full shadow-lg shadow-skibidi-aqua/10 hover:bg-skibidi-aqua hover:text-skibidi-dark transition-all duration-300 ease-in-out"
          >
              View Full Documentation
          </button>
      </div>
    </section>
  );
};

export default Docs;
