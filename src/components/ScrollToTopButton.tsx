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
        className="bg-light-text_emphasis p-3 text-white dark:bg-dark-text_emphasis hover:bg-light-nav_hover hover:dark:bg-dark-nav_hover fixed md:bottom-16 bottom-8 right-5 z-20 rounded-full"
        onClick={handleClick}
        >
        <BsArrowUpCircle />
        </button>
    </>
    );
}

export default ScrollToTopButton;
    