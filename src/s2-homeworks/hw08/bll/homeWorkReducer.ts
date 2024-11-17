import { UserType } from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
	// let stateCopy: UserType[];
	switch (action.type) {
		case 'sort': { // by name
			// let stateCopy: UserType[];
			if (action.payload === 'up') {
				state = state.sort((a, b) => {
					if (a.name.toLowerCase() < b.name.toLowerCase()) {
						return - 1
					}
					if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return 1;
					}
					return 0
				})
			} else if (action.payload === 'down') {
				state = state.sort((a, b) => {
					if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return - 1
					}
					if (a.name.toLowerCase() < b.name.toLowerCase()) {
						return 1;
					}
					return 0
				})
			}
			return [...state]
		}
		case 'check': {

			return state.filter(e => e.age! >= 18)
		}
		default:
			return state
	}
}
