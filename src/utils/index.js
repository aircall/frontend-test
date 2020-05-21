import dayjs from 'dayjs';

export function formatDate(date) {
    return dayjs(date).format('DD MMMM YYYY');
}

export function pluralize(word, count) {
    return count > 1 ? `${word}s` : word;
}