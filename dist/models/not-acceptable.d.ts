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
 * @interface NotAcceptable
 */
export interface NotAcceptable {
    /**
     * May occur when providing an invalid 'Accept' header.
     * @type {string}
     * @memberof NotAcceptable
     */
    message: any;
    /**
     *
     * @type {string}
     * @memberof NotAcceptable
     */
    code: NotAcceptableCodeEnum;
}
/**
    * @export
    * @enum {string}
    */
export declare enum NotAcceptableCodeEnum {
    Acceptable = "not_acceptable"
}
