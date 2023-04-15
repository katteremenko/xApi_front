import { AxiosPromise } from "axios";
import apiInstance, { apiInstanceFormData } from "../../../api/base";
import {
  IDeleteCourse,
  IDeleteCourseFile,
  IGetCourse,
  IGetCourseFile,
  IUploadCourse,
  IUploadFile,
} from "./course.dto";

export const uploadCourse = (
  body: IUploadCourse
): AxiosPromise<{ message: string }> =>
  apiInstanceFormData.post(
    "/upload_course",
    body.course,
    
  );
export const uploadFile = (
  body: IUploadFile
): AxiosPromise<{ message: string }> =>
  apiInstanceFormData.post("/upload_file", body.file, );

export const getCourses = (): AxiosPromise<{ name: string }[]> =>
  apiInstance.get("/courses", );
export const getCourse = (
  params: IGetCourse
): AxiosPromise<{ name: string }[]> =>
  apiInstance.get(`/courses/${params.courseName}`, );
export const getCourseFile = (params: IGetCourseFile): AxiosPromise<string> =>
  apiInstance.get(
    `/courses/${params.courseName}/${params.fileName}`,
    
  );

export const deleteCourse = (
  params: IDeleteCourse
): AxiosPromise<{ deleted: string }> =>
  apiInstance.delete(
    `/courses/delete/${params.courseName}`,
    
  );
export const deleteCourseFile = (
  params: IDeleteCourseFile
): AxiosPromise<{ deleted: string }> =>
  apiInstance.delete(
    `/courses/delete/${params.courseName}/${params.fileName}`,
    
  );
