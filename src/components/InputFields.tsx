

import InputField from "./InputField"

function InputFields({
    error
}: {
    error: string
}) {

    return (
        <div className="flex gap-6">
            <InputField name='day'>
                <p>{error}</p>
            </InputField>

            <InputField name='month'>
                <p>{error}</p>
            </InputField>

            <InputField name='year'>
                <p>{error}</p>
            </InputField>
        </div>
    )
}

export default InputFields