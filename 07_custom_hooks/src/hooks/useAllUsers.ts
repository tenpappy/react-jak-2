import axios from "axios";
import { useState } from "react";
import { User } from "../types/api/user";
import { UserProfile } from "../types/userProfile";

// 全ユーザの一覧を取得するカスタムフック
export const useAllUsers = () => {
  const [useProfiles, setUseProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUseProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });

  };

  return {getUsers,useProfiles,loading,error}

}
