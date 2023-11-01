import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import crypto from 'crypto';
import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath } from 'node:url';

export default ({ mode }) => {
    const env =
        mode === 'production'
            ? loadEnv(process.env.production, process.cwd())
            : loadEnv(process.env.local, process.cwd());

    function generateScopedName(name, filename) {
        const componentName =
            filename.split('/')[filename.split('/').length - 2];

        // Generate hash
        const hash = crypto.createHash('md5').digest('base64').substring(0, 5);

        return `${componentName}__${name}__${hash}`;
    }

    return defineConfig({
        plugins: [
            svgr(),
            react(eslint({ cache: true, fix: true, failOnError: false })),
        ],
        server: {
            port: 3000,
        },
        define: {
            'process.env': env,
        },
        css: {
            modules: {
                localsConvention: 'camelCase',
                generateScopedName:
                    mode === 'production'
                        ? '[hash:base64:2]'
                        : generateScopedName,
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                'S#': fileURLToPath(new URL('./static', import.meta.url)),
            },
        },
    });
};
