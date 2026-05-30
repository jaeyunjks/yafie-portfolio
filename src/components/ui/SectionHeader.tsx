type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="content-fade-in mb-6">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>
    </div>
  );
}
