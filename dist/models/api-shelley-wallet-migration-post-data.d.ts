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
 * @interface ApiShelleyWalletMigrationPostData
 */
export interface ApiShelleyWalletMigrationPostData {
    /**
     * The wallet's master passphrase.
     * @type {string}
     * @memberof ApiShelleyWalletMigrationPostData
     */
    passphrase: any;
    /**
     * The recipient addresses.
     * @type {Array&lt;string&gt;}
     * @memberof ApiShelleyWalletMigrationPostData
     */
    addresses: any;
}
