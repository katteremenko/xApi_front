import {createStore} from "effector";
import {deleteCourseFileFX, deleteCourseFX, getCourseFX, getCoursesFX} from "./course.actions";
import {useStore} from "effector-react";

const $courses = createStore<{ name: string }[]>([])
    .on(getCoursesFX.doneData, (_, payload) => payload)
    .on(deleteCourseFX.doneData, (state, payload) =>
        state.filter(course => course.name !== payload.deleted.split('/')[1]))
    .reset(getCourseFX.doneData)

// $courses.watch(console.log)

const $courseFiles = createStore<{ name: string }[]>([])
    .on(getCourseFX.doneData, (_, payload) => payload)
    .on(getCourseFX.failData, () => [])
    .on(deleteCourseFileFX.doneData, (state, payload) =>
        state.filter(course => course.name !== payload.deleted.split('/')[2]))
    .reset(getCoursesFX.doneData)

// $courseFiles.watch(console.log)

export const useCoursesStore = () => useStore($courses)
export const useCourseFilesStore = () => useStore($courseFiles)