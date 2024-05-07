import { useState } from "react";

function useForm(Data) {
    let [value, setValue] = useState(Data);

    function handleChange(event) {
        setValue({ ...value, [event.target.name]: event.target.value });
    }

    function handleReset() {
        setValue(Data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(value);
    }

    return [value, handleChange, handleReset, handleSubmit];
}

export default useForm;
