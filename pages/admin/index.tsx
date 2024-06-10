import { useRouter } from "next/router";

import ProtectedRoute from "@/components/ProtectedRoute";

import { supabase } from "@/utils/supabaseClient";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader";
import React, { useEffect, useRef, useState } from "react";


const Admin = () => {
  const [dataUser, setDataUser] = useState();
  const insert = useRef(true)
  useEffect(() => {
    (async() => {
      const { data } : any = await supabase.auth.getSession();
      if(data && data.session){
            
             const payload = {
                name : data.session.user.user_metadata.name,
                avatar : data.session.user.user_metadata.picture,
                email :data.session.user.user_metadata.email,
                loginType : 2,
                googleId : data.session.user.user_metadata.provider_id,
                role : 1
              }
              const { data : dataUser, error } = await supabase
              .from('users')
              .select('*')
              .eq('googleId', payload.googleId);
              if(dataUser?.length == 0 && insert.current) {
                  const { error } = await supabase
                  .from('users')
                  .insert(payload);
                  insert.current = false;
              }
      }
    })()
  }, []);


  const router = useRouter();
  const { user, loading } = useAuth();
 
  const signOut = () => {
    try {
      supabase.auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ProtectedRoute>
      {user?.email}
      <button onClick={signOut}>Sign out</button>
    </ProtectedRoute>
  );
};

export default Admin;
