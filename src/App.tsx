import { useState } from "react";
import "./global.css";
import "./App.css";
import SideBar from "./sidebar";
import Viewside from "./Viewside";
// import { invoke } from "@tauri-apps/api/tauri";
// // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// setGreetMsg(await invoke("greet", { name }));

function App() {
  const [data, setData] = useState();
  const [page, setPage] = useState("default");

  return (
    <div className="flex h-full bg-slate-700 ">
      <SideBar setData={setData} setPage={setPage}></SideBar>
      <Viewside data={data} page={page}></Viewside>
    </div>
  );
}

export default App;
