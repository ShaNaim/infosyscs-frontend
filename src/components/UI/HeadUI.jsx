import React from "react";
import Head from "next/head";
export default function HeadUI({ children, pageTitle }) {
	return (
		<Head>
			<title>InfoSysCs | {pageTitle}</title>
			<meta
				name="description"
				content="Welcome to our Qualitative Data Analysis Assistant website, created by Monitoring, Evaluation,
Accountability and Learning (MEAL) Professional Asif Ahmed. Our platform has been designed
to provide an easy and efficient way for researchers, development program evaluators, and
emergency responders to analyze their data.
Our platform utilizes the powerful Da-Vinci Artificial Intelligence (AI) module to conduct a
Thematic Analysis report within minutes. By identifying patterns, themes, and trends in your
data, our AI-powered analysis module saves you time and allows you to draw meaningful
conclusions from your data. The process is simple: upload your interview or discussion scripts,
and our AI module will provide you with a Thematic Analysis report that includes a summary of
the most common themes and patterns found in your data, along with supporting quotes and
examples.
Our Qualitative Data Analysis Assistant website is a powerful tool for researchers, development
program evaluators, and emergency responders. With our AI-powered analysis module and
personalized support, you can conduct a Thematic Analysis report within minutes and draw
meaningful conclusions from your data. We are committed to providing our users with the best
possible experience, and we look forward to working with you. Thank you for choosing our
platform."
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.svg" />
			{children}
		</Head>
	);
}
