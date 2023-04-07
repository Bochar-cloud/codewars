const FORMAT_HEX = 16;

const ColorRange = {
    Min: 0,
    Max: 255
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
};

const rgbToHex = (...colors) => {
    let res = '';

    for (let i = 0; i < colors.length; i++) {
        const currentColor = colors[i];
        const hexFormat = currentColor.toString(FORMAT_HEX);

        if (hexFormat.length === 1) {
            res += hexFormat + hexFormat;
            continue;
        }

        res += hexFormat;
    }

    return res;
};

const randomCssColor = (formatType) => {
    const red = getRandomInt(ColorRange.Min, ColorRange.Max);
    const green = getRandomInt(ColorRange.Min, ColorRange.Max);
    const blue = getRandomInt(ColorRange.Min, ColorRange.Max);

    if (formatType === 'rgb') {
        return `rgb(${red}, ${green}, ${blue})`;
    }

    return `#${rgbToHex(red, green, blue)}`;
};
