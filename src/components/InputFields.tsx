

import InputField from "./InputField"

function InputFields({
    ...props
}) {
    const {errors} = props
    
    return (
        <div className="flex gap-6">
            <InputField name='day'>
                {errors.isInvalidDay && (
                    <p>Invalid Day</p>
                )}
            </InputField>

            <InputField name='month'>
                {errors.isInvalidMonth && (
                    <p>Invalid Month</p>
                )}
            </InputField>

            <InputField name='year'>
                {errors.isInvalidYear && (
                    <p>Invalid Year</p>
                )}
            </InputField>
        </div>
    )
}

export default InputFields