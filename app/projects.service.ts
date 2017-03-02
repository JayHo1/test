import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProjectsService {



	constructor(private http: Http) { }

	private commentsUrl = 'http://localhost:3000/api/projects';

	getProjects() : Observable<any> {

		// ...using get request
		return this.http.get(this.commentsUrl)
		// ...and calling .json() on the response to return data
		.map((res:Response) => res.json())
		//...errors if any
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));

	}

}
