declare module 'nephrite-dev-logger' {

    /**
     * @description DevLogger is a utility class designed to simplify logging in JavaScript applications based on the development environment. It allows you to log messages in a convenient and controlled manner. The class constructor takes a boolean parameter, indicating whether the environment is in development mode. During logging, you can specify messages for development and production environments. When you log a message, you can choose to display it in the development environment only, the production environment only, or both. This class helps streamline logging practices and provides flexibility to adapt logging messages based on the current environment.
        With this class, you can ensure that your application logs relevant information while minimizing noise in different environments.
     */
    export default class DevLogger {
        /**     
        * @param {boolean} environment your dev env eg: import.meta.env.DEV
        */ 
        constructor(environment: boolean);

        private environment: boolean;

        /**    
         * @param {*} devLog logs thats show on development
         * @param {*} prodLog logs that shows on production NOTE: setting this value to undefined will skip this log
         * @param {boolean|undefined} showBoth show both logs during development
         */  
        log: (devLog: any, prodLog?: any, showBoth?: boolean) => void;
        /**    
         * @param {*} devLog logs thats show on development
         * @param {*} prodLog logs that shows on production NOTE: setting this value to undefined will skip this log
         * @param {boolean|undefined} showBoth show both logs during development
         */ 
        warn: (devLog: any, prodLog?: any, showBoth?: boolean) => void;
        /**    
         * @param {*} devLog logs thats show on development
         * @param {*} prodLog logs that shows on production NOTE: setting this value to undefined will skip this log
         * @param {boolean|undefined} showBoth show both logs during development
         */ 
        error: (devLog: any, prodLog?: any, showBoth?: boolean) => void;
    }
}