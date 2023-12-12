import React from "react";

export default function useShortenProjectName() {
    const shortenProjectName = (name) => {
        const words = name.split("-");
        const initials = words.map((word) => word.slice(0, 2));
        return initials.join("");
    };

    return shortenProjectName;
}
