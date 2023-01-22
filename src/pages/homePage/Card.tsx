import { useState } from "react";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Card = ({ name, description, image }: Props) => {
const [ modal, setModal ] = useState(false)
  return (
    modal ? 
      (
        <article 
        onClick={()=> setModal(false)}
        style={{
          position: 'absolute',
          width:'100vw !impotant',
          height: '100vh !impotant',
          zIndex: '150',
          background: 'red'
        }}
        >
          <h3>
            {name}
          </h3>
        </article>
      )
  :
  (
    <article 
    onClick={()=>setModal(true)}
    className="text-center relative rounded-2xl cursor-pointer"
    >
        <img alt={`${image}`} src={image} className="w-[340px] h-[300px]" />
        <div className="transition-all opacity-0 hover:opacity-100 flex absolute h-[300px] flex-col justify-center align-middle p-2 text-white top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <p className="text-2xl">{name}</p>
          <p className="mt-5 text-left m-2">{description}</p>
        </div>
    </article>
  ))
};

export default Card;
