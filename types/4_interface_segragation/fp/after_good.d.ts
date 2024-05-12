export type Method = () => any;
export type Arg = Record<string, Method>;
export type IPersonContext = {
    use_chopsticks: Method;
    cook_chow_mein: Method;
};
export type IAccountantContext = {
    use_excel: Method;
};
export type IDeveloperContext = {
    use_visual_studio: Method;
};
