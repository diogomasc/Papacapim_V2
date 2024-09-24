# Papacapim - Plataforma de Microblogging em Desenvolvimento

**Papacapim** é um projeto de aplicativo de rede social em desenvolvimento, com o objetivo de criar uma plataforma de microblogging semelhante ao Twitter. Este projeto está sendo desenvolvido durante a disciplina de Desenvolvimento Mobile 2024.1 e será apresentado ao IFBA no final do semestre.

## Visão Geral

Papacapim permite que os usuários publiquem postagens curtas, curtam, comentem em postagens de outros usuários e realizem interações sociais. O foco principal é explorar conceitos de desenvolvimento mobile, design de interfaces e integração com back-end. Vale ressaltar que Papacapim é um projeto de pequena escala, sem foco em escalabilidade ou suporte a um grande número de usuários.

## Funcionalidades Principais

- **Efetuar Registros**: Permite que novos usuários se registrem na plataforma.
- **Login**: Acesso de usuários existentes à plataforma.
- **Alterar Dados**: Usuários podem modificar suas informações pessoais.
- **Excluir Conta**: Opção para remoção completa da conta do usuário.
- **Buscar Usuário**: Ferramenta de pesquisa para encontrar outros usuários na plataforma.
- **Seguir/Deixar de Seguir**: Opção de seguir ou deixar de seguir outros usuários.
- **Responder Postagens**: Interação direta com postagens de outros usuários.

## Tecnologias Utilizadas

- **React Native**: Framework principal para o desenvolvimento do aplicativo.
- **JavaScript**: Linguagem de programação usada para escrever o código do app.
- **Expo**: Ferramenta utilizada para facilitar o desenvolvimento e a distribuição do aplicativo.
- **React Navigation**: Biblioteca para navegação entre as telas do aplicativo e criação de rotas.

## Como Testar o Aplicativo

### Pré-requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
- **Expo CLI**: Instale globalmente através do comando:
  ```bash
  npm install -g expo-cli
  ```
- **Git**: Necessário para clonar o repositório.
- **Yarn**: Se ainda não tiver o Yarn instalado, você pode instalá-lo globalmente com o comando:
  ```bash
  npm install -g yarn
  ```

### Passos para Testar

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/diogomasc/Papacapim.git
   cd Papacapim
   ```

2. **Instale as Dependências**:

   ```bash
   yarn install
   ```

3. **Inicie o Aplicativo**:

   ```bash
   npm start
   ```

   Ou para limpar o cache antes de iniciar:

   ```bash
   npx expo start -c
   ```

4. **Executando e Testando o Aplicativo**

   - **Usando o Expo para Ler o QR Code**:

     1. O Expo CLI gerará um QR Code.
     2. Abra o aplicativo **Expo Go** no seu dispositivo móvel.
     3. Escaneie o QR Code exibido no terminal ou na página web que abrir.
     4. O aplicativo será carregado automaticamente no seu dispositivo.

   - **Usando o Emulador Android**:
     1. Certifique-se de que o [Android Studio](https://developer.android.com/studio?hl=pt-br) esteja instalado e configurado.
     2. No Android Studio, abra o AVD Manager e inicie um dispositivo virtual (emulador).
     3. Com o emulador em execução, execute o comando `adb devices` para verificar se o emulador foi detectado corretamente.
     4. Inicie o aplicativo no emulador com o comando:
        ```bash
        npx expo start --android
        ```
        Ou digite `A` no terminal.
     5. O aplicativo será compilado e executado no emulador Android.

5. **Parar a Execução**:
   ```bash
   Ctrl + C
   ```

## Telas

<div style="display: flex; overflow-x: auto;">
   <img src="https://github.com/user-attachments/assets/a7f9062b-f8e4-43de-ae14-674272398727" alt="Tela 1" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/f74bc83c-a478-401e-8b86-2060c2141b75" alt="Tela 2" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/3968e508-1cea-4fc3-bfa9-591def61bf94" alt="Tela 3" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/7199c404-b54f-4001-b51f-f9936e1d8e73" alt="Tela 4" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/6e524612-2ee1-45d1-9fa0-6d15e597dc22" alt="Tela 5" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/b0bf4703-3b73-4c6a-9979-bd2c8251f658" alt="Tela 6" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/1eced3f6-2fce-43c8-abfc-16478d2dae1e" alt="Tela 7" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/d2885a1e-803d-4f70-87c7-e1c247260095" alt="Tela 8" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/88bf7bf7-73c4-44db-8e93-3cf640e882b3" alt="Tela 9" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/de7c497f-81b9-4845-bed7-a78f3a147f5d" alt="Tela 10" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/b3d59542-0913-44ff-aa78-34c4240a41ba" alt="Tela 11" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/41a798b1-82cc-40bb-86cb-40472ed85853" alt="Tela 12" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/ab091b35-ed82-4f1c-8f24-452511f55678" alt="Tela 13" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/17d8937b-fe72-4e8a-afb7-3febc2223d5f" alt="Tela 14" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/2732e6aa-405d-4f17-bf9c-1f1f69e2845e" alt="Tela 15" style="height: 500px;">
</div>

## Licença

Este projeto é apenas para fins educacionais e não possui uma licença aberta. Todos os direitos são reservados.

Papacapim está em constante desenvolvimento. Esta versão é uma prova de conceito e pode sofrer alterações significativas ao longo do tempo. Fique atento às atualizações e melhorias futuras!

---

Desenvolvido por Diogo Mascarenhas durante a disciplina de Desenvolvimento Mobile 2024.1 - IFBA.
