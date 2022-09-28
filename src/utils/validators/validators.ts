export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) {
        return undefined
    } else {
        return ('Field is required!')
    }
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType =>
    (value) => {
        if (value.length > maxLength) {
            return (`phrase length must not exceed ${maxLength} chars`)
        } else {
            return undefined
        }
    }
