import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Cookie } from 'ng2-cookies';
import { ProjectsService } from '../../Services/projects.service';
import { animateFactory } from 'ng2-animate';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [animateFactory(300, 200, 'linear')],
    providers: [ProjectsService]
})
export class HomeComponent {

    // cookies: Object;
    // keys: Array<string>;
    // cName: string;
    // cValue: string;
    // rName: string;
    // checkName: string;
    // arrays: Array<string>;
    config: Object = {
        autoplay: 4000,
        spaceBetween: 30
    };
    projects: Array<string>;

    private body = {
        "query": {
            "sort": {
                "field": "rank",
                "reverse": false
            },
            "members": [
                {
                    "field": "location",
                    "value": "Paris, France"
                }
            ]
        },
        "paginate": {
            "limit": 100,
            "offset": 10
        }
    }

    constructor(private ProjectsService: ProjectsService) {
        // this.update();
        // this.ProjectsService.getProjects().subscribe( res => {
        //     console.log(res);
        //     this.projects = res.projects;
        // }, err => {
        //     console.log(err);
        // });

        // this.ProjectsService.getProject(3).subscribe( res => {
        //     console.log(res);
        // }, err => {
        //     console.log(err);
        // });

        // this.ProjectsService.searchProject(this.body).subscribe( res => {
        //     console.log(res);
        // }, err => {
        //     console.log(err);
        // });
    }

    // ngOnInit() {
    //     jQuery('.slick-slider').slick({ 
    //         dots: true,
    //         arrows: true,
    //         infinite: true,
    //         speed: 500,
    //         autoplay: true,
    //         autoplaySpeed: 8000,
    //         swipeToSlide: false,
    //         prevArrow:"<img class='a-left control-c prev slick-prev' src='public/images/arrow-back-w-01.svg'>",
    //         nextArrow:"<img class='a-right control-c next slick-next' src='public/images/arrow-back-w-02.svg'>",
    //     });
    // }

    // update() {
    //     this.cookies = Cookie.getAll();
    //     this.keys = Object.keys(this.cookies);
    // }
    // addCookie(cName: string, cValue: string) {
    //     console.log('Adding: ', cName, cValue);
    //     Cookie.set(cName, cValue);
    //     this.update();
    // }
    // removeCookie(rName: string) {
    //     console.log('Removing: ', rName);
    //     Cookie.delete(rName);
    //     this.update();
    // }
    // removeAll() {
    //     console.log('Removing all cookies');
    //     Cookie.deleteAll();
    //     this.update();
    // }
    // checkCookie() {
    //     window.alert('Check cookie ' + this.checkName + ' returned ' + Cookie.check(this.checkName));
    // }

}
