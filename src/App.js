import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"; 
//성공...package-lock.json 삭제하고, node_modules삭제한 후, 
//또한 package.json에서 쓸데없이 내가 임의로 따로 설치한 webpack관련 모듈사항을 삭제한 후에,
//npm install 명령어 하나를 통해 (전부 다시설치) 해결...뭔가 내부적인 crash가 있었던듯...

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
