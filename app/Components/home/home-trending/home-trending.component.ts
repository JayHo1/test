import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
	selector: 'app-home-trending',
	templateUrl: './home-trending.component.html',
	styleUrls: ['./home-trending.component.scss'],
})
export class HomeTrendingComponent implements OnInit {

	projectCards: Array<Object>;

	// @ViewChild('owlElement') owlElement: OwlCarousel


	// fun() {
	// 	console.log(this.owlElement);
	// 	this.owlElement.next([200])
	// 	//duration 200ms
	// }

	constructor() { }

	ngOnInit() {

		let arrays = [
			{
				category_name: 'Technology',
				check_vote: 1,
				vote: 59,
				picture_card: 'https://res.cloudinary.com/dqpkpmrgk/image/upload/v1488506173/vnupyqkzhfxwmb6nkz9s.jpg',
				title: 'Gyftee',
				status: 'Live project',
				city: 'San Francisco',
				country: 'United States',
				description: 'Online creative directory dedicated to connect emerging talents with image-making businesses.',
				pic: 'https://res.cloudinary.com/dqpkpmrgk/image/upload/w_30,h_30,c_fill/v1488542557/qdwg4isdujyg0wlix49y.jpg',
				creator_user_name: 'Carolina Mona',
				usersIn: 0
			},
			{
				category_name: 'Technology',
				check_vote: 1,
				vote: 59,
				picture_card: 'https://res.cloudinary.com/dqpkpmrgk/image/upload/v1488506173/vnupyqkzhfxwmb6nkz9s.jpg',
				title: 'Gyftee',
				status: 'Live project',
				city: 'San Francisco',
				country: 'United States',
				description: 'Online creative directory dedicated to connect emerging talents with image-making businesses.',
				pic: 'https://res.cloudinary.com/dqpkpmrgk/image/upload/w_30,h_30,c_fill/v1488542557/qdwg4isdujyg0wlix49y.jpg',
				creator_user_name: 'Carolina Mona',
				usersIn: 0
			},
			{
				category_name: 'Technology',
				check_vote: 1,
				vote: 59,
				picture_card: 'https://res.cloudinary.com/dqpkpmrgk/image/upload/v1488506173/vnupyqkzhfxwmb6nkz9s.jpg',
				title: 'Gyftee',
				status: 'Live project',
				city: 'San Francisco',
				country: 'United States',
				description: 'Online creative directory dedicated to connect emerging talents with image-making businesses.',
				pic: 'https://res.cloudinary.com/dqpkpmrgk/image/upload/w_30,h_30,c_fill/v1488542557/qdwg4isdujyg0wlix49y.jpg',
				creator_user_name: 'Carolina Mona',
				usersIn: 0
			}
		];

		this.projectCards = arrays;
		console.log(this.projectCards);
	}

}
