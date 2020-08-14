/*
 * GennadySX @2020
 */

import AsyncStorage from "@react-native-community/async-storage";


const get = async (key: string, func: (value: any) => void) => {
    try {
        const value: any = await AsyncStorage.getItem(key) || null;
        if (func) {
            func(JSON.parse(value));
        }
    } catch (error) {
        console.log(error.message);
    }
};

const set = async (key: any, value: any, func?: (value?: any) => void) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        if (func) {
            func(await AsyncStorage.getItem(key));
        }
    } catch (error) {
        console.log(error.message);
    }
};

const remove = async (key: string, func?: (value?: any) => void) => {
    try {
        await AsyncStorage.removeItem(key);
        if (func) {
            func();
        }
    } catch (error) {
        console.log(error.message);
    }
};

const clear = async () => await AsyncStorage.clear();

const removeItems = async (keys: string[]) => keys.forEach((v: string) => remove(v));

const objectByKeys = (keys: string[], callback?: (value: any) => void ) => {
    function keyGet(keys: string[] | number[] | any , index?: string[] | number[] | any, obj?: any, callback?: (value: any) => void) {
        const k = keys[index];
        if (k === undefined) {
            if (callback) {
                callback(obj);
            }
            return;
        }
        get(k, (v) => {
            if (v) {
                obj[k] = v;
            }
            index++;
            keyGet(keys, index, obj, callback);
        });
    }
    keyGet(keys, 0, {}, callback)
}


const Storage = {
    get,
    set,
    remove,
    clear,
    removeItems,
    objectByKeys
}

export {
    Storage,
    get as getStorage,
    set as setStorage,
    remove as removeStorage,
    clear as clearStorage,
    removeItems as removeItemsStorage,
    objectByKeys as objectByKeysStorage
}
