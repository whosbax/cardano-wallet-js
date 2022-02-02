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
 * @interface InlineResponse20014
 */
export interface InlineResponse20014 {
    /**
     *
     * @type {string}
     * @memberof InlineResponse20014
     */
    address_style: InlineResponse20014AddressStyleEnum;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20014
     */
    stake_reference: InlineResponse20014StakeReferenceEnum;
    /**
     * Can be null for 'Icarus' and 'Byron' styles.
     * @type {number}
     * @memberof InlineResponse20014
     */
    network_tag?: any;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20014
     */
    spending_key_hash?: any;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20014
     */
    stake_key_hash?: any;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20014
     */
    script_hash?: any;
    /**
     *
     * @type {ApiAddressInspectPointer}
     * @memberof InlineResponse20014
     */
    pointer?: any;
    /**
     * Only for 'Icarus' and 'Byron' styles.
     * @type {string}
     * @memberof InlineResponse20014
     */
    address_root?: any;
    /**
     * Only for 'Byron' style.
     * @type {string}
     * @memberof InlineResponse20014
     */
    derivation_path?: any;
}
/**
    * @export
    * @enum {string}
    */
export declare enum InlineResponse20014AddressStyleEnum {
    Shelley = "Shelley",
    Icarus = "Icarus",
    Byron = "Byron"
}
/**
    * @export
    * @enum {string}
    */
export declare enum InlineResponse20014StakeReferenceEnum {
    None = "none",
    ByValue = "by value",
    ByPointer = "by pointer"
}
