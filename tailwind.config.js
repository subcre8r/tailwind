module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
           '0%, 100%': { transform: 'rotate(-3deg)' },
           '50%': { transform: 'rotate(3deg)' },
         },
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
        '-50': '-50',
        '-25': '-25',
        '-50': '-50',
        '-75': '-75',
        '-100': '-100'
      },
    },
  },
  variants: {
    extend: {
      animation: ['active', 'hover', 'focus', 'group-hover'],
      display: ['active', 'hover', 'focus', 'group-hover'],
      transitionProperty: ['active', 'hover', 'focus', 'group-hover'],
      transform: ['active', 'hover', 'focus', 'group-hover'],
      transformOrigin: ['active', 'hover', 'focus', 'group-hover'],
      scale: ['active', 'hover', 'focus', 'group-hover'],
      rotate: ['active', 'hover', 'focus', 'group-hover'],
      translate: ['active', 'hover', 'focus', 'group-hover'],
      skew: ['active', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
