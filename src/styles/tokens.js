// Design tokens
export const tokens = {
  colors: {
    // Primary palette: Sophisticated neutrals
    neutrals: {
      white: '#FFFFFF',
      lightGray: '#F5F5F5',
      mediumGray: '#D0D0D0',
      gray: '#666666',
      darkGray: '#444444',
      charcoal: '#222222',
      black: '#111111',
      // Transparent variations
      whiteTransparent: {
        '20': 'rgba(255, 255, 255, 0.2)',
        '70': 'rgba(255, 255, 255, 0.7)',
      }
    },
    // Accent palette
    accent: {
      primary: '#FF3366', // Pink accent from slide examples
      secondary: '#3366FF', // Blue accent
      tertiary: '#33CC99', // Teal accent
    },
    // Background treatments
    backgrounds: {
      light: '#FFFFFF',
      offWhite: '#F5F1E8',  // Much warmer beige/cream color
      dark: '#111111',
    },
    // Gradient backgrounds
    gradients: {
      statCards: 'linear-gradient(135deg, #111111 0%, #161616 100%)',
      darkBackground: 'linear-gradient(135deg, #111111 0%, #161616 100%)', // Standard dark gradient for all slides
    },
    // Card backgrounds
    cards: {
      dark: 'rgba(255, 255, 255, 0.08)',
      darkHover: 'rgba(255, 255, 255, 0.12)',
      acrylic: {
        background: 'rgba(40, 40, 40, 0.2)',
        border: 'rgba(255, 255, 255, 0.08)',
        highlight: 'rgba(255, 255, 255, 0.05)'
      }
    }
  },
  typography: {
    // Font families
    fontFamily: {
      serif: "'Georgia', 'Canela', 'GT Sectra', 'Freight', serif",
      sansSerif: "'Söhne', 'Graphik', 'Neue Haas Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      monospace: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
    },
    // Based on golden ratio (1.618) scale progression
    fontSize: {
      xs: 'clamp(0.8rem, 0.7vw, 0.9rem)',      // Small details
      sm: 'clamp(0.9rem, 0.9vw, 1rem)',        // Body small
      base: 'clamp(1rem, 1vw, 1.1rem)',        // Body text
      lg: 'clamp(1.1rem, 1.2vw, 1.3rem)',      // Secondary headings
      xl: 'clamp(1.3rem, 1.5vw, 1.8rem)',      // Primary headings
      '2xl': 'clamp(1.8rem, 2vw, 2.5rem)',     // Section headings
      '3xl': 'clamp(2.5rem, 3vw, 4rem)',       // Main headings
      '4xl': 'clamp(4rem, 5vw, 6rem)',         // XL headings
      '5xl': 'clamp(6rem, 7vw, 9rem)',         // XXL headings
      '6xl': 'clamp(9rem, 10vw, 15rem)',       // XXXL headings (72pt+ equivalent)
      // Editorial specific exact matches from examples
      'title-subtitle': '1.2vw',               // Title slide subtitle
      'title-main': '5.2vw',                   // Title slide main title
      'author-name': '1vw',                    // Author name
      'author-role': '0.9vw',                  // Author role
      // Agenda Slide Specific Sizes
      'agenda-eyebrow': '1vw',
      'agenda-title': '4vw',
      'agenda-description': '1vw',
      'agenda-number': '2.5vw',
      'agenda-item-title': '1.5vw',
      'agenda-item-description': '0.9vw',
      // Stats slide specific sizes
      'stats-eyebrow': '1vw',
      'stats-title': '4vw',
      'stats-subtitle': '1.2vw',
      'stats-bg-number': '35vw',
      'stat-value': '5vw',
      'stat-label': '1.3vw',
      'stat-context': '0.9vw',
    },
    // Font weights
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      // Editorial specific weights
      editorial: {
        subtitle: 600,  // Semibold weight for all subtitles
        // Agenda weights if different from base
        agendaEyebrow: 600,
        agendaTitle: 600,
        agendaItemTitle: 600,
        agendaNumber: 700,
        // Stats weights
        statsEyebrow: 600,
        statsTitle: 600,
        statValue: 700,
        statLabel: 600,
      }
    },
    // Line heights
    lineHeight: {
      tight: 1.05,
      normal: 1.2,
      relaxed: 1.5,
      loose: 1.6,
      editorial: {
        titleMain: 1.05,  // For title slide main heading
        // Agenda Line Heights
        agendaTitle: 1.1,
        agendaDescription: 1.6,
        agendaNumber: 1.0,
        agendaItemDescription: 1.5,
        // Stats line heights
        statsTitle: 1.1,
        statsSubtitle: 1.5,
        statValue: 1,
        statLabel: 1.3,
        statContext: 1.5,
      }
    },
    // Letter spacing
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.05em',
      wider: '0.1em',
      widest: '0.2em',
      editorial: {
        titleSubtitle: '0.2em',  // For title slide subtitle
        titleMain: '-0.02em',    // For title slide main heading
        // Agenda Letter Spacing
        agendaEyebrow: '0.15em',
      }
    }
  },
  spacing: {
    // Base spacing unit is 8px (0.5rem)
    // Uses modular scale for consistency
    '0': '0',
    '1': '0.25rem',  // 4px
    '2': '0.5rem',   // 8px
    '3': '0.75rem',  // 12px
    '4': '1rem',     // 16px
    '5': '1.5rem',   // 24px
    '6': '2rem',     // 32px
    '7': '2.5rem',   // 40px
    '8': '3rem',     // 48px
    '9': '4rem',     // 64px
    '10': '5rem',    // 80px
    '11': '6rem',    // 96px
    '12': '8rem',    // 128px
    '13': '10rem',   // 160px
    '14': '12rem',   // 192px
    '15': '16rem',   // 256px
    // Editorial specific spacing (percentage-based for proportional layouts)
    editorial: {
      titleSlide: {
        subtitleBottom: '5%',
        titleBottom: '10%',
        authorInfoTop: '5%',
        authorNameTop: '5%',
        authorRoleTop: '0.2%',
      },
      agendaSlide: {
        columnPadding: '10%',
        rightColumnPaddingLeft: '8%',
        eyebrowBottom: '3%',
        titleBottom: '7%',
        descriptionBottom: '5%',
        itemPaddingBottom: '7%',
        itemMarginBottom: '7%',
        itemTitleBottom: '0.6vw',
      },
      statsSlide: {
        padding: '8%',
        eyebrowBottom: '2%',
        titleBottom: '2%',
        subtitleTop: '2%',
        headerBottom: '6%',
        cardPadding: '8%',
        cardGap: '3%',
        gridMarginTop: '5%',
        statValueBottom: '1vw',
        statLabelBottom: '1vw',
      }
    }
  },
  grid: {
    // 12-column grid for 16:9 aspect ratio
    columns: 12,
    gutter: '1rem',
    // Section spacing
    sectionSpacing: '10vh',
    // Consistent padding for slides
    slidePadding: {
      sm: '5%',
      md: '8%',
      lg: '10%',
    },
    agendaSlide: '1fr 1fr',
  },
  animation: {
    // Animation durations
    duration: {
      fast: '0.2s',
      normal: '0.4s',
      slow: '0.6s',
      slower: '0.8s',
      slowest: '1.2s',
    },
    // Animation easings
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Custom easings for more sophisticated motion
      editorial: 'cubic-bezier(0.19, 1, 0.22, 1)', // Expo-like easing for editorial feel
      bounce: 'cubic-bezier(0.87, 0, 0.13, 1)', // Slight bounce for playful elements
    },
    transform: {
      cardHover: 'translateY(-10px)',
    }
  },
  borders: {
    radius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '1rem',
      full: '9999px',
      card: '8px',
    },
    width: {
      none: '0',
      thin: '1px',
      thick: '2px',
      thicker: '4px',
    },
    color: {
      agendaItem: 'rgba(255, 255, 255, 0.2)',
    }
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 5px 30px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 20px 40px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  zIndex: {
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
    '100': 100,
    'auto': 'auto',
  },
  // Add visual effects tokens
  effects: {
    blendModes: {
      multiply: 'multiply',
      screen: 'screen',
      overlay: 'overlay',
    },
    gradients: {
      titleSlide: 'linear-gradient(135deg, rgba(17,17,17,0) 0%, rgba(17,17,17,1) 100%)',
      titleSlideAccent: 'linear-gradient(135deg, rgba(255,51,102,0.1) 0%, rgba(17,17,17,1) 100%)',
    },
    opacity: {
      subtle: 0.7,
      medium: 0.8,
      high: 0.9,
      ultraSubtle: 0.03,
      semiTransparent: 0.8,
    }
  },
  // Add layout tokens
  layout: {
    padding: {
      titleSlide: '10% 0 0 10%',
    },
    grid: {
      titleSlide: '1fr 1fr',
    }
  },
};

export default tokens;