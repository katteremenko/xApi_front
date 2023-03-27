import {XMLParser} from "fast-xml-parser";

export const parseManifest = (manifest: string) => {
    const parser = new XMLParser({
        ignoreDeclaration: true,
        ignorePiTags: true,
        ignoreAttributes: false,
        attributeNamePrefix: 'attr_',

    });

    // console.log(`parseManifest manifest = `, manifest)
    let mft = parser.parse(manifest);
    // console.log(`mft = `, mft)

    let result: any[] = []

    if ('courseStructure' in mft) {
        // if ('block' in mft) {
        //     blockFunction(mft.block)
        // }
        // if (mft.courseStructure.au.constructor === Array) {
        //     return mft.courseStructure.au
        // } else {
        //     return [mft.courseStructure.au]
        // }
        if ('au' in mft.courseStructure) {
            if (mft.courseStructure.au.constructor === Array) {
                result.push(...mft.courseStructure.au)
            } else {
                // return [mft.courseStructure.au]
                result.push(mft.courseStructure.au)
            }
        }
    }

    if ('cour' in mft) {
        if ('au' in mft.cour) {
            if (mft.cour.au.constructor === Array) {
                result.push(...mft.cour.au)
            } else {
                result.push(mft.cour.au)
            }
        }
    }

    // console.log(`parseManifest result = `, result)
    return result
}

const blockFunction = (obj: any) => {

}

const auFunction = (obj: any) => {

}