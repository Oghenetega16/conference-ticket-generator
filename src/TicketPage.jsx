export default function TicketPage({ previewUrl }) {
    return (
        <div className="font-display grid place-items-center min-h-screen px-5 text-neutral-0 bg-[url('../assets/images/background-mobile.png')] bg-no-repeat bg-cover">
            <div className="flex justify-center h-6 mt-8">
                <img src="./assets/images/logo-full.svg" />
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold mt-8 mb-6">Congrats, <span>Jonatan Kristof</span>! Your ticket is ready.</h1>
                <p className="text-neutral-300">We've emailed your ticket to <span>jonatan@email.com</span> and will send updates in the run up to the event.</p>
            </div>
            <div className="mt-12 mb-32 relative">
                <img src="./assets/images/pattern-ticket.svg" alt="ticket" />
                <div className="flex items-center justify-between absolute top-0 p-3">
                    <div className="flex flex-col space-y-8">
                        <div>
                            <img src="./assets/images/logo-full.svg" alt="logo" className="w-42" />
                            <p className="ml-9 text-sm">Jan 31, 2025 / Austin, TX</p>
                        </div>
                        <div className="flex space-x-3">
                            <img src={previewUrl} alt="preview" className="w-12 h-12 object-cover rounded-xl mb-2"/>
                            <div>
                                <h2>Jonathan Kristof</h2>
                                <p>@jonatankristof0101</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>#01609</p>
                    </div>
                </div>
            </div>
        </div>
    )
}