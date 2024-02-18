export const TOGGLE_MAXIMIZE = 'TOGGLE_MAXIMIZE';

export const toggleMaximize = (cardName) => ({
    type: TOGGLE_MAXIMIZE,
    payload: cardName,
});