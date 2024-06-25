export const addZero = (num: number) => {
    return num < 10 ? `0${num}` : num;
};

export const monthNames = [
    "Janv.",
    "Févr.",
    "Mars",
    "Avr.",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
];

export const weekDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

export const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
};


export const isEventPassed = (date: Date) => {
    return (
        new Date(new Date(date).toISOString().slice(0, 10)).getTime() <
        new Date(new Date().toISOString().slice(0, 10)).getTime()
    );
};
