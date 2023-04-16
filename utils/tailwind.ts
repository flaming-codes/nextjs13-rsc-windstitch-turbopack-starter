import clsx from "clsx";
// https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
// https://github.com/tailwindlabs/tailwindcss/discussions/7554

/**
 * This is simply used to make it easier to write Tailwind classes that include
 * intellisense in various places
 */
export const twc = String.raw;

export const twMerge = clsx;

/*
    ["tw.* \\=([^;]*);", "'([^']*)'"],
    ["tw.* \\=([^;]*);", "\"([^\"]*)\""],
    ["tw.* \\=([^;]*);", "\\`([^\\`]*)\\`"]

    ---

    ["tw\\w* \\=([^;]*);", "'([^']*)'"],
    ["tw\\w* \\=([^;]*);", "\"([^\"]*)\""],
    ["tw\\w* \\=([^;]*);", "\\`([^\\`]*)\\`"]
*/

/*
["Classes \\=([^;]*);", "'([^']*)'"],
    ["Classes \\=([^;]*);", "\"([^\"]*)\""],
    ["Classes \\=([^;]*);", "\\`([^\\`]*)\\`"]
*/
