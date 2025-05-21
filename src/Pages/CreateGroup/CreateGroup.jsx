const CreateGroup = () => {
    return (
        <div className=' container w-auto flex flex-col items-center my-14'>
            <h1 className='text-3xl mb-12 font-bold text-cyan-600'>Create Group</h1>

            <form className="fieldset bg-base-200 border-base-300 rounded-box border p-8 text-xl w-2xl shadow-2xl">
                <label className="label">Group Name:</label>
                <input type="text" name='name' placeholder="Group Name" className="input mb-3 w-full" />

                <label className="label" >Choose a Hobby Category:</label>
                <select name="dropdown" className="input mb-3 w-full" >
                    <option value="Drawing & Painting">Drawing & Painting</option>
                    <option value="Photography">Photography</option>
                    <option value="Video Gaming">Video Gaming</option>
                    <option value="Fishing">Fishing</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Writing">Writing</option>
                    <option value="Reading">Reading</option>
                    <option value="Running">Running</option>
                </select>

                <label className="label">Description</label>
                <textarea className="textarea h-24 mb-3 w-full" placeholder="Description"></textarea>

                <label className="label">Meeting Location:</label>
                <input type="text" name='meetingLocation' placeholder="Meeting Location" className="input mb-3 w-full" />

                <label className="label">Max Members:</label>
                <input type="number" name='maxMembers' placeholder="Max Members" className="input mb-3 w-full" />

                <label className="label">Start Date:</label>
                <input type="date" name='startDate' placeholder="Start Date" className="input mb-3 w-full" />

                <label className="label">Image URL:</label>
                <input type="url" name='imageURL' placeholder="Image URL" className="input mb-3 w-full" />

                <label className="label">User Name:</label>
                <input type="text" name='userName' className="input mb-3 w-full" value="User Name" readOnly/>


                <label className="label">User Email:</label>
                <input type="text" name='userEmail' className="input mb-6 w-full" value="User Email" readOnly />

                <input type="submit" value="Create Group" className="btn btn-accent text-white" />
            </form>
        </div>
    );
};

export default CreateGroup;