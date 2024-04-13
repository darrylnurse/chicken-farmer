import {Link, Outlet} from "react-router-dom";

export default function Root(){
  return (
      <div className={"flex flex-col h-screen"}>
        <header className={"select-none h-1/6 font-bold flex bg-red-100 justify-center items-center text-4xl"}>Chicken Farmer</header>

        <main className={"flex flex-row h-5/6"}>

          <aside className={"w-1/6 h-full bg-red-100"}>
            <ul className={"text-center select-none h-full flex flex-col items-center p-10 text-xl justify-start gap-7"}>
              <li className={"cursor-pointer font-bold hover:font-extrabold hover:scale-[105%] active:scale-[95%]"}>
                <Link to={"/"} className={"w-full"}>
                  Home
                </Link>
              </li>
              <li className={"cursor-pointer font-bold hover:font-extrabold hover:scale-[105%] active:scale-[95%]"}>
                <Link to={"/new"} className={"w-full"}>
                  Buy a Chicken!
                </Link>
              </li>
              <li className={"cursor-pointer font-bold hover:font-extrabold hover:scale-[105%] active:scale-[95%]"}>
                <Link to={"/all"} className={"w-full"}>
                  The Coop
                </Link>
              </li>
            </ul>
          </aside>

          <div className={"w-5/6"}><Outlet/></div>
        </main>

      </div>
  );
}