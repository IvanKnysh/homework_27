import User from "./User.mjs";

class Admin extends User {
	constructor(users, gradation) {
		super(users, gradation);
	}

	renderCourses(user) {
		let courses = "";

		user.courses?.forEach((course) => {
			const score = this.getScoreByNumber(course.score);

			courses += `<div class="user__courses--course admin">
										<p>Title: <b>${course.title}</b></p>
										<p>Admin's score: <span class="${score}">${score}</span></p>
										<p>Lector: <b>${course.lector}</b></p>
									</div>
								`;
		});

		return `<div class="user__courses admin--info">${courses}</div>`;
	}
}

export default Admin;
