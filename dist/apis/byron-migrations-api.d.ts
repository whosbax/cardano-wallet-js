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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Body20 } from '../models';
import { InlineResponse2004 } from '../models';
import { InlineResponse2009 } from '../models';
/**
 * ByronMigrationsApi - axios parameter creator
 * @export
 */
export declare const ByronMigrationsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Calculate the exact cost of sending all funds from particular Byron wallet to a set of addresses.
     * @summary Calculate Cost
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronWalletMigrationInfo: (walletId: string, options?: any) => Promise<RequestArgs>;
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Submit one or more transactions which transfers all funds from a Byron wallet to a set of addresses.  This operation attempts to preserve the UTxO \"shape\" of a wallet as far as possible. That is, coins will not be agglomerated. Therefore, if the wallet has a large UTxO set, several transactions may be needed.  A typical usage would be when one wants to move all funds from an old wallet to another (Shelley or Byron) by providing addresses coming from the new wallet.
     * @summary Migrate
     * @param {Body20} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    migrateByronWallet: (body: Body20, walletId: string, options?: any) => Promise<RequestArgs>;
};
/**
 * ByronMigrationsApi - functional programming interface
 * @export
 */
export declare const ByronMigrationsApiFp: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Calculate the exact cost of sending all funds from particular Byron wallet to a set of addresses.
     * @summary Calculate Cost
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronWalletMigrationInfo(walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2009>>;
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Submit one or more transactions which transfers all funds from a Byron wallet to a set of addresses.  This operation attempts to preserve the UTxO \"shape\" of a wallet as far as possible. That is, coins will not be agglomerated. Therefore, if the wallet has a large UTxO set, several transactions may be needed.  A typical usage would be when one wants to move all funds from an old wallet to another (Shelley or Byron) by providing addresses coming from the new wallet.
     * @summary Migrate
     * @param {Body20} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    migrateByronWallet(body: Body20, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InlineResponse2004>>>;
};
/**
 * ByronMigrationsApi - factory interface
 * @export
 */
export declare const ByronMigrationsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Calculate the exact cost of sending all funds from particular Byron wallet to a set of addresses.
     * @summary Calculate Cost
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronWalletMigrationInfo(walletId: string, options?: any): AxiosPromise<InlineResponse2009>;
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Submit one or more transactions which transfers all funds from a Byron wallet to a set of addresses.  This operation attempts to preserve the UTxO \"shape\" of a wallet as far as possible. That is, coins will not be agglomerated. Therefore, if the wallet has a large UTxO set, several transactions may be needed.  A typical usage would be when one wants to move all funds from an old wallet to another (Shelley or Byron) by providing addresses coming from the new wallet.
     * @summary Migrate
     * @param {Body20} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    migrateByronWallet(body: Body20, walletId: string, options?: any): AxiosPromise<Array<InlineResponse2004>>;
};
/**
 * ByronMigrationsApi - object-oriented interface
 * @export
 * @class ByronMigrationsApi
 * @extends {BaseAPI}
 */
export declare class ByronMigrationsApi extends BaseAPI {
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Calculate the exact cost of sending all funds from particular Byron wallet to a set of addresses.
     * @summary Calculate Cost
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronMigrationsApi
     */
    getByronWalletMigrationInfo(walletId: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2009>>;
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Submit one or more transactions which transfers all funds from a Byron wallet to a set of addresses.  This operation attempts to preserve the UTxO \"shape\" of a wallet as far as possible. That is, coins will not be agglomerated. Therefore, if the wallet has a large UTxO set, several transactions may be needed.  A typical usage would be when one wants to move all funds from an old wallet to another (Shelley or Byron) by providing addresses coming from the new wallet.
     * @summary Migrate
     * @param {Body20} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronMigrationsApi
     */
    migrateByronWallet(body: Body20, walletId: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2004[]>>;
}
