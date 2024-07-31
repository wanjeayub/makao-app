export const Header = () => {
  return <header className="bg-slate-200 flex flex-row items-center justify-between max-w-4xl mx-auto p-3">
    <div><span>Makao</span></div>
    <div className="flex gap-1 items-center">
      <form className="bg-slate-100 p-2 rounded-lg"><input className="bg-slate-100" type="text" placeholder="Search..." /></form>
      <div>Account</div>
      <div>Help</div>
    </div>
    </header>;
};
