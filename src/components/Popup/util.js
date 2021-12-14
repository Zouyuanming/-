
export function getCss(srcNodeRef, property) {
    if (srcNodeRef) {
        let element;
        if (typeof srcNodeRef === "string") {
            if (srcNodeRef.indexOf("#") < 0 && srcNodeRef.indexOf(".") < 0 && srcNodeRef.indexOf(" ") < 0) {
                element = document.getElementById(srcNodeRef);
            } else {
                element = document.querySelector(srcNodeRef);
            }
        } else {
            element = srcNodeRef;
        }
        if (Object.prototype.hasOwnProperty.call(element, "currentStyle")) { // 旧版IE
            return element.currentStyle[property];
        } else {
            return window.getComputedStyle(element, null)[property];
        }
    }
}

export function setCss(srcNodeRef, property, value) {
    if (srcNodeRef) {
        if (srcNodeRef instanceof Array && srcNodeRef.length > 0) {
            for (let i = 0; i < srcNodeRef.length; i++) {
                srcNodeRef[i].style.setProperty(property, value);
            }
        } else if (typeof (srcNodeRef) === "string") {
            if (srcNodeRef.indexOf("#") < 0 && srcNodeRef.indexOf(".") < 0 && srcNodeRef.indexOf(" ") < 0) {
                const element = document.getElementById(srcNodeRef);
                element && (element.style.setProperty(property, value));
            } else {
                const elements = document.querySelectorAll(srcNodeRef);
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.setProperty(property, value);
                }
            }
        } else if (srcNodeRef instanceof HTMLElement) {
            srcNodeRef.style.setProperty(property, value);
        }
    }
}


export function setInnerText(srcNodeRef, value) {
    if (srcNodeRef) {
        if (srcNodeRef instanceof Array && srcNodeRef.length > 0) {
            const that = this;
            for (let i = 0; i < srcNodeRef.length; i++) {
                let element = srcNodeRef[i];
                if (that.isElement(element)) {
                    element.innerText = value;
                }
            }
        } else if (typeof (srcNodeRef) === "string") {
            if (srcNodeRef.indexOf("#") < 0 && srcNodeRef.indexOf(".") < 0 && srcNodeRef.indexOf(" ") < 0) {
                let element = document.getElementById(srcNodeRef);
                element && (element.innerText = value);
            } else {
                const elements = document.querySelectorAll(srcNodeRef);
                for (let i = 0; i < elements.length; i++) {
                    elements[i].innerText = value;
                }
            }
        } else {
            if (this.isElement(srcNodeRef)) {
                srcNodeRef.innerText = value;
            }
        }
    }
}

export function setInnerHtml(srcNodeRef, value) {
    function isElement(obj) {
        return (typeof HTMLElement === 'object')
            ? (obj instanceof HTMLElement)
            : !!(obj && typeof obj === 'object' && (obj.nodeType === 1 || obj.nodeType === 9) && typeof obj.nodeName === 'string');
    }
    if (srcNodeRef) {
        if (srcNodeRef instanceof Array && srcNodeRef.length > 0) {
            for (let i = 0; i < srcNodeRef.length; i++) {
                let element = srcNodeRef[i];
                if (element.childNodes.length > 0) {
                    element.removeChild(element.childNodes[0])
                }
                if (isElement(element)) {
                    element.appendChild(value);
                }
            }
        } else if (typeof (srcNodeRef) === "string") {
            if (srcNodeRef.indexOf("#") < 0 && srcNodeRef.indexOf(".") < 0 && srcNodeRef.indexOf(" ") < 0) {
                let element = document.getElementById(srcNodeRef);
                if (element.childNodes.length > 0) {
                    element.removeChild(element.childNodes[0])
                }
                element && (element.appendChild(value));
            } else {
                const elements = document.querySelectorAll(srcNodeRef);
                if (elements.childNodes.length > 0) {
                    elements.removeChild(elements.childNodes[0])
                }
                for (let i = 0; i < elements.length; i++) {
                    elements[i].appendChild(value);
                }
            }
        } else {
            if (isElement(srcNodeRef)) {
                if (srcNodeRef.childNodes.length > 0) {
                    srcNodeRef.removeChild(srcNodeRef.childNodes[0])
                }
                srcNodeRef.appendChild(value);
            }
        }
    }
}
export function isElement(obj) {
    return (typeof HTMLElement === 'object')
        ? (obj instanceof HTMLElement)
        : !!(obj && typeof obj === 'object' && (obj.nodeType === 1 || obj.nodeType === 9) && typeof obj.nodeName === 'string');
}

export function getGuid(removeMinus) {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    if (removeMinus) {
        uuid = uuid.replace(/-/g, "");
    }
    return uuid;
}
