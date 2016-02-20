/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        content(version: string): any;
        content(version: 'v2'): content.v2.Content;
    }

    namespace content {
        namespace v2 {
            export interface Content {
                new(options: any): Content;

                'accounts': {
                    'authinfo': (parameters: any, callback: (error: any, body: AccountsAuthInfoResponse, response: any) => void) => Request;
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: AccountsCustomBatchResponse, response: any) => void) => Request;
                    'delete': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'accountId': string, 'merchantId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'insert': (parameters: {'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: AccountsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'update': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                };
                'accountshipping': {
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: AccountshippingCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'accountId': string, 'merchantId': string}, callback: (error: any, body: AccountShipping, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: AccountshippingListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: AccountShipping, response: any) => void) => Request;
                    'update': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: AccountShipping, response: any) => void) => Request;
                };
                'accountstatuses': {
                    'custombatch': (parameters: any, callback: (error: any, body: AccountstatusesCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'accountId': string, 'merchantId': string}, callback: (error: any, body: AccountStatus, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: AccountstatusesListResponse, response: any) => void) => Request;
                };
                'accounttax': {
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: AccounttaxCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'accountId': string, 'merchantId': string}, callback: (error: any, body: AccountTax, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: AccounttaxListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: AccountTax, response: any) => void) => Request;
                    'update': (parameters: {'accountId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: AccountTax, response: any) => void) => Request;
                };
                'datafeeds': {
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: DatafeedsCustomBatchResponse, response: any) => void) => Request;
                    'delete': (parameters: {'datafeedId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'datafeedId': string, 'merchantId': string}, callback: (error: any, body: Datafeed, response: any) => void) => Request;
                    'insert': (parameters: {'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Datafeed, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: DatafeedsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'datafeedId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Datafeed, response: any) => void) => Request;
                    'update': (parameters: {'datafeedId': string, 'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Datafeed, response: any) => void) => Request;
                };
                'datafeedstatuses': {
                    'custombatch': (parameters: any, callback: (error: any, body: DatafeedstatusesCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'datafeedId': string, 'merchantId': string}, callback: (error: any, body: DatafeedStatus, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: DatafeedstatusesListResponse, response: any) => void) => Request;
                };
                'inventory': {
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: InventoryCustomBatchResponse, response: any) => void) => Request;
                    'set': (parameters: {'dryRun'?: boolean, 'merchantId': string, 'productId': string, 'storeCode': string}, callback: (error: any, body: InventorySetResponse, response: any) => void) => Request;
                };
                'orders': {
                    'acknowledge': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersAcknowledgeResponse, response: any) => void) => Request;
                    'advancetestorder': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersAdvanceTestOrderResponse, response: any) => void) => Request;
                    'cancel': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersCancelResponse, response: any) => void) => Request;
                    'cancellineitem': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersCancelLineItemResponse, response: any) => void) => Request;
                    'createtestorder': (parameters: {'merchantId': string}, callback: (error: any, body: OrdersCreateTestOrderResponse, response: any) => void) => Request;
                    'custombatch': (parameters: any, callback: (error: any, body: OrdersCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: Order, response: any) => void) => Request;
                    'getbymerchantorderid': (parameters: {'merchantId': string, 'merchantOrderId': string}, callback: (error: any, body: OrdersGetByMerchantOrderIdResponse, response: any) => void) => Request;
                    'gettestordertemplate': (parameters: {'merchantId': string, 'templateName': string}, callback: (error: any, body: OrdersGetTestOrderTemplateResponse, response: any) => void) => Request;
                    'list': (parameters: {'acknowledged'?: boolean, 'maxResults'?: number, 'merchantId': string, 'orderBy'?: string, 'pageToken'?: string, 'placedDateEnd'?: string, 'placedDateStart'?: string, 'statuses'?: string}, callback: (error: any, body: OrdersListResponse, response: any) => void) => Request;
                    'refund': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersRefundResponse, response: any) => void) => Request;
                    'returnlineitem': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersReturnLineItemResponse, response: any) => void) => Request;
                    'shiplineitems': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersShipLineItemsResponse, response: any) => void) => Request;
                    'updatemerchantorderid': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersUpdateMerchantOrderIdResponse, response: any) => void) => Request;
                    'updateshipment': (parameters: {'merchantId': string, 'orderId': string}, callback: (error: any, body: OrdersUpdateShipmentResponse, response: any) => void) => Request;
                };
                'products': {
                    'custombatch': (parameters: {'dryRun'?: boolean}, callback: (error: any, body: ProductsCustomBatchResponse, response: any) => void) => Request;
                    'delete': (parameters: {'dryRun'?: boolean, 'merchantId': string, 'productId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'merchantId': string, 'productId': string}, callback: (error: any, body: Product, response: any) => void) => Request;
                    'insert': (parameters: {'dryRun'?: boolean, 'merchantId': string}, callback: (error: any, body: Product, response: any) => void) => Request;
                    'list': (parameters: {'includeInvalidInsertedItems'?: boolean, 'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: ProductsListResponse, response: any) => void) => Request;
                };
                'productstatuses': {
                    'custombatch': (parameters: any, callback: (error: any, body: ProductstatusesCustomBatchResponse, response: any) => void) => Request;
                    'get': (parameters: {'merchantId': string, 'productId': string}, callback: (error: any, body: ProductStatus, response: any) => void) => Request;
                    'list': (parameters: {'includeInvalidInsertedItems'?: boolean, 'maxResults'?: number, 'merchantId': string, 'pageToken'?: string}, callback: (error: any, body: ProductstatusesListResponse, response: any) => void) => Request;
                };

            }

            export interface Account {
                'adultContent': boolean;
                'adwordsLinks': AccountAdwordsLink[];
                'id': string;
                'kind': string;
                'name': string;
                'reviewsUrl': string;
                'sellerId': string;
                'users': AccountUser[];
                'websiteUrl': string;
            }

            export interface AccountAdwordsLink {
                'adwordsId': string;
                'status': string;
            }

            export interface AccountIdentifier {
                'aggregatorId': string;
                'merchantId': string;
            }

            export interface AccountShipping {
                'accountId': string;
                'carrierRates': AccountShippingCarrierRate[];
                'kind': string;
                'locationGroups': AccountShippingLocationGroup[];
                'rateTables': AccountShippingRateTable[];
                'services': AccountShippingShippingService[];
            }

            export interface AccountShippingCarrierRate {
                'carrier': string;
                'carrierService': string;
                'modifierFlatRate': Price;
                'modifierPercent': string;
                'name': string;
                'saleCountry': string;
                'shippingOrigin': string;
            }

            export interface AccountShippingCondition {
                'deliveryLocationGroup': string;
                'deliveryLocationId': string;
                'deliveryPostalCode': string;
                'deliveryPostalCodeRange': AccountShippingPostalCodeRange;
                'priceMax': Price;
                'shippingLabel': string;
                'weightMax': Weight;
            }

            export interface AccountShippingLocationGroup {
                'country': string;
                'locationIds': string[];
                'name': string;
                'postalCodeRanges': AccountShippingPostalCodeRange[];
                'postalCodes': string[];
            }

            export interface AccountShippingPostalCodeRange {
                'end': string;
                'start': string;
            }

            export interface AccountShippingRateTable {
                'content': AccountShippingRateTableCell[];
                'name': string;
                'saleCountry': string;
            }

            export interface AccountShippingRateTableCell {
                'condition': AccountShippingCondition;
                'rate': Price;
            }

            export interface AccountShippingShippingService {
                'active': boolean;
                'calculationMethod': AccountShippingShippingServiceCalculationMethod;
                'costRuleTree': AccountShippingShippingServiceCostRule;
                'name': string;
                'saleCountry': string;
            }

            export interface AccountShippingShippingServiceCalculationMethod {
                'carrierRate': string;
                'excluded': boolean;
                'flatRate': Price;
                'percentageRate': string;
                'rateTable': string;
            }

            export interface AccountShippingShippingServiceCostRule {
                'calculationMethod': AccountShippingShippingServiceCalculationMethod;
                'children': AccountShippingShippingServiceCostRule[];
                'condition': AccountShippingCondition;
            }

            export interface AccountStatus {
                'accountId': string;
                'dataQualityIssues': AccountStatusDataQualityIssue[];
                'kind': string;
            }

            export interface AccountStatusDataQualityIssue {
                'country': string;
                'displayedValue': string;
                'exampleItems': AccountStatusExampleItem[];
                'id': string;
                'lastChecked': string;
                'numItems': number;
                'severity': string;
                'submittedValue': string;
            }

            export interface AccountStatusExampleItem {
                'itemId': string;
                'link': string;
                'submittedValue': string;
                'title': string;
                'valueOnLandingPage': string;
            }

            export interface AccountTax {
                'accountId': string;
                'kind': string;
                'rules': AccountTaxTaxRule[];
            }

            export interface AccountTaxTaxRule {
                'country': string;
                'locationId': string;
                'ratePercent': string;
                'shippingTaxed': boolean;
                'useGlobalRate': boolean;
            }

            export interface AccountUser {
                'admin': boolean;
                'emailAddress': string;
            }

            export interface AccountsAuthInfoResponse {
                'accountIdentifiers': AccountIdentifier[];
                'kind': string;
            }

            export interface AccountsCustomBatchRequest {
                'entries': AccountsCustomBatchRequestEntry[];
            }

            export interface AccountsCustomBatchRequestEntry {
                'account': Account;
                'accountId': string;
                'batchId': number;
                'merchantId': string;
                'method': string;
            }

            export interface AccountsCustomBatchResponse {
                'entries': AccountsCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface AccountsCustomBatchResponseEntry {
                'account': Account;
                'batchId': number;
                'errors': Errors;
                'kind': string;
            }

            export interface AccountsListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': Account[];
            }

            export interface AccountshippingCustomBatchRequest {
                'entries': AccountshippingCustomBatchRequestEntry[];
            }

            export interface AccountshippingCustomBatchRequestEntry {
                'accountId': string;
                'accountShipping': AccountShipping;
                'batchId': number;
                'merchantId': string;
                'method': string;
            }

            export interface AccountshippingCustomBatchResponse {
                'entries': AccountshippingCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface AccountshippingCustomBatchResponseEntry {
                'accountShipping': AccountShipping;
                'batchId': number;
                'errors': Errors;
                'kind': string;
            }

            export interface AccountshippingListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': AccountShipping[];
            }

            export interface AccountstatusesCustomBatchRequest {
                'entries': AccountstatusesCustomBatchRequestEntry[];
            }

            export interface AccountstatusesCustomBatchRequestEntry {
                'accountId': string;
                'batchId': number;
                'merchantId': string;
                'method': string;
            }

            export interface AccountstatusesCustomBatchResponse {
                'entries': AccountstatusesCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface AccountstatusesCustomBatchResponseEntry {
                'accountStatus': AccountStatus;
                'batchId': number;
                'errors': Errors;
            }

            export interface AccountstatusesListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': AccountStatus[];
            }

            export interface AccounttaxCustomBatchRequest {
                'entries': AccounttaxCustomBatchRequestEntry[];
            }

            export interface AccounttaxCustomBatchRequestEntry {
                'accountId': string;
                'accountTax': AccountTax;
                'batchId': number;
                'merchantId': string;
                'method': string;
            }

            export interface AccounttaxCustomBatchResponse {
                'entries': AccounttaxCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface AccounttaxCustomBatchResponseEntry {
                'accountTax': AccountTax;
                'batchId': number;
                'errors': Errors;
                'kind': string;
            }

            export interface AccounttaxListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': AccountTax[];
            }

            export interface Datafeed {
                'attributeLanguage': string;
                'contentLanguage': string;
                'contentType': string;
                'fetchSchedule': DatafeedFetchSchedule;
                'fileName': string;
                'format': DatafeedFormat;
                'id': string;
                'intendedDestinations': string[];
                'kind': string;
                'name': string;
                'targetCountry': string;
            }

            export interface DatafeedFetchSchedule {
                'dayOfMonth': number;
                'fetchUrl': string;
                'hour': number;
                'password': string;
                'timeZone': string;
                'username': string;
                'weekday': string;
            }

            export interface DatafeedFormat {
                'columnDelimiter': string;
                'fileEncoding': string;
                'quotingMode': string;
            }

            export interface DatafeedStatus {
                'datafeedId': string;
                'errors': DatafeedStatusError[];
                'itemsTotal': string;
                'itemsValid': string;
                'kind': string;
                'lastUploadDate': string;
                'processingStatus': string;
                'warnings': DatafeedStatusError[];
            }

            export interface DatafeedStatusError {
                'code': string;
                'count': string;
                'examples': DatafeedStatusExample[];
                'message': string;
            }

            export interface DatafeedStatusExample {
                'itemId': string;
                'lineNumber': string;
                'value': string;
            }

            export interface DatafeedsCustomBatchRequest {
                'entries': DatafeedsCustomBatchRequestEntry[];
            }

            export interface DatafeedsCustomBatchRequestEntry {
                'batchId': number;
                'datafeed': Datafeed;
                'datafeedId': string;
                'merchantId': string;
                'method': string;
            }

            export interface DatafeedsCustomBatchResponse {
                'entries': DatafeedsCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface DatafeedsCustomBatchResponseEntry {
                'batchId': number;
                'datafeed': Datafeed;
                'errors': Errors;
            }

            export interface DatafeedsListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': Datafeed[];
            }

            export interface DatafeedstatusesCustomBatchRequest {
                'entries': DatafeedstatusesCustomBatchRequestEntry[];
            }

            export interface DatafeedstatusesCustomBatchRequestEntry {
                'batchId': number;
                'datafeedId': string;
                'merchantId': string;
                'method': string;
            }

            export interface DatafeedstatusesCustomBatchResponse {
                'entries': DatafeedstatusesCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface DatafeedstatusesCustomBatchResponseEntry {
                'batchId': number;
                'datafeedStatus': DatafeedStatus;
                'errors': Errors;
            }

            export interface DatafeedstatusesListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': DatafeedStatus[];
            }

            export interface Error {
                'domain': string;
                'message': string;
                'reason': string;
            }

            export interface Errors {
                'code': number;
                'errors': Error[];
                'message': string;
            }

            export interface Installment {
                'amount': Price;
                'months': string;
            }

            export interface Inventory {
                'availability': string;
                'installment': Installment;
                'kind': string;
                'loyaltyPoints': LoyaltyPoints;
                'price': Price;
                'quantity': number;
                'salePrice': Price;
                'salePriceEffectiveDate': string;
                'sellOnGoogleQuantity': number;
            }

            export interface InventoryCustomBatchRequest {
                'entries': InventoryCustomBatchRequestEntry[];
            }

            export interface InventoryCustomBatchRequestEntry {
                'batchId': number;
                'inventory': Inventory;
                'merchantId': string;
                'productId': string;
                'storeCode': string;
            }

            export interface InventoryCustomBatchResponse {
                'entries': InventoryCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface InventoryCustomBatchResponseEntry {
                'batchId': number;
                'errors': Errors;
                'kind': string;
            }

            export interface InventorySetRequest {
                'availability': string;
                'installment': Installment;
                'loyaltyPoints': LoyaltyPoints;
                'price': Price;
                'quantity': number;
                'salePrice': Price;
                'salePriceEffectiveDate': string;
                'sellOnGoogleQuantity': number;
            }

            export interface InventorySetResponse {
                'kind': string;
            }

            export interface LoyaltyPoints {
                'name': string;
                'pointsValue': string;
                'ratio': number;
            }

            export interface Order {
                'acknowledged': boolean;
                'customer': OrderCustomer;
                'deliveryDetails': OrderDeliveryDetails;
                'id': string;
                'kind': string;
                'lineItems': OrderLineItem[];
                'merchantId': string;
                'merchantOrderId': string;
                'netAmount': Price;
                'paymentMethod': OrderPaymentMethod;
                'paymentStatus': string;
                'placedDate': string;
                'promotions': OrderPromotion[];
                'refunds': OrderRefund[];
                'shipments': OrderShipment[];
                'shippingCost': Price;
                'shippingCostTax': Price;
                'shippingOption': string;
                'status': string;
            }

            export interface OrderAddress {
                'country': string;
                'fullAddress': string[];
                'isPostOfficeBox': boolean;
                'locality': string;
                'postalCode': string;
                'recipientName': string;
                'region': string;
                'streetAddress': string[];
            }

            export interface OrderCancellation {
                'actor': string;
                'creationDate': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrderCustomer {
                'email': string;
                'explicitMarketingPreference': boolean;
                'fullName': string;
            }

            export interface OrderDeliveryDetails {
                'address': OrderAddress;
                'phoneNumber': string;
            }

            export interface OrderLineItem {
                'cancellations': OrderCancellation[];
                'id': string;
                'price': Price;
                'product': OrderLineItemProduct;
                'quantityCanceled': number;
                'quantityDelivered': number;
                'quantityOrdered': number;
                'quantityPending': number;
                'quantityReturned': number;
                'quantityShipped': number;
                'returnInfo': OrderLineItemReturnInfo;
                'returns': OrderReturn[];
                'shippingDetails': OrderLineItemShippingDetails;
                'tax': Price;
            }

            export interface OrderLineItemProduct {
                'brand': string;
                'channel': string;
                'condition': string;
                'contentLanguage': string;
                'gtin': string;
                'id': string;
                'imageLink': string;
                'itemGroupId': string;
                'mpn': string;
                'offerId': string;
                'price': Price;
                'shownImage': string;
                'targetCountry': string;
                'title': string;
                'variantAttributes': OrderLineItemProductVariantAttribute[];
            }

            export interface OrderLineItemProductVariantAttribute {
                'dimension': string;
                'value': string;
            }

            export interface OrderLineItemReturnInfo {
                'daysToReturn': number;
                'isReturnable': boolean;
                'policyUrl': string;
            }

            export interface OrderLineItemShippingDetails {
                'deliverByDate': string;
                'method': OrderLineItemShippingDetailsMethod;
                'shipByDate': string;
            }

            export interface OrderLineItemShippingDetailsMethod {
                'carrier': string;
                'maxDaysInTransit': number;
                'methodName': string;
                'minDaysInTransit': number;
            }

            export interface OrderPaymentMethod {
                'billingAddress': OrderAddress;
                'expirationMonth': number;
                'expirationYear': number;
                'lastFourDigits': string;
                'phoneNumber': string;
                'type': string;
            }

            export interface OrderPromotion {
                'benefits': OrderPromotionBenefit[];
                'effectiveDates': string;
                'genericRedemptionCode': string;
                'id': string;
                'longTitle': string;
                'productApplicability': string;
                'redemptionChannel': string;
            }

            export interface OrderPromotionBenefit {
                'discount': Price;
                'offerIds': string[];
                'subType': string;
                'taxImpact': Price;
                'type': string;
            }

            export interface OrderRefund {
                'actor': string;
                'amount': Price;
                'creationDate': string;
                'reason': string;
                'reasonText': string;
            }

            export interface OrderReturn {
                'actor': string;
                'creationDate': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrderShipment {
                'carrier': string;
                'creationDate': string;
                'deliveryDate': string;
                'id': string;
                'lineItems': OrderShipmentLineItemShipment[];
                'status': string;
                'trackingId': string;
            }

            export interface OrderShipmentLineItemShipment {
                'lineItemId': string;
                'quantity': number;
            }

            export interface OrdersAcknowledgeRequest {
                'operationId': string;
            }

            export interface OrdersAcknowledgeResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersAdvanceTestOrderResponse {
                'kind': string;
            }

            export interface OrdersCancelLineItemRequest {
                'amount': Price;
                'lineItemId': string;
                'operationId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCancelLineItemResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersCancelRequest {
                'operationId': string;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCancelResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersCreateTestOrderRequest {
                'templateName': string;
                'testOrder': TestOrder;
            }

            export interface OrdersCreateTestOrderResponse {
                'kind': string;
                'orderId': string;
            }

            export interface OrdersCustomBatchRequest {
                'entries': OrdersCustomBatchRequestEntry[];
            }

            export interface OrdersCustomBatchRequestEntry {
                'batchId': number;
                'cancel': OrdersCustomBatchRequestEntryCancel;
                'cancelLineItem': OrdersCustomBatchRequestEntryCancelLineItem;
                'merchantId': string;
                'merchantOrderId': string;
                'method': string;
                'operationId': string;
                'orderId': string;
                'refund': OrdersCustomBatchRequestEntryRefund;
                'returnLineItem': OrdersCustomBatchRequestEntryReturnLineItem;
                'shipLineItems': OrdersCustomBatchRequestEntryShipLineItems;
                'updateShipment': OrdersCustomBatchRequestEntryUpdateShipment;
            }

            export interface OrdersCustomBatchRequestEntryCancel {
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCustomBatchRequestEntryCancelLineItem {
                'amount': Price;
                'lineItemId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCustomBatchRequestEntryRefund {
                'amount': Price;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCustomBatchRequestEntryReturnLineItem {
                'lineItemId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersCustomBatchRequestEntryShipLineItems {
                'carrier': string;
                'lineItems': OrderShipmentLineItemShipment[];
                'shipmentId': string;
                'trackingId': string;
            }

            export interface OrdersCustomBatchRequestEntryUpdateShipment {
                'carrier': string;
                'shipmentId': string;
                'status': string;
                'trackingId': string;
            }

            export interface OrdersCustomBatchResponse {
                'entries': OrdersCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface OrdersCustomBatchResponseEntry {
                'batchId': number;
                'errors': Errors;
                'executionStatus': string;
                'kind': string;
                'order': Order;
            }

            export interface OrdersGetByMerchantOrderIdResponse {
                'kind': string;
                'order': Order;
            }

            export interface OrdersGetTestOrderTemplateResponse {
                'kind': string;
                'template': TestOrder;
            }

            export interface OrdersListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': Order[];
            }

            export interface OrdersRefundRequest {
                'amount': Price;
                'operationId': string;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersRefundResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersReturnLineItemRequest {
                'lineItemId': string;
                'operationId': string;
                'quantity': number;
                'reason': string;
                'reasonText': string;
            }

            export interface OrdersReturnLineItemResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersShipLineItemsRequest {
                'carrier': string;
                'lineItems': OrderShipmentLineItemShipment[];
                'operationId': string;
                'shipmentId': string;
                'trackingId': string;
            }

            export interface OrdersShipLineItemsResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersUpdateMerchantOrderIdRequest {
                'merchantOrderId': string;
                'operationId': string;
            }

            export interface OrdersUpdateMerchantOrderIdResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface OrdersUpdateShipmentRequest {
                'carrier': string;
                'operationId': string;
                'shipmentId': string;
                'status': string;
                'trackingId': string;
            }

            export interface OrdersUpdateShipmentResponse {
                'executionStatus': string;
                'kind': string;
            }

            export interface Price {
                'currency': string;
                'value': string;
            }

            export interface Product {
                'additionalImageLinks': string[];
                'adult': boolean;
                'adwordsGrouping': string;
                'adwordsLabels': string[];
                'adwordsRedirect': string;
                'ageGroup': string;
                'aspects': ProductAspect[];
                'availability': string;
                'availabilityDate': string;
                'brand': string;
                'channel': string;
                'color': string;
                'condition': string;
                'contentLanguage': string;
                'customAttributes': ProductCustomAttribute[];
                'customGroups': ProductCustomGroup[];
                'customLabel0': string;
                'customLabel1': string;
                'customLabel2': string;
                'customLabel3': string;
                'customLabel4': string;
                'description': string;
                'destinations': ProductDestination[];
                'displayAdsId': string;
                'displayAdsLink': string;
                'displayAdsSimilarIds': string[];
                'displayAdsTitle': string;
                'displayAdsValue': number;
                'energyEfficiencyClass': string;
                'expirationDate': string;
                'gender': string;
                'googleProductCategory': string;
                'gtin': string;
                'id': string;
                'identifierExists': boolean;
                'imageLink': string;
                'installment': Installment;
                'isBundle': boolean;
                'itemGroupId': string;
                'kind': string;
                'link': string;
                'loyaltyPoints': LoyaltyPoints;
                'material': string;
                'mobileLink': string;
                'mpn': string;
                'multipack': string;
                'offerId': string;
                'onlineOnly': boolean;
                'pattern': string;
                'price': Price;
                'productType': string;
                'promotionIds': string[];
                'salePrice': Price;
                'salePriceEffectiveDate': string;
                'sellOnGoogleQuantity': string;
                'shipping': ProductShipping[];
                'shippingHeight': ProductShippingDimension;
                'shippingLabel': string;
                'shippingLength': ProductShippingDimension;
                'shippingWeight': ProductShippingWeight;
                'shippingWidth': ProductShippingDimension;
                'sizeSystem': string;
                'sizeType': string;
                'sizes': string[];
                'targetCountry': string;
                'taxes': ProductTax[];
                'title': string;
                'unitPricingBaseMeasure': ProductUnitPricingBaseMeasure;
                'unitPricingMeasure': ProductUnitPricingMeasure;
                'validatedDestinations': string[];
                'warnings': Error[];
            }

            export interface ProductAspect {
                'aspectName': string;
                'destinationName': string;
                'intention': string;
            }

            export interface ProductCustomAttribute {
                'name': string;
                'type': string;
                'unit': string;
                'value': string;
            }

            export interface ProductCustomGroup {
                'attributes': ProductCustomAttribute[];
                'name': string;
            }

            export interface ProductDestination {
                'destinationName': string;
                'intention': string;
            }

            export interface ProductShipping {
                'country': string;
                'locationGroupName': string;
                'locationId': string;
                'postalCode': string;
                'price': Price;
                'region': string;
                'service': string;
            }

            export interface ProductShippingDimension {
                'unit': string;
                'value': number;
            }

            export interface ProductShippingWeight {
                'unit': string;
                'value': number;
            }

            export interface ProductStatus {
                'creationDate': string;
                'dataQualityIssues': ProductStatusDataQualityIssue[];
                'destinationStatuses': ProductStatusDestinationStatus[];
                'googleExpirationDate': string;
                'kind': string;
                'lastUpdateDate': string;
                'link': string;
                'productId': string;
                'title': string;
            }

            export interface ProductStatusDataQualityIssue {
                'detail': string;
                'fetchStatus': string;
                'id': string;
                'location': string;
                'severity': string;
                'timestamp': string;
                'valueOnLandingPage': string;
                'valueProvided': string;
            }

            export interface ProductStatusDestinationStatus {
                'approvalStatus': string;
                'destination': string;
                'intention': string;
            }

            export interface ProductTax {
                'country': string;
                'locationId': string;
                'postalCode': string;
                'rate': number;
                'region': string;
                'taxShip': boolean;
            }

            export interface ProductUnitPricingBaseMeasure {
                'unit': string;
                'value': string;
            }

            export interface ProductUnitPricingMeasure {
                'unit': string;
                'value': number;
            }

            export interface ProductsCustomBatchRequest {
                'entries': ProductsCustomBatchRequestEntry[];
            }

            export interface ProductsCustomBatchRequestEntry {
                'batchId': number;
                'merchantId': string;
                'method': string;
                'product': Product;
                'productId': string;
            }

            export interface ProductsCustomBatchResponse {
                'entries': ProductsCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface ProductsCustomBatchResponseEntry {
                'batchId': number;
                'errors': Errors;
                'kind': string;
                'product': Product;
            }

            export interface ProductsListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': Product[];
            }

            export interface ProductstatusesCustomBatchRequest {
                'entries': ProductstatusesCustomBatchRequestEntry[];
            }

            export interface ProductstatusesCustomBatchRequestEntry {
                'batchId': number;
                'merchantId': string;
                'method': string;
                'productId': string;
            }

            export interface ProductstatusesCustomBatchResponse {
                'entries': ProductstatusesCustomBatchResponseEntry[];
                'kind': string;
            }

            export interface ProductstatusesCustomBatchResponseEntry {
                'batchId': number;
                'errors': Errors;
                'kind': string;
                'productStatus': ProductStatus;
            }

            export interface ProductstatusesListResponse {
                'kind': string;
                'nextPageToken': string;
                'resources': ProductStatus[];
            }

            export interface TestOrder {
                'customer': TestOrderCustomer;
                'kind': string;
                'lineItems': TestOrderLineItem[];
                'paymentMethod': TestOrderPaymentMethod;
                'predefinedDeliveryAddress': string;
                'promotions': OrderPromotion[];
                'shippingCost': Price;
                'shippingCostTax': Price;
                'shippingOption': string;
            }

            export interface TestOrderCustomer {
                'email': string;
                'explicitMarketingPreference': boolean;
                'fullName': string;
            }

            export interface TestOrderLineItem {
                'product': TestOrderLineItemProduct;
                'quantityOrdered': number;
                'returnInfo': OrderLineItemReturnInfo;
                'shippingDetails': OrderLineItemShippingDetails;
                'unitTax': Price;
            }

            export interface TestOrderLineItemProduct {
                'brand': string;
                'channel': string;
                'condition': string;
                'contentLanguage': string;
                'gtin': string;
                'imageLink': string;
                'itemGroupId': string;
                'mpn': string;
                'offerId': string;
                'price': Price;
                'targetCountry': string;
                'title': string;
                'variantAttributes': OrderLineItemProductVariantAttribute[];
            }

            export interface TestOrderPaymentMethod {
                'expirationMonth': number;
                'expirationYear': number;
                'lastFourDigits': string;
                'predefinedBillingAddress': string;
                'type': string;
            }

            export interface Weight {
                'unit': string;
                'value': string;
            }

        }
    }
}