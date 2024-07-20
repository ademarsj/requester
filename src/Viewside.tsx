import React, { Suspense } from "react";
import LoadingPage from "./pages/LoadingPage";
import FallbackPage from "./pages/FallbackPage";

export default function Viewside({ data, page }: { data: any; page: string }) {
  let currPage =
    page === "default" ? "./pages/DefaultViewPage" : "./private-viewside.tsx";

  let LoadedPage = React.lazy(() =>
    import(currPage).catch((error) => {
      console.log("Error at loading custom file", error);
      return {
        default: () => <FallbackPage fileName={currPage}></FallbackPage>,
      };
    })
  );

  return (
    <div className=" flex bg-slate-900 p-4 text-gray-300 flex-col gap-6 w-full">
      <Suspense fallback={<LoadingPage />}>
        <LoadedPage data={data} />
      </Suspense>
    </div>
  );
}
