const snippets = [
  "const ui = polished({ accessibility: true });",
  "deploy({ confidence: 'high', quality: 'premium' });",
];

export default function FloatingCode() {
  return (
    <div className="pointer-events-none absolute -right-4 top-8 hidden w-80 gap-3 lg:grid">
      {snippets.map((snippet) => (
        <pre
          key={snippet}
          className="frosted rounded-xl p-3 font-mono text-xs text-slate-600"
        >
          {snippet}
        </pre>
      ))}
    </div>
  );
}
