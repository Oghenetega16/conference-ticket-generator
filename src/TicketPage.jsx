export default function TicketPage({ previewUrl }) {
    return (
        <div className="font-display grid place-items-center min-h-screen px-5 text-neutral-0 bg-[url('../assets/images/background-mobile.png')] bg-no-repeat bg-cover">
            <div className="flex justify-center h-6 mt-8">
                <img src="./assets/images/logo-full.svg" />
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold mt-8 mb-6">Congrats, <span className="bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent">Jonatan Kristof</span>! Your ticket is ready.</h1>
                <p className="text-neutral-300">We've emailed your ticket to <span className="text-orange-500">jonatan@email.com</span> and will send updates in the run up to the event.</p>
            </div>
            <div className="mt-12 mb-32 relative">
                <img src="./assets/images/pattern-ticket.svg" alt="ticket" /> 
                <div className="flex items-center justify-between w-full absolute transform -translate-y-35 pl-4">
                    <div className="flex flex-col space-y-8">
                        <div>
                            <img src="./assets/images/logo-full.svg" alt="logo" className="w-42" />
                            <p className="ml-9 text-sm">Jan 31, 2025 / Austin, TX</p>
                        </div>
                        <div className="flex space-x-3">
                            <img src={previewUrl} alt="" className="w-12 h-12 object-cover rounded-xl"/>
                            <div>
                                <h2 className="text-lg">Jonathan Kristof</h2>
                                <p className="text-sm flex items-center gap-1"><img src="./assets/images/icon-github.svg" alt="github" className="w-5" />@jonatankristof0101</p>
                            </div>
                        </div>
                    </div>
                    <div className="rotate-90 text-xl">
                        <p>#01609</p>
                    </div>
                </div>
            </div>
        </div>
    )
}