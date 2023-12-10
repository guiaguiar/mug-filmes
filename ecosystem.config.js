module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      user : 'root',
      host : '191.101.70.243',
      ref  : 'origin/main',
      repo : 'https://github.com/guiaguiar/mug-filmes.git',
      path : '/home',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    }
  }
};
