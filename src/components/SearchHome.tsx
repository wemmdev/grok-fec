
import { useState } from 'react'
import logoFull from '../assets/grok-svg/grok-logofull.svg'
import deepSearchIcon from '../assets/grok-svg/grok.com-14.svg'
import imagineIcon from '../assets/grok-svg/grok.com-11.svg'
import personaIcon from '../assets/grok-svg/grok.com-5.svg'
import voiceIcon from '../assets/grok-svg/grok.com-18.svg'
import chevronDown from '../assets/grok-svg/grok.com-12.svg'
import searchIcon from '../assets/grok-svg/grok.com-1.svg'

const SearchHome = () => {
    const [inputValue, setInputValue] = useState('')

    const actions = [
        { label: 'DeepSearch', icon: deepSearchIcon },
        { label: 'Imagine', icon: imagineIcon },
        { label: 'Pick Personas', icon: personaIcon, hasChevron: true },
        { label: 'Voice Chat', icon: voiceIcon }
    ]

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto z-10 animate-fade-in px-4">
            <div className="mb-12">
                <img src={logoFull} alt="Grok" className="h-16 invert" />
            </div>

            <div className="w-full relative mb-8">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <img src={searchIcon} alt="" className="w-6 h-6 opacity-50" />
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="What do you want to know?"
                    className="w-full bg-[#181818] text-white placeholder-gray-500 rounded-2xl py-4 pl-12 pr-32 focus:outline-none focus:ring-1 focus:ring-white/20 border border-white/5"
                />

                <div className="absolute inset-y-0 right-2 flex items-center gap-2">
                    <button className="flex items-center gap-2 bg-[#252525] px-4 h-10 rounded-full text-sm text-gray-300 hover:bg-[#333] transition-colors font-bold">
                        <img src={imagineIcon} className="w-6 h-6 invert" />
                        <span>Auto</span>
                        <img src={chevronDown} className="w-6 h-6 invert opacity-100" />
                    </button>
                    <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black hover:opacity-90 transition-opacity">
                        <img src={voiceIcon} className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
                {actions.map((action, idx) => (
                    <button key={idx} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-black/20 text-gray-400 hover:bg-white/10 hover:text-white transition-colors text-sm backdrop-blur-sm">
                        {/* invert color only when not pick persona */}
                        <img src={action.icon} className={`w-6 h-6 opacity-70 ${action.label !== 'Pick Personas' ? 'invert' : ''}`} />
                        <span>{action.label}</span>
                        {action.hasChevron && (
                            <img src={chevronDown} className="w-4 h-4 invert opacity-50 ml-1" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SearchHome
