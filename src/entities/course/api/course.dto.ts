export interface IUploadCourse {
    course: FormData
}

export interface IUploadFile {
    file: FormData
}

export interface IGetCourse {
    courseName: string
}

export interface IGetCourseFile {
    courseName: string
    fileName: string
}

export interface IDeleteCourse {
    courseName: string
}

export interface IDeleteCourseFile {
    courseName: string
    fileName: string
}
