const env = process.env.NODE_ENV ;
const envmongo = process.env.NODE_MONGO ;

const config = () => {

    switch(env){

        case 'dev':
        return{
            bd_string:envmongo,
            jwt_password: 'lojavirtual',
            jwt_time:'7d'
        }

    }

}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()} `);

module.exports = config();