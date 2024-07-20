import Counter from "./Counter";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
      <p>
        <b>Today's List</b>
      </p>
      <Counter />
    </header>
  );
}
