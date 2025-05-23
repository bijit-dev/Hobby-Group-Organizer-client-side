import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";

const CreateGroup = () => {
    const { user } = use(AuthContext);

    const handleAddGroup = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newGroup = Object.fromEntries(formData.entries())

        // send coffee data to the db
        fetch('https://group-server-six.vercel.app/groups', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGroup)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "New Group added successfully!",
                        icon: "success",
                        draggable: true
                    });

                    form.reset()
                }
            })
    }



    return (
        <div className=' container mx-auto text-center px-5 my-14'>
            <h1 className='text-3xl mb-12 font-bold text-cyan-600'>Create Group</h1>

            <form onSubmit={handleAddGroup} className="bg-base-200 border-base-300 rounded-box border p-8 shadow-2xl">
                <div className=" grid grid-cols-1 md:grid-cols-2 ">
                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">Group Name :</label>
                        <input type="text" name='name' placeholder="Group Name" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label" >Category :</label>
                        <select className="select w-full" name="Category" required>
                            <option value="">Choose a hobbye</option>
                            <option >Drawing & Painting</option>
                            <option >Photography</option>
                            <option >Video Gaming</option>
                            <option >Fishing</option>
                            <option >Cooking</option>
                            <option >Writing</option>
                            <option >Reading</option>
                            <option >Running</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">Meeting Location :</label>
                        <input type="text" name='meetingLocation' placeholder="Meeting Location" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">Max Members :</label>
                        <input type="number" name='maxMembers' placeholder="Max Members" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">Start Date :</label>
                        <input type="date" name='startDate' placeholder="Start Date" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">Image URL :</label>
                        <input type="url" name='imageURL' placeholder="Image URL" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">User Name :</label>
                        <input type="text" name='userName' className="input w-full" value={user.displayName} readOnly />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">User Email :</label>
                        <input type="text" name='userEmail' className="input w-full" value={user.email} readOnly />
                    </fieldset>
                </div>

                <fieldset className=" fieldset bg-base-200 rounded-box p-4 text-xl">
                    <label className="label">Description :</label>
                    <textarea className="textarea h-24 mb-3 w-full" placeholder="Description" name="description" required></textarea>
                </fieldset>

                <input type="submit" value="Create Group" className="btn btn-accent text-white" />
            </form>
        </div>
    );
};

export default CreateGroup;