
import { signOut, useSession } from "next-auth/react";
import Button from "./components/button";
import EmptyState from "../components/EmptyState";


const People = () => {
    

    return (
        <div className="hidden lg:block lg:pl-80 h-full">
          <EmptyState/>  
        </div>
    );
}

export default People;
