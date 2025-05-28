export default function Form() {
    return (
        <form className="px-5">
            <div className="w-full my-8 group">
                <label for="file-upload" className="flex flex-col items-center">
                    <img src="./assets/images/icon-upload.svg" alt="upload icon" className="border-1 border-neutral-700 bg-upload-icon p-3 rounded-xl my-2 group-hover:bg-upload-icon group-hover:border-neutral-500" />
                    <span className="">Drag and drop or click to upload</span>
                </label>
                <input type="file" name="file-upload" id="file-upload" className="w-full h-30 file:text-transparent border-1 border-dashed border-neutral-700 bg-upload-avatar py-3 my-2 rounded-xl group-hover:bg-upload-hover group-hover:border-neutral-500 cursor-pointer focus:outline-offset-4 focus:outline-upload-focus">
                </input>
                <p className="flex items-center gap-2 text-xs"><img src="./assets/images/icon-info.svg" alt="info icon" /> Upload your photo (JPG or PNG, max size: 500KB).</p>
            </div>

            <label for="fName" className="inline-flex mb-2 text-lg">Full Name</label>
            <input type="text" name="fName" id="fName" className="bg-upload-avatar border-1 border-neutral-500 rounded-xl w-full mb-6 p-3 cursor-pointer hover:bg-upload-hover focus:outline-offset-3 focus:outline-upload-focus"></input>

            <label for="email" className="inline-flex mb-2 text-lg">Email Address</label>
            <input type="email" name="email" id="email" placeholder="example@email.com" className="bg-upload-avatar border-1 border-neutral-500 rounded-xl w-full mb-6 p-3 placeholder:text-neutral-300 cursor-pointer hover:bg-upload-hover focus:outline-offset-3 focus:outline-upload-focus"></input>

            <label for="github" className="inline-flex mb-2 text-lg">GitHub Username</label>
            <input type="text" name="github" id="github" placeholder="@yourusername" className="bg-upload-avatar border-1 border-neutral-500 rounded-xl w-full mb-6 p-3 placeholder:text-neutral-300 cursor-pointer hover:bg-upload-hover focus:outline-offset-3 focus:outline-upload-focus"></input>

            <button className="block w-full bg-orange-700 hover:border-b-4 hover:border-orange-500 transition-all cursor-pointer p-3 rounded-xl text-xl text-neutral-900 font-extrabold mb-32">Generate My Ticket</button>
        </form>
    )
}