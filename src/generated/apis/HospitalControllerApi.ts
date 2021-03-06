// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    HospitalDTO,
    ResponseEntity,
} from '../models';

export interface UpdateHospitalUsingPUTRequest {
    code: string;
    hospitalDTO: HospitalDTO;
}

/**
 * no description
 */
export class HospitalControllerApi extends BaseAPI {

    /**
     * getHospitalCurrencyCode
     */
    getHospitalCurrencyCodeUsingGET = (): Observable<string> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<string>({
            path: '/hospitals/currencyCode',
            method: 'GET',
            headers,
        });
    };

    /**
     * getHospital
     */
    getHospitalUsingGET = (): Observable<HospitalDTO> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<HospitalDTO>({
            path: '/hospitals',
            method: 'GET',
            headers,
        });
    };

    /**
     * updateHospital
     */
    updateHospitalUsingPUT = ({ code, hospitalDTO }: UpdateHospitalUsingPUTRequest): Observable<ResponseEntity> => {
        throwIfNullOrUndefined(code, 'updateHospitalUsingPUT');
        throwIfNullOrUndefined(hospitalDTO, 'updateHospitalUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ResponseEntity>({
            path: '/hospitals/{code}'.replace('{code}', encodeURI(code)),
            method: 'PUT',
            headers,
            body: hospitalDTO,
        });
    };

}
