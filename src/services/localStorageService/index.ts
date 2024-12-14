'use client';

export default class LocalStorageService {
    static setItem(key: string, value: any) {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            console.warn('localStorage is not available');
        }
    }

    static getItem(key: string) {
        if (typeof window !== 'undefined') {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } else {
            console.warn('localStorage is not available');
            return null;
        }
    }

    static removeItem(key: string) {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(key);
        } else {
            console.warn('localStorage is not available');
        }
    }
}
