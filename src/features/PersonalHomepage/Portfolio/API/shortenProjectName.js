const shortenProjectName = (name) => {
    const words = name.split("-");
    const initials = words.map((word) => word.slice(0, 2));
    return initials.join("");
};

export default shortenProjectName;
