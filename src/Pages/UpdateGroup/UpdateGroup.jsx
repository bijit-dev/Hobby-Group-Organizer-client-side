import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateGroup = () => {
    const initialGroups = useLoaderData();
    const { id } = useParams();
    const Navigate = useNavigate();
    const updateGroupData = initialGroups?.find((data) => data._id === id);
    const { _id, name, Category, meetingLocation, maxMembers, startDate, imageURL, userName, userEmail, description } = updateGroupData;

    const handleUpdateGroup = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newGroup = Object.fromEntries(formData.entries())

        // send updated coffee to the db
        fetch(`https://group-server-six.vercel.app/groups/groups/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGroup)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Navigate("/myGroup");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Group updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className=' container mx-auto text-center px-5 my-14'>
            <h1 className='text-3xl mb-12 font-bold text-cyan-600'>Update Group Info</h1>

            <form onSubmit={handleUpdateGroup} className="bg-base-200 border-base-300 rounded-box border p-8 shadow-2xl">
                <div className=" grid grid-cols-1 md:grid-cols-2 ">
                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">Group Name :</label>
                        <input type="text" name='name' defaultValue={name} placeholder="Group Name" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label" >Choose a Category :</label>
                        <select className="select w-full" name="Category" defaultValue={Category} required>
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
                        <input type="text" name='meetingLocation' defaultValue={meetingLocation} placeholder="Meeting Location" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">Max Members :</label>
                        <input type="number" name='maxMembers' defaultValue={maxMembers} placeholder="Max Members" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">Start Date :</label>
                        <input type="date" name='startDate' defaultValue={startDate} placeholder="Start Date" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">Image URL :</label>
                        <input type="url" name='imageURL' defaultValue={imageURL} placeholder="Image URL" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">User Name :</label>
                        <input type="text" name='userName' className="input w-full" defaultValue={userName} readOnly />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label">User Email :</label>
                        <input type="text" name='userEmail' className="input w-full" defaultValue={userEmail} readOnly />
                    </fieldset>
                </div>

                <fieldset className=" fieldset bg-base-200 rounded-box p-4 text-xl">
                    <label className="label">Description :</label>
                    <textarea className="textarea h-24 mb-3 w-full" placeholder="Description" name="description" defaultValue={description} required></textarea>
                </fieldset>

                <input type="submit" defaultValue="Create Group" className="btn btn-accent text-white" />
            </form>
        </div>
    );
};

export default UpdateGroup;