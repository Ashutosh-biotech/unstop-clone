'use strict';

import { useState, useEffect } from "react";
import MiniImage from "../assets/img/home_page_avatar.png";
import Diamond from "../assets/img/diamond_1.webp";
import Frame1 from "../assets/img/frame_1.webp";
import Frame2 from "../assets/img/Frame.webp";
import Internship from "../assets/img/internship.webp";
import Learn from "../assets/img/learn.webp";
import Jobs from "../assets/img/jobs.webp";
import Mentorship from "../assets/img/mentorship.webp";
import Practice from "../assets/img/practice.webp";
import Trophy from "../assets/img/trophy.webp";
import "animate.css";

export default function Header() {
	const names = [
		"Ashutosh",
		"Aman",
		"Ankit",
		"Anjali",
		"Amit",
		"Anand",
		"Ahmad",
		"Ali"
	];
	const [currentNameIndex, setCurrentNameIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	const cardContent = [
		["Internship", "Gain", "Practical Experience", Internship, "green"],
		["Learn", "Expand", "Knowledge Base", Learn, "pink"],
		["Jobs", "Explore", "Diverse careers", Jobs, "sky"],
		["Practice", "Refine", "SKills Daily", Practice, "green"],
		["Compete", "Battle", "For Excellence", Trophy, "indigo"],
		["Mentorship", "Guidance", "From Top Mentors", Mentorship, "amber"],
	];

	return (
		<div className="h-screen bg-zinc-100 mt-16 overflow-hidden">
			<div className="h-5/6 flex items-center justify-items-center px-32">
				<div className="w-2/4">
					<div className="flex items-center justify-items-center justify-between">
						<h1 className="text-5xl font-bold">
							<span className="text-sky-900">Unlock</span> Your Career
						</h1>
						<img src={MiniImage} alt="counsellors" className="w-12" />
					</div>
					<p className="text-gray-500">Explore opportunities from across the globe to learn, showcase skills, gain CV points & get hired by your dream company.</p>
					<button className="bg-purple-200 text-white px-4 py-2 rounded-full mt-4 flex items-center justify-items-center">
						<img src={Diamond} alt="Premium" className="w-10 mr-2" />
						<div className="text-left">
							<p className="text-sm text-gray-700 fade-in-out">{names[currentNameIndex]}</p>
							<p className="text-sm text-black">Just went Unstop Pro</p>
						</div>
					</button>
				</div>
				<div className="ml-2 w-2/3">
					<img src={Frame1} alt="top_right" className="relative float-right w-60 -mr-20" />
					<div className="flex items-center justify-items-center justify-center flex-wrap g-10">
						{cardContent.map((card) => (
							<div key={card[0]} className={`bg-${card[4]}-300 rounded-xl pt-2 flex`}>
								<p className="pl-3">
									<strong>{card[0]}</strong>
									<br />
									<span className="text-sm">
										<strong>{card[1]}</strong>
										<br />
										{card[2]}
									</span>
								</p>
								<img src={card[3]} alt={card[0]} className="w-40" />
							</div>
						))}
					</div>
					<img src={Frame2} alt="bottom_right" className="relative float-left w-60" />
				</div>
			</div>
			<div className="h-1/6"></div>
		</div>
	)
}
