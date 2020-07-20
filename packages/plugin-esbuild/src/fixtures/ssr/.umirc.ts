
export default {
  ssr: {},
  exportStatic: {},
  history: {
    type: 'memory',
    options: {
      initialEntries: ['/'],
    },
  },
  plugins: [
    require.resolve('../../index.ts')
  ],
  mountElementId: '',
  routes: [
    { path: '/', component: 'index' },
  ],
  esbuild: {},
}
