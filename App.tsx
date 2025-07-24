import React, { useState, useRef } from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Repl from './components/Repl';
import Installation from './components/Installation';
import Footer from './components/Footer';
import Docs from './components/Docs';
import FullDocsPage from './components/FullDocsPage';
import { EXAMPLES } from './constants';
import './components/prism-skibidi';
import 'prismjs/components/prism-bash';

const App: React.FC = () => {
  const replRef = React.useRef<HTMLDivElement>(null);
  const [code, setCode] = useState<string>(EXAMPLES[0].code);
  const [view, setView] = useState<'playground' | 'docs'>('playground');

  const scrollToRepl = () => {
    replRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCodeSelect = (newCode: string) => {
    setCode(newCode);
    setView('playground');
    // We need to wait for the view to switch back before scrolling
    setTimeout(() => {
        scrollToRepl();
    }, 100);
  };

  return (
    <div className="bg-skibidi-dark text-skibidi-light font-sans min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {view === 'playground' ? (
          <>
            <Hero onCtaClick={scrollToRepl} />
            <main className="space-y-24 md:space-y-32 pb-24">
              <Intro />
              <div ref={replRef}>
                <Repl code={code} setCode={setCode} />
              </div>
              <Docs onCodeSelect={handleCodeSelect} onViewFullDocs={() => setView('docs')} />
              <Installation />
            </main>
          </>
        ) : (
          <FullDocsPage onBack={() => setView('playground')} />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
