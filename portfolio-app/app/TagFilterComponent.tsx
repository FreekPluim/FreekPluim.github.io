"use client";

export default function TagFilter({ Tag, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "border-purple-500"
    : "border-stone-500 hover:border-white";

  return (
    <button
      onClick={() => onClick(Tag)}
      className={buttonStyles + " border-1 rounded-full"}
    >
      <p className="pl-10 pr-10 pt-2 pb-2 font-bold">{Tag}</p>
    </button>
  );
}
