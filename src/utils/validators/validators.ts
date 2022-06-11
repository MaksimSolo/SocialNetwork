export const required = (value: string) => {
    if (value) {
        return undefined
    } else {
        return ('Field is required!')
    }
}

export function maxLengthCreator (maxLength:number) {
    return ((value:any)=>{
        if (value.length>maxLength) { return (`phrase length must not exceed ${maxLength} chars`)}
        else {return undefined}
    })
}