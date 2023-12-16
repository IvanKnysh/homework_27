class User {
	constructor(users, gradation) {
		this.usersArr = users;
		this.gradationArr = gradation;
	}

	getScoreByNumber(score) {
		const scoreArr = Object.entries(this.gradationArr);

		for (let i = 0; i < scoreArr.length; i++) {
			for (let j = 0; j < score; j++) {
				if (score <= scoreArr[j][0]) {
					return scoreArr[j][1];
				}
			}
		}
	}

	renderCourses(user) {
		let courses = "";

		user.courses?.forEach((course) => {
			const score = this.getScoreByNumber(course.mark);

			courses += `<p class="user__courses--course student">
										${course.title}
										<span class="${score}">${score}</span>
									</p>`;
		});

		return `<div class="user__courses">${courses}</div>`;
	}

	render(role) {
		this.usersArr.forEach((user) => {
			if (user.role === role) {
				document.querySelector(".users").insertAdjacentHTML(
					"beforeend",
					`
						<div class="user">
							<div class="user__info">
								<div class="user__info--data">
									<img src="images/users/${user.img}.png" alt="${user.img}" height="50" />
									<div class="user__naming">
										<p>Name: <b>${user.name}</b></p>
										<p>Age: <b>${user.age}</b></p>
									</div>
								</div>
								<div class="user__info--role ${user.role}">
									<img src="images/roles/${user.role}.png" alt="${user.role}" height="25" />
									<p>${user.role}</p>
								</div>
							</div>
							${user.courses ? this.renderCourses(user) : ""}
						</div>
					`
				);
			}
		});
	}
}

export default User;
