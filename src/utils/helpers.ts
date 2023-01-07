import moment from 'moment'
const formatDate = (time: string) => {
    return moment(time).format('lll');
}

const characterLimit = (text: string, limit: number) => text?.length > limit ? (text.substr(0, limit - 1).trim() + '...') : text;

function getYearsBetween(date1: string, date2: string) {
    return Math.abs((new Date(date2)).getFullYear() - (new Date(date1)).getFullYear())
}

function getDayBetween(x: any, y: any) {
    var d1: any = new Date(x);
    var d2: any = new Date(y);
    return (d2 - d1) / (1000 * 3600 * 24);
}

export {
    formatDate,
    characterLimit,
    getYearsBetween,
    getDayBetween
}