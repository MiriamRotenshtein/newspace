import preset from './vendor/filament/support/tailwind.config.preset'

export default {
  presets: [preset],
  content: [
    './resources/**/*.blade.php',
    './vendor/filament/**/*.blade.php',
  ],
}
