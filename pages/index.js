import { Hero, Breadcrumbs } from "@components/common";
import { CourseList } from "@components/course";
import { getAllCourses } from "@content/courses/fetcher";

export default function Home({ courses }) {
  return (
    <>
      <Hero />
      <CourseList courses={courses} />
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}
