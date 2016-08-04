export const SORT_STACKS_ASC = 'SORT_STACKS_ASC';
export const SORT_STACKS_DESC = 'SORT_STACKS_DESC';

export const sortActions = {
    sortStacksAsc() {
        return {
            type: SORT_STACKS_ASC
        }
    },
    sortStacksDesc() {
        return {
            type: SORT_STACKS_DESC
        }
    }
};
