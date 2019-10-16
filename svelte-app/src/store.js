import { writable } from "svelte/store";

const createItemStore = () => {
    const { subscribe, update } = writable([]);

    return {
        subscribe,
        addItem: newItem => update(items => {
            if (!items.find(item => item === newItem)) {
                items.push(newItem);
            }
            return items;
        }),
        removeItem: removedItem => update(items => {
            const newItems = items.filter(item => item !== removedItem);
            return newItems;
        })
    };
};

export const itemStore = createItemStore();
