import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import { Context } from "./Global/Context";
import { Model } from "./Component/Login/Model";
import { Navbar } from "./Component/Navbar/Navbar";
import { Stories } from "./Component/Stories/Stories";
import { Create } from "./Component/Create/Create";
import { Posts } from "./Component/Posts/Posts";
import { Sidebar } from "./Component/Sidebar/Sidebar";
import Loading from "./Component/Loading/Loading";
import { useEffect, useState } from "react";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Context>
          {loading && <Loading />}
      <Model />
      <Navbar />
      <Stories />
     
        <Create />
        <Sidebar />

      <Posts />
    </Context>
  );
};
export default App;
