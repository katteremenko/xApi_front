import {createEffect} from "effector";
import {
    IDeleteCourse,
    IDeleteCourseFile,
    IGetCourse,
    IGetCourseFile,
    IUploadCourse,
    IUploadFile
} from "../api/course.dto";
import {
    uploadCourse,
    uploadFile,
    getCourse,
    deleteCourse,
    deleteCourseFile,
    getCourseFile,
    getCourses
} from "../api/course.api";

export const uploadCourseFX = createEffect(async (params: IUploadCourse) => {
    const response = await uploadCourse(params)
    return response.data
})

export const uploadFileFX = createEffect(async (params: IUploadFile) => {
    const response = await uploadFile(params)
    return response.data
})

export const getCoursesFX = createEffect(async () => {
    const response = await getCourses()
    return response.data
})

export const getCourseFX = createEffect(async (params: IGetCourse) => {
    const response = await getCourse(params)
    return response.data
})

export const getCourseFileFX = createEffect(async (params: IGetCourseFile) => {
    const response = await getCourseFile(params)
    return response.data
})

export const deleteCourseFX = createEffect(async (params: IDeleteCourse) => {
    const response = await deleteCourse(params)
    return response.data
})

export const deleteCourseFileFX = createEffect(async (params: IDeleteCourseFile) => {
    const response = await deleteCourseFile(params)
    return response.data
})