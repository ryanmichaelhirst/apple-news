import React from "react";

const TimeCounter = ({ publishedAt }) => {
    const elapsed = new Date() - new Date(publishedAt);
    let time;

    if (elapsed % 86400 >= 1) {
        time = `${Math.floor(elapsed / 86400)} days`;
    } else if (elapsed % 3600 >= 1) {
        time = `${Math.floor(elapsed / 3600)} hours`;
    } else if (elapsed % 60 >= 1) {
        time = `${Math.floor(elapsed / 60)} minutes`;
    } else {
        time = `${elapsed} seconds`;
    }

    return <p className={"articleTime"}>{time} ago</p>;
};

export default TimeCounter;