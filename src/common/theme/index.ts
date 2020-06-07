const PRIMITIVE = {
  COLORS: {
    WHITE: "#ffffff",
    FOREST_GREEN: "#2ac421",
    TUNDORA: "#424242",
    EBONY_CLAY: "#233142",
    MINE_SHAFT: "#333333",
    MERCURY: "#e5e5e5",
    NOBEL: "#b3b3b3",
    RED: "#e82300",
    GREEN: "#02c91c",
    BLUE: "#05c1eb",
  },
  FONT_SIZES: {
    M: "0.825rem",
    L: "1rem",
  },
  SPACING: {
    XS: "0.25rem",
    S: "0.75rem",
    M: "1.25rem",
    L: "2rem",
  },
};

const ABSTRACT = {
  COLORS: {
    DARK_TEXT: PRIMITIVE.COLORS.MINE_SHAFT,
    MEDIUM_TEXT: PRIMITIVE.COLORS.NOBEL,
    LIGHT_BACKGROUND: PRIMITIVE.COLORS.WHITE,
    DARK_BACKGROUND: PRIMITIVE.COLORS.EBONY_CLAY,
    DARK_BORDER: PRIMITIVE.COLORS.MINE_SHAFT,
    MEDIUM_BORDER: PRIMITIVE.COLORS.MERCURY,
    ERROR: PRIMITIVE.COLORS.RED,
    SUCCESS: PRIMITIVE.COLORS.GREEN,
    INFO: PRIMITIVE.COLORS.BLUE,
    MEDIUM_ICON: PRIMITIVE.COLORS.MERCURY,
    DARK_ICON: PRIMITIVE.COLORS.MINE_SHAFT,
  },
  FONT_SIZES: {
    REGULAR: PRIMITIVE.FONT_SIZES.M,
    LARGE: PRIMITIVE.FONT_SIZES.L,
  },
};

export const theme = {
  GLOBAL: {
    BACKGROUND_COLOR: ABSTRACT.COLORS.DARK_BACKGROUND,
    FONT_COLOR: ABSTRACT.COLORS.DARK_TEXT,
    FONT_SIZE: ABSTRACT.FONT_SIZES.REGULAR,
  },
  COMPONENTS: {
    APP: {
      BACKGROUND_COLOR: ABSTRACT.COLORS.LIGHT_BACKGROUND,
      PADDING: PRIMITIVE.SPACING.M,
      HEADER: {
        PADDING: PRIMITIVE.SPACING.M,
      },
    },
    ACTIVITY_FEED: {
      DAY: {
        MARGIN: PRIMITIVE.SPACING.M,
        COLOR: ABSTRACT.COLORS.DARK_TEXT,
        BORDER_COLOR: ABSTRACT.COLORS.MEDIUM_BORDER,
        BORDER_MARGIN: PRIMITIVE.SPACING.S,
        LABEL_MARGIN: PRIMITIVE.SPACING.M,
      },
      ITEM: {
        MARGIN: PRIMITIVE.SPACING.M,
      },
      ERROR: {
        COLOR: ABSTRACT.COLORS.ERROR,
      },
      ACTIVITY: {
        INNER_SPACING: PRIMITIVE.SPACING.S,
        BORDER_COLOR: ABSTRACT.COLORS.MEDIUM_BORDER,
        PHONE_ICON_COLOR: ABSTRACT.COLORS.MEDIUM_ICON,
        MISSED_COLOR: ABSTRACT.COLORS.ERROR,
        ANSWERED_COLOR: ABSTRACT.COLORS.SUCCESS,
        VOICEMAIL_COLOR: ABSTRACT.COLORS.INFO,
        PRIMARY_NUMBER: {
          FONT_SIZE: ABSTRACT.FONT_SIZES.LARGE,
          MARGIN: PRIMITIVE.SPACING.XS,
        },
        SECONDARY_NUMBER: {
          COLOR: ABSTRACT.COLORS.MEDIUM_TEXT,
        },
      },
    },
  },
};

export type Theme = typeof theme;
