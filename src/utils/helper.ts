export function setCompletedStyles(tile: any, title: any, content: any) {
    tile.style.padding = "0.25rem"
    title.style.margin = 0;
    content.style.margin = 0;
}

export function setUncompletedStyles(tile: any, title: any, content: any) {
    tile.style.padding = "1rem 0.5rem"
    title.style.marginTop = "0.83em";
    title.style.marginBottom = "0.83em";
    content.style.marginTop = "1em";
    content.style.marginBottom = "1em";
}

export function validatePropertyExists(object: Record<string, any> | null, properties: Array<string>) {
    if (object === null || object === undefined) {
        throw new Error(`The passed object is null or undefined`);
    }
    for (const property in properties) {
        if (property in object === false) {
            throw new Error(`The passed property ${property} is not in the object ${JSON.stringify(object)}`);
        }
    }

    return object;
}