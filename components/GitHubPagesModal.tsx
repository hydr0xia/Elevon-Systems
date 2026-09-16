import React, { useState } from 'react';
import { X, Copy, Check, Github, ExternalLink, Terminal, ShieldAlert } from 'lucide-react';

interface GitHubPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesModal: React.FC<GitHubPagesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const gitCommands = `# 1. Initialize local repository
git init
git add .
git commit -m "feat: initial Elevon presentation website"
git branch -M main

# 2. Link your GitHub repository and push
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main`;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#e4e4e4] border-2 border-elevon-black rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden text-elevon-black">
        
        {/* Header */}
        <div className="p-4 bg-elevon-black text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Github size={20} className="text-elevon-blue" />
            <h3 className="font-display font-bold text-base tracking-wide">
              GitHub Pages Hosting Setup
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-stone-800 rounded text-stone-300 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-xs font-mono">
          
          <div className="p-3 bg-stone-200 border border-stone-400 rounded-lg text-[11px] text-stone-800">
            <span className="font-bold text-elevon-blue uppercase">Zero-Config GitHub Actions Included:</span> This project already includes <code className="bg-stone-300 px-1 py-0.5 rounded text-black">.github/workflows/deploy.yml</code> and relative asset linking (<code className="bg-stone-300 px-1 py-0.5 rounded text-black">base: './'</code> in vite.config.ts) for instant GitHub Pages deployment.
          </div>

          {/* Step 1 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-elevon-black flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-elevon-black text-white flex items-center justify-center text-[10px]">1</span>
                <span>Push files to your GitHub repository</span>
              </span>
              <button
                onClick={() => copyCode(gitCommands, 1)}
                className="flex items-center gap-1 px-2.5 py-1 bg-stone-300 hover:bg-stone-200 rounded text-[11px] font-semibold border border-stone-400"
              >
                {copiedStep === 1 ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                <span>{copiedStep === 1 ? 'Copied' : 'Copy Commands'}</span>
              </button>
            </div>
            <pre className="p-3 bg-elevon-black text-stone-200 rounded-lg overflow-x-auto text-[11px] font-mono leading-relaxed">
              {gitCommands}
            </pre>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <span className="font-bold text-elevon-black flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-elevon-black text-white flex items-center justify-center text-[10px]">2</span>
              <span>Enable GitHub Pages in your repo settings</span>
            </span>
            <div className="p-3 bg-white border border-stone-400 rounded-lg space-y-1.5 text-[11px] text-stone-700">
              <p>1. Open your repository on GitHub.com</p>
              <p>2. Go to <strong>Settings</strong> &rarr; <strong>Pages</strong> (in left sidebar)</p>
              <p>3. Under <strong>Build and deployment &gt; Source</strong>, choose <strong className="text-elevon-blue">GitHub Actions</strong></p>
              <p>4. Your site will automatically build and go live at: <code className="bg-stone-200 px-1 py-0.5 rounded">https://&lt;username&gt;.github.io/&lt;repo&gt;/</code></p>
            </div>
          </div>

          {/* Step 3: Images & Static Assets */}
          <div className="space-y-2">
            <span className="font-bold text-elevon-black flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-elevon-black text-white flex items-center justify-center text-[10px]">3</span>
              <span>Images & Logo Files in the Repo</span>
            </span>
            <div className="p-3 bg-white border border-stone-400 rounded-lg space-y-1 text-[11px] text-stone-700 font-mono">
              <p>&bull; <strong>Logo</strong>: <code className="bg-stone-200 px-1 py-0.5 rounded text-black">public/logo.svg</code></p>
              <p>&bull; <strong>Slide Images</strong>: <code className="bg-stone-200 px-1 py-0.5 rounded text-black">public/images/slide-01.png</code> through <code className="bg-stone-200 px-1 py-0.5 rounded text-black">slide-07.png</code></p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-300 border-t border-stone-400 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-elevon-black hover:bg-stone-900 text-white text-xs font-mono font-bold rounded-lg"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
