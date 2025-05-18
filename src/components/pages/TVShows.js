import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styles/TVShows.css'

const TVShows = () => {
    const [tvShows, setTvShows] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTVShows = async () => {
            try {
                const response = await api.get('/shows');
                setTvShows(response.data);
                console.log(response.data)
            } catch (error) {
                setError('Error fetching TV shows. Please try again.');
            }
        };

        fetchTVShows();
    }, []);

    const handleAddToWatchlist = async (title) => {
        try {
            const response = await api.post('/watchlist', { title });
            handleApiResponse(response);
        } catch (error) {
            setError('Error adding to watchlist. Please try again.');
        }
    };

    const handleMarkAsWatched = async (title) => {
        try {
            const response = await api.post('/watched', { title });
            handleApiResponse(response);
        } catch (error) {
            setError('Error marking as watched. Please try again.');
        }
    };

    const handleApiResponse = (response) => {
        if (response.status === 201) {
            console.log(response.data.message);
        } else {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="tv-shows-container">
            <h2 className='available'> Available TV Shows</h2>
            {error && <p className="error-message">{error}</p>}
            <ul>
                {tvShows.map((tvShow) => (
                    <li key={tvShow.showid} className="tv-show-item">
                        <h3 className='titleshow'>{tvShow.title}</h3>
                        <span className='postershow'>{tvShow.poster && <img src={tvShow.poster} alt={tvShow.title}  style={{ width: '200px', height: 'auto', border: '2px solid red' }} />}</span>
                        <p className='genreshow'>{tvShow.genre}</p>
                        <p className='seasonsshow'>{tvShow.seasons}</p>
                        <p className='summaryshow'>{tvShow.summary}</p>
                        <button onClick={() => handleAddToWatchlist(tvShow.title)}>Add to Watchlist</button>
                        <button onClick={() => handleMarkAsWatched(tvShow.title)}>Mark as Watched</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TVShows;
