export default function Hero() {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row w-screen h-screen p-12 z-0">
        <article className="flex w-6/12 flex-wrap flex-col gap-2">
          <h1 className=" text-6xl font-['inter'] font-extrabold">
            FIND CLOTHES THAT MATCHES YOUR LIFESTYLE
          </h1>
          <p className="text-md font-['inter'] py-2">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style
          </p>
          <button className="bg-black text-white w-36 rounded-full px-6 py-3 hover:text-[rgb(240,240,240)]">
            Shop Now
          </button>
        </article>
        <article className="w-6/12 bg-[url('./Vector.png')] bg-no-repeat">
          <img
            className=" rounded-full border-2 border-black "
            src="./Hero-bg.png"
          />
        </article>
      </section>
    </>
  );
}