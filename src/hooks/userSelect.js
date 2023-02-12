import { useState, useEffect } from "react";

export const useValidSelectCard = (people) => {
    const [status, setStatus] = useState("makeJury");
    const [selectNum, setSelectNum] = useState(2);
    const [selectPeople, setSelectPeople] = useState(people);
    const [disabled, setDisabled] = useState(true);
    const handleSelectChange = (info) => {
        const selectedPeople = selectPeople;
        if (info.selected) {
            setSelectPeople(selectedPeople.filter(select => select.id !== info.person.id));
        } else if (selectedPeople.length < selectNum) {
            setSelectPeople(selectedPeople.concat({ ...info.person }));
        } else {
            setSelectPeople([info.person]);
        }
    };

    useEffect(() => {
        if (selectPeople.length === selectNum) {
            setDisabled(false);
        } else setDisabled(true);
    }, [selectPeople]);
    
    const handleSubmitJury = () => {
        setSelectPeople([]);
    }

    return {
        selectPeople,
        disabled,
        handleSelectChange,
        handleSubmitJury,
    };
};