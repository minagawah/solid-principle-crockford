export type Save<T> = (data: T) => void;
export type Fetch<T> = () => T;
export type GenericStorageContext<T> = {
    save: Save<T>;
    fetch: Fetch<T>;
};
export type CookiesContext<T> = {
    cookie_name: string;
    save: Save<T>;
    fetch: Fetch<T>;
};
export type ProfileData = {
    name: string;
    age: number;
};
export type ProfileContext = {
    save: Save<ProfileData>;
    fetch: Fetch<ProfileData>;
};
