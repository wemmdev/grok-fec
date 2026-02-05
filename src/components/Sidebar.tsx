
import grokLogo from '../assets/grok-svg/grok-logo.svg'
import searchIcon from '../assets/grok-svg/grok.com-1.svg'
import writeIcon from '../assets/grok-svg/grok.com-2.svg'
import audioIcon from '../assets/grok-svg/grok.com-3.svg'
import folderIcon from '../assets/grok-svg/grok.com-5.svg'
import historyIcon from '../assets/grok-svg/grok.com-6.svg'
import userIcon from '../assets/images/cat-pp.jpg'
import expandIcon from '../assets/grok-svg/grok.com-7.svg'

function Sidebar() {
    const menuItems = [
        { icon: searchIcon, alt: 'Search' },
        { icon: writeIcon, alt: 'Grok' },
        { icon: audioIcon, alt: 'Audio' },
        { icon: folderIcon, alt: 'Library' },
        { icon: historyIcon, alt: 'History' },
    ]

    return (
        <div className="w-[60px] h-screen bg-black flex flex-col items-center py-10 border-r border-white/10 relative z-20">
            <div className="mb-60">
                <a href="/">
                    <img src={grokLogo} alt="Grok" className="w-8 h-8 invert" />
                </a>
            </div>

            <nav className="flex-1 flex flex-col gap-2 w-full px-1.5">
                {menuItems.map((item, index) => {
                    const isActive = index === 0
                    return (
                        <button
                            key={index}
                            className={`
                                w-full aspect-square flex items-center justify-center transition-all group relative
                                ${isActive
                                    ? 'rounded-full bg-white/10 text-white border border-white/10'
                                    : 'rounded-lg text-gray-400 hover:bg-white/10 hover:text-white border border-transparent'
                                }
                            `}
                        >
                            <img
                                src={item.icon}
                                alt={item.alt}
                                className={`w-5 h-5 transition-opacity ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}
                            />
                        </button>
                    )
                })}
            </nav>

            <div className="mt-auto flex flex-col items-center gap-2 pb-4 w-full px-2">
                <button className="w-full aspect-square flex items-center justify-center rounded-full overflow-hidden hover:opacity-80 transition-opacity mb-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500">
                        <img src={userIcon} alt="User" className="w-full h-full object-contain-cover rounded-full" />
                    </div>
                </button>

                <button className="flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors group">
                    <img src={expandIcon} alt="Expand" className="w-4 h-4 invert opacity-70 group-hover:opacity-100 transition-opacity" />
                </button>
            </div>
        </div>
    )
}

export default Sidebar