export function NavBar() {
  return (
    <>
      <div className="text-center text-6xl font-thin text-white">
        <h1 className="underline p-5 min-[350px]:text-4xl max-[350px]:text-3xl">
          Sebastián Saguas
        </h1>
        <h1 className="text-4xl p-2 min-[350px]:text-xl max-[350px]:text-xl">
          Contador Público
        </h1>
        <h2 className="text-2xl p-2 mb-4 text-slate-400 min-[350px]:text-xl max-[350px]:text-xl">
          <strong className="underline">Matricula</strong>: En gestión
        </h2>
      </div>
    </>
  );
}
