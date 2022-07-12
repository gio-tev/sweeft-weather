import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Card from '../components/UI/Card';
import { getData } from '../utils/https';
import { coords } from '../utils/coords';

const Home = () => {
  const [data, setData] = useState(null);

  const { tbilisi, kutaisi, batumi } = coords;

  useEffect(() => {
    const fetchData = async () => {
      const resTbilisi = await getData(tbilisi.lat, tbilisi.lon);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Card city="Tbilisi" data={data} />
      <Card city="Kutaisi" data={data} />
      <Card city="Batumi" data={data} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
});
