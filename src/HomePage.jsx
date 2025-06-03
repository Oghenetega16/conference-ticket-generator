import Background from './components/Background'
import Form from './components/Form'
import Header from './components/Header'

export default function HomePage({ formData, setFormData, previewUrl, setPreviewUrl }) {
    return (
        <Background>
            <Header />
            <Form formData={formData} setFormData={setFormData} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} />
        </Background>
    )
}