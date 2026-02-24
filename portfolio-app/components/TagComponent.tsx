interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <div className="rounded border border-[#5f377a] pl-1 pr-1">
      <p className="text-[#5f377a] font-bold">{text}</p>
    </div>
  );
}
