import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons-repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons-left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons-star">
                <StarRateIcon fontSize="large-star" />
            </IconButton>
            <IconButton className="swipeButtons-right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons-lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
