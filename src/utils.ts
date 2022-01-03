export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function printArray(arr: Array<any>): void {
    for (const el of arr) {
        console.log(el.toString());
    }
}