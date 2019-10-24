export const compareObject = (object1, object2) => {
    const object1Props = Object.getOwnPropertyNames(object1);
    const object2Props = Object.getOwnPropertyNames(object2);

    if (object1Props.length !== object2Props.length) return false;

    for (let i = 0; i < object1Props.length; i++) {
        let propName = object1Props[i];
        if (object1[propName] !== object2[propName]) {
            return false;
        }
    }
    return true;
}