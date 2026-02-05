
import Sidebar from './components/Sidebar'
import SearchHome from './components/SearchHome'
import grokBg from './assets/images/grok-bg.png'
import ghostIcon from './assets/grok-svg/grok.com-8.svg'

function App() {
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans selection:bg-white/20">
      <Sidebar />

      <div className="flex-1 relative flex flex-col">
        <img src={grokBg} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
        <div className="absolute top-4 right-6 z-10">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors px-3 py-1.5 rounded-full hover:bg-white/10 group">
            <img src={ghostIcon} alt="Private" className="w-4 h-4 invert opacity-70 group-hover:opacity-100" />
            <span>Private</span>
          </button>
        </div>

        <main className="flex-1 flex flex-col items-center justify-center relative p-4">
          <SearchHome />
        </main>
      </div>
    </div>
  )
}

export default App