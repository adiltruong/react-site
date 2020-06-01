import React, {useState, useEffect} from 'react';
import Popup from "reactjs-popup";
import config from '../config';
const axios = require('axios');
const firebase = require('firebase')

function MovieList(props) {
    const [movies, setMovies] = useState([]);
    const [lists, setLists] = useState({});
    const [movieLists, setMovieLists] = useState({});
    const [curList, setCurList] = useState("All");
    const [page, setPage] = useState(0);
    const [newId, setNewId] = useState("");
    const [newList, setNewList] = useState("");
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);

    const [shouldRender, setShowRender] = useState(true);

    useEffect(() => {
        setCurList("All")

        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        let ref = firebase.database().ref('movies').orderByKey();

        ref.on('child_removed', (childSnapshot, prevChildKey) => {
            const deletedChild = childSnapshot.val();
            setMovies(curMovies => curMovies.filter(m => m.imdbID != deletedChild.imdbID));
            console.log(deletedChild.Title);
        });

        ref.limitToFirst(8).once('value', (dataSnapshot) => {
            const val = dataSnapshot.val();
            if(val != null) {
                setMovies(Object.values(val));
                console.log(val);
            }
        });



        let listRef = firebase.database().ref('lists');

        listRef.on('value', (dataSnapshot) => {
            const val = dataSnapshot.val();
            setLists(val);
            if(val != null) {
                setCount(Object.keys(val["All"]).length - 1)
            }
        });

        let movieListsRef = firebase.database().ref('movieLists');

        movieListsRef.on('value', (dataSnapshot) => {
            const val = dataSnapshot.val();
            setMovieLists(val);
        });
    }, [shouldRender])

    const addMovie = (evt) => {
        evt.preventDefault();

        axios({
            method: 'get',
            url: "https://www.omdbapi.com/?apikey=f23fd2c8&i=".concat(newId),
        })
        .then(
            (response) => {
                firebase.database().ref('movies').child(response.data.imdbID).set({
                    imdbID: response.data.imdbID,
                    Title: response.data.Title,
                    Poster: response.data.Poster,
                    imdbRating: response.data.imdbRating,
                    Director: response.data.Director,
                    Released: response.data.Released,
                    Plot: response.data.Plot
                });
                firebase.database().ref('lists').child("All").child(response.data.imdbID).set(true);
                firebase.database().ref('movieLists').child(response.data.imdbID).set({
                    All: true
                }).then(() => {
                    setNewId("");
                    setPage(0);
                    setShowRender(cur => !cur);
                });
            }
        )

    }

    const deleteMovie = (id) => {
        firebase.database().ref('movies').child(id).remove();

        let updates = {};

        for (var list in movieLists[id]){
            updates["lists/" + list + "/" + id] = null;
        }
        updates["movieLists/" + id] = null;

        firebase.database().ref().update(updates);
    }

    const createList = (evt) => {
        evt.preventDefault();

        firebase.database().ref('lists').child(newList).set({
            title: newList
        });

        setNewList("");
        setPage(0);
        setShowRender(cur => !cur);
    }

    const createPair = (id, list, target) => {
        let updates = {
            ["lists/" + list + "/" + id]: true,
            ["movieLists/" + id + "/" + list]: true
        }

        target.value = "";
        firebase.database().ref().update(updates);
    }

    const setCurListHelper = (l) => {
        setCurList(l);
        let c = Object.keys(lists[l]).length - 1;
        setCount(c);
        setMovies([]);
        let ref = firebase.database().ref('movies');
        console.log(count);
        for(var i = 1; i < Math.min(9, c+1); i++) {
            ref.child(Object.keys(lists[l])[i]).once('value', (dataSnapshot) => {
                const val = dataSnapshot.val();
                setMovies(cur => [...cur, val]);
            });
        }
    }

    const loadMore = () => {
        let ref = firebase.database().ref('movies');
        let curLen = movies.length;
        for(var i = curLen + 1; i < Math.min(curLen + 9, Object.keys(lists[curList]).length); i++) {
            ref.child(Object.keys(lists[curList])[i]).once('value', (dataSnapshot) => {
                const val = dataSnapshot.val();
                setMovies(cur => [...cur, val]);
            });
        }
    }

    const getPage = () => {
        if (page === 0) {
            const movs = movies
                .filter(m => m != null && m.Title.toLowerCase().includes(search.toLowerCase()))
                .map(m =>
                <Popup className="popup" trigger={<img className="movie-item" alt={m.Title} src={m.Poster}/>} modal closeOnDocumentClick lockScroll postion="center center">
                    {close => (<div className="movie-popup">
                        <img className="movie-poster" alt={m.Title} src={m.Poster}/>
                        <div className="movie-info">
                            <h1>{m.Title}</h1>
                            <p><b>IMDB Rating:</b> {m.imdbRating}</p>
                            <p><b>Director:</b> {m.Director}</p>
                            <p><b>Released:</b> {m.Released}</p>
                            <p><b>Synopsis:</b> {m.Plot}</p>
                            <button className="delete-movie" onClick={() => {deleteMovie(m.imdbID); close();}}>
                                Delete
                            </button>
                            <select className="movie-btn" onChange={e => createPair(m.imdbID, e.target.value, e.target)}>
                                <option value="" disabled selected>Add to list:</option>
                                {Object.keys(lists)
                                    .filter(l => (
                                        lists[l][m.imdbID] != true
                                    ))
                                    .map(l => (
                                        <option value={l}>{l}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>)}
                </Popup>
            )
            return (
                <div>
                    <h1>
                        Movies
                    </h1>
                    <div className="movies-menu">
                        <select className="movie-btn" onChange={e => setCurListHelper(e.target.value)}>
                            <option value="All">All</option>
                            {lists != null && Object.keys(lists).map(l => (
                                l != "All" && <option value={l}>{l}</option>
                            ))}
                        </select>
                        <button className="movie-btn" onClick={() => setPage(1)}>
                            Add a Movie
                        </button>
                        <button className="movie-btn" onClick={() => setPage(2)}>
                            Create List
                        </button>
                        <input className="movie-search" type="text" placeholder="Search.." value={search} onChange={e => setSearch(e.target.value)}/>
                    </div>
                    {movs}
                    {lists != null && lists[curList] != null && count > movies.length && <button className="load-more" onClick={() => loadMore()}>
                        Load More
                    </button>}
                </div>
            );
        }
        else if (page === 1) {
            return (
                <div>
                    <h1>
                        Movies
                    </h1>
                    <div>
                        <button className="movie-btn" onClick={() => setPage(0)}>
                            Back
                        </button>
                    </div>
                    <form className="add-movie" onSubmit={addMovie}>
                        <h2>
                            Add a movie!
                        </h2>
                        <label>
                            Enter the IMDb ID of the movie you want to add:
                            <input type="text" value={newId} onChange={e => setNewId(e.target.value)}/>
                        </label>
                        <input type="submit" value="Add Movie" />
                    </form>
                </div>
            );
        }
        else if (page === 2) {
            return (
                <div>
                    <h1>
                        Movies
                    </h1>
                    <div>
                        <button className="movie-btn" onClick={() => setPage(0)}>
                            Back
                        </button>
                    </div>
                    <form className="add-movie" onSubmit={createList}>
                        <h2>
                            Create a new list!
                        </h2>
                        <label>
                            Enter the name of the list you want to create:
                            <input type="text" value={newList} onChange={e => setNewList(e.target.value)}/>
                        </label>
                        <input type="submit" value="Create List" />
                    </form>
                </div>
            );
        }
    }

    return getPage();


}

export default MovieList;
