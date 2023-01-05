import { atom } from "recoil";

export const localStorageEffect = key => ({ setSelf, onSet}) => {
    const saveValue = localStorage.getItem(key);

    if(saveValue != null) {
        setSelf(JSON.parse(saveValue))
    }

    onSet((newValue, _, isReset) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    });
};

export const modalState = atom({
    key: 'modalState',
    default: false
});

export const loadingState = atom({
    key: 'loadingState',
    default: false
});

export const todoListState = atom({
    key: 'todoListState',
    default: [],
    effects: [
        localStorageEffect('todo'),
    ],
});

export const selectedTodoValueState = atom({
    key: "selectedTodovalueState",
    default: {}
})
