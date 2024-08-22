import UnstopLogo from '../assets/img/unstop-logo.svg';
import { useState } from 'react';


function Navbar() {
	const sec1 = [
		"Learn",
		"Practice",
		"Mentorship",
		"Compete",
		"Internships",
		"Jobs"
	];

	const [showSearch, setShowSearch] = useState("hidden");

	const search_options = [
		["Courses", "book-blank", "purple"],
		["Projects", "file-lines", "green"],
		["Company Preparation", "desktop", "amber"],
		["Skill Assessments", "file-signature", "indigo"],
		["Mentors", "user-tie", "amber"],
		["Opportunities", "trophy", "green"],
		["Jobs & Internships", "briefcase", "purple"],
	]

	const [search_focus, setSearchFocus] = useState("");
	const [hidden, setHidden] = useState("");

	const [left, setLeft] = useState(0);
	const [top, setTop] = useState(0);
	const [width, setWidth] = useState(0);

	const lgSearchFocus = () => {
		const search = document.querySelector(".search");
		const rect = search.getBoundingClientRect();
		setLeft(rect.left);
		setTop(rect.top + 50);
		setWidth(rect.width);
		setHidden("hidden");
		setSearchFocus("border-blue-600");
	}

	const lgSearchBlur = () => {
		setHidden("");
		setSearchFocus("");
	}

	const divider = <div className='h-8 border-l-1 border-slate-300 max-lg:hidden'></div>;
	return (
		<>
			<div className={`fixed top-0 left-0 h-screen w-screen bg-slate-300 z-50 flex-wrap bg-opacity-30 mx-lg:hidden ${hidden ? "" : "hidden"}`}>
				<div className="absolute bg-white flex flex-wrap p-5 rounded-b-2xl ml-3 z-30" style={{ left: left, top: top, width: width }}>
					{
						search_options.map((item) => (
							<button className="flex justify-center items-center px-3 py-2 border-2 rounded-full m-2 text-nowrap hover:bg-gray-100" key={item[0]} type='button'>
								<i className={`fa-regular fa-${item[1]} bg-${item[2]}-200 py-2 px-3 border-2 text-sm rounded-full mr-1`}></i>
								<span>{item[0]}</span>
							</button>
						))
					}
				</div>
			</div>
			<nav className='bg-white py-3 px-14 max-lg:px-2 flex justify-between items-center fixed top-0 left-0 right-0 text-sm h-16 border-b-1 border-slate-300'>
				<div className='flex justify-center items-center'>
					<img src={UnstopLogo} alt="Unstop Logo" className='w-20' />
					<div className={`search mx-2 flex items-center px-4 border-2 rounded-full py-2 ${search_focus} transition-all max-lg:hidden`} id='Search'>
						<i className='fa-regular fa-magnifying-glass'></i>&nbsp;&nbsp;
						<input type="text" className='w-full focus:w-96 border-none outline-none ' placeholder='Search Opportunities' onFocus={lgSearchFocus} onBlur={lgSearchBlur} />
					</div>
				</div>
				<div className='flex justify-center items-center'>
					<div id="sec1" className={`max-lg:hidden  ${hidden}`}>
						{sec1.map((item) => (
							<button key={item} className={"py-2 px-4 hover:bg-slate-100 rounded-full duration-300 " + (item === "Jobs" ? "mr-2" : "")}>{item}</button>
						))}
					</div>
					<span className={` ${hidden}`}>
						{divider}
					</span>
					<div id="sec2" className='flex items-center'>
						<i className='fa-regular fa-magnifying-glass mr-1 text-lg lg:hidden cursor-pointer' onClick={() => setShowSearch("visible")}></i>
						<button className='px-4 py-2 mx-2 bg-blue-500 text-white rounded-full relative overflow-hidden z-10 lg:after:absolute lg:after:-z-1 lg:after:duration-300 lg:after:w-0 lg:after:h-full lg:after:top-0 lg:after:left-0 lg:after:bg-blue-600 lg:hover:after:w-full'>Login</button>
					</div>
					{divider}
					<div id="sec3" className='flex'>
						<button className='flex items-center lg:ml-2 lg:mr-1 max-lg:mx-1 border-1 border-blue-500 px-3 py-2 rounded-full hover:bg-stone-100 max-lg:hidden'>
							<i className="fa-regular fa-plus mr-2"></i>&nbsp;Host
						</button>
						<button className='flex items-center border-1 border-yellow-500 lg:px-3 py-2 lg:mr-2 lg:ml-1 max-lg:mx-1 bg-amber-100 rounded-full lg:hover:bg-amber-200 duration-300 business-btn max-lg:bg-transparent max-lg:border-0'>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 max-lg:w-7 max-lg:duration-300 max-lg:hover:stroke-blue-500 stroke-slate-900 mr-2'>
								<rect x="2.04761" y="5.38098" width="19.9048" height="16.619" rx="3.38095" strokeWidth="2" />
								<rect x="8" y="1" width="8" height="4" rx="1.38" strokeWidth="2" />
								<path
									d="M5.6623 15.4969V11.2917H6.8695V15.1547C6.8695 15.5706 6.96647 15.9251 7.20231 16.1753C7.44062 16.4282 7.78175 16.5336 8.17976 16.5336C8.63896 16.5336 9.0379 16.3951 9.32427 16.1287C9.61229 15.8607 9.76507 15.4829 9.76507 15.0486V11.2917H10.9723V17.1994H9.76534V16.6775V15.9035L9.33697 16.5482C9.11402 16.8837 8.87497 17.11 8.60152 17.2545C8.32775 17.3992 8.00264 17.4708 7.59377 17.4708C6.94385 17.4708 6.46986 17.2864 6.15762 16.9683C5.84473 16.6494 5.6623 16.1637 5.6623 15.4969Z"
									fill="#383838" strokeWidth="0.46742" />
								<path
									d="M18.3377 13.1601V17.2001H17.1305V13.5024C17.1305 13.0915 17.0332 12.7379 16.7984 12.4868C16.5609 12.2329 16.2202 12.1235 15.8203 12.1235C15.3611 12.1235 14.9621 12.262 14.6758 12.5285C14.3878 12.7965 14.235 13.1743 14.235 13.6087V17.2001H13.0278V11.2923H14.2347V11.9795V12.7536L14.6631 12.1089C14.886 11.7733 15.1251 11.5471 15.3985 11.4025C15.6723 11.2578 15.9974 11.1861 16.4063 11.1861C17.0562 11.1861 17.5302 11.3705 17.8424 11.6887C18.1553 12.0075 18.3377 12.4933 18.3377 13.1601Z"
									fill="#383838" strokeWidth="0.46742" />
							</svg>&nbsp;<span className='max-lg:hidden'>For Business</span>
						</button>
					</div>
				</div>
			</nav>
			<div className={`absolute top-0 left-0 p-7 z-50 bg-white w-screen ${showSearch}`}>
				<div className='flex items-center gap-4 cursor-pointer mb-5' onClick={() => setShowSearch('hidden')}>
					<i className="fa-regular fa-arrow-left"></i>&nbsp;Back
				</div>
				<div className={`flex border-2 ${search_focus} py-2 px-3 rounded-full duration-300 search-box mb-2`}>
					<i className="fa-regular fa-magnifying-glass"></i>&nbsp;&nbsp;
					<input type="text" id='search2' className='search-input w-full border-none outline-none' placeholder='Search Opportunities' onFocus={() => setSearchFocus("border-blue-600")} onBlur={() => setSearchFocus("")} />
				</div>
				<p className='text-lg'>Categories</p>
				<div className="flex flex-wrap">
					{
						search_options.map((item) => (
							<button className="flex justify-center items-center px-3 py-2 border-2 rounded-full m-2 text-nowrap hover:bg-gray-100" key={item[0]} type='button'>
								<i className={`fa-regular fa-${item[1]} bg-${item[2]}-200 py-2 px-3 text-sm rounded-full mr-1`}></i>
								<span>{item[0]}</span>
							</button>
						))
					}
				</div>
			</div>
		</>
	)
}

export default Navbar;