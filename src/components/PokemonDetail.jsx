import { colorByStat, colorByType } from "../constants/pokemon";
import Evolutions from "./Evolutions";

const PokemonDetail = ({ pokemon }) => {
  return (
    <>
      <header className="absolute left-1/2 -translate-x-1/2 -translate-y-[92%] scale-[180%]">
        <img className="pixelated" src={pokemon?.image} alt="" />
      </header>
      <div className="overflow-y-auto px-4 pt-12 grid gap-4 content-start h-full hidden-scroll">
        <span className="text-slate-400 text-sm font-semibold font-outfit">
          N° {pokemon?.id}
        </span>
        <h2 className="font-bold text-2xl capitalize font-outfit">{pokemon?.name}</h2>
        <ul className="flex gap-2 justify-center">
          {pokemon?.types.map((type) => (
            <li
              className={`p-1 rounded-md px-2 text-white text-sm capitalize font-outfit ${colorByType[type]}`}
              key={type}
            >
              {type}
            </li>
          ))}
        </ul>
        <div>
          <h4 className="font-bold capitalize font-outfit">Descrição</h4>
          <p className="text-slate-400">{pokemon?.description}</p>
        </div>
        {/* Altura y peso */}
        <section className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <h4 className="font-bold capitalize font-outfit">Altura</h4>
            <span className="bg-slate-100 block rounded-full font-outfit p-1">{pokemon?.height / 10}m</span>
          </div>
          <div className="grid gap-2">
            <h4 className="font-bold capitalize font-outfit">Peso</h4>
            <span className="bg-slate-100 block rounded-full font-outfit p-1">{pokemon?.weight / 10}kg</span>
          </div>
        </section>
        {/* Habilidades */}
        <section className="grid gap-2">
          <h4 className="font-bold capitalize font-outfit">Habilidades</h4>
          <ul className="grid grid-cols-2 gap-4 font-outfit">
            {pokemon?.abilities.map((ability) => (
              <li
                key={ability}
                className="bg-slate-100 block rounded-full p-1 capitalize"
              >
                <span>{ability}</span>
              </li>
            ))}
          </ul>
        </section>
        {/* Stats */}
        <section className="grid gap-2">
          <h4 className="font-bold capitalize font-outfit">Status</h4>
          <ul className="flex justify-center gap-3 flex-wrap font-outfit">
            {pokemon?.stats.map((stat) => (
              <li
                className={`p-1 rounded-full ${colorByStat[stat.name]}`}
                key={stat.name}
              >
                <div className="bg-green-500 rounded-full w-[26px] aspect-square grid place-content-center">
                  <span className="text-[10px] text-white font-semibold">
                    {stat.name}
                  </span>
                </div>
                <span className="font-bold text-xs">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="grid gap-2">
          <h4 className="font-bold capitalize font-outfit">Evoluções</h4>
          <Evolutions evolutions={pokemon?.evolutions ?? []} />
        </section>
      </div>
    </>
  );
};
export default PokemonDetail;
