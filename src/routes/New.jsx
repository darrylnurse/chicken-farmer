import {supabase} from "../supabase.js";
import {useEffect, useState} from "react";

export default function New(){

  const [chicken, setChicken] = useState({
    chicken_name: "",
    chicken_size: 0,
    catchphrase: "None.",
    political_affiliation: "",
  });
  const createEntry = async event => {
    event.preventDefault();

    await supabase
        .from("Chickens")
        .insert({
          chicken_name: chicken.chicken_name,
          chicken_size: chicken.chicken_size,
          catchphrase: chicken.catchphrase,
          political_affiliation: chicken.political_affiliation,
        })
        .select();

    window.location = '/all';
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setChicken( prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  return (
      <div className={"h-full p-10 bg-sky-200"}>

        <div className={"h-1/4 text-3xl flex justify-center items-center"}>What kind of chicken do you want?</div>

        <form className={"flex flex-col h-3/4"}>

          <div className={"flex h-2/4 flex-row items-center text-center justify-evenly"}>
            <div className={"h-full flex flex-col justify-center items-center"}>
              <label htmlFor="chicken_name" className={"text-xl"}>Name</label><br/>
              <input type="text"
                     name="chicken_name"
                     onChange={handleChange}
                     autoComplete={'off'}
                     className={"h-1/5 text-center text-lg rounded-sm"}
              />
            </div>

            <div className={"h-full flex flex-col justify-center items-center"}>
              <label htmlFor="chicken_size" className={"text-xl"}>Size</label><br/>
              <select
                  name="chicken_size"
                  onChange={handleChange}
                  className={"h-1/5 text-center px-3 text-lg rounded-sm"}
              >
                <option value={400}>400</option>
                <option value={65}>65</option>
                <option value={99}>99</option>
                <option value={100000000000}>100 Billion</option>
                <option value={600134}>0.0134</option>
                <option value={714}>714</option>
              </select>
            </div>

            <div className={"h-full flex flex-col justify-center items-center"}>
              <label htmlFor="catchphrase" className={"text-xl"}>Catchphrase</label><br/>
              <input
                  type="text"
                  name="catchphrase"
                  onChange={handleChange}
                  autoComplete={'off'}
                  className={"h-1/5 text-center text-lg rounded-sm"}
              />
            </div>

            <div className={"h-full flex flex-col justify-center items-center"}>
              <label htmlFor="political_affiliation" className={"text-xl"}>Political Affiliation</label><br/>
              <input
                  type="text"
                  name="political_affiliation"
                  onChange={handleChange}
                  autoComplete={'off'}
                  className={"h-1/5 text-center text-lg rounded-sm"}
              />
            </div>
          </div>

          <div className={"flex justify-center items-center h-1/4"}>
            <input
                type="submit"
                value="Submit"
                onClick={createEntry}
                className={"hover:scale-[105%] active:scale-[95%] transition-transform cursor-pointer select-none bg-green-300 p-5 px-12 rounded-2xl"}
            />
          </div>

        </form>
      </div>
  )
}