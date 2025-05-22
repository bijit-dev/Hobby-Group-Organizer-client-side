import { useLoaderData } from "react-router";
import GroupTable from "./GroupTable";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const MyGroup = () => {
    const initialGroups = useLoaderData();

    const { user } = use(AuthContext);

    
    const [groups, setGroups]= useState([])
    useEffect(() => {
        const myGroups = initialGroups?.filter((data) => data.userEmail === user.email) || [];
        setGroups(myGroups);
    }, [initialGroups, user.email]);

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
                            groups?.map(group => <GroupTable key={group._id} group={group} groups={groups} setGroups={setGroups} />)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyGroup;