import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';

const {height} = Dimensions.get('window');

const Modal = ({show, close}) => {
  const [state] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    console.log(show);
    if (show) {
      openModal();
    } else {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: state.opacity,
          transform: [{translateY: state.container}],
        },
      ]}>
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [{translateY: state.modal}],
          },
        ]}>
        <View style={styles.indicator} />
        <View style={styles.contentFilter}>
          <TouchableOpacity style={styles.btn} onPress={close}>
            <Text style={{color: '#fff'}}>Close</Text>
          </TouchableOpacity>
          <Text>Limpar Filtro</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            massa odio. Quisque ante sem, tempor eget massa vel, mollis
            tincidunt metus. Ut sed felis lectus. Nam semper molestie urna, quis
            ultricies quam semper ut. Maecenas aliquet id urna a convallis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Maecenas leo lectus, dictum vitae erat eget,
            luctus dapibus sapien. Integer at hendrerit quam. Vivamus tempor,
            arcu non fringilla laoreet, enim nibh porttitor enim, eget
            pellentesque eros nulla congue neque. Suspendisse et lobortis enim,
            nec fermentum est. Aliquam accumsan viverra vehicula. Proin tempus
            sagittis auctor. Vivamus quam ligula, laoreet eget eros et,
            hendrerit iaculis risus. Nam a nulla in purus fermentum rhoncus eu
            et erat. Aliquam tempus felis lorem, id hendrerit tortor vestibulum
            ac.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            massa odio. Quisque ante sem, tempor eget massa vel, mollis
            tincidunt metus. Ut sed felis lectus. Nam semper molestie urna, quis
            ultricies quam semper ut. Maecenas aliquet id urna a convallis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Maecenas leo lectus, dictum vitae erat eget,
            luctus dapibus sapien. Integer at hendrerit quam. Vivamus tempor,
            arcu non fringilla laoreet, enim nibh porttitor enim, eget
            pellentesque eros nulla congue neque. Suspendisse et lobortis enim,
            nec fermentum est. Aliquam accumsan viverra vehicula. Proin tempus
            sagittis auctor. Vivamus quam ligula, laoreet eget eros et,
            hendrerit iaculis risus. Nam a nulla in purus fermentum rhoncus eu
            et erat. Aliquam tempus felis lorem, id hendrerit tortor vestibulum
            ac.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            massa odio. Quisque ante sem, tempor eget massa vel, mollis
            tincidunt metus. Ut sed felis lectus. Nam semper molestie urna, quis
            ultricies quam semper ut. Maecenas aliquet id urna a convallis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Maecenas leo lectus, dictum vitae erat eget,
            luctus dapibus sapien. Integer at hendrerit quam. Vivamus tempor,
            arcu non fringilla laoreet, enim nibh porttitor enim, eget
            pellentesque eros nulla congue neque. Suspendisse et lobortis enim,
            nec fermentum est. Aliquam accumsan viverra vehicula. Proin tempus
            sagittis auctor. Vivamus quam ligula, laoreet eget eros et,
            hendrerit iaculis risus. Nam a nulla in purus fermentum rhoncus eu
            et erat. Aliquam tempus felis lorem, id hendrerit tortor vestibulum
            ac.
          </Text>
        </ScrollView>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5,
  },
  contentFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
  },
  btn: {
    width: '20%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default Modal;
