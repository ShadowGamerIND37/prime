# 🎮 Prime Minecraft

**Full-Stack Node.js Game & Application Server Management Panel**

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)
[![Release](https://img.shields.io/badge/release-v1.0-blue.svg)](https://github.com/ShadowGamerIND37/prime/releases/tag/v1.0)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Theme](https://img.shields.io/badge/Theme-Full%20Black%20OLED-000000.svg)](#-theme--customization-engine)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-contributing)
[![Developer](https://img.shields.io/badge/Developer-ShadowGamerIND-orange.svg)](https://github.com/ShadowGamerIND37)

Prime Minecraft is a high-performance, self-hosted server management panel built entirely on **Node.js** — a modern, lightweight, and fast alternative to Pterodactyl. It combines real-time terminal streaming, deep Minecraft-specific tooling (live player management, an addon marketplace, world installer, and one-click version switching), an embedded SFTP server, and a fully customizable glassmorphic "Full Black OLED" theme engine.

**Developer:** [ShadowGamerIND](https://github.com/ShadowGamerIND37) · **Version:** `v1.0`

---

## 📑 Table of Contents

- [Features](#-features)
- [Supported Runtimes](#-supported-runtimes--environments)
- [Port Reference](#-port-reference)
- [Prerequisites](#-prerequisites)
- [Installation](#️-installation--quick-start)
- [Directory Structure](#-directory-structure)
- [SFTP Access](#-sftp-connection-details)
- [Default Credentials & Security](#-default-credentials--security)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 👥 Minecraft Player Manager
Real-time and offline player administration in one place.
- **Live roster** — ping, gamemode, health, food level, XP, and UUID for every connected player.
- **Live inventory viewer** — inspect armor slots, offhand, main inventory, and ender chest with item icons, stack counts, and durability.
- **Statistics & advancements** — mob kills, blocks mined, items crafted, distance traveled, and full advancement-tree tracking (Story, Nether, The End, Adventure, Husbandry).
- **Moderation actions** — kick, ban, pardon, IP-ban, and OP/DEOP (levels 1–4), available live or fully offline (whitelist, ops, bans).
- **One-click startup** from inside the Player Manager when the server is offline.

### 🧩 Addon Marketplace
Unified access to the three major Minecraft content providers:

| Provider | Coverage | Integration |
| :--- | :--- | :--- |
| [Modrinth](https://modrinth.com) | Mods, plugins, datapacks, resource packs, modpacks | Direct API |
| [CurseForge](https://www.curseforge.com) | Plugins, mods, worlds/maps, modpacks | `CURSEFORGE_API_KEY` via `api.curseforge.com/v1` |
| [SpigotMC](https://www.spigotmc.org) | 90,000+ Bukkit/Spigot/Paper plugins | Spiget v2 (`api.spiget.org/v2`) |

Additional marketplace capabilities:
- Version filtering from **1.21 (Tricky Trials)** down to **1.5.2**, with quick-select pills.
- **10 content categories**: Version Changer, Player Manager, World Manager, Plugins, Mods, Datapacks, Resource Packs, Modpacks, Properties UI, and Server Tools.
- **Server Tools** bundle: ViaVersion, ViaBackwards, GeyserMC, Floodgate, Spark Profiler, Chunky, LuckPerms, SkinsRestorer, Aikar's JVM flags, the Playit.gg tunnel manager, and a log cleaner.
- **Properties UI** — visual `server.properties` editor with ON/OFF toggles, live color-coded MOTD preview (`§`/`&` codes), and a "Restart to Apply" action.

### 🔄 Version Changer (MCJars Engine)
Switch server core and Minecraft version in a single click, with automatic jar backup and download verification. Supported cores: **Paper, Purpur, Spigot, Vanilla, Fabric, Forge, NeoForge, BungeeCord, Velocity**, and **Bedrock Dedicated Server**.

### 🎨 Theme & Customization Engine
- **Full Black OLED** default theme with a one-click light/dark toggle.
- Integrated [4kwallpapers.com](https://4kwallpapers.com) browser — 36 categories, search, pagination, favorites, and one-click apply.
- Custom media backgrounds: images (`JPG`, `PNG`, `WEBP`, `GIF`) or looping video (`MP4`, `WEBM`, up to 100MB).
- Live transparency and blur sliders (CSS `backdrop-filter`), with debounced auto-save and one-click reset to default.

### 🌐 Playit.gg Tunnel Integration
- One-click plugin/mod install (Paper, Purpur, Spigot, Velocity, Fabric, Forge, NeoForge).
- Automatic detection of claim URLs and public connection domains from server logs.
- Secret key binding directly into `playit.toml`.
- Native Linux daemon install via `./menu.sh playit` or manually:
  ```bash
  curl -SsL https://packages.playit.gg/keys/playit.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/playit.gpg >/dev/null
  sudo chmod 0644 /usr/share/keyrings/playit.gpg
  sudo curl -fsSL -o /etc/apt/sources.list.d/playit.list https://packages.playit.gg/repo-files/playit-debian.list
  sudo apt update
  sudo apt install -y playit
  ```

---

## 📦 Supported Runtimes & Environments

| Category | Versions | Image Source |
| :--- | :--- | :--- |
| **Minecraft (Java)** | 25, 21, 17, 16, 11, 8 | `ghcr.io/pterodactyl/yolks:java_*` |
| **Minecraft (Bedrock)** | Bedrock Dedicated Server | via Version Changer |
| **Node.js** | 25, 24, 23, 22, 21, 20, 19, 18, 16, 14, 12 | `ghcr.io/ptero-eggs/yolks:nodejs_*` |
| **Python** | 3.13, 3.12, 3.11, 3.10, 3.9, 3.8, 3.7, 2.7 | `ghcr.io/ptero-eggs/yolks:python_*` |

---

## 🔌 Port Reference

| Service | Port | Description |
| :--- | :--- | :--- |
| **Web UI** | `3001` | Main panel interface and live terminal WebSocket (`http://localhost:3001`) |
| **Panel / Daemon API** | `3003` | REST API for external integrations (WHMCS, Discord bots, billing systems) |
| **Embedded SFTP** | `3004` | Built-in SFTP server (FileZilla, WinSCP, Cyberduck) |

Make sure these ports are open on your firewall/security group if you plan to access the panel remotely.

---

## ✅ Prerequisites

Before installing, make sure the host has:

- **Node.js** ≥ 18.0.0 and npm
- **Docker** and **Docker Engine API access** (used for container lifecycle management)
- **Git**
- A Linux host (Debian/Ubuntu recommended) with `sudo` access for the automated installer
- Open inbound access on ports `3001`, `3003`, and `3004` (adjust as needed)

---

## 🛠️ Installation & Quick Start

### 1. One-Click Automated Install

```bash
# One-liner — downloads and runs menu.sh directly
bash <(curl -sSL https://raw.githubusercontent.com/ShadowGamerIND37/prime/main/menu.sh)

# Or locally, non-interactive
./menu.sh auto -y

# Or locally, interactive
./menu.sh auto

# Or via npm
npm run setup
```

This installs Node.js 20 LTS, PM2, and all dependencies; generates a `.env` file; seeds the database; and starts the panel under PM2 with boot autostart enabled.

### 2. Interactive Management Menu

```bash
./menu.sh
# or
bash menu.sh
# or
npm run menu
```

| Command | Description |
| :--- | :--- |
| `./menu.sh auto` / `./menu.sh setup` | One-click install, setup, database seeding & PM2 launch |
| `./menu.sh update` | Auto-update: git pull, DB migrations, dependencies, PM2 restart |
| `./menu.sh usercreate` | Create a new admin or standard user |
| `./menu.sh pm2` | PM2 process menu (start, stop, restart, logs, autostart) |
| `./menu.sh status` | Check listening status of ports `3001`/`3003`/`3004` and the database |
| `./menu.sh playit` | Install the native Playit.gg zero-port tunnel CLI |
| `./menu.sh uninstall` | Safely remove or clean a Prime Minecraft install |

### 3. Manual Setup

```bash
# Clone the repository
git clone https://github.com/ShadowGamerIND37/prime.git
cd Prime-Minecraft

# Install dependencies
npm install

# Run automated directory, .env & database setup
npm run setup

# Create an administrator account
npm run createuser

# Launch with PM2 (recommended for production)
npm run pm2:start
npm run pm2:logs
```

---

## 📁 Directory Structure

```
/
├── bin/
│   ├── setup.js              # Automated setup, directory creation & database seeding
│   ├── createuser.js         # Interactive CLI user creation
│   └── build.js              # Directory verification & preparation
├── data/
│   └── prime-minecraft.sqlite # SQLite database (WAL mode)
├── prime/
│   ├── servers/              # Sandboxed server directories (server1, server2, ...)
│   └── backups/              # Server snapshot .zip archives
├── public/
│   ├── index.html            # Main SPA entry point
│   ├── css/style.css         # Full Black OLED glassmorphic styles & sliders
│   └── js/
│       ├── app.js            # Core router, API requester & toasts
│       ├── auth.js           # Authentication, 2FA TOTP & profile
│       ├── settings.js       # Customization engine, wallpapers, transparency & blur
│       ├── marketplace.js    # CurseForge, Modrinth & SpigotMC integration
│       ├── playerManager.js  # Live player management & inventory viewer
│       ├── worldManager.js   # World installer & dimension manager
│       ├── versionChanger.js # MCJars version & core switcher
│       ├── console.js        # xterm.js terminal & server controls
│       ├── filemanager.js    # Sandboxed file manager & Ace code editor
│       └── admin.js          # Server wizard, nodes, allocations, users, API
├── src/
│   ├── index.js               # Main server launcher (ports 3001, 3003, 3004)
│   ├── config/
│   │   ├── config.js           # Global app settings, ports & default theme
│   │   └── images.js           # Docker image presets (Minecraft, Node, Python)
│   ├── database/
│   │   ├── db.js                # SQLite client & schema
│   │   └── seed.js              # Default settings, locations, nodes, allocations
│   ├── middleware/
│   │   ├── auth.js               # JWT & role permission middleware
│   │   └── upload.js             # Multer upload handlers (100MB media limit)
│   ├── services/
│   │   ├── dockerService.js      # Dockerode container lifecycle
│   │   ├── runnerService.js      # Dual container/native process runner
│   │   ├── mcjarsService.js      # MCJars.app integration & core switching
│   │   ├── wallpaperService.js   # 4KWallpapers scraper, cache & categories
│   │   ├── playerService.js      # Player NBT/JSON parsing & RCON actions
│   │   ├── worldService.js       # World generation, dimensions & zip archives
│   │   ├── curseforgeService.js  # CurseForge REST API v1
│   │   ├── spigotService.js      # SpigotMC / Spiget API v2
│   │   ├── propertiesService.js  # server.properties GUI schema
│   │   ├── marketplaceService.js # Addon downloader & package installer
│   │   ├── fileManagerService.js # Sandboxed filesystem operations
│   │   ├── backupService.js      # Zip backup creation & restoration
│   │   ├── scheduleService.js    # Cron scheduled tasks
│   │   └── activityService.js    # System-wide audit logging
│   ├── sftp/
│   │   └── sftpServer.js         # Embedded SSH2 SFTP server (port 3004)
│   ├── routes/                   # Express REST API routes
│   └── websocket/
│       └── consoleWs.js          # Real-time WebSocket terminal & stats
└── ecosystem.config.js           # PM2 clustering configuration
```

---

## 🔒 SFTP Connection Details

Connect with any SFTP client (FileZilla, WinSCP, Cyberduck):

| Field | Value |
| :--- | :--- |
| Host | `localhost` (or your server's IP) |
| Port | `3004` |
| Username | `<username>.<server_id>` (e.g. `admin.1` for server #1) |
| Password | Your Prime Minecraft account password |

---

## 🛡️ Default Credentials & Security

| Field | Value |
| :--- | :--- |
| Username | `admin` |
| Password | `admin` |
| Login URL | `http://localhost:3001` |

**Change these immediately after your first login.** Shipping or exposing a panel with default credentials on a public IP is a serious security risk. Recommended hardening steps:

1. Change the default admin password on first login.
2. Enable 2FA (TOTP) for all admin accounts.
3. Put the panel behind a reverse proxy with HTTPS (e.g. Nginx + Let's Encrypt).
4. Restrict inbound access to ports `3001`/`3003`/`3004` to trusted IPs where possible.
5. Rotate `CURSEFORGE_API_KEY` and any other secrets stored in `.env` if they are ever exposed.

---

## 🧯 Troubleshooting

| Symptom | Likely Cause | Fix |
| :--- | :--- | :--- |
| Panel won't start | Port already in use | Run `./menu.sh status` to check `3001`/`3003`/`3004`, then free the conflicting port |
| Docker containers fail to launch | Docker daemon not running or user lacks permissions | `sudo systemctl start docker`; add your user to the `docker` group |
| SFTP login fails | Wrong username format | Use `<username>.<server_id>`, not just the plain username |
| Addon downloads fail | Missing or invalid API key | Confirm `CURSEFORGE_API_KEY` is set correctly in `.env` |
| Changes to `.env` not applied | Panel not restarted | Restart via `npm run pm2:start` or `./menu.sh pm2` |

---

## 🤝 Contributing

Contributions are welcome. If you'd like to help:

1. Fork the repository and create a feature branch.
2. Keep changes focused and include a clear description of what and why.
3. Open a pull request against `main`.

Please open an issue first for larger changes so they can be discussed before implementation.

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).

---

<p align="center">Developed by <a href="https://github.com/ShadowGamerIND37">ShadowGamerIND</a> · v1.0</p>
