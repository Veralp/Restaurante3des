# App Cozinha

## Ambiente: React Native + Expo
Necessário ter instalado
- NodeJS
- Yarn
- Expo CLI
- Android Studio (Opcional para testar no emulador)

### dependências
```bash
yarn add @react-navigation/native
yarn add react-native-safe-area-context
yarn add react-native-screens
yarn add @react-navigation/native-stack
```

## Esta versão pode ser testada no Expo web
- A api backend deve estar rodando na porta 3000
### Passos para testar no Expo web
- Abrir o projeto com VsCode
- Abrir o terminal
- Acessar a pasta do projeto mobile
```bash
cd appcozinha
```
- Instalar dependências
```bash
yarn
```
- Executar o comando `yarn start`
- Abrir o navegador no endereço `http://localhost:19002/`
- Clicar em `Run in web browser`
```bash
yarn web
ou
npx yarn web
```