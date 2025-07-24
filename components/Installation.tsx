
import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <pre className="bg-[#1a1a1a] rounded-lg p-4 font-mono text-sm text-skibidi-light overflow-x-auto my-2">
    <code className="language-bash">{children}</code>
  </pre>
);

const StarIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
    </svg>
);

const Installation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'windows' | 'linux'>('windows');
  const repoUrl = "https://github.com/aminshahid573/skibidi-language.git";
  const repoHttpUrl = "https://github.com/aminshahid573/skibidi-language";


  useEffect(() => {
    Prism.highlightAll();
  }, [activeTab]);


  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="font-rubik text-3xl sm:text-4xl font-bold text-center">
        Install SkibidiLang Locally
      </h2>
      <p className="mt-4 text-lg text-skibidi-gray text-center leading-relaxed">
        Want to get sturdy with SkibidiLang on your own machine? Follow the steps below.
      </p>

      <div className="mt-8">
        <div className="flex justify-center border-b border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab('windows')}
            className={`py-2 px-6 font-bold text-lg transition-colors duration-300 ${activeTab === 'windows' ? 'text-skibidi-pink border-b-2 border-skibidi-pink' : 'text-skibidi-gray'}`}
          >
            🪟 Windows
          </button>
          <button
            onClick={() => setActiveTab('linux')}
            className={`py-2 px-6 font-bold text-lg transition-colors duration-300 ${activeTab === 'linux' ? 'text-skibidi-aqua border-b-2 border-skibidi-aqua' : 'text-skibidi-gray'}`}
          >
            🐧 Linux / 🍎 Mac
          </button>
        </div>

        <div className="space-y-4 text-skibidi-light">
          {activeTab === 'windows' && (
            <div>
              <p className="mb-2">1. First, clone the repository using Git:</p>
              <CodeBlock>{`git clone ${repoUrl}`}</CodeBlock>
              <p className="mt-4 mb-2">2. Navigate into the cloned directory and run the installer:</p>
              <CodeBlock>{`cd skibidi-language\ninstall.bat`}</CodeBlock>
              <p className="mt-4 mb-2">3. Restart your terminal (Command Prompt, PowerShell, etc.).</p>
              <p className="text-skibidi-gray">After restarting, you should be able to type <code className="bg-gray-700 px-1 rounded">skibidi -i</code> to start the interpreter.</p>
              
              <h3 className="font-bold text-xl text-skibidi-pink mt-6 mb-3">If it doesn't work (Manual Setup)</h3>
              <p className="mb-2">If the script fails, you'll need to add the path to the executable to your system's Environment Variables manually.</p>
              <ol className="list-decimal list-inside space-y-2 text-skibidi-gray">
                <li>Create a new folder, for example: <code className="bg-gray-700 px-1 rounded">C:\\skibidilang</code></li>
                <li>Move the <code className="bg-gray-700 px-1 rounded">skibidi.exe</code> file from the cloned repository into that new folder.</li>
                <li>Search for "Edit the system environment variables" in the Windows search bar and open it.</li>
                <li>Click the "Environment Variables..." button.</li>
                <li>In the "System variables" section, find and select the <code className="bg-gray-700 px-1 rounded">Path</code> variable, then click "Edit...".</li>
                <li>Click "New" and paste the path to your folder (e.g., <code className="bg-gray-700 px-1 rounded">C:\\skibidilang</code>).</li>
                <li>Click OK on all windows to save. Restart your terminal.</li>
              </ol>
            </div>
          )}

          {activeTab === 'linux' && (
            <div>
              <p className="mb-2">1. First, clone the repository using Git:</p>
              <CodeBlock>{`git clone ${repoUrl}`}</CodeBlock>
              <p className="mt-4 mb-2">2. Navigate into the directory, make the installer executable, and run it:</p>
              <CodeBlock>{`cd skibidi-language\nchmod +x install.sh\n./install.sh`}</CodeBlock>
              <p className="mt-4 mb-2">3. Restart your terminal session or run <code className="bg-gray-700 px-1 rounded">source ~/.bashrc</code> (or <code className="bg-gray-700 px-1 rounded">~/.zshrc</code>).</p>
               <p className="text-skibidi-gray">You should now be able to use the <code className="bg-gray-700 px-1 rounded">skibidi</code> command.</p>

              <h3 className="font-bold text-xl text-skibidi-aqua mt-6 mb-3">If it doesn't work (Manual Setup)</h3>
              <p className="mb-2">If the script doesn't work, you can move the executable and add it to your PATH manually.</p>
              <ol className="list-decimal list-inside space-y-2 text-skibidi-gray">
                <li>Move the `skibidi` executable to a common binary directory, like <code className="bg-gray-700 px-1 rounded">/usr/local/bin</code>:</li>
                <CodeBlock>{`sudo mv skibidi /usr/local/bin/`}</CodeBlock>
                <li>Ensure the file is executable:</li>
                 <CodeBlock>{`sudo chmod +x /usr/local/bin/skibidi`}</CodeBlock>
                <li>The <code className="bg-gray-700 px-1 rounded">/usr/local/bin</code> directory is usually already in your system's PATH. If not, add the following line to your shell profile file (e.g., <code className="bg-gray-700 px-1 rounded">~/.bashrc</code>, <code className="bg-gray-700 px-1 rounded">~/.zshrc</code>):</li>
                <CodeBlock>{`export PATH="$PATH:/usr/local/bin"`}</CodeBlock>
                <li>Restart your terminal or source the profile file again.</li>
              </ol>
            </div>
          )}
        </div>
        
        <div className="bg-black/30 p-6 rounded-2xl border border-gray-800 text-center mt-12">
            <h3 className="font-rubik text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-skibidi-pink to-skibidi-aqua">
                Liking this gyatt-awful project?
            </h3>
            <p className="text-skibidi-gray max-w-lg mx-auto mb-6">
                If SkibidiLang made you laugh, show your support! Star the repo on GitHub to boost our rizz, and follow for more sigma updates. Every star helps! 🗿
            </p>
            <a href={repoHttpUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-lg bg-gradient-to-r from-skibidi-pink to-skibidi-aqua text-white py-3 px-8 rounded-full shadow-lg shadow-skibidi-pink/20 hover:scale-105 transition-transform duration-300 ease-in-out inline-flex items-center gap-2">
                <StarIcon />
                Star & Follow on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default Installation;
