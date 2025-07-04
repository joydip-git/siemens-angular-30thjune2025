import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    console.log('here');
    const pwd = control.value as string
    //length
    let length = false
    if (pwd.length >= 6 && pwd.length <= 10)
        length = true

    if (!length)
        return {
            'length': {
                current: pwd.length,
                max: 10,
                min: 6
            }
        }

    //uppercase
    let upper = false
    for (const char of pwd) {
        if (char >= 'A' && char <= 'Z') {
            upper = true
            break;
        }
    }

    if (!upper)
        return {
            'uppercase': true
        }

    //lowercase
    let lower = false
    for (const char of pwd) {
        if (char >= 'a' && char <= 'z') {
            lower = true
            break;
        }
    }

    if (!lower)
        return {
            'lowercase': true
        }

    //digit
    let digit = false
    for (const char of pwd) {
        if (char >= '0' && char <= '9') {
            digit = true
            break;
        }
    }

    if (!digit)
        return {
            'digit': true
        }


    return null;
}