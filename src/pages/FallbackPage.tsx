export default function FallbackPage({ fileName }: { fileName: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-xl">Erro ao carregar arquivo.</p>
      <p className="text-base">{fileName}</p>
    </div>
  );
}
