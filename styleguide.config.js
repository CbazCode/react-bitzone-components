module.exports = {
    sections: [
        {
          name: 'Introduccion',
          content: 'docs/introduccion.md'
        },
        {
          name: 'Componentes UI',
          content: 'docs/ui.md',
          components: [
            'src/components/Button/[A-Z]*.js',
            'src/components/Drawer/[A-Z]*.js',
            'src/components/Input/[A-Z]*.js',
            'src/components/Modal/Modal.js',
            'src/components/Skeleton/[A-Z]*.js',
            'src/components/Slider/[A-Z]*.js',
            'src/components/Spinner/Spinner.js',
            'src/components/Switch/Switch.js',
        ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
        }
      ]
}

