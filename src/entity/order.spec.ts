import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let order = new Order("", "1", [])
        }).toThrowError("Id is required")
    });

    it('should throw error when customerId is empty', () => {
        expect(() => {
            let order = new Order("1", "", [])
        }).toThrowError("customerId is required")
    });

    it('should throw error when items is empty', () => {
        expect(() => {
            let order = new Order("1", "1", [])
        }).toThrowError("Items are required")
    });

    it('should calculate total', () => {
        const item1 = new OrderItem("1", "Item 1",  50)
        const item2 = new OrderItem("2", "Item 2",  40)

        const order1 = new Order("1", "1", [item1])

        const total1 = order1.total();

        expect(total1).toBe(50)

        const order2 = new Order("2", "1", [item1, item2])

        const total2 = order2.total();

        expect(total2).toBe(90)
    });
})