import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export const trackStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  screenHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  screenTitleHeader: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    flex: 1,
    textAlign: 'right',
    marginLeft: SPACING.md,
  },
  actionText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '600',
  },
  listPadding: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.xl,
  },
  trackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
  },
  indexText: {
    color: COLORS.textSecondary,
    width: 24,
    fontSize: FONT_SIZE.md,
    textAlign: 'center',
  },
  coverImage: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginHorizontal: SPACING.md,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  trackTitleText: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.lg,
    fontWeight: '500',
  },
  artistText: {
    color: COLORS.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  durationText: {
    color: COLORS.textSecondary,
    fontSize: 13,
    marginLeft: SPACING.sm,
  },
});