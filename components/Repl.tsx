import React, { useState, useCallback } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import { runSkibidiLangCode } from '../services/geminiService';
import { EXAMPLES } from '../constants';
import type { SkibidiExample } from '../types';

interface ReplProps {
  code: string;
  setCode: (code: string) => void;
}

const LoadingSpinner: React.FC = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const Repl: React.FC<ReplProps> = ({ code, setCode }) => {
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRun = useCallback(async () => {
    setIsLoading(true);
    setOutput(null);
    setError(null);
    const result = await runSkibidiLangCode(code);
    if (result.error) {
      setError(result.error);
    } else {
      setOutput(result.output);
    }
    setIsLoading(false);
  }, [code]);

  const handleReset = () => {
    setCode('');
    setOutput(null);
    setError(null);
  };

  const handleExampleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedExample = EXAMPLES.find(ex => ex.name === e.target.value);
    if (selectedExample) {
      setCode(selectedExample.code);
      setOutput(null);
      setError(null);
    }
  };

  const highlightCode = (code: string) => 
    Prism.highlight(code, Prism.languages.skibidi, 'skibidi')
      .split('\n')
      .map(line => `<span class="editor-line">${line}</span>`)
      .join('\n');

  return (
    <section className="bg-black/30 p-4 sm:p-6 rounded-2xl border border-gray-800 shadow-2xl shadow-skibidi-aqua/10">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Panel: Code Editor */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-2">
             <h3 className="font-rubik text-xl text-skibidi-aqua">Skibidi Code 👽</h3>
             <select
                onChange={handleExampleChange}
                value={EXAMPLES.find(ex => ex.code === code)?.name || ''}
                className="bg-gray-800 border border-gray-700 rounded-md px-3 py-1 text-sm text-skibidi-light focus:ring-2 focus:ring-skibidi-pink outline-none"
              >
                {EXAMPLES.map((ex: SkibidiExample) => (
                  <option key={ex.name} value={ex.name}>{ex.name}</option>
                ))}
              </select>
          </div>
          <div className="w-full h-80 flex-grow rounded-lg focus-within:ring-2 focus-within:ring-skibidi-pink border border-gray-700 overflow-auto relative">
             <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlightCode(code)}
                padding={16}
                style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 16,
                    lineHeight: '1.5rem',
                    color: '#f8f8f2', // Base text color for editor
                }}
                className="rce-container w-full h-full"
                textareaId="skibidi-editor"
                placeholder="gyatt your code here..."
                aria-label="SkibidiLang Code Editor"
            />
          </div>
        </div>

        {/* Right Panel: Output */}
        <div className="flex-1 flex flex-col">
           <h3 className="font-rubik text-xl text-skibidi-pink mb-2">Skibidi Output 💀</h3>
           <div className="w-full h-80 flex-grow bg-[#1a1a1a] border border-gray-700 rounded-lg p-4 font-mono text-base" aria-live="polite">
            {isLoading && <div className="flex items-center justify-center h-full text-skibidi-gray"><LoadingSpinner />Rizzing up the interpreter...</div>}
            {error && <pre className="whitespace-pre-wrap text-red-400">{error}</pre>}
            {output && <pre className="whitespace-pre-wrap text-skibidi-light">{output}</pre>}
            {!isLoading && !error && !output && <div className="text-skibidi-gray">Click "Run" to see the magic...</div>}
           </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={handleRun}
          disabled={isLoading || !code}
          className="w-full sm:w-auto flex items-center justify-center font-bold text-lg bg-gradient-to-r from-skibidi-pink to-skibidi-aqua text-white py-3 px-8 rounded-full shadow-lg shadow-skibidi-pink/20 hover:scale-105 transition-transform duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? <LoadingSpinner /> : 'Run Code 🔱'}
        </button>
        <button
          onClick={handleReset}
          disabled={isLoading}
          className="w-full sm:w-auto font-bold text-lg bg-gray-700 text-skibidi-gray py-3 px-8 rounded-full hover:bg-gray-600 transition-colors duration-300 disabled:opacity-50"
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Repl;