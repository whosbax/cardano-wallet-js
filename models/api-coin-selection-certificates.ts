/* tslint:disable */
/* eslint-disable */
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
 * A delegation certificate  Only for 'join_pool' the 'pool' property is required. 
 * @export
 * @interface ApiCoinSelectionCertificates
 */
export interface ApiCoinSelectionCertificates {
    /**
     * 
     * @type {string}
     * @memberof ApiCoinSelectionCertificates
     */
    certificate_type: ApiCoinSelectionCertificatesCertificateTypeEnum;
    /**
     * A unique identifier for the pool.
     * @type {string}
     * @memberof ApiCoinSelectionCertificates
     */
    pool?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof ApiCoinSelectionCertificates
     */
    reward_account_path: string[];
}

/**
    * @export
    * @enum {string}
    */
export enum ApiCoinSelectionCertificatesCertificateTypeEnum {
    JoinPool = 'join_pool',
    QuitPool = 'quit_pool',
    RegisterRewardAccount = 'register_reward_account'
}

