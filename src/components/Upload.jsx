export default function Upload() {
    return (
        <div className="w-full my-8 px-5">
            <p className="text-lg">Upload Avatar</p>
            <div className="flex flex-col items-center border-1 border-dashed border-neutral-700 bg-upload-avatar py-3 my-2 rounded-xl">
                <div className="border-2 border-neutral-700 bg-upload-icon p-3 rounded-xl my-2"><img src="./assets/images/icon-upload.svg" alt="upload icon" /></div>
                <p>Drag and drop or click to upload</p>
            </div>
            <p className="flex items-center gap-2 text-xs"><img src="./assets/images/icon-info.svg" alt="info icon" /> Upload your photo (JPG or PNG, max size: 500KB).</p>
        </div>
    )
}