import Student from "./modules/Student.mjs";
import Lector from "./modules/Lector.mjs";
import Admin from "./modules/Admin.mjs";

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent",
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				title: "Front-end Pro",
				mark: 20,
			},
			{
				title: "Java Enterprise",
				mark: 100,
			},
		],
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student",
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				title: "Front-end Pro",
				mark: 50,
			},
		],
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				title: "Front-end Pro",
				mark: 75,
			},
			{
				title: "Java Enterprise",
				mark: 23,
			},
		],
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				title: "Front-end Pro",
				score: 10,
				lector: "Leo Smith",
			},
			{
				title: "Java Enterprise",
				score: 50,
				lector: "David Smith",
			},
			{
				title: "QA",
				score: 75,
				lector: "Emilie Smith",
			},
		],
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				title: "Front-end Pro",
				score: 78,
				studentsScore: 79,
			},
			{
				title: "Java Enterprise",
				score: 85,
				studentsScore: 85,
			},
		],
	},
];

const student = new Student(users, gradation);
const admin = new Admin(users, gradation);
const lector = new Lector(users, gradation);

student.render("student");
admin.render("admin");
lector.render("lector");
