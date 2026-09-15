const path = require('path');
require('dotenv').config();

module.exports = {
  // Ports
  PORT_WEB: parseInt(process.env.PORT_WEB || '3001', 10),
  PORT_API: parseInt(process.env.PORT_API || '3003', 10),
  PORT_SFTP: parseInt(process.env.PORT_SFTP || '3004', 10),

  // Secrets & JWT
  JWT_SECRET: process.env.JWT_SECRET || 'prime-minecraft_super_secure_jwt_secret_key_2026_x892!',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  CURSEFORGE_API_KEY: process.env.CURSEFORGE_API_KEY || '$2a$10$2LouREiMl.mx0kVBK.RlK.nloje4XS3oF8uSw809VZr07O.0A5cLq',
  CURSEFORGE_BASE_URL: process.env.CURSEFORGE_BASE_URL || 'https://api.curseforge.com/v1',

  // Storage Paths
  BASE_DIR: path.resolve(__dirname, '../../'),
  DATA_DIR: path.resolve(__dirname, '../../data'),
  SERVERS_DIR: path.resolve(__dirname, '../../prime/servers'),
  BACKUPS_DIR: path.resolve(__dirname, '../../prime/backups'),
  UPLOADS_DIR: path.resolve(__dirname, '../../public/uploads'),

  // SQLite DB Path
  DB_PATH: process.env.DB_PATH || path.resolve(__dirname, '../../data/prime-minecraft.sqlite'),

  // Panel Defaults
  DEFAULT_PANEL_NAME: 'Prime Minecraft',
  DEFAULT_THEME: {
    transparency: 18, // 0 - 100%
    blur: 16,        // 0 - 40px
    wallpaper: '/assets/dark-angel-rising.3840x2160.mp4',
    wallpaperCategory: 'animated',
    wallpaperAnimated: true,
    logo: '/assets/prime-minecraft-logo.svg',
    favicon: '/assets/favicon.svg',
    themeMode: 'dark',
    musicUrl: '',
    musicTitle: 'Default Chill Synth',
    musicEnabled: false,
    musicVolume: 30,
    // Theme Colors
    primaryColor: '#0ea5e9',       // Cyan-500
    secondaryColor: '#a855f7',     // Purple-500
    accentColor: '#f43f5e',        // Rose-500
    successColor: '#22c55e',       // Green-500
    warningColor: '#f59e0b',       // Amber-500
    errorColor: '#ef4444',         // Red-500
    backgroundColor: '#020617',    // Slate-950
    surfaceColor: '#0f172a',       // Slate-900
    cardColor: '#1e293b',          // Slate-800
    borderColor: '#334155',        // Slate-700
    textPrimary: '#f8fafc',        // Slate-50
    textSecondary: '#94a3b8',      // Slate-400
    textMuted: '#64748b',          // Slate-500
    // Gradient Settings
    gradientEnabled: true,
    gradientFrom: '#0ea5e9',
    gradientVia: '#a855f7',
    gradientTo: '#f43f5e',
    // Custom Theme Name
    themeName: 'Default Cyber',
    themePreset: 'cyber'
  }
};

