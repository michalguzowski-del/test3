import { SectionHeader } from '@/components/ui/SectionHeader';
import { EUROPEAN_MARKETS } from '@/lib/mockData';
import type { Dictionary } from '@/lib/dictionaries';

interface GlobalDataReachSectionProps {
  dict: Dictionary;
}

export function GlobalDataReachSection({ dict }: GlobalDataReachSectionProps) {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <SectionHeader
              headline={dict.global_reach.headline}
              subheadline={dict.global_reach.subheadline}
              align="left"
              className="mb-10"
            />
            <div className="grid grid-cols-2 gap-3">
              {EUROPEAN_MARKETS.map((market) => (
                <div
                  key={market.code}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
                    market.primary
                      ? 'bg-[#00C4CC]/5 border-[#00C4CC]/30 text-[#1A1A2E]'
                      : 'bg-[#F8F9FC] border-[#E5E7EB] text-[#6B7280]'
                  }`}
                >
                  <span className="text-sm font-bold text-[#9CA3AF] w-6">{market.code}</span>
                  <span className={`text-sm font-medium ${market.primary ? 'text-[#1A1A2E]' : 'text-[#6B7280]'}`}>
                    {market.country}
                  </span>
                  {market.primary && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-[#00C4CC]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Visual side — stylized Europe map placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-[#0D1526] rounded-3xl border border-[#1E3575] flex items-center justify-center overflow-hidden">
              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, #00C4CC 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              {/* Central glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-[#00C4CC]/10 rounded-full blur-3xl" />
              </div>
              {/* Country nodes */}
              <div className="relative w-full h-full">
                {[
                  { label: 'PL', x: 55, y: 40, size: 'lg' },
                  { label: 'DE', x: 43, y: 38, size: 'md' },
                  { label: 'CZ', x: 50, y: 45, size: 'md' },
                  { label: 'FR', x: 33, y: 45, size: 'sm' },
                  { label: 'GB', x: 28, y: 32, size: 'sm' },
                  { label: 'NL', x: 37, y: 33, size: 'sm' },
                  { label: 'RO', x: 62, y: 52, size: 'sm' },
                  { label: 'HU', x: 57, y: 48, size: 'sm' },
                ].map((node) => (
                  <div
                    key={node.label}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <div
                      className={`rounded-full bg-[#00C4CC] flex items-center justify-center font-bold text-[#0D1526] ${
                        node.size === 'lg' ? 'w-10 h-10 text-xs' : node.size === 'md' ? 'w-8 h-8 text-xs' : 'w-6 h-6 text-[10px]'
                      }`}
                    >
                      {node.label}
                    </div>
                    {node.size === 'lg' && (
                      <div className="absolute w-16 h-16 rounded-full border-2 border-[#00C4CC]/20 animate-ping" />
                    )}
                  </div>
                ))}
              </div>
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#162347]/90 rounded-xl p-4 border border-[#2B4B9E]">
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00C4CC]">12</div>
                    <div className="text-xs text-[#6B7280]">Markets</div>
                  </div>
                  <div className="w-px h-10 bg-[#2B4B9E]" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00C4CC]">30M+</div>
                    <div className="text-xs text-[#6B7280]">Profiles</div>
                  </div>
                  <div className="w-px h-10 bg-[#2B4B9E]" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00C4CC]">5B+</div>
                    <div className="text-xs text-[#6B7280]">Events/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
