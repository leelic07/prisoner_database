import { 
	CHANGESHOW
} from  './types'
import getters from './getters'
const state={
	isShow:true
}

const mutations={
	[CHANGESHOW](state){
		state.isShow=!state.isShow
	}
}

export default {
	state,
	mutations,
	getters
}
