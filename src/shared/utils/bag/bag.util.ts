import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageCollections } from '../../enum/AsyncStorage';
import { BagStorage } from '../../types/bag.type';

export default class BagUtil {
    static async getStorage(): Promise<BagStorage[]> {
        return JSON.parse(await AsyncStorage.getItem(StorageCollections.BAG));
    }

    static async setStorage(data: BagStorage) {
        const oldItems = await AsyncStorage.getItem(StorageCollections.BAG);
        let newItems = [];

        if (oldItems) newItems = JSON.parse(oldItems);
            
        newItems.push(data);

        return AsyncStorage.setItem(StorageCollections.BAG, JSON.stringify(newItems));
    }
}