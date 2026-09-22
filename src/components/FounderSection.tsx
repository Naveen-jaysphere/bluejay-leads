import React, { useState, useEffect, useRef } from 'react';
import { Mail, Camera } from 'lucide-react';

interface FounderSectionProps {
  onContactClick?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = () => {
  const [photoSrc, setPhotoSrc] = useState<string>('/linkedinphotogoodquality.jpg');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('founder_photo');
    if (saved) {
      setPhotoSrc(saved);
      setIsLoaded(true);
    }
  }, []);

  const handleFileChange = async (file: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setPhotoSrc(dataUrl);
        setIsLoaded(true);
        localStorage.setItem('founder_photo', dataUrl);

        try {
          setIsUploading(true);
          await fetch('/api/upload-founder-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataUrl }),
          });
        } catch {
          // Local storage already has it
        } finally {
          setIsUploading(false);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <section id="about-the-founder" className="py-12 sm:py-14 bg-white border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8FAFD] rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Founder Column: Photo & Direct Contact */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
              />
              
              <div 
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                title="Click or drop photo here to change picture"
                className="relative group cursor-pointer w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden shadow-xs border border-slate-200 bg-slate-100 flex items-center justify-center transition-all hover:border-[#0052FF]"
              >
                <img
                  id="founder-image"
                  src={photoSrc}
                  alt="Naveen, Founder of Blue Jay Leads"
                  onLoad={() => setIsLoaded(true)}
                  onError={() => {
                    if (!localStorage.getItem('founder_photo')) {
                      setIsLoaded(false);
                    }
                  }}
                  className={`w-full h-full object-cover object-top transition-opacity duration-200 ${
                    isLoaded ? 'opacity-100' : 'opacity-80'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Subtle upload badge on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 text-center">
                  <Camera className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-semibold leading-tight">
                    {isUploading ? 'Saving...' : 'Update Photo'}
                  </span>
                </div>
              </div>

              <div className="mt-3 space-y-0.5">
                <h3 id="founder-name" className="text-sm font-bold text-[#0A1938]">
                  Naveen
                </h3>
                <p id="founder-title" className="text-xs text-slate-500 font-medium">
                  Founder of Blue Jay Leads
                </p>
                <div className="pt-1">
                  <a
                    id="founder-direct-email-link"
                    href="mailto:Naveen@bluejayleads.io"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#0052FF] hover:underline"
                  >
                    <Mail className="w-3 h-3 text-[#0052FF]" />
                    <span>Naveen@bluejayleads.io</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Narrative Column: Clean, Casual Direct Message */}
            <div className="md:col-span-8 space-y-3">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0052FF]">
                About Us
              </span>

              <h2 className="text-base sm:text-lg font-bold text-[#0A1938] leading-snug">
                Most lead companies focus on cheap volume. <br className="hidden sm:inline" />
                <span className="text-[#0052FF]">We focus on your cost per case.</span>
              </h2>

              <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                <p>
                  A lot of lead providers brag about sending huge batches of cheap leads. But if your intake team is stuck chasing people who never answer or don't qualify, you're just burning staff hours and marketing dollars.
                </p>
                <p>
                  At <strong className="text-[#0A1938] font-semibold">Blue Jay Leads</strong>, we care about your cost per case. We're not interested in quick, transactional lead drops—we want to build real, long-term partnerships with your law firm.
                </p>
                <p>
                  We stay in close touch with your team to see what's happening on your end. We look closely at which ads are actually signing retainers and constantly optimize our campaigns around the ads that produce the best results. When an ad works, we put more fuel behind it; when it doesn't, we drop it. That way, your firm consistently receives high-quality claimants ready to hire you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
