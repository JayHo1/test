import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectsService {

	constructor(private http: Http) { }

	getProject(id: number) : Observable<any> {
		const url = '/api/projects/' + id;

		return this.http.get(url)
			.map( (res:Response) => res.json())
			.catch( (error: any) => Observable.throw(JSON.parse(JSON.stringify(error))));
	}

	getProjects() : Observable<any> {
		const url = '/api/projects'

		return this.http.get(url)
			.map( (res:Response) => res.json())
			.catch( (error:any) => Observable.throw(JSON.parse(JSON.stringify(error))));
	}

	searchProject(body: Object) : Observable<any> {
		const url = '/api/projects/search'

		return this.http.post(url, body)
			.map( (res:Response) => res.json())
			.catch( (error: any) => Observable.throw(JSON.parse(JSON.stringify(error))));
	}

}
