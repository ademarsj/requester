import { getBaseUrl } from "../database/config";
import { Button } from "./ui/button";

type ButtonDevProps = {
  setData?: React.Dispatch<React.SetStateAction<any>>;
  urlParams?: string;
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  onClick?: undefined | Function;
};

export default function ButtonDev({
  setData,
  urlParams,
  children,
  onClick = undefined,
}: ButtonDevProps) {
  async function fetchData() {
    const base_url = await getBaseUrl();

    fetch(
      `${base_url}?document=${String(urlParams)
        .replaceAll(".", "")
        .replaceAll("/", "")
        .replaceAll(" ", "")
        .replaceAll("-", "")}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setData(data);
          });
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Fetch error ==== ", error);
        setData([]);
      });
  }

  return (
    <Button
      className="hover:bg-slate-700"
      onClick={onClick ? onClick : fetchData}
    >
      {children}
    </Button>
  );
}
