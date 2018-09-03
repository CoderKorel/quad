function solveSquareEquation(a, b, c) {
    const D = b **2 - 4 * a * c;

    if (D < 0) {
        return "There is no solution to the equation";
    } else {
        const x1 = (-2 - Math.sqrt(D)) / (2 * a);
        const x2 = (-2 + Math.sqrt(D)) / (2 * a);
        return "There are two solutions to the equation: " + x1 + " and " + x2;
    }
}

const a = prompt("Enter coefficient a");
const b = prompt("Enter coefficient b");
const c = prompt("Enter coefficient c");

const x = solveSquareEquation(a, b, c);

alert(x);