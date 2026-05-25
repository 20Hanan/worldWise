import { useAuth } from "../contexts/FakeAuthContext";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
function ProtactedRoute({children}) {
    const {isAuthenticated}=useAuth();
   const navigate=useNavigate();
    useEffect(
        function(){
            if(!isAuthenticated) navigate('/');
        },[isAuthenticated,navigate]
    )
    return isAuthenticated? children:null;
    
}

export default ProtactedRoute
