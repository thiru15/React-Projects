import { useState,useContext } from "react";
import AuthContext from "../store/auth-context";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [isFolder, setIsFolder] = useState(true);
  const a = useContext(AuthContext)

  function handleExpand() {
    setExpand(!expand);
  }
  if (isFolder) {
    return (
      <div>
        <button onClick={handleExpand}>{explorer.name}</button>
        { a.isLoggedin} context

        <div style={{ display: expand ? "block" : "none", paddingLeft: 250 }}>
          {explorer.items &&
            explorer.items.map((data) => {
              return <Folder explorer={data} />;
            })}
        </div>
      </div>
    );
  } else {
    <span>{explorer.name}</span>;
  }
}
export default Folder;
