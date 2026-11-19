import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Player from "./components/Player";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid h-screen overflow-hidden grid-cols-[250px_1fr] grid-rows-[70px_1fr_80px] text-zinc-100">
      
      {/* Sidebar: 1ª coluna, ocupando as 2 primeiras linhas */}
      <div className="col-start-1 row-start-1 row-span-2 h-full bg-black border-r border-zinc-800">
        <Sidebar />
      </div>

      {/* Header: 2ª coluna, 1ª linha */}
      <div className="col-start-2 row-start-1 h-full bg-zinc-900 border-b border-zinc-800">
        <Header />
      </div>

      {/* Main: 2ª coluna, 2ª linha */}
      <main className="col-start-2 row-start-2 bg-zinc-800 overflow-y-auto p-6 flex flex-col gap-6">
        <Player />
      </main>

      {/* Footer: 3ª linha inteira (ocupando as 2 colunas) */}
      <div className="col-span-2 row-start-3 h-full bg-zinc-950 border-t border-zinc-800">
        <Footer />
      </div>

    </div>
  );
}

export default App;