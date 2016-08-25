import * as actions from '../constants/actions';

export function setDisplayedDiv(displayClass) {
    return {
        type: actions.SET_DISPLAYED_DIV,
        displayClass
    }
}

export function setLeagueTableSortDirection(direction) {
    return {
        type: actions.SET_LEAGUE_TABLE_SORT_DIRECTION,
        direction
    }
}