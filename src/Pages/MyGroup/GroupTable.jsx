import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const GroupTable = ({ group, groups, setGroups }) => {
    const Navigate = useNavigate();
    const { _id, name, Category, maxMembers, startDate, imageURL } = group;

    const handleUpdate = (_id) => {
        Navigate(`/updateGroup/${_id}`);
}
    
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // start deleting the group
                fetch(`https://group-server-six.vercel.app/groups/groups/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            // remove the group from the state
                            const remainingGroup = groups?.filter(g => g._id !== _id);
                            setGroups(remainingGroup);
                        }
                    })


            }
        });

    }

    return (
        <tr>
            <td>
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={imageURL}
                                alt={name} />
                        </div>
                    </div>
                    <h1 className="font-medium text-base">{name}</h1>
                </div>
            </td>
            <td>{Category}</td>
            <td className="text-center">{maxMembers}</td>
            <td>{startDate}</td>
            <th>
                <Link to={`/groupDetails/ ${_id}`}>
                    <button className="btn btn-info btn-outline btn-sm hover:text-white">Info</button>
                </Link>
            </th>
            <th>
                <button onClick={()=>handleUpdate(_id)} className="btn btn-success  btn-sm hover:text-white">Update</button>
            </th>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-error hover:bg-red-500 hover:text-white  btn-sm">Delete</button>
            </th>
        </tr>
    );
};

export default GroupTable;