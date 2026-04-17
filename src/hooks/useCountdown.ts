import { useState, useEffect } from "react";

const UNITS = {
	years: 31556952000,
	months: 2629746000,
	days: 86400000,
	hours: 3600000,
	minutes: 60000,
	seconds: 1000,
};

export function useCountdown(targetDate: Date) {
	const calculate = () => {
		let diff = Math.max(
			0,
			targetDate.getTime() - new Date().getTime(),
		);

		return Object.fromEntries(
			Object.entries(UNITS).map(([key, unitMs]) => {
				const value = Math.floor(diff / unitMs);
				diff %= unitMs;
				return [key, value];
			}),
		) as Record<keyof typeof UNITS, number>;
	};

	const [timeLeft, setTimeLeft] = useState(calculate());

	useEffect(() => {
		const timer = setInterval(() => setTimeLeft(calculate()), 1000);
		return () => clearInterval(timer);
	}, [targetDate]);

	return timeLeft;
}
