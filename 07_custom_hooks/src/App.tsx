import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export const App = () => {
  const { getUsers, useProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  const style = {
    border: "none",
    outline: "none",
    borderRadius: "9999px",
    padding: "0 16px",
    margin: "8px",
    backgroundColor: "#800080",
    height: "40px",
    color: "#FFF",
  };
  return (
    <div>
      <button style={style} onClick={onClickFetchUser}>
        データ取得
      </button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {useProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
};
