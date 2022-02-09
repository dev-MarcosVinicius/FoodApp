export default class StringFormat {
    static substring(text: string, lenght: number) {
        return text.length > lenght ? `${text.substring(0, lenght)}...` : text;
    }

    static formatPrice(text: string | number) {
        return Number(text).toFixed(2);
    }
}