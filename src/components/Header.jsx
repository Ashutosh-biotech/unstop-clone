import { useState, useEffect } from "react";
import {MiniImage, Diamond, Frame1, Frame2, Internship, Learn, Jobs, Mentorship, Practice, Trophy} from "Assets"


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
		["Internship", "Gain", "Practical Experience", Internship, "bg-green-200"],
		["Learn", "Expand", "Knowledge Base", Learn, "bg-pink-200"],
		["Jobs", "Explore", "Diverse careers", Jobs, "bg-sky-200"],
		["Practice", "Refine", "SKills Daily", Practice, "bg-green-200"],
		["Compete", "Battle", "For Excellence", Trophy, "bg-indigo-200"],
		["Mentorship", "Guidance", "From Top Mentors", Mentorship, "bg-amber-200"],
	];

	return (
		<section className="text-gray-600 bg-zinc-100 body-font h-screen">
			<div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
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
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 z-0 flex flex-col md:items-start md:text-left items-center text-center">
					<section className="text-gray-600 body-font relative">
						<img src={Frame1} alt="Frame 1" className="absolute w-52 right-0 top-0 -mr-12" />
						<div className="container px-5 py-24 mx-auto z-1 relative">
							<div className="flex flex-wrap -m-4">
								{cardContent.map((card) => (
									<div className="p-4 lg:w-1/2" key={card[0]}>
										<div className={`relative h-full ${ card[4] } rounded-lg flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left pt-3 overflow-hidden`}>
											<div className="flex-grow sm:pl-2">
												<h2 className="title-font font-medium text-lg text-gray-900">{card[0]}</h2>
												<h3 className="text-gray-500 mb-3 text-sm">{card[1]}</h3>
												<p className="mb-4 text-sm">{card[2]}</p>
											</div>
											<img alt="team" className={`relative overflow-visible bottom-0 flex-shrink-0 rounded-lg w-28 h-28 object-cover object-center ${card[0] === "Learn"? "mr-6 mb-1": card[0] === "Practice" ? "" : card[0] === "Compete" ? "mr-1"  :"mr-5"}`} src={card[3]} style={{shapeOutline: `url(${card[3]})`}} />
										</div>
									</div>
								))}
							</div>
						</div>
						<img src={Frame2} alt="Frame 2" className="absolute w-52 bottom-0 left-0 -ml-16 mb-12" />
					</section>
				</div>
			</div>
		</section>

	)
}
