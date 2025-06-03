import Form from './components/Form'
import Header from './components/Header'

export default function HomePage({ formData, setFormData, previewUrl, setPreviewUrl }) {
    return (
        <main
            className="relative font-display grid place-items-center min-h-screen text-neutral-0"
            style={{
                backgroundImage: `
                url('/assets/images/pattern-lines.svg'),
                url('/assets/images/pattern-circle.svg'),
                url('/assets/images/pattern-squiggly-line-top.svg'),
                url('/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'),
                url('/assets/images/background-mobile.png')
                `,
                backgroundPosition: `
                center center,
                -1rem -2rem,
                16rem 1rem,
                bottom left,
                center center
                `,
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat no-repeat',
                backgroundSize: 'cover, 7rem, 8rem, 21rem, auto'
            }}
            >
            <Header />
            <Form formData={formData} setFormData={setFormData} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} />
        </main>
    )
}