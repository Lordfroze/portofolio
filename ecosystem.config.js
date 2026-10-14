module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: 'npm',
      args: 'start',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '500M',
      error_file: '/var/log/pm2/portfolio-error.log',
      out_file: '/var/log/pm2/portfolio-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Restart otomatis kalau crash
      autorestart: true,
      // Delay restart kalau crash berulang
      restart_delay: 3000,
      // Max restart attempts dalam 1 menit
      max_restarts: 10,
      min_uptime: '60s'
    }
  ]
};