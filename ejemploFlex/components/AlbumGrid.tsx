import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import { ALBUMS_DATA } from '../data/mockData';
import { Album } from '../types';
import { gridStyles as styles } from '../styles/gridStyles';

interface AlbumGridProps {
  onSelectAlbum: (album: Album) => void;
  onLogout: () => void;
}

export default function AlbumGrid({ onSelectAlbum, onLogout }: AlbumGridProps) {
  const renderItem = ({ item }: ListRenderItemInfo<Album>) => (
    <TouchableOpacity
      style={styles.gridCard}
      activeOpacity={0.8}
      onPress={() => onSelectAlbum(item)}
    >
      <Image source={{ uri: item.cover }} style={styles.gridCardImage} />
      <Text style={styles.gridCardTitle} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.gridCardSubtitle} numberOfLines={1}>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screenHeaderContainer}>
        <Text style={styles.screenTitle}>Tus Álbumes</Text>
        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.actionText}>Salir</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ALBUMS_DATA}
        keyExtractor={(item: Album) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listPadding}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}