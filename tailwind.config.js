module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        animation: {
          'float': 'float 20s ease-in-out infinite',
          'fadeIn': 'fadeIn 0.5s ease-out forwards',
          'typing': 'typing 0.5s ease-out forwards',
          'typing-delay-1': 'typing 0.5s ease-out 0.5s forwards',
          'typing-delay-2': 'typing 0.5s ease-out 1s forwards',
          'typing-delay-3': 'typing 0.5s ease-out 1.5s forwards',
          'typing-delay-4': 'typing 0.5s ease-out 2s forwards',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0) translateX(0)' },
            '25%': { transform: 'translateY(-20px) translateX(10px)' },
            '50%': { transform: 'translateY(10px) translateX(-10px)' },
            '75%': { transform: 'translateY(-10px) translateX(20px)' },
          },
          fadeIn: {
            'to': { opacity: 1 }
          },
          typing: {
            'from': { opacity: 0, transform: 'translateY(10px)' },
            'to': { opacity: 1, transform: 'translateY(0)' }
          }
        }
      }
    },
    plugins: [],
  }