export default function Header() {
    return (
        <div className="md:w-120 lg:w-140">
            <div className="flex justify-center h-6 mt-8">
                <img src="./assets/images/logo-full.svg" />
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold mt-8 mb-6 md:text-4xl">Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p className="text-xl text-neutral-300 md:text-base">Secure your spot at next year's biggest coding conference.</p>
            </div>
        </div>
    )
}