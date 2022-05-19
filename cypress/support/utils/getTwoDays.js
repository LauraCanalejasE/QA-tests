export function getTwoDays() {
    const start = new Date(2022,12,12);
    const end = new Date(2022, 12, 31);

    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const randomDatePlusTwo = new Date(randomDate);
    randomDatePlusTwo.setDate(randomDatePlusTwo.getDate() + 2);

    return [
        `${randomDate.getFullYear()}-${addZero(randomDate.getMonth() + 1)}-${addZero(randomDate.getDate())}`,
        `${randomDatePlusTwo.getFullYear()}-${addZero(randomDatePlusTwo.getMonth() + 1)}-${addZero(randomDatePlusTwo.getDate())}`
    ]
   
}
function addZero(day) {
    return day > 9 ? day : `0${day}`;
}