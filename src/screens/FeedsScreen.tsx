import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import {ImageData, Theme, ThemeColor} from '../constants/interfaces';
import GetImages from '../constants/actions';
import RenderFeedItem from '../components/RenderFeedItem';
import colors from '../constants/colors';

export default function FeedsScreen() {
  const systemTheme: ThemeColor['value'] = useColorScheme() ?? 'light';
  const theme: Theme['value'] = useSelector((state: RootState) => state.theme);
  const themeColor: ThemeColor['value'] =
    theme === 'system' ? systemTheme : theme;

  const [images, setImages] = useState<ImageData[]>([]);

  const fetchImages = async () => {
    const page = 1 + images.length / 30; // 30 images per page
    try {
      const response = await GetImages(page);
      setImages(images.concat(response));
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <RenderFeedItem item={item} theme={themeColor} />
        )}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          fetchImages();
        }}
        ListFooterComponent={() => <ActivityIndicator size={'large'} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
