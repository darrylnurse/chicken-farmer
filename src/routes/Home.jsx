
function Home() {

  return (
    <main className={"select-none bg-white text-center flex flex-col gap-7 justify-center items-center h-full"}>
      <img className={"size-40 pointer-events-none"}
           alt={"chicken!"}
           src={"/src/assets/chicken.webp"}
      />

      <h1 className={"text-2xl"}>
        Welcome to chicken farmer!
        {" "}<br/>{" "}<br/>
        Create the strongest poultry infantry!
      </h1>

    </main>
  )
}

export default Home
