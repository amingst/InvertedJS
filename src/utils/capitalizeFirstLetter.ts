/**
 * Capitalizes the first letter of a word
 * 
 * @example
 * ```
 * // Prints "Hello"
 * console.log(capitalizeFirstLetter("hello"));
 * ```
 * @param str - the word you want to capitalize the first letter of
 * @returns {(string)} Word with capitalized first letter
 */
export default function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}