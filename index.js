
export default class DevLogger {
    /**     
     * @param {boolean} environment your dev env eg: import.meta.env.DEV
     */    
    constructor(environment) {        
        if (typeof environment !== 'boolean') {
            throw new Error(`argument is of type ${typeof environment}, a boolean value is required`)
        }
        this.environment = environment 
        Object.freeze(this)
    }
    /**    
     * @param {*} devLog logs thats show on development
     * @param {*} prodLog logs that shows on production NOTE: setting this value to undefined will skip this log
     * @param {boolean|undefined} showBoth show both logs during development
     * @returns {any[]} for testing purposes
     */    
    log(devLog, prodLog, showBoth) {
        if (showBoth !== undefined && typeof showBoth !== 'boolean') {
            throw new Error(`showBoth argument is of type ${typeof showBoth}, a boolean value is required`)
        }
        if (showBoth) {
            console.log(devLog)
            console.log(prodLog)
            return [devLog, prodLog]
        }
        if (this.environment === true) {
            console.log(devLog)
            return [devLog]
        }
        if (prodLog !== undefined) {
            console.log(prodLog)
            return [prodLog]
        }
        return []
    }

    /**    
     * @param {*} devLog logs thats show on development
     * @param {*} prodLog logs that shows on production NOTE: setting this value to undefined will skip this log
     * @param {boolean|undefined} showBoth show both logs during development
     * @returns {any[]} for testing purposes
     * 
     */  
    warn(devLog, prodLog, showBoth) {
        if (showBoth !== undefined && typeof showBoth !== 'boolean') {
            throw new Error(`showBoth argument is of type ${typeof showBoth}, a boolean value is required`)
        }
        if (showBoth) {
            console.warn(devLog)
            console.warn(prodLog)            
            return [devLog, prodLog]
        }
        if (this.environment === true) {
            console.warn(devLog)
            return [devLog]            
        }
        if (prodLog !== undefined) {
            console.warn(prodLog)
            return [prodLog]
        }
        return []
    }

    /**    
     * @param {*} devLog logs thats show on development
     * @param {*} prodLog logs that shows on production NOTE: setting this value to undefined will skip this log
     * @param {boolean|undefined} showBoth show both logs during development
     * @returns {any[]} for testing purposes
     * 
     */  
    error(devLog, prodLog, showBoth) {
        if (showBoth !== undefined && typeof showBoth !== 'boolean') {
            throw new Error(`showBoth argument is of type ${typeof showBoth}, a boolean value is required`)
        }
        if (showBoth) {
            console.error(devLog)
            console.error(prodLog)
            return [devLog, prodLog]
        }
        if (this.environment === true) {
            console.error(devLog)
            return [devLog]
        }
        if (prodLog !== undefined) {
            console.warn(prodLog)
            return [prodLog]
        }
        return []
    }
}

