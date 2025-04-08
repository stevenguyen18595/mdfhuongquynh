/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1532px',
        },
        fontFamily: {
            vietnam: ['"Be Vietnam Pro"', 'sans-serif'], // <== mới
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#1D1D1D',
            white: '#FFFFFF',
            primary: '#071c1f',
            secondary: '#cb921e',
            orange: '#d56043',
            red: '#c31200',
            gray: {
                DEFAULT: '#646468',
                light: '#fffbf5',
                100: '#f9fafb',
                200: '#f0eeea',
            },
        },
        extend: {
            typography: (theme) => ({
                lg: {
                    css: {
                        h1: {
                            fontSize: '34px',
                        },
                        h2: {
                            fontSize: '28px',
                            margin: '28px 0 18px 0 !important',
                            lineHeight: '32px',
                        },
                        h3: {
                            fontSize: '22px',
                        },
                        h4: {
                            fontSize: '20px',
                        },
                        'ol > li::marker': {
                            fontSize: '22px',
                        },
                        li: {
                            fontSize: '16px',
                            lineHeight: '20px',
                        },
                    },
                },
                DEFAULT: {
                    css: {
                        '--tw-prose-bullets': theme('colors.primary'),
                        '--tw-prose-counters': theme('colors.primary'),
                        color: theme('colors.gray.DEFAULT'),
                        fontSize: '16px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        a: {
                            color: theme('colors.secondary'),
                            textDecoration: 'none',
                            transitionDuration: '300ms',
                            fontWeight: 500,
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        },
                        blockquote: {
                            borderLeftWidth: '4px',
                            borderLeftColor: 'gray',
                            fontStyle: 'italic',
                            backgroundColor: theme('colors.gray-light'),
                            padding: '16px',
                        },
                        h1: {
                            fontSize: '26px !important',
                            fontWeight: 600,
                            margin: '24px 0 16px 0 !important',
                            color: theme('colors.primary'),
                            letterSpacing: '0.05em',
                            fontFamily: 'Be Vietnam Pro',
                        },
                        h2: {
                            fontSize: '22px',
                            fontWeight: 600,
                            margin: '16px 0 10px 0 !important',
                            color: theme('colors.primary'),
                            letterSpacing: '0.05em',
                            fontFamily: 'Be Vietnam Pro',
                        },
                        h3: {
                            fontSize: '20px',
                            fontWeight: 600,
                            lineHeight: '24px',
                            margin: '0 0 12px 0 !important',
                            color: theme('colors.primary'),
                            letterSpacing: '0.05em',
                            fontFamily: 'Be Vietnam Pro',
                        },
                        h4: {
                            fontSize: '18px',
                            fontWeight: 600,
                            margin: '0 0 12px 0 !important',
                            color: theme('colors.primary'),
                            letterSpacing: '0.025em',
                        },
                        h5: {
                            fontSize: '18px',
                            fontWeight: 600,
                            lineHeight: '20px',
                            margin: '0 0 12px 0 !important',
                            color: theme('colors.primary'),
                            letterSpacing: '0.025em',
                        },
                        h6: {
                            fontSize: '14px ',
                            fontWeight: 500,
                            margin: '0 0 10px 0',
                            color: theme('colors.primary'),
                            letterSpacing: '0.025em',
                        },
                        p: {
                            fontSize: '16px',
                            lineHeight: '24px',
                            marginTop: '0px !important',
                        },
                        ol: {
                            paddingLeft: '28px !important',
                        },
                        'ol > li::marker': {
                            fontWeight: '600',
                            fontSize: '18px',
                            color: 'var(--tw-prose-bullets)',
                            textTransform: 'uppercase',
                        },
                        'ul > li::marker': {
                            fontWeight: '500',
                        },
                        ul: {
                            paddingLeft: '28px !important',
                        },
                        li: {
                            fontSize: '14px',
                            lineheight: '14px !important',
                            padding: '0px !important',
                            margin: '0 0 8px 0 !important',
                        },
                    },
                },
            }),
            animation: {
                marquee: 'marquee 30s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [
        'prettier-plugin-tailwindcss',
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        require('@tailwindcss/typography'),
    ],
}
