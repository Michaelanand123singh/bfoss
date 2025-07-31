import React from 'react';
import { Terminal } from 'lucide-react';

const TerminalFooterSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-black rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <div className="flex items-center space-x-2 mb-4 text-gray-400">
            <Terminal className="w-4 h-4" />
            <span>bharatfoss@foundation:~$</span>
          </div>
          
          <div className="space-y-2 text-gray-300">
            <div className="text-green-400">git log --oneline --since="1 week"</div>
            <div>a7f2e1b feat: Add Gujarati language support to BharatOS</div>
            <div>d4c8912 fix: Optimize AgriTech for 2G networks</div>
            <div>b2a5643 docs: Contributing guidelines in Hindi</div>
            <div>9e1f445 feat: Offline-first architecture implementation</div>
            <div className="flex items-center text-green-400 mt-4">
              <span>bharatfoss@foundation:~$</span>
              <div className="w-2 h-4 bg-green-400 ml-2 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 text-gray-400">
          <p>Made with ❤️ for India's tech independence</p>
        </div>
      </div>
    </section>
  );
};

export default TerminalFooterSection;