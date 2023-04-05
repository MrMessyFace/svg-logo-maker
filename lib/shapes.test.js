const { Circle, Triangle, Square } = require("../lib/shapes");

const text = "ABC";
const textColor = "red";
const shapeColor = "blue";

describe("testing for Circle", () => {
    it("should render a circle shape", () => {
        const circle1 = new Circle(text, textColor, shapeColor);
        const svg = circle1.render();
        expect(svg).toBe(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>
        `)
    })
})

describe("testing for Square", () => {
    it("should render a square shape", () => {
        const square1 = new Square(text, textColor, shapeColor);
        const svg = square1.render();
        expect(svg).toBe(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${shapeColor}"/>
            <text x="100" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>
        `)
    })
})

describe("testing for Triangle", () => {
    it("should render a triangle shape", () => {
        const triangle1 = new Triangle(text, textColor, shapeColor);
        const svg = triangle1.render();
        expect(svg).toBe(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0 300, 150 0, 300 300" fill="${shapeColor}" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>
        `)
    })
})
