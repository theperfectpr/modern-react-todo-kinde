import { ButtonTypeProps } from "../lib/types";

export default function Button(props: ButtonTypeProps) {
  const { onClick, buttonType, children } = props;
  return (
    <button
      onClick={onClick}
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white border
        rounded-[5px] cursor-pointer px-16 
        ${buttonType === "secondary" ? "opacity-[85%]" : ""}`}
    >
      {children}
    </button>
  );
}
