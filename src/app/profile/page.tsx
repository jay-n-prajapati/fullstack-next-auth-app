import React from "react";
import { getUser } from "../../lib/actions";
import Logout from "@/components/Logout";

const ProfilePage = async () => {
  const { data } = await getUser();

  return (
    <div>
      <div>
        <div>
          <Logout />
        </div>
        <h1 className="text-2xl">Welcome!</h1>
        <div>
          <div>
            <h1>User Name : {data.username}</h1>
          </div>
          <div>
            <h1>User email : {data.email} </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
