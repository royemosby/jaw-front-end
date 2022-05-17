module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        cover: `3.3px 4.1px 3.2px rgba(0, 0, 0, 0.087),
          9.8px 12.3px 10.7px rgba(0, 0, 0, 0.1),
          31px 39px 48px rgba(0, 0, 0, 0.21)`,
        'cover-divider': `4.6px 6.3px 6px rgba(0, 0, 0, 0.04),
          24px 33px 48px rgba(0, 0, 0, 0.1)`,
      },
      fontFamily: {
        display: 'Rye-Regular',
      },
      gridTemplateColumns: {
        form: 'auto auto',
      },
      gridTemplateRows: {
        cover: 'auto 1fr auto',
      },
      width: {
        cover: 'calc(100vw - 2rem)',
        '1/2': '50%',
      },
      minWidth: {
        300: '300px',
      },
      minHeight: {
        cover: 'calc(100vh - 5rem)',
      },
    },
  },
  plugins: [],
}
