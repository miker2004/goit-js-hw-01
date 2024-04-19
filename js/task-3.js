function getElementWidth(content, padding, border) {
    const x = content.replace("px", "");
    const y = padding.replace("px", "");
    const z = border.replace("px", "");
    return ( Number(x) + 2 * Number(y) + 2 * Number(z));

}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200