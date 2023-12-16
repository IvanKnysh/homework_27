import User from "./User.mjs";

class Lector extends User {
	constructor(users, gradation) {
		super(users, gradation);
	}

	renderCourses(user) {
		let courses = "";

		user.courses?.forEach((course) => {
			const score = this.getScoreByNumber(course.score);
			const studentsScore = this.getScoreByNumber(course.studentsScore);

			courses += `<div class="user__courses--course lector">
										<p>Title: <b>${course.title}</b></p>
										<p>Lector's score: <span class="${score}">${score}</span></p>
										<p>
											Average student's score: <span class="${studentsScore}">${studentsScore}</span>
										</p>
									</div>
								`;
		});

		return `<div class="user__courses admin--info">${courses}</div>`;
	}
}

export default Lector;
