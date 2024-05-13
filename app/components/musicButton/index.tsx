import React, { useState, useEffect } from 'react';

const MusicButton: React.FC = () => {
    return (
        <div>
                <audio autoPlay controls className="h-8 w-[14rem] ">
                    <source src="/music/music.mp3" type="audio/mpeg" />
                </audio>
        </div>
    );
};

export default MusicButton;