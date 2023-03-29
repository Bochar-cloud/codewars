// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

const rangeColor = {
    min: 0,
    max: 255
};

const rgb = (...args) => {
    const rgbColors = Array.from(args);

    const hex = rgbColors.reduce((res, color) => {

        if (color > rangeColor.max) {
            return res + 'FF';
        }

        if (color < rangeColor.min) {
            return res + '00';
        }

        const rgbToHex = color.toString(16).length === 1 ? 0 + color.toString(16) : color.toString(16);

        return res + rgbToHex;
    }, '').toUpperCase();

    return hex;
}
