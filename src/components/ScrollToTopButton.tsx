import { useRef } from "react";
type Props = {}

const ScrollToTopButton = (props: Props) => {
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
        className="bg-light-nav_bg text-xs md:text-sm dark:bg-dark-nav_bg fixed md:bottom-16 bottom-8 z-20 right-0 m-4 p-4 rounded-full text-light-text_emphasis dark:text-dark-text_emphasis"
        onClick={handleClick}
        >
        Scroll to Top
        </button>
    </>
    );
}

export default ScrollToTopButton;
    