export default function Authentication(props) {
  const inputRegex = /[0-9]{12}[a-z]{2}/g;
  const checkRegex = /[0-9a-z]{1}/gi;
  return (
    <>
      <header className="fixed h-fit top-0 w-screen flex justify-center sm:justify-between px-12 bg-gray-800 items-center">
        <img src="unport(2)logo.png" alt="logo" height={72} width={72} />
        <button className="text-white font-bold px-4 h-fit border-2 border-solid border-[aliceblue] rounded-full text-center shadow-2xl shadow-[rgb(240,248,255)] hidden sm:block hover:border-blue-500 whitespace-nowrap">
          Confused ?
        </button>
      </header>
      <main className=" h-screen py-24 w-screen flex flex-wrap px-5  justify-center">
        <form
          onSubmit={props.changeLogs}
          className="h-fit w-fit p-4 bg-white flex gap-6 flex-col justify-center flex-wrap rounded-2xl shadow-lg  shadow-gray-800"
        >
          <label
            htmlFor="reg-number"
            className=" font-semibold font-['Poppins']"
          >
            Reg Number
          </label>
          <input
            id="reg-number"
            type="text"
            className={` w-[100%] border-solid border border-black rounded-xl p-2 ${
              inputRegex.test(props.value)
                ? "border-green-500 outline-green-500"
                : !inputRegex.test(props.value) && checkRegex.test(props.value)
                ? "outline-red-500"
                : "outline-none"
            }`}
            placeholder="DWS127-EF"
            onChange={props.handleChange}
          />
          <button
            type="submit"
            className=" px-4 bg-gray-800 rounded-full py-2 text-white shadow-lg hover:scale-105 hover:bg-gray-900 transition-all duration-300"
          >
            Authenticate
          </button>
        </form>
      </main>
    </>
  );
}
