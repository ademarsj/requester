import { useState } from "react";
import { insertBaseURL } from "./database/config";

import ButtonDev from "./components/button";
import { cn } from "./lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

type SideBarProps = {
  setData: React.Dispatch<React.SetStateAction<any>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const getColor = function (method: string) {
  switch (method) {
    case "GET":
      return "text-green-500";
    case "POST":
      return "text-blue-500";
    case "PUT":
      return "text-purple-500";
    case "DELETE":
      return "text-red-500";

    default:
      return "text-green-50";
  }
};

export default function SideBar({ setData, setPage }: SideBarProps) {
  const [urlParams, setUrlParams] = useState("");
  const [baseURL, setBaseURL] = useState("");
  const [selectV, setSelectV] = useState("GET");

  return (
    <div className="min-w-96 bg-slate-800 p-4 flex flex-col gap-4">
      <Select value={selectV} onValueChange={(nValue) => setSelectV(nValue)}>
        <SelectTrigger
          className={cn(
            "w-[100px] bg-slate-900 border-slate-900 text-slate-500 font-semibold",
            getColor(selectV)
          )}
        >
          <SelectValue placeholder="Método" />
        </SelectTrigger>
        <SelectContent className="w-[100px] bg-slate-900 border-slate-900 text-slate-200 font-semibold">
          <SelectItem
            className="hover:cursor-pointer text-green-500"
            value="GET"
          >
            GET
          </SelectItem>
          <SelectItem
            className="hover:cursor-pointer text-blue-500"
            value="POST"
          >
            POST
          </SelectItem>
          <SelectItem
            className="hover:cursor-pointer text-purple-500"
            value="PUT"
          >
            PUT
          </SelectItem>
          <SelectItem
            className="hover:cursor-pointer text-red-500"
            value="DELETE"
          >
            DELETE
          </SelectItem>
        </SelectContent>
      </Select>

      <input
        className="selection:bg-orange-400"
        type="text"
        placeholder="urlParams"
        maxLength={18}
        value={urlParams}
        onChange={(e) => setUrlParams(e.target.value)}
      ></input>
      <ButtonDev setData={setData} urlParams={urlParams}>
        Pesquisar
      </ButtonDev>
      <ButtonDev
        onClick={() => {
          setPage((prevPage) => (prevPage === "default" ? "other" : "default"));
        }}
      >
        Change Page
      </ButtonDev>

      <div className="flex flex-col gap-2">
        <h1 className="text-gray-300 mb-2 text-2xl leading-[40px] h-8 bg-gray-700">
          Configuração
        </h1>

        <input
          className="selection:bg-orange-400"
          type="text"
          placeholder="Base URL"
          maxLength={200}
          value={baseURL}
          onChange={(e) => setBaseURL(e.target.value)}
        ></input>

        <ButtonDev
          onClick={async () => {
            await insertBaseURL(baseURL);
            setBaseURL("");
          }}
        >
          Salvar URL
        </ButtonDev>
      </div>
    </div>
  );
}
