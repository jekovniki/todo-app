export function setCompletedStyles(tile: any, title: any, content: any) {
    // tile.style.backgroundColor = "#90EE90";
    tile.style.padding = "0.25rem"
    title.style.margin = 0;
    content.style.margin = 0;
}

export function setUncompletedStyles(tile: any, title: any, content: any) {
    // tile.style.backgroundColor = "#ADD8E6";
    tile.style.padding = "1rem 0.5rem"
    title.style.marginTop = "0.83em";
    title.style.marginBottom = "0.83em";
    content.style.marginTop = "1em";
    content.style.marginBottom = "1em";
}