/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        qpxExpress(version: string): any;
        qpxExpress(version: 'v1'): qpxExpress.v1.Qpxexpress;
    }

    namespace qpxExpress {
        namespace v1 {
            export interface Qpxexpress {
                new(options: any): Qpxexpress;

                'trips': {
                    'search': (parameters: any, callback: (error: any, body: TripsSearchResponse, response: any) => void) => Request;
                };

            }

            interface AircraftData {
                'code': string;
                'kind': string;
                'name': string;
            }

            interface AirportData {
                'city': string;
                'code': string;
                'kind': string;
                'name': string;
            }

            interface BagDescriptor {
                'commercialName': string;
                'count': number;
                'description': string[];
                'kind': string;
                'subcode': string;
            }

            interface CarrierData {
                'code': string;
                'kind': string;
                'name': string;
            }

            interface CityData {
                'code': string;
                'country': string;
                'kind': string;
                'name': string;
            }

            interface Data {
                'aircraft': AircraftData[];
                'airport': AirportData[];
                'carrier': CarrierData[];
                'city': CityData[];
                'kind': string;
                'tax': TaxData[];
            }

            interface FareInfo {
                'basisCode': string;
                'carrier': string;
                'destination': string;
                'id': string;
                'kind': string;
                'origin': string;
                'private': boolean;
            }

            interface FlightInfo {
                'carrier': string;
                'number': string;
            }

            interface FreeBaggageAllowance {
                'bagDescriptor': BagDescriptor[];
                'kilos': number;
                'kilosPerPiece': number;
                'kind': string;
                'pieces': number;
                'pounds': number;
            }

            interface LegInfo {
                'aircraft': string;
                'arrivalTime': string;
                'changePlane': boolean;
                'connectionDuration': number;
                'departureTime': string;
                'destination': string;
                'destinationTerminal': string;
                'duration': number;
                'id': string;
                'kind': string;
                'meal': string;
                'mileage': number;
                'onTimePerformance': number;
                'operatingDisclosure': string;
                'origin': string;
                'originTerminal': string;
                'secure': boolean;
            }

            interface PassengerCounts {
                'adultCount': number;
                'childCount': number;
                'infantInLapCount': number;
                'infantInSeatCount': number;
                'kind': string;
                'seniorCount': number;
            }

            interface PricingInfo {
                'baseFareTotal': string;
                'fare': FareInfo[];
                'fareCalculation': string;
                'kind': string;
                'latestTicketingTime': string;
                'passengers': PassengerCounts;
                'ptc': string;
                'refundable': boolean;
                'saleFareTotal': string;
                'saleTaxTotal': string;
                'saleTotal': string;
                'segmentPricing': SegmentPricing[];
                'tax': TaxInfo[];
            }

            interface SegmentInfo {
                'bookingCode': string;
                'bookingCodeCount': number;
                'cabin': string;
                'connectionDuration': number;
                'duration': number;
                'flight': FlightInfo;
                'id': string;
                'kind': string;
                'leg': LegInfo[];
                'marriedSegmentGroup': string;
                'subjectToGovernmentApproval': boolean;
            }

            interface SegmentPricing {
                'fareId': string;
                'freeBaggageOption': FreeBaggageAllowance[];
                'kind': string;
                'segmentId': string;
            }

            interface SliceInfo {
                'duration': number;
                'kind': string;
                'segment': SegmentInfo[];
            }

            interface SliceInput {
                'alliance': string;
                'date': string;
                'destination': string;
                'kind': string;
                'maxConnectionDuration': number;
                'maxStops': number;
                'origin': string;
                'permittedCarrier': string[];
                'permittedDepartureTime': TimeOfDayRange;
                'preferredCabin': string;
                'prohibitedCarrier': string[];
            }

            interface TaxData {
                'id': string;
                'kind': string;
                'name': string;
            }

            interface TaxInfo {
                'chargeType': string;
                'code': string;
                'country': string;
                'id': string;
                'kind': string;
                'salePrice': string;
            }

            interface TimeOfDayRange {
                'earliestTime': string;
                'kind': string;
                'latestTime': string;
            }

            interface TripOption {
                'id': string;
                'kind': string;
                'pricing': PricingInfo[];
                'saleTotal': string;
                'slice': SliceInfo[];
            }

            interface TripOptionsRequest {
                'maxPrice': string;
                'passengers': PassengerCounts;
                'refundable': boolean;
                'saleCountry': string;
                'slice': SliceInput[];
                'solutions': number;
            }

            interface TripOptionsResponse {
                'data': Data;
                'kind': string;
                'requestId': string;
                'tripOption': TripOption[];
            }

            interface TripsSearchRequest {
                'request': TripOptionsRequest;
            }

            interface TripsSearchResponse {
                'kind': string;
                'trips': TripOptionsResponse;
            }

        }
    }
}