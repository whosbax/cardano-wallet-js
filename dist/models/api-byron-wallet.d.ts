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
 * @interface ApiByronWallet
 */
export interface ApiByronWallet {
    /**
     * A unique identifier for the wallet
     * @type {string}
     * @memberof ApiByronWallet
     */
    id: any;
    /**
     *
     * @type {ByronwalletsBalance}
     * @memberof ApiByronWallet
     */
    balance: any;
    /**
     *
     * @type {WalletsAssets}
     * @memberof ApiByronWallet
     */
    assets: any;
    /**
     * Mechanism used for discovering addresses.
     * @type {string}
     * @memberof ApiByronWallet
     */
    discovery: ApiByronWalletDiscoveryEnum;
    /**
     *
     * @type {string}
     * @memberof ApiByronWallet
     */
    name: any;
    /**
     *
     * @type {WalletsPassphrase}
     * @memberof ApiByronWallet
     */
    passphrase?: any;
    /**
     *
     * @type {WalletsState}
     * @memberof ApiByronWallet
     */
    state: any;
    /**
     *
     * @type {WalletsTip}
     * @memberof ApiByronWallet
     */
    tip: any;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ApiByronWalletDiscoveryEnum {
    Random = "random",
    Sequential = "sequential"
}
