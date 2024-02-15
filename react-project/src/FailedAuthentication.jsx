export default function FailedAuthentication(props) {
  return (
    <>
      <header className="fixed top-0 w-screen h-fit flex justify-center sm:justify-between px-12 bg-gray-800 items-center">
        <img src="uniport-logo.png" alt="logo" height={72} width={72} />
        <button className="text-white font-bold px-4 h-fit border-2 border-solid py-3 border-[aliceblue] rounded-full text-center shadow-2xl shadow-[rgb(240,248,255)] hidden sm:block hover:text-blue-500 whitespace-nowrap">
          Confused ?
        </button>
      </header>
      <main className=" h-screen py-24 w-screen flex flex-wrap px-5 mt-14 justify-center">
        <div className="h-fit w-fit p-4 bg-white flex gap-6 flex-col items-center flex-wrap rounded-2xl shadow-lg  shadow-gray-800">
          <img
            src="disappointment.png"
            alt="disappointed"
            height={120}
            width={120}
          />
          <h1 className="font-semibold font-['Poppins'] text-gray-800">
            Who are You ?
          </h1>
          <p>
            Message{" "}
            <strong>
              <a
                href="https://wa.me/+2348143709885"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer animate-pulse"
              >
                Dan
              </a>
            </strong>{" "}
            or{" "}
            <strong>
              <a
                href="https://wa.me/+2349039451869"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer animate-pulse"
              >
                Isaiah
              </a>
            </strong>{" "}
            to gain access to the web
          </p>
          <button
            onClick={props.goBack}
            className=" px-4 bg-gray-800 rounded-full py-2 text-white shadow-lg"
          >
            Back
          </button>
        </div>
      </main>
    </>
  );
}
