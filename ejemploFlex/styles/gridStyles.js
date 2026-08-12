import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export const gridStyles = StyleSheet.create({
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
  screenTitle: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
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
  row: {
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  gridCard: {
    flex: 1,
    marginHorizontal: 6,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 10,
  },
  gridCardImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 6,
  },
  gridCardTitle: {
    color: COLORS.textPrimary,
    fontWeight: 'bold',
    marginTop: SPACING.sm,
    fontSize: FONT_SIZE.md,
  },
  gridCardSubtitle: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.sm,
    marginTop: 2,
  },
});