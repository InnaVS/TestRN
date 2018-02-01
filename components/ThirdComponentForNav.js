import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';

export default class ThirdComponentForNav extends Component {

  componentDidMount() {
    this.props.onLoadFilms();
  };

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.filmsList.map((item) => ({
            key: item.id,
            name: item.original_title,
            poster: item.poster_path
          }))}

          renderItem={({item}) =>{
            console.log(`https://image.tmdb.org/t/p/w300${item.poster}`);
            return (
              <View>
                <Image
                  style={{width: 100, height: 150, zIndex: 1000}}
                  source={{uri: `https://image.tmdb.org/t/p/w300${item.poster}`}}/>
                <Text>{item.name}</Text>
              </View>
            )
          }
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#175b4b',
  }
});

ThirdComponentForNav.propTypes = {
  onLoadFilms: PropTypes.func.isRequired,
  filmsList: PropTypes.arrayOf(PropTypes.any).isRequired
};