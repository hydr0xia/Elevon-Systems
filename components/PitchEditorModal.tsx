import React, { useState } from 'react';
import { PitchData } from '../types';
import { X, Save, Copy, Check, RefreshCw } from 'lucide-react';

interface PitchEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  pitchData: PitchData;
  onSave: (newData: PitchData) => void;
}

export const PitchEditorModal: React.FC<PitchEditorModalProps> = ({
  isOpen,
  onClose,
  pitchData,
  onSave,
}) => {
  const [formData, setFormData] = useState<PitchData>(pitchData);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleMetricChange = (idx: number, field: 'label' | 'value' | 'subtext', val: string) => {
    const updated = [...formData.keyMetrics];
    updated[idx] = { ...updated[idx], [field]: val };
    setFormData({ ...formData, keyMetrics: updated });
  };

  const handleTeamChange = (idx: number, field: 'name' | 'role' | 'bio', val: string) => {
    const updated = [...formData.team];
    updated[idx] = { ...updated[idx], [field]: val };
    setFormData({ ...formData, team: updated });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#e0e0e0] border-2 border-elevon-black rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-elevon-black">
        
        {/* Modal Header */}
        <div className="p-4 bg-elevon-black text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-elevon-blue"></span>
            <h3 className="font-display font-bold text-base tracking-wide">
              Update Pitch Values & Content
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-stone-800 rounded text-stone-300 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs font-mono">
          
          <div className="p-3 bg-stone-200 border border-stone-400 rounded-lg text-[11px] text-stone-700">
            <strong>Exact Values Rule:</strong> Enter the exact text and numbers directly from your pitch deck slides below. Changes will immediately update the live preview and can be exported for GitHub Pages.
          </div>

          {/* Section: General Info */}
          <div className="space-y-3">
            <h4 className="font-bold text-elevon-blue uppercase tracking-widest text-[11px] border-b border-stone-300 pb-1">
              General Identity (Slide 1)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-600 font-bold mb-1">COMPANY NAME</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-stone-400 rounded font-sans text-xs text-black"
                />
              </div>
              <div>
                <label className="block text-stone-600 font-bold mb-1">DECK SUBTITLE</label>
                <input
                  type="text"
                  value={formData.deckSubtitle}
                  onChange={(e) => setFormData({ ...formData, deckSubtitle: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-stone-400 rounded font-sans text-xs text-black"
                />
              </div>
            </div>
            <div>
              <label className="block text-stone-600 font-bold mb-1">TAGLINE / PUNCHLINE</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-stone-400 rounded font-sans text-xs text-black"
              />
            </div>
          </div>

          {/* Section: Key Metrics */}
          <div className="space-y-3">
            <h4 className="font-bold text-elevon-blue uppercase tracking-widest text-[11px] border-b border-stone-300 pb-1">
              Key Metrics (Slide 4 & 5)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {formData.keyMetrics.map((m, idx) => (
                <div key={m.id} className="p-3 bg-stone-200 border border-stone-400 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-elevon-black">METRIC #{idx + 1}</span>
                    <span className="text-[10px] text-stone-600">SLIDE {m.sourceSlide}</span>
                  </div>
                  <div>
                    <label className="block text-[10px] text-stone-600">VALUE</label>
                    <input
                      type="text"
                      value={m.value}
                      onChange={(e) => handleMetricChange(idx, 'value', e.target.value)}
                      className="w-full px-2 py-1.5 bg-white border border-stone-400 rounded font-sans font-bold text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-stone-600">LABEL</label>
                    <input
                      type="text"
                      value={m.label}
                      onChange={(e) => handleMetricChange(idx, 'label', e.target.value)}
                      className="w-full px-2 py-1 bg-white border border-stone-400 rounded font-sans text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Team */}
          <div className="space-y-3">
            <h4 className="font-bold text-elevon-blue uppercase tracking-widest text-[11px] border-b border-stone-300 pb-1">
              Team & Leadership (Slide 7)
            </h4>
            <div className="space-y-3">
              {formData.team.map((mem, idx) => (
                <div key={idx} className="p-3 bg-stone-200 border border-stone-400 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] text-stone-600 font-bold mb-1">NAME</label>
                    <input
                      type="text"
                      value={mem.name}
                      onChange={(e) => handleTeamChange(idx, 'name', e.target.value)}
                      className="w-full px-2 py-1.5 bg-white border border-stone-400 rounded font-sans text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-stone-600 font-bold mb-1">ROLE</label>
                    <input
                      type="text"
                      value={mem.role}
                      onChange={(e) => handleTeamChange(idx, 'role', e.target.value)}
                      className="w-full px-2 py-1.5 bg-white border border-stone-400 rounded font-sans text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-300 border-t border-stone-400 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyJson}
            className="flex items-center gap-1.5 px-3 py-2 bg-white border border-stone-400 rounded-lg text-xs font-mono font-semibold text-stone-800 hover:bg-stone-100"
          >
            {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
            <span>{copied ? 'Copied JSON!' : 'Copy JSON Configuration'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-stone-200 hover:bg-stone-100 text-xs font-mono font-semibold rounded-lg border border-stone-400 text-stone-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 bg-elevon-blue hover:bg-elevon-blueDark text-white text-xs font-mono font-bold rounded-lg shadow-sm"
            >
              <Save size={14} />
              <span>Apply to Site</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
