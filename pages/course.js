import { Modal } from "@components/common";
import {
  CourseCurriculum,
  CourseHero,
  CourseKeypoints,
} from "@components/course";

export default function Course() {
  return (
    <>
      <CourseHero />
      <CourseKeypoints />
      <CourseCurriculum />
      <Modal />
    </>
  );
}
