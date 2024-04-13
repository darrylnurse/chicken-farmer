import {useEffect, useState} from "react";
import {supabase} from "../supabase.js";
import {useParams} from "react-router-dom";

export default function Edit(){
  const { id} = useParams();

  const [chicken, setChicken] = useState({
    id: null,
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
        chicken_name: data['chicken_name'],
        chicken_size: data['chicken_size'],
        catchphrase: data['catchphrase'],
        political_affiliation: data['political_affiliation'],
      })
      else console.error(error);
    }
    fetchChickens().catch(console.error);
  }, [id]);

  const updateChicken = async event => {
    event.preventDefault();

    await supabase
        .from("Chickens")
        .update({
          chicken_name: chicken['chicken_name'],
          chicken_size: chicken['chicken_size'],
          catchphrase: chicken['catchphrase'],
          political_affiliation: chicken['political_affiliation'],
        })
        .eq('id', id);

    window.location = `/details/${id}`;
  }

  const deleteChicken = async event => {
    event.preventDefault();

    await supabase
        .from("Chickens")
        .delete()
        .eq('id', id);

    window.location = '/all';
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setChicken( (prev) => {
      return {
        ...prev,
        [name]:value,
      }
    })
  }

  return (
      chicken &&
      <div className={"select-none bg-sky-200  h-full flex text-2xl flex-col justify-center items-center"}>

        <div>
          <img
              src={"/src/assets/edge-chicken.webp"}
              alt={"chicken"}
              className={"size-40 rounded-lg"}
          />
        </div>


        <form>
          <div className={"flex flex-col gap-3 items-center text-center justify-evenly"}>

            <div className={"flex flex-col justify-center items-center"}>
              <label htmlFor="chicken_name" className={"text-xl"}>Name</label>
              <input type="text"
                     name="chicken_name"
                     onChange={handleChange}
                     autoComplete={'off'}
                     className={"text-center text-lg rounded-sm"}
                     value={chicken.chicken_name}
              />
            </div>

            <div className={"flex flex-col justify-center items-center"}>
              <label htmlFor="chicken_size" className={"text-xl"}>Size</label>
              <select
                  name="chicken_size"
                  onChange={handleChange}
                  className={"text-center px-3 text-lg rounded-sm"}
              >
                <option value={400}>400</option>
                <option value={65}>65</option>
                <option value={99}>99</option>
                <option value={100000000000}>100 Billion</option>
                <option value={600134}>0.0134</option>
                <option value={714}>714</option>
              </select>
            </div>

            <div className={"flex flex-col justify-center items-center"}>
              <label htmlFor="catchphrase" className={"text-xl"}>Catchphrase</label>
              <input
                  type="text"
                  name="catchphrase"
                  onChange={handleChange}
                  autoComplete={'off'}
                  className={"text-center text-lg rounded-sm"}
                  value={chicken.catchphrase}
              />
            </div>

            <div className={"flex flex-col justify-center items-center"}>
              <label htmlFor="political_affiliation" className={"text-xl"}>Political Affiliation</label>
              <input
                  type="text"
                  name="political_affiliation"
                  onChange={handleChange}
                  autoComplete={'off'}
                  className={"text-center text-lg rounded-sm"}
                  value={chicken.political_affiliation}
              />
            </div>

          </div>

          <div className={"flex justify-center gap-3 items-center h-1/4"}>
            <input
                type="submit"
                value="Change"
                onClick={updateChicken}
                className={"hover:scale-[105%] active:scale-[95%] transition-transform cursor-pointer select-none bg-green-300 p-3 px-12 rounded-2xl"}
            />
            <button className="hover:scale-[105%] active:scale-[95%] transition-transform cursor-pointer select-none bg-red-300 p-3 px-12 rounded-2xl" onClick={deleteChicken}>Delete</button>
          </div>
        </form>

      </div>
  )
}