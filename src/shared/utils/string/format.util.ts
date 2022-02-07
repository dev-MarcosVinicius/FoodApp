export default class StringFormat {
    static substring(text: string, lenght: number) {
        return text.length > lenght ? `${text.substring(0, lenght)}...` : text;
    }
}