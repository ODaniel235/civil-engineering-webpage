export default function Authentication(props) {
  return (
    <>
      <header className="fixed top-0 w-screen h-fit flex justify-center sm:justify-between px-12 bg-gray-800 items-center py-0">
        <img src="unport(2)logo.png" alt="logo" height={72} width={72} />
        <button className="text-white font-bold px-4 h-fit border-2 border-solid border-[aliceblue] rounded-full text-center shadow-2xl shadow-[rgb(240,248,255)] hidden sm:block hover:text-blue-500 whitespace-nowrap">
          Confused ?
        </button>
      </header>
      <main className=" h-screen py-24 w-screen flex flex-wrap px-5  justify-center">
        <div className="h-fit w-fit p-4 bg-white flex gap-6 flex-col justify-center flex-wrap rounded-2xl shadow-lg  shadow-gray-800">
          <label
            htmlFor="reg-number"
            className=" font-semibold font-['Poppins']"
          >
            Reg Number
          </label>
          <input
            id="reg-number"
            type="text"
            className=" w-[100%] outline-none border-solid border border-black rounded-xl p-2"
            placeholder="DWS127-EF"
            onChange={props.handleChange}
          />
          <button
            className=" px-4 bg-gray-800 rounded-full py-2 text-white shadow-lg"
            onClick={props.changeLogs}
          >
            Authenticate
          </button>
        </div>
      </main>
    </>
  );
}
