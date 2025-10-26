const formateDate = (date: string): string => {
    const actualDate = new Date(date);
    const formatted = actualDate.toLocaleDateString("en-US", {
        month: "short", // "Jan", "Feb", "Mar", etc.
        day: "numeric",
        year: "numeric",
    });
    return actualDate.toLocaleDateString("en-EN", { weekday: "long" }) + ", " + formatted;
};

export default formateDate;