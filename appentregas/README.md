# App Entregas

## Ambiente: React Native + Expo
Necessário ter instalado
- NodeJS
- Yarn
- Expo CLI
- Android Studio (Opcional para no emulador a funcionalidade de Mapa não funciona na web)
```bash
npm install -g expo-cli
```

### dependências
```bash
yarn add @react-navigation/native
yarn add react-native-safe-area-context
yarn add react-native-screens
yarn add @react-navigation/native-stack
yarn add react-native-maps
```

## Esta versão pode ser testada no Emulador
- A api backend deve estar rodando na porta 3000
- O emulador deve estar rodando
### Passos para testar no Expo emulador do Android Studio
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
expo start -a
```