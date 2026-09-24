import React, { useState, useEffect, useRef } from 'react';
import { Mail, Camera } from 'lucide-react';

interface FounderSectionProps {
  onContactClick?: () => void;
}

const CDN_FOUNDER_PHOTO = 'https://assets.cdn.filesafe.space/MCXdJPoZIhoqrTUf6twq/media/6ab5400e3dbd5f2bbbac7283.jpg';
const LOCAL_FOUNDER_PHOTO = '/founder-photo.jpg';

export const FounderSection: React.FC<FounderSectionProps> = () => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('founder_photo') : null;
    return saved && (saved.startsWith('data:') || saved.startsWith('http')) ? saved : LOCAL_FOUNDER_PHOTO;
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('founder_photo');
    if (saved && (saved.startsWith('data:') || saved.startsWith('http'))) {
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
                    if (photoSrc !== CDN_FOUNDER_PHOTO) {
                      setPhotoSrc(CDN_FOUNDER_PHOTO);
                    } else {
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
                  Every lead vendor promises hundreds of cheap form fills. But if those callers never turn into signed clients, your intake team just wastes time chasing dead ends while your marketing budget disappears.
                </p>
                <p>
                  At <strong className="text-[#0A1938] font-semibold">Blue Jay Leads</strong>, we care about your cost per case, which is why we measure our performance by what it actually costs your firm to put a signed case on your docket, not vanity metrics or raw lead volume.
                </p>
                <p>
                  We work closely with your intake team to track which inquiries actually turn into signed cases. When an ad campaign generates signed retainers, we invest more budget behind it. When one falls short, we turn it off immediately. By tying our advertising directly to your firm's real results, we ensure you consistently receive high quality leads at scale.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
