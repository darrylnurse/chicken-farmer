// eslint-disable-next-line react/prop-types
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Chicken({ id, name, size, catchphrase, politics }){
  return (
      <Link to={`/details/${id}`}>
        <div className={"select-none hover:scale-[101%] active:scale-[98%] cursor-pointer flex flex-col gap-2 p-2 rounded-2xl bg-sky-200 justify-center items-center"}>
          <div><img
              src={"/src/assets/edge-chicken.webp"}
              alt={"chicken"}
              className={"size-20 rounded-lg"}
          /></div>
          <div>{name || "No Name :("}</div>
          <div>Size: {size || "???"}</div>
          <div>Catchphrase: {catchphrase || "None."}</div>
          <div>Political Affiliation: {politics || "None."}</div>
        </div>
      </Link>
  )
}