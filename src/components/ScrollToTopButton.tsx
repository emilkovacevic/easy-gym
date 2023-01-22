import { useRef } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTopButton = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
    if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
    };

    return (
    <>
        <div ref={scrollRef} />
        <button
        className="bg-light-middle m-4 p-2 dark:bg-dark-middle hover:text-light-nav_hover hover:dark:text-dark-nav_hover fixed md:bottom-16 bottom-8 z-20 right-0 rounded-full"
        onClick={handleClick}
        >
        <BsArrowUpCircle />
        </button>
    </>
    );
}

export default ScrollToTopButton;
    