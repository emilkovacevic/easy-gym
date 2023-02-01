type Props = {}

function Footer({ }: Props) {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="bg-light-surface dark:bg-dark-surface text-white py-4 px-2">
      <div className="container flex flex-wrap items-center m-auto text-center ">
        <p className="w-full md:w-1/2 md:text-left">Copyright ©{year} Emil Kovacevic</p>
        <ul className="list-none md:w-1/2 p-2 md:text-right mx-auto">
          <li className="inline-block mr-4">
            <a href="#" className="text-gray-500 hover:text-white">Privacy Policy</a>
          </li>
          <li className="inline-block mr-4">
            <a href="#" className="text-gray-500 hover:text-white">Terms of Use</a>
          </li>
          <li className="inline-block">
            <a href="#" className="text-gray-500 hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer