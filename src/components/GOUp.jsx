// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { GoChevronUp } from "react-icons/go";


const GoUp = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 1000) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`up ${showScroll ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            <GoChevronUp />
        </div>
    );
};

export default GoUp;
