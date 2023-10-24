// максимальное ограничение выставлено в 10мб
// https://gitlab.tcsbank.ru/tj/opis/-/blob/master/app/settings.py#L65
const DEFAULT_MAX_SIZE_IN_BYTES = 10485760;
const DEFAULT_MAX_RESOLUTION_IN_PIXELS = 25000000; // 25 mega pixels

const MYMETYPE_WHITELIST = [
    "image/png",
    "image/jpeg",
    "image/webp",
    "image/gif",
    "image/tiff",
    "image/svg+xml",
];

const INPUT_WHITELIST = MYMETYPE_WHITELIST.join(',');

export { DEFAULT_MAX_SIZE_IN_BYTES, DEFAULT_MAX_RESOLUTION_IN_PIXELS, MYMETYPE_WHITELIST, INPUT_WHITELIST }
