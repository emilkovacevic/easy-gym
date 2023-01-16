type Props = {
    text:string
}

const CallToActionBtn = ({text}: Props) => {
  return (
    <span className='bg-blue-500 font-bold duration-300 text-white w-full px-4 py-2 hover:bg-green-500 rounded-md'>{text}</span>
  )
}

export default CallToActionBtn