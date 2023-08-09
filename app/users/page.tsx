
import { signOut, useSession } from "next-auth/react";
import EmptyState from "../components/EmptyState";
import getUsers from "../actions/get-users";


const People = async () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
}

export default People;
