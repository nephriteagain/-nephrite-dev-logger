
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
     */    
    log(devLog, prodLog, showBoth) {
        if (showBoth !== undefined && typeof showBoth !== 'boolean') {
            throw new Error(`showBoth argument is of type ${typeof showBoth}, a boolean value is required`)
        }
        if (showBoth) {
            console.log(devLog)
            console.log(prodLog)
            return
        }
        if (this.environment === true) {
            console.log(devLog)
            return
        }
        if (prodLog !== undefined) {
            console.log(prodLog)
        }
    }

    /**    
     * @param {*} devLog logs thats show on development
     * @param {*} prodLog logs that shows on production NOTE: setting this value to undefined will skip this log
     * @param {boolean|undefined} showBoth show both logs during development
     */  
    warn(devLog, prodLog, showBoth) {
        if (showBoth !== undefined && typeof showBoth !== 'boolean') {
            throw new Error(`showBoth argument is of type ${typeof showBoth}, a boolean value is required`)
        }
        if (showBoth) {
            console.warn(devLog)
            console.warn(prodLog)
            return
        }
        if (this.environment === true) {
            console.warn(devLog)
            return
        }
        if (prodLog !== undefined) {
            console.warn(prodLog)
        }
    }

    /**    
     * @param {*} devLog logs thats show on development
     * @param {*} prodLog logs that shows on production NOTE: setting this value to undefined will skip this log
     * @param {boolean|undefined} showBoth show both logs during development
     */  
    error(devLog, prodLog, showBoth) {
        if (showBoth !== undefined && typeof showBoth !== 'boolean') {
            throw new Error(`showBoth argument is of type ${typeof showBoth}, a boolean value is required`)
        }
        if (showBoth) {
            console.error(devLog)
            console.error(prodLog)
            return
        }
        if (this.environment === true) {
            console.error(devLog)
            return
        }
        if (prodLog !== undefined) {
            console.warn(prodLog)
        }
    }
}

