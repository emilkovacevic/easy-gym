type Props = {
  name: string;
  description?: string;
  image: string;
};

const Card = ({ name, description, image }: Props) => {

  return (
    <div className="text-center relative rounded-2xl">
        <img alt={`${image}`} src={image} className="w-[340px] h-[300px]" />
        <div className="transition-all opacity-0 hover:opacity-100 flex absolute h-[300px] flex-col justify-center align-middle p-2 text-white top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <p className="text-2xl">{name}</p>
          <p className="mt-5 text-left m-2">{description}</p>
        </div>
    </div>
  );
};

export default Card;
