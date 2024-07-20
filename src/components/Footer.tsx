export default function Footer() {
  return (
    <footer className="flex justify-between w-[972px] items-center text-[11px] mt-[12px] text-[#6d934e]">
      <small className="text-[11px] ">
        &copy; {new Date().getFullYear()}. Made with React by Kaushik Barua
      </small>
      <p>Version 1.0.0</p>
    </footer>
  );
}
