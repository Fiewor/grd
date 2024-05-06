const Header = () => {
  return (
    <div className="bg-violet-50 w-100 h-[10dvh] p-6 border-b-neutral-600 flex justify-end items-center">
      <div className="flex items-center gap-2 p-4 justify-between">
        <span className="rounded-full width-[2rem] bg-neutral-800" />

        <div className="flex flex-col items-end justify-between">
          <p>John Abdulsalam Aboyeji</p>
          <p>Lecturer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
