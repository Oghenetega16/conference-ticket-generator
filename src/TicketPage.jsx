export default function TicketPage({ fName, email }) {
    return (
        <div className="font-display grid place-items-center min-h-screen text-neutral-0 bg-[url('../assets/images/background-mobile.png')] bg-no-repeat bg-cover">
            <div className="flex justify-center h-6 mt-8">
                <img src="./assets/images/logo-full.svg" />
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold mt-8 mb-6">Congrats, {fName}! Your ticket is ready.</h1>
                <p className="text-neutral-300">We've emailed your ticket to {email} and will send updates in the run up to the event.</p>
            </div>
            <div className="relative">
                <img src="./assets/images/pattern-ticket.svg" alt="ticket" />
                <div className="flex items-center justify-between">
                    <div>
                        <div>
                            <img src="./assets/images/logo-full.svg" />
                            <p>Jan 31, 2025 / Austin, TX</p>
                        </div>
                        <div>
                            <img />
                            <div>
                                <h2>Jonathan Kristof</h2>
                                <p><img /> @jonathankristof0101</p>
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