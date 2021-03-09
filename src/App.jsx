import { useState, useCallback, useMemo } from "react";
import "./App.css";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules";

export function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const temp = useMemo(() => {
    return 1 + 3;
  }, []);
  console.log(temp);

  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
        <CssModules />
      </div>
    </>
  );
}
