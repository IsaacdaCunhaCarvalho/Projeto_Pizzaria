// Importação dos módulos / dependências:
const app = require('./app');

// Importação das variáveis de ambiente:
require('dotenv').config({path:'variables.env'});

//app.set('port', 3600); -> Sem uso de variables.env
app.set('port', process.env.PORT || 1111);

const server = app.listen(app.get('port'), () => {

  console.log("Servidor iniciado em: " + server.address().port);
});