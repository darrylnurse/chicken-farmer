import {supabase} from "../supabase.js";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Details(){

  const { id} = useParams();

  const [chicken, setChicken] = useState({
    id: null,
    birthday: "",
    chicken_name: "",
    chicken_size: 0,
    catchphrase: "None.",
    political_affiliation: "",
  });

  useEffect(() => {
    console.log("id:", id);
    const fetchChickens = async () => {
      const {data, error} = await supabase
          .from("Chickens")
          .select()
          .eq('id', id)
          .single();

      console.log(data);

      if(data) setChicken({
        id: data['id'],
        birthday: data['created_at'],
        chicken_name: data['chicken_name'],
        chicken_size: data['chicken_size'],
        catchphrase: data['catchphrase'],
        political_affiliation: data['political_affiliation'],
      })
      else console.error(error);
    }
    fetchChickens().catch(console.error);
  }, [id]);

  return (
      chicken &&
      <div className={"select-none bg-sky-200 gap-3 h-full flex text-2xl flex-col justify-center items-center"}>
        <div>
          <img
              src={"/src/assets/edge-chicken.webp"}
              alt={"chicken"}
              className={"size-40 rounded-lg"}
          />
        </div>

        <div className={"italic pb-4 text-xl"}>{chicken.catchphrase}</div>

        <div><span className={"font-semibold"}>Name:</span> {chicken.chicken_name || "No Name :("}</div>
        <div><span className={"font-semibold"}>Birthday:</span> {new Date(chicken.birthday).toDateString().slice(4) || "???"}</div>
        <div><span className={"font-semibold"}>Size:</span> {chicken.chicken_size || "???"}</div>
        <div><span className={"font-semibold"}>Political Affiliation:</span> {chicken.political_affiliation || "None."}
        </div>

        <button
            className={"bg-pink-400 text-white p-2 px-9 rounded-xl hover:scale-[105%] active:scale-[95%] transition-transform"}
            type={"button"}><Link to={`/edit/${id}`}>Edit</Link></button>

      </div>
  )
}