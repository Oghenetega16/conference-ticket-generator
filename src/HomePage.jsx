import Form from './components/Form'
import Header from './components/Header'

export default function HomePage() {
    return (
        <main className="font-display grid place-items-center min-h-screen text-neutral-0 bg-[url('../assets/images/background-mobile.png')] bg-no-repeat bg-cover">
            <div className="bg-[url('../assets/images/pattern-lines.svg')] bg-no-repeat bg-cover">
                <Header />
                <Form />
            </div>
        </main>
    )
}