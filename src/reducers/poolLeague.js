import * as actions from '../constants/actions';

function setState(state, newState) {
    if (!newState) {
        return state;
    }
    state = newState;
    return state;
}

function setDisplayedDiv(state, displayClass) {
    if (!displayClass) {
        return state;
    }
    state.displayedClass = displayClass;
    return state;
}

function setLeagueTableSortDirection(state, direction) {
    if (!direction) {
        return state;
    }
    state.leagueTableSorter.currentDirection = state.leagueTableSorter.directions.filter((item) => {
        return item.value === direction;
    })[0];
    return state;
}

export default function(state = {}, action) {
    switch (action.type) {
        case actions.SET_STATE:
            return setState(state, action.state);
        case actions.SET_DISPLAYED_DIV:
            return setDisplayedDiv(state, action.displayClass);
        case actions.SET_LEAGUE_TABLE_SORT_DIRECTION:
            return setLeagueTableSortDirection(state, action.direction);
        default:
            return state;
    }
    return state;
}