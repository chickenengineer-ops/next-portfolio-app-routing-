"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-6xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p className="my-3.5">
							I&rsquo;m James Coulter, a senior full-stack web developer with over 10 years of hands-on experience building high-quality, scalable web applications. I specialize in modern JavaScript technologies — including React, Next.js, and Vue.js on the frontend, and Node.js, Express, PostgreSQL, and MongoDB on the backend. I also bring a strong focus on clean architecture, performance, and maintainability in everything I build.
						</p>
						<p className="my-3.5">
							My journey started with a fascination for how things work on the web, and that curiosity quickly evolved into a deep passion for creating clean, user-focused digital experiences. Throughout my career, I&rsquo;ve worked with startups, agencies, and long-term freelance clients to bring ideas to life — always focusing on performance, maintainability, and a great user experience.
						</p>
					</div>
				</div>
				<TimeLine />
			</section>
		</LazyMotion>
	);
}
