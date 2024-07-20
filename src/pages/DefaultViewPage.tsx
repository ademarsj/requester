export default function DefaultViewPage({ data }: { data: any }) {
  return (
    <div className="w-full h-full contents">
      <h1 className="text-2xl leading-[40px] h-8 bg-gray-700">Retorno</h1>
      <div className="bg-gray-900 h-full border-2 border-gray-300 p-2 overflow-auto shadow-inner">
        <pre className="text-sm">{JSON.stringify(data, null, "\t")}</pre>
      </div>
    </div>
  );
}
