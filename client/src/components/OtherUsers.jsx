import React from "react";
import { useSelector } from "react-redux";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";

const OtherUsers = () => {
  useGetOtherUsers();
  const otherUsers = useSelector((state) => state.user.otherUsers);

  return (
    <div className="overflow-auto h-128">
      {otherUsers.length > 0 ? (
        otherUsers.map((user) => (
          <OtherUser key={user.id} user={user} />
        ))
      ) : (
        <p>No other users found.</p>
      )}
    </div>
  );
};

export default OtherUsers;
