const defaultState = {
    searchValue: '',
    newStanderName: '',
    newRangeName:  '',
    modifyStanderName: '',
    modifyRangeName: '',
    list: [
        {'standerName':'液体分离安装标准','rangeName':'适用于钻井、修井作业现场使用的分离器'},
        {'standerName':'试油修井放喷排液操作流','rangeName':'适用四川油气田油气井试油、试气、修井作业'},
          ]
};      /*这里数组存在写死问题，需要重新去添加之后再看是不是这个问题*/

export default (state = defaultState,action) => {
    if (action.type === 'change_search_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.searchValue = action.value;
        return newState;
    }
    if (action.type === 'change_new_stander_name') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.newStanderName = action.value;
        return newState;
    }
    if (action.type === 'change_new_range_name') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.newRangeName = action.value;
        return newState;
    }
    if (action.type === 'change_modify_stander_name') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.modifyStanderName = action.value;
        return newState;
    }
    if (action.type === 'change_modify_range_name') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.modifyRangeName = action.value;
        return newState;
    }
    if (action.type === 'delete_list') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        console.log( newState.list);
        return newState;
    }

    return state
}
