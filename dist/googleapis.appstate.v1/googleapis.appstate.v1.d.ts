/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        appstate(version: string): any;
        appstate(version: 'v1'): appstate.v1.Appstate;
    }

    namespace appstate {
        namespace v1 {
            export interface Appstate {
                new(options: any): Appstate;

                'states': {
                    'clear': (parameters: {'currentDataVersion'?: string, 'stateKey': number}, callback: (error: any, body: WriteResult, response: any) => void) => Request;
                    'delete': (parameters: {'stateKey': number}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'stateKey': number}, callback: (error: any, body: GetResponse, response: any) => void) => Request;
                    'list': (parameters: {'includeData'?: boolean}, callback: (error: any, body: ListResponse, response: any) => void) => Request;
                    'update': (parameters: {'currentStateVersion'?: string, 'stateKey': number}, callback: (error: any, body: WriteResult, response: any) => void) => Request;
                };

            }

            interface GetResponse {
                'currentStateVersion': string;
                'data': string;
                'kind': string;
                'stateKey': number;
            }

            interface ListResponse {
                'items': GetResponse[];
                'kind': string;
                'maximumKeyCount': number;
            }

            interface UpdateRequest {
                'data': string;
                'kind': string;
            }

            interface WriteResult {
                'currentStateVersion': string;
                'kind': string;
                'stateKey': number;
            }

        }
    }
}