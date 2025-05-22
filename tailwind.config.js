/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6', // Modern blue
                secondary: '#0f172a', // Dark blue for contrast
                accent: '#8b5cf6', // Purple accent
                light: '#f8fafc',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'elegant': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                'btn': '0 4px 14px 0 rgba(59, 130, 246, 0.4)',
            },
        },
    },
    plugins: [],
}
