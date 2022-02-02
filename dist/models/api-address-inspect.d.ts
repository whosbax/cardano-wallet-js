/**
 * Cardano Wallet Backend API
 * <p align=\"right\"><img style=\"position: relative; top: -10em; margin-bottom: -12em;\" width=\"20%\" src=\"https://cardanodocs.com/img/cardano.png\"></img></p>
 *
 * OpenAPI spec version: 2021.3.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ApiAddressInspect
 */
export interface ApiAddressInspect {
    /**
     *
     * @type {string}
     * @memberof ApiAddressInspect
     */
    address_style: ApiAddressInspectAddressStyleEnum;
    /**
     *
     * @type {string}
     * @memberof ApiAddressInspect
     */
    stake_reference: ApiAddressInspectStakeReferenceEnum;
    /**
     * Can be null for 'Icarus' and 'Byron' styles.
     * @type {number}
     * @memberof ApiAddressInspect
     */
    network_tag?: any;
    /**
     *
     * @type {string}
     * @memberof ApiAddressInspect
     */
    spending_key_hash?: any;
    /**
     *
     * @type {string}
     * @memberof ApiAddressInspect
     */
    stake_key_hash?: any;
    /**
     *
     * @type {string}
     * @memberof ApiAddressInspect
     */
    script_hash?: any;
    /**
     *
     * @type {ApiAddressInspectPointer}
     * @memberof ApiAddressInspect
     */
    pointer?: any;
    /**
     * Only for 'Icarus' and 'Byron' styles.
     * @type {string}
     * @memberof ApiAddressInspect
     */
    address_root?: any;
    /**
     * Only for 'Byron' style.
     * @type {string}
     * @memberof ApiAddressInspect
     */
    derivation_path?: any;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ApiAddressInspectAddressStyleEnum {
    Shelley = "Shelley",
    Icarus = "Icarus",
    Byron = "Byron"
}
/**
    * @export
    * @enum {string}
    */
export declare enum ApiAddressInspectStakeReferenceEnum {
    None = "none",
    ByValue = "by value",
    ByPointer = "by pointer"
}
