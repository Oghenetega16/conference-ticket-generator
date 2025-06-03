import Background from "./components/Background"

export default function TicketPage({ previewUrl, formData }) {
    const today = new Date()
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }
    const currentDate = today.toLocaleDateString('en-US', options)
    
    function ticketNumber() {
        const num = Math.floor(Math.random() * 100000)
        return num.toString().padStart(5, '0')
    }

    return (
        <Background>
                <div className="flex justify-center h-6 mt-8">
                    <img src="./assets/images/logo-full.svg"/>
                </div>
                <div className="text-center sm:w-110 md:w-120 lg:w-140">
                    <h1 className="text-3xl font-bold mt-8 mb-6 md:text-4xl">Congrats, <span className="bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent capitalize">{formData.fullName}</span>! Your ticket is ready.</h1>
                    <p className="text-neutral-300 lg:w-100 mx-auto">We've emailed your ticket to <span className="text-orange-500">{formData.email}</span> and will send updates in the run up to the event.</p>
                </div>
                <div className="mt-12 mb-80 relative">
                    <img src="./assets/images/pattern-ticket.svg" alt="ticket" className="sm:w-100" /> 
                    <div className="flex items-center justify-between w-full h-full absolute top-0 pl-4">
                        <div className="flex flex-col space-y-10 sm:space-y-13">
                            <div>
                                <img src="./assets/images/logo-full.svg" alt="Event logo" className="w-42" />
                                <p className="ml-9 text-sm">{currentDate} / Austin, TX</p>
                            </div>
                            <div className="flex space-x-3">
                                <img src={previewUrl} alt={`${formData.fullName}'s avatar`} className="w-12 h-12 object-cover rounded-lg"/>
                                <div>
                                    <h2 className="text-lg capitalize">{formData.fullName}</h2>
                                    <p className="text-sm flex items-center gap-1"><img src="./assets/images/icon-github.svg" alt="github" className="w-5" />{formData.github}</p>
                                </div>
                            </div>
                        </div>
                        <div className="rotate-90 text-xl">
                            <p>#{ticketNumber()}</p>
                        </div>
                    </div>
                </div>
        </Background>
    )
}