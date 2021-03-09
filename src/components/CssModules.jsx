import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p>- CSS Modules -</p>
      <button>FIGHT</button>
    </div>
  );
};
