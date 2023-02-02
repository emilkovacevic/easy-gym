import { useState } from "react";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Card = ({ name, description, image }: Props) => {
  const [modal, setModal] = useState(false)
  return (
    modal ?
      (
        <article onClick={()=> setModal(prev=> !prev)}>
          <img className='object-scale-down' src={image} alt={`${name} photo`} />
          <h2>
            {name}
          </h2>
          <p>{description}</p>
        </article>
      )
      :
      (
        <article
          onClick={() => setModal(prev=> !prev)}
          className="text-center rounded-2xl cursor-pointer"
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
