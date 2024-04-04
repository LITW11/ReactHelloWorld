// subfolder -> my-module.jsx

import { fancyLog } from "../top-level";

function mutliply(x, y) {
    fancyLog(x * y);
    return x * y;
}

export { mutliply };