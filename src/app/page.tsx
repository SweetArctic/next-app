import Image from "next/image";
import Landscape from "./Image.jpg";

export default function Card() {
  return (
    <section className="grid w-80 rounded-[15px] shadow-md overflow-hidden border-2 border-red-300">
      <figure className="p-0 flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 p-4">
        <Image src={Landscape} alt="Red Heaven" className=""/>
      </figure>
      <article className="grid gap-2 p-4 bg-white">
        <h2 className="text-lg font-bold text-gray-900">Red Heaven</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt aspernatur expedita eum recusandae, sed voluptatibus laudantium quibusdam ipsa doloremque sequi vitae rerum assumenda commodi libero soluta ex impedit at ullam?
        </p>
      </article>
      <footer className="flex gap-2 p-4 bg-white">
        <span className="px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full"> #tailwind</span>
        <span className="px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full"> #frontendeverything </span>
      </footer>
    </section>
  );
}
