const dummyTables = {
    // table 'items'
    items: [
        { id: 1, name: "Mango", type: "fruits", description: "a sweet and juicy tropical fruit with a distinctive flavor" },
        { id: 2, name: "Banana", type: "fruits", description: "a soft, sweet fruit with a yellow peel that is high in potassium" },
        { id: 3, name: "Apple", type: "fruits", description: "a crisp and juicy fruit that comes in many varieties with a range of flavors" },
        { id: 4, name: "Guava", type: "fruits", description: "a tropical fruit with a sweet and tangy flavor, and high in vitamin C" },
        { id: 5, name: "Jackfruit", type: "fruits", description: "a large, tropical fruit with a starchy texture and a sweet, fruity flavor" },
        { id: 6, name: "Orange", type: "fruits", description: "a citrus fruit with a juicy pulp and a tangy, sweet flavor" },

        { id: 7, name: "Carrot", type: "vegetables", description: "a root vegetable with a sweet taste and high in beta-carotene" },
        { id: 8, name: "Spinach", type: "vegetables", description: "leafy green vegetable with a mild taste and high in iron" },
        { id: 9, name: "Tomato", type: "vegetables", description: "fruit/vegetable with a juicy texture and high in vitamin C" },
        { id: 10, name: "Cucumber", type: "vegetables", description: "a crunchy vegetable with a refreshing taste and high in water content" },
        { id: 11, name: "Onion", type: "vegetables", description: "a pungent bulb vegetable commonly used for flavoring in cooking" },
        { id: 12, name: "Garlic", type: "vegetables", description: "a pungent bulb vegetable commonly used for flavoring in cooking and with potential health benefits" }
    ],

    // table 'varieties'
    varieties: [
        { id: 1, name: "Gala Apple", itemId: 3 },
        { id: 2, name: "Red Delicious Apple", itemId: 3 },
        { id: 3, name: "Fuji Apple", itemId: 3 },

        { id: 4, name: "Nagpur Oranges", itemId: 6 },
        { id: 5, name: "Coorg Mandarins", itemId: 6 },
        { id: 6, name: "Darjeeling Mandarins", itemId: 6 },

        { id: 7, name: "Red Onion", itemId: 11 },
        { id: 8, name: "White Onion", itemId: 11 },
        { id: 9, name: "Shallot Onion", itemId: 11 },

        { id: 7, name: "Red Onion", itemId: 11 },
        { id: 8, name: "White Onion", itemId: 11 },
        { id: 9, name: "Shallot Onion", itemId: 11 },

        { id: 10, name: "Indian Cucumber", itemId: 10 },
        { id: 11, name: "Lemon Cucumber", itemId: 10 },
        { id: 12, name: "Pickling Cucumber", itemId: 10 },
    ]
}


module.exports = {
    /**
     * @returns all vegetables or fruits
     * @param type = "vegetables" or "fruits"
     */
    getAllItems(type) {
        return dummyTables.items.filter(item => item.type === type);
    },

    /**
     * @returns the details of a vegetable or a fruit including the verieities of it
     * @param type = "vegetables" or "fruits"
     * @param id = id of the vegetable or fruit
     */
    getAnItem(type, id) {
        let item = dummyTables.items.filter(item => item.type === type && item.id == id)[0] || {};

        if (item.id) {
            item = { ...item, varieties: dummyTables.varieties.filter(variety => variety.itemId === item.id) };
        }

        return item;
    },
}