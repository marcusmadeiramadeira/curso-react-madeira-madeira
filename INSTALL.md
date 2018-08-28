# Instalação

Crie um fork deste repositório:

```
https://github.com/williamnvk/curso-react-madeira-madeira
```

Para começar, abra o seu terminal e vamos instalar o React (modo Global) para usarmos o recuso de criar uma aplicação pré-configurada.

```
npm install -g create-react-app
```

Após o passo acima, execute:

```
cd /var/www
git clone https://github.com/SEU-USERNAME/curso-react-madeira-madeira curso-react
cd curso-react
```

Dentro do diretório do projeto, execute os comandos abaixo para criar a estrutura que vamos utilizar durante o curso.


```
create-react-app client
cd client
npm start
```

Pronto, sua aplicação estará rodando no seguinte endereço <http://localhost:3000>.

# Configuração


Neste repositório, o diretório `config` contém os seguintes arquivos:
- `.eslintrc.json` é o arquivo de parametros para o `eslint` obedecer (vamos ver isso na aula 4 (quatro)), é um auxiliar para manter a qualidade do código segundo padrões pré definidos de escrita.
- `.editorconfig` que é interpretado pelo IDE e formata seu código de acordo com as regras nele especificadas, que tem ligação com as regras definidas no arquivo `.eslintrc.json`.
- `package.json` você pode editar este arquivo e inserir seus dados e substituir o mesmo arquivo dentro do diretório `client`.
- `.babelrc` tem parametros para configuração do `BABEL` que será visto ao decorrer das aulas.
- `webpack.config.js` essa é o arquivo de configuração do `webpack` que contém uma configuração padrão.
