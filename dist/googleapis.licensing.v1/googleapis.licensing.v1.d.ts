/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        licensing(version: string): any;
        licensing(version: 'v1'): licensing.v1.Licensing;
    }

    namespace licensing {
        namespace v1 {
            export interface Licensing {
                new(options: any): Licensing;

                'licenseAssignments': {
                    'delete': (parameters: {'productId': string, 'skuId': string, 'userId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'productId': string, 'skuId': string, 'userId': string}, callback: (error: any, body: LicenseAssignment, response: any) => void) => Request;
                    'insert': (parameters: {'productId': string, 'skuId': string}, callback: (error: any, body: LicenseAssignment, response: any) => void) => Request;
                    'listForProduct': (parameters: {'customerId': string, 'maxResults'?: number, 'pageToken'?: string, 'productId': string}, callback: (error: any, body: LicenseAssignmentList, response: any) => void) => Request;
                    'listForProductAndSku': (parameters: {'customerId': string, 'maxResults'?: number, 'pageToken'?: string, 'productId': string, 'skuId': string}, callback: (error: any, body: LicenseAssignmentList, response: any) => void) => Request;
                    'patch': (parameters: {'productId': string, 'skuId': string, 'userId': string}, callback: (error: any, body: LicenseAssignment, response: any) => void) => Request;
                    'update': (parameters: {'productId': string, 'skuId': string, 'userId': string}, callback: (error: any, body: LicenseAssignment, response: any) => void) => Request;
                };

            }

            interface LicenseAssignment {
                'etags': string;
                'kind': string;
                'productId': string;
                'selfLink': string;
                'skuId': string;
                'userId': string;
            }

            interface LicenseAssignmentInsert {
                'userId': string;
            }

            interface LicenseAssignmentList {
                'etag': string;
                'items': LicenseAssignment[];
                'kind': string;
                'nextPageToken': string;
            }

        }
    }
}