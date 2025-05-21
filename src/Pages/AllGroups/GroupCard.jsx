import React from 'react';
import { Link } from 'react-router';

const GroupCard = ({ group }) => {
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
            
            <td>
                <Link to={`/groupDetails/ ${_id}`}>
                <button className='btn w-full mt-4 btn-primary btn-soft hover:text-white'>See More</button>
            </Link>
                </td>
        </tr>

    );
};

export default GroupCard;