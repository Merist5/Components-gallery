var movies = [
  {
    id: 1,
    title: 'Alien',
    desc: 'After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun.',
    poster: './alien.jpg'
  },
  {
    id: 2,
    title: 'The Secret of Kells',
    desc: 'A young boy in a remote medieval outpost under siege from barbarian raids is beckoned to adventure when a celebrated master illuminator arrives with an ancient book, brimming with secret wisdom and powers.',
    poster: './kells.jpg'
  },

  {
    id: 3,
    title: 'Princess Mononoke/もののけ姫',
    desc: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    poster: './mononoke.jpg'
  },
  {
    id: 4,
    title: 'Raise the Red Lantern/大紅燈籠高高掛',
    desc: 'A young woman becomes the fourth wife of a wealthy lord, and must learn to live with the strict rules and tensions within the household.',
    poster: './lantern.jpg'
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MoviePoster, {poster: this.props.movie.poster}),
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDesc, {desc: this.props.movie.desc})
      )
    );
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    );
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    );
  }
});

var MoviePoster = React.createClass({
  propTypes: {
    poster: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('img', {src: this.props.poster})
    );
  }
});

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },
  render: function() {
    var moviesElements = this.props.movies.map(function(item) {
      return React.createElement(Movie, {movie: item, key: item.id})
    });
    var element = React.createElement("ul", {}, moviesElements)
    return element;
  }
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {movies: movies})
  );
ReactDOM.render(element, document.getElementById('app'));