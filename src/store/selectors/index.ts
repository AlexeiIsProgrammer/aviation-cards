import { RootState } from '..';

const subjectsSelector = (state: RootState) => state.subjectsReducer;

export default subjectsSelector;
