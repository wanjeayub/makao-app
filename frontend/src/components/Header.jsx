import { FaQuestion, FaSearch, FaUserAlt} from 'react-icons/fa'

export const Header = () => {
  return <header className="bg-slate-200 flex flex-row items-center justify-between max-w-4xl mx-auto p-3">
    <div><span>Makao</span></div>
    <form className="bg-slate-100 p-2 rounded-lg items-center flex flex-row"><input className="bg-slate-100" type="text" placeholder="Search..." /><FaSearch className='text-slate-600'/></form>
    <div className="flex gap-1 items-center">
      <div className='flex flex-row items-center gap-1'><FaUserAlt className='text-slate-600'/>Account</div>
      <div className='flex flex-row items-center'><FaQuestion className='text-slate-600'/>Help</div>
    </div>
    </header>;
};
