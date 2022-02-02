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
 * patate
 * @export
 * @interface ApiByronWalletRandomXPrvPostData
 */
export interface ApiByronWalletRandomXPrvPostData {
    /**
     *
     * @type {string}
     * @memberof ApiByronWalletRandomXPrvPostData
     */
    style?: ApiByronWalletRandomXPrvPostDataStyleEnum;
    /**
     *
     * @type {string}
     * @memberof ApiByronWalletRandomXPrvPostData
     */
    name: any;
    /**
     * A root private key, encrypted using a given passphrase. The underlying key should contain: - A private key - A chain code - A public key
     * @type {string}
     * @memberof ApiByronWalletRandomXPrvPostData
     */
    encrypted_root_private_key: any;
    /**
     * A hash of master passphrase. The hash should be an output of a Scrypt function with the following parameters: - logN = 14 - r = 8 - p = 1
     * @type {string}
     * @memberof ApiByronWalletRandomXPrvPostData
     */
    passphrase_hash: any;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ApiByronWalletRandomXPrvPostDataStyleEnum {
    Random = "random"
}
