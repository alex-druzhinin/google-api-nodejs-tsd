/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        blogger(version: string): any;
        blogger(version: 'v2'): blogger.v2.Blogger;
    }

    namespace blogger {
        namespace v2 {
            export interface Blogger {
                new(options: any): Blogger;

                'blogs': {
                    'get': (parameters: {'blogId': string}, callback: (error: any, body: Blog, response: any) => void) => Request;
                };
                'comments': {
                    'get': (parameters: {'blogId': string, 'commentId': string, 'postId': string}, callback: (error: any, body: Comment, response: any) => void) => Request;
                    'list': (parameters: {'blogId': string, 'fetchBodies'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'postId': string, 'startDate'?: string}, callback: (error: any, body: CommentList, response: any) => void) => Request;
                };
                'pages': {
                    'get': (parameters: {'blogId': string, 'pageId': string}, callback: (error: any, body: Page, response: any) => void) => Request;
                    'list': (parameters: {'blogId': string, 'fetchBodies'?: boolean}, callback: (error: any, body: PageList, response: any) => void) => Request;
                };
                'posts': {
                    'get': (parameters: {'blogId': string, 'postId': string}, callback: (error: any, body: Post, response: any) => void) => Request;
                    'list': (parameters: {'blogId': string, 'fetchBodies'?: boolean, 'maxResults'?: number, 'pageToken'?: string, 'startDate'?: string}, callback: (error: any, body: PostList, response: any) => void) => Request;
                };
                'users': {
                    'get': (parameters: {'userId': string}, callback: (error: any, body: User, response: any) => void) => Request;
                
                    'blogs': {
                        'list': (parameters: {'userId': string}, callback: (error: any, body: BlogList, response: any) => void) => Request;
                    };
                };

            }

            interface Blog {
                'description': string;
                'id': string;
                'kind': string;
                'locale': {
                    'country': string;
                    'language': string;
                    'variant': string;
                };
                'name': string;
                'pages': {
                    'selfLink': string;
                    'totalItems': number;
                };
                'posts': {
                    'selfLink': string;
                    'totalItems': number;
                };
                'published': string;
                'selfLink': string;
                'updated': string;
                'url': string;
            }

            interface BlogList {
                'items': Blog[];
                'kind': string;
            }

            interface Comment {
                'author': {
                    'displayName': string;
                    'id': string;
                    'image': {
                        'url': string;
                    };
                    'url': string;
                };
                'blog': {
                    'id': string;
                };
                'content': string;
                'id': string;
                'inReplyTo': {
                    'id': string;
                };
                'kind': string;
                'post': {
                    'id': string;
                };
                'published': string;
                'selfLink': string;
                'updated': string;
            }

            interface CommentList {
                'items': Comment[];
                'kind': string;
                'nextPageToken': string;
                'prevPageToken': string;
            }

            interface Page {
                'author': {
                    'displayName': string;
                    'id': string;
                    'image': {
                        'url': string;
                    };
                    'url': string;
                };
                'blog': {
                    'id': string;
                };
                'content': string;
                'id': string;
                'kind': string;
                'published': string;
                'selfLink': string;
                'title': string;
                'updated': string;
                'url': string;
            }

            interface PageList {
                'items': Page[];
                'kind': string;
            }

            interface Post {
                'author': {
                    'displayName': string;
                    'id': string;
                    'image': {
                        'url': string;
                    };
                    'url': string;
                };
                'blog': {
                    'id': string;
                };
                'content': string;
                'id': string;
                'kind': string;
                'labels': string[];
                'published': string;
                'replies': {
                    'selfLink': string;
                    'totalItems': string;
                };
                'selfLink': string;
                'title': string;
                'updated': string;
                'url': string;
            }

            interface PostList {
                'items': Post[];
                'kind': string;
                'nextPageToken': string;
                'prevPageToken': string;
            }

            interface User {
                'about': string;
                'blogs': {
                    'selfLink': string;
                };
                'created': string;
                'displayName': string;
                'id': string;
                'kind': string;
                'locale': {
                    'country': string;
                    'language': string;
                    'variant': string;
                };
                'selfLink': string;
                'url': string;
            }

        }
    }
}