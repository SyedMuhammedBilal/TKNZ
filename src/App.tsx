import { Backdrop, CircularProgress } from "@material-ui/core";
import React, { useMemo } from "react";
import { RouterGuard } from "react-router-guard";
import getRoutes from "./routes/routes";

function App() {
  return (
    <React.Fragment>
      <AppIndex />
    </React.Fragment>
  );
}

const AppIndex = () => {
  const routes = useMemo(() => getRoutes(), []);

  return (
    <RouterGuard
      config={routes}
      loading={
        <Backdrop open={true} style={{ zIndex: 100000 }}>
          <CircularProgress color="primary" />
        </Backdrop>
      }
    />
  );
};

export default App;
