// import { useState } from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../../components/Card/GroupCard";


const AllGroups = () => {
    const groups = useLoaderData();

    return (
        <div className=" container mx-auto px-4 mt-10 mb-16">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr className="text-base font-bold ">
                                    <th>Group Names</th>
                                    <th>Category</th>
                                    <th className="text-center">Max Members</th>
                                    <th>Start Date</th>
                                    <th className="text-center">Details</th>
                                </tr>
                            </thead>
        
                            <tbody>
                                
                                {
                                    groups.map(group => <GroupCard key={group._id} group={group} />)
                                }
        
                            </tbody>
        
                        </table>
                    </div>
                </div>
    );
};

export default AllGroups;