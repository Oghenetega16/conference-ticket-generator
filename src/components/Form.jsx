import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Form({ previewUrl, setPreviewUrl }) {
    const fileInputRef = useRef(null)
    const [file, setFile] = useState(null)
    
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        github: ""
    })
    const[errors, setErrors] = useState({
        image: "",
        fullName: "",
        email: "",
        github: ""
    })
    const navigate = useNavigate()

    const MAX_FILE_SIZE = 500 * 1024 

    const handleFile = (selectedFile) => {
        if (!selectedFile) return
    
        if (!["image/jpeg", "image/png"].includes(selectedFile.type)) {
            setErrors((prev) => ({ ...prev, image: "Only JPG or PNG files are allowed." }))
            return
        }
        
        if (selectedFile.size > MAX_FILE_SIZE) {
            setErrors((prev) => ({ ...prev, image: "File size must be less than 500KB." }))
            return
        }
        
        setFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile))
        setErrors((prev) => ({ ...prev, image: "" }))
    }
        
    const handleChange = (e) => {
        handleFile(e.target.files[0])
    }
    
    const handleDrop = (e) => {
        e.preventDefault()
        handleFile(e.dataTransfer.files[0])
    }

    const handleRemove = () => {
        setFile(null)
        setPreviewUrl("")
        fileInputRef.current.value = ""
    }
    
    const triggerFileInput = () => fileInputRef.current.click()

    function validate() {
        const newErrors = {}

        if (!file) {
            newErrors.image = "Please upload a valid photo (JPG or PNG, max 500KB)."
        }

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Name is required."
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address."
        }

        if (!formData.github.trim()) {
            newErrors.github = "Please enter a valid GitHub username."
        } else if (!formData.github.startsWith('@')) {
            newErrors.github = "GitHub username must start with '@'."
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0
    }

    const updateFormData = (newData) => setFormData((prev) => ({ ...prev, ...newData }))

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            navigate('/ticketpage')
        }
    }

    return (
        <form className="px-5" onSubmit={handleSubmit}>
            <div onClick={!file ? triggerFileInput : undefined} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} className="w-full my-8 cursor-pointer group">
                <div className="flex flex-col items-center border border-dashed border-neutral-700 bg-upload-avatar p-6 rounded-xl group-hover:bg-upload-hover group-hover:border-neutral-500 focus:outline-offset-3 focus:outline-upload-focus transition">
                    {previewUrl ? (
                        <>
                            <img src={previewUrl} alt="preview" className="w-16 h-16 object-cover rounded-xl mb-2 border-2 border-neutral-700"/>
                            <div className="flex gap-4 mt-4 text-neutral-0">
                                <button type="button" onClick={handleRemove} className="text-sm underline bg-upload-icon px-3 py-1 rounded">Remove Image</button>
                                <button type="button" onClick={triggerFileInput} className="text-sm bg-upload-icon px-3 py-1 rounded">Change Image</button>
                            </div>
                        </>
                    ) : (
                        <>
                        <img src="./assets/images/icon-upload.svg" alt="upload icon" className="w-12 h-12 mb-2 border-1 border-neutral-700 bg-upload-icon p-3 rounded-xl my-2 group-hover:bg-upload-icon group-hover:border-neutral-500"/>
                        <span>Drag and drop or click to upload</span>
                        </>
                    )}
                    <input type="file" accept="image/jpeg,image/png" ref={fileInputRef} onChange={handleChange} className="hidden"/>
                </div>
                <p className={`flex items-center gap-2 text-xs mt-3 ${errors.image ? "text-orange-700" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke={errors.image ? '#F67464' : '#D1D0D5'} stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/><path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/><path stroke={errors.image ? '#F67464' : '#D1D0D5'} stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/></svg>
                    {errors.image || "Upload your photo (JPG or PNG, max size: 500KB)."}
                </p>
            </div>
            
            <label htmlFor="fName" className="inline-flex mb-2 text-lg">Full Name</label>
            <input type="text" name="fName" id="fName" className={`bg-upload-avatar border ${errors.fullName ? 'border-orange-700' : 'border-neutral-500'} rounded-xl w-full p-3 cursor-pointer hover:bg-upload-hover focus:outline-offset-3 focus:outline-upload-focus`} onChange={(event) => updateFormData({fullName: event.target.value})}/>
            {errors.fullName && 
                <p className="flex items-center gap-2 text-xs mt-2 -mb-1 text-orange-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke={errors.email ? '#F67464' : '#D1D0D5'} stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/><path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/><path stroke={errors.email ? '#F67464' : '#D1D0D5'} stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/></svg>
                    {errors.fullName}   
                </p>
            }

            <label htmlFor="email" className="inline-flex mb-2 mt-6 text-lg">Email Address</label>
            <input type="email" name="email" id="email" placeholder="example@email.com" className={`bg-upload-avatar border ${errors.email ? 'border-orange-700' : 'border-neutral-500'} rounded-xl w-full p-3 placeholder:text-neutral-300 cursor-pointer hover:bg-upload-hover focus:outline-offset-3 focus:outline-upload-focus`} onChange={(event) => updateFormData({email: event.target.value})}/>
            {errors.email && 
                <p className="flex items-center gap-2 text-xs mt-2 -mb-1 text-orange-700">  
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke={errors.email ? '#F67464' : '#D1D0D5'} stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/><path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/><path stroke={errors.email ? '#F67464' : '#D1D0D5'} stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/></svg>
                    {errors.email}
                </p>
            }

            <label htmlFor="github" className="inline-flex mb-2 mt-6 text-lg">GitHub Username</label>
            <input type="text" name="github" id="github" placeholder="@yourusername" className={`bg-upload-avatar border ${errors.github ? 'border-orange-700' : 'border-neutral-500'} rounded-xl w-full p-3 placeholder:text-neutral-300 cursor-pointer hover:bg-upload-hover focus:outline-offset-3 focus:outline-upload-focus`} onChange={(event) => updateFormData({github: event.target.value})}/>
            {errors.github &&
                <p className="flex items-center gap-2 text-xs mt-2 -mb-1 text-orange-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke={errors.email ? '#F67464' : '#D1D0D5'} stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/><path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/><path stroke={errors.email ? '#F67464' : '#D1D0D5'} stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/></svg>
                    {errors.github}
                </p>
            }

            <button type="submit" className="block w-full bg-orange-700 hover:border-b-4 hover:border-orange-500 transition-all cursor-pointer p-3 rounded-xl text-xl text-neutral-900 font-extrabold mt-12 mb-32 focus:outline-offset-3 focus:outline-neutral-300">Generate My Ticket</button>
        </form>
    )
}
