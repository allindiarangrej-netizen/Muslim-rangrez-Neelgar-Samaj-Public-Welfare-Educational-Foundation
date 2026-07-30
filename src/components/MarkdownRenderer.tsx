import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null;

  // Split content by code blocks first
  const parts = content.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-gray-100">
      {parts.map((part, index) => {
        // Handle code blocks
        if (part.startsWith('```')) {
          const lines = part.split('\n');
          // Extract language if specified, e.g. ```javascript -> javascript
          const firstLine = lines[0].replace('```', '').trim();
          const codeContent = lines.slice(1, lines.length - 1).join('\n');
          
          return (
            <div key={index} className="my-3 overflow-hidden rounded-xl border border-white/10 bg-[#040811] font-mono text-[11px] sm:text-xs">
              {firstLine && (
                <div className="bg-white/5 px-4 py-1.5 text-gray-400 border-b border-white/5 flex items-center justify-between text-[10px] uppercase font-bold tracking-wider">
                  <span>{firstLine}</span>
                  <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-gray-300">Code Block</span>
                </div>
              )}
              <pre className="p-4 overflow-x-auto text-amber-200 custom-scrollbar whitespace-pre">
                <code>{codeContent}</code>
              </pre>
            </div>
          );
        }

        // Handle regular text with lines
        const lines = part.split('\n');
        return (
          <div key={index} className="space-y-1.5">
            {lines.map((line, lineIdx) => {
              const trimmed = line.trim();
              if (!trimmed) {
                return <div key={lineIdx} className="h-2" />;
              }

              // Headers: ###, ##, #
              if (trimmed.startsWith('###')) {
                return (
                  <h4 key={lineIdx} className="text-sm font-extrabold text-[#FFD54A] mt-2 mb-1">
                    {renderInlineStyles(trimmed.replace(/^###\s*/, ''))}
                  </h4>
                );
              }
              if (trimmed.startsWith('##')) {
                return (
                  <h3 key={lineIdx} className="text-base font-extrabold text-[#FFD54A] mt-3 mb-1">
                    {renderInlineStyles(trimmed.replace(/^##\s*/, ''))}
                  </h3>
                );
              }
              if (trimmed.startsWith('#')) {
                return (
                  <h2 key={lineIdx} className="text-lg font-black text-[#FFD54A] mt-4 mb-2">
                    {renderInlineStyles(trimmed.replace(/^#\s*/, ''))}
                  </h2>
                );
              }

              // Bullet points
              if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                const bulletText = trimmed.replace(/^[-*]\s*/, '');
                return (
                  <div key={lineIdx} className="flex items-start space-x-2 pl-2">
                    <span className="text-[#FFD54A] mt-1.5 shrink-0 select-none text-[10px]">✦</span>
                    <span className="flex-1">{renderInlineStyles(bulletText)}</span>
                  </div>
                );
              }

              // Numbered list
              const matchNum = trimmed.match(/^(\d+)\.\s(.*)/);
              if (matchNum) {
                const num = matchNum[1];
                const text = matchNum[2];
                return (
                  <div key={lineIdx} className="flex items-start space-x-2 pl-2">
                    <span className="text-amber-400 font-extrabold shrink-0 select-none text-xs mt-0.5">{num}.</span>
                    <span className="flex-1">{renderInlineStyles(text)}</span>
                  </div>
                );
              }

              // Blockquotes
              if (trimmed.startsWith('>')) {
                return (
                  <blockquote key={lineIdx} className="border-l-4 border-amber-500 bg-white/5 pl-4 pr-2 py-1.5 rounded-r-xl my-2 italic text-gray-300">
                    {renderInlineStyles(trimmed.replace(/^>\s*/, ''))}
                  </blockquote>
                );
              }

              // Standard line
              return (
                <p key={lineIdx} className="leading-relaxed">
                  {renderInlineStyles(line)}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

// Function to parse bold, italic, and inline code within a line
function renderInlineStyles(text: string): React.ReactNode {
  if (!text) return '';

  // Match bold (**text**), italic (*text*), inline code (`code`)
  // Regex splitting helps preserve text pieces
  const tokens = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);

  return (
    <>
      {tokens.map((token, idx) => {
        if (token.startsWith('**') && token.endsWith('**')) {
          return (
            <strong key={idx} className="font-extrabold text-[#FFD54A]">
              {token.slice(2, -2)}
            </strong>
          );
        }
        if (token.startsWith('*') && token.endsWith('*')) {
          return (
            <em key={idx} className="italic text-gray-200">
              {token.slice(1, -1)}
            </em>
          );
        }
        if (token.startsWith('`') && token.endsWith('`')) {
          return (
            <code key={idx} className="px-1.5 py-0.5 rounded bg-black/40 text-[#FFD54A] border border-white/5 font-mono text-[11px] sm:text-xs">
              {token.slice(1, -1)}
            </code>
          );
        }
        return token;
      })}
    </>
  );
}
