export default function Form() {
    return (
        <form className="px-5 bg-[url('../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg')] bg-no-repeat bg-contain bg-bottom">
            <label for="fName" className="inline-flex mb-2 text-lg">Full Name</label>
            <input type="text" name="fName" id="fName" className="bg-upload-avatar border-2 border-neutral-700 rounded-xl w-full mb-6 p-3"></input>

            <label for="email" className="inline-flex mb-2 text-lg">Email Address</label>
            <input type="email" name="email" id="email" placeholder="example@email.com" className="bg-upload-avatar border-2 border-neutral-700 rounded-xl w-full mb-6 p-3 placeholder:text-neutral-300"></input>

            <label for="github" className="inline-flex mb-2 text-lg">GitHub Username</label>
            <input type="text" name="github" id="github" placeholder="@yourusername" className="bg-upload-avatar border-2 border-neutral-700 rounded-xl w-full mb-6 p-3 placeholder:text-neutral-300"></input>

            <button className="block w-full bg-orange-500 p-4 rounded-xl text-xl text-neutral-900 font-extrabold">Generate My Ticket</button>
        </form>
    )
}