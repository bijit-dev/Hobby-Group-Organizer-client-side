

const GroupTable = ({ group }) => {
    const { _id, name, Category, maxMembers, startDate, imageURL } = group;

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
                <button className="btn btn-info btn-outline btn-sm hover:text-white">Info</button>
            </th>
            <th>
                <button className="btn btn-success  btn-sm hover:text-white">Update</button>
            </th>
            <th>
                <button className="btn btn-error hover:bg-red-500 hover:text-white  btn-sm">Delete</button>
            </th>
        </tr>
    );
};

export default GroupTable;