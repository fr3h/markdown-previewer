import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMaximize } from './maximizeCardButtonActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';
import './MaximizeCardButtonStyle.scss'

const MaximizeCardButton = ({ cardName }) => {
    const dispatch = useDispatch();
    const isMaximized = useSelector(state => state.maximizeButton.maximizedCard === cardName);

    const handleClick = () => {
        dispatch(toggleMaximize(cardName));
    };

    return (
        <FontAwesomeIcon icon={isMaximized ? faMinimize : faMaximize} onClick={handleClick} className="maximizeIcon" />
    );
};

export default MaximizeCardButton;