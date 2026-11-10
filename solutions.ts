function multiplyValue(value: number, multiplier?: number): number {
	if (multiplier === undefined) {
		return value * 2;
	}
	return value * multiplier;
}

function processInput(input: string | number | boolean): string | number {
	if (typeof input === "string") {
		return input.trim().toLowerCase();
	}
	if (typeof input === "number") {
		return input * 10;
	}
	return input ? "Active" : "Inactive";
}

function formatCoordinate(coordinate: readonly [number, number, string]): string {
	const [latitude, longitude, locationName] = coordinate;
	return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
	return arrays.flat();
}

interface ICourse {
	title: string;
	students: number;
	isPublished: boolean;
}

function getPopularCourses(courses: ICourse[], minStudents: number) {
	return courses.filter((course) => course.isPublished && course.students >= minStudents);
}
