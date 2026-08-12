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
import { TRACKS_DATA } from '../data/mockData';
import { Album, Track } from '../types';
import { trackStyles as styles } from '../styles/trackStyles';

interface TrackListProps {
  album: Album | null;
  onBack: () => void;
}

export default function TrackList({ album, onBack }: TrackListProps) {
  const renderItem = ({ item, index }: ListRenderItemInfo<Track>) => (
    <TouchableOpacity style={styles.trackRow} activeOpacity={0.7}>
      <Text style={styles.indexText}>{index + 1}</Text>
      <Image source={{ uri: item.cover }} style={styles.coverImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.trackTitleText} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.artistText} numberOfLines={1}>{item.artist} • {item.album}</Text>
      </View>
      <Text style={styles.durationText}>{item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screenHeaderContainer}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.actionText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitleHeader} numberOfLines={1}>
          {album ? album.title : 'Lista'}
        </Text>
      </View>

      <FlatList
        data={TRACKS_DATA}
        keyExtractor={(item: Track) => item.id}
        contentContainerStyle={styles.listPadding}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}