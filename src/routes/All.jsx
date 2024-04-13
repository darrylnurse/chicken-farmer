import {useEffect, useState} from "react";
import {supabase} from "../supabase.js";
import Chicken from "../components/Chicken.jsx";

//lazy loading could be good here

export default function All(){

  const [chickens, setChickens] = useState({});

  useEffect(() => {
    const fetchChickens = async () => {
      const {data} = await supabase
          .from("Chickens")
          .select()
          .order('created_at', {ascending: true})
      setChickens(data);
    }
    fetchChickens().catch(console.error);
  }, []);

  return (
      <div className={"overflow-scroll overflow-x-hidden h-full bg-pink-200 gap-5 p-5 grid grid-cols-3"}>
        { chickens.length &&
            chickens.map( chicken => {
              return (
                  <Chicken
                      id={chicken.id}
                      name={chicken.chicken_name}
                      size={chicken.chicken_size}
                      catchphrase={chicken.catchphrase}
                      politics={chicken.political_affiliation}
                      key={chicken.id}
                  />
              )
            })
        }
      </div>
  )
}