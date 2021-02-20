const initialState = {
    optionList: [
        {
            label: 'male',
            checked: true,
            id: 'GENDER_MALE'
        },
        {
            label: 'female',
            checked: false,
            id: 'GENDER_FEMALE'
        },
    ],
    selectedValue: 'GENDER_MALE'
}
function gender(state=initialState, action) {
    switch(action.type) {
        default: return state
    }
}

export default gender