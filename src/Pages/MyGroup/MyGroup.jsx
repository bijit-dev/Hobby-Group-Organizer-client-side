import { useLoaderData } from "react-router";
import GroupTable from "./GroupTable";
import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const MyGroup = () => {
    const groups = useLoaderData();
        
    const { user } = use(AuthContext);
    const myGroups = groups.filter((data) => data.userEmail === user.email)

        

    return (
        <div className=" container mx-auto px-4 my-10">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-base font-bold ">
                            <th>Group Names</th>
                            <th>Category</th>
                            <th className="text-center">Max Members</th>
                            <th>Start Date</th>
                            <th>Details</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                            myGroups.map(group => <GroupTable key={group._id} group={group} />)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyGroup;