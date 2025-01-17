import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // Solid heart icon
import { faHeart as thinHeart } from '@fortawesome/free-regular-svg-icons'; // Regular heart icon

type CurrentProps = {
    currentState: boolean;
    changeCurrent: () => void; // Define the type for the changeCurrent function
};

const FavoriteIcon = ({ currentState, changeCurrent }: CurrentProps) => {
    return (
        <>
            {currentState ? (
                <FontAwesomeIcon
                    icon={solidHeart} // Use the solid heart icon
                    style={{ color: "#c82f09", }}
                     size={30} // Set the size of the icon
                />
            ) : (
                <FontAwesomeIcon
                    icon={thinHeart} // Use the thin heart icon
                    style={{ color: "#c82f09", }}
                     size={30} // Set the size of the icon
                />
            )}
        </>
    );
};

export default FavoriteIcon;