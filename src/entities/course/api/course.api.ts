import {AxiosPromise} from "axios";
import apiInstance, {apiInstanceFormData} from "../../../api/base";
import {IDeleteCourse, IDeleteCourseFile, IGetCourse, IGetCourseFile, IUploadCourse, IUploadFile} from "./course.dto";
import {createStore} from "effector";
import {$user} from "../../user/model/user.store";

const apiOptions = createStore({})
    .on($user, (_, payload) => ({
        headers: {
            'Authorization': `Bearer ${payload.token}`
        }
    }))


export const uploadCourse = (body: IUploadCourse): AxiosPromise<{ message: string }> =>
    apiInstanceFormData.post('/upload_course', body.course, apiOptions.getState())
export const uploadFile = (body: IUploadFile): AxiosPromise<{ message: string }> =>
    apiInstanceFormData.post('/upload_file', body.file, apiOptions.getState())


export const getCourses = (): AxiosPromise<{ name: string }[]> =>
    apiInstance.get('/courses', apiOptions.getState())
export const getCourse = (params: IGetCourse): AxiosPromise<{ name: string }[]> =>
    apiInstance.get(`/courses/${params.courseName}`, apiOptions.getState())
export const getCourseFile = (params: IGetCourseFile): AxiosPromise<string> =>
    apiInstance.get(`/courses/${params.courseName}/${params.fileName}`, apiOptions.getState())


export const deleteCourse = (params: IDeleteCourse): AxiosPromise<{ deleted: string }> =>
    apiInstance.delete(`/courses/delete/${params.courseName}`, apiOptions.getState())
export const deleteCourseFile = (params: IDeleteCourseFile): AxiosPromise<{ deleted: string }> =>
    apiInstance.delete(`/courses/delete/${params.courseName}/${params.fileName}`, apiOptions.getState())


