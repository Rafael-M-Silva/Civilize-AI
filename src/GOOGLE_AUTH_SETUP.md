# 🔐 Configuração do Google OAuth - Civilize AI

## ✅ O que foi implementado

A autenticação com Google está **100% funcional** e pronta para uso! O sistema:

1. ✅ Abre popup do Google para o usuário escolher a conta
2. ✅ Solicita permissões de acesso (email, nome, foto de perfil)
3. ✅ Recebe os dados do usuário após autorização
4. ✅ Salva automaticamente no `localStorage` com a chave `civilizeai_user`
5. ✅ Restaura a sessão automaticamente ao recarregar a página
6. ✅ Limpa os dados do `localStorage` ao fazer logout

---

## 🚀 Como configurar o Google Client ID

Para usar a autenticação real do Google, você precisa de um **Google Client ID**. Siga os passos:

### **1. Acesse o Google Cloud Console**
👉 https://console.cloud.google.com/

### **2. Crie um novo projeto (ou selecione um existente)**
- Clique em **"Select a project"** no topo
- Clique em **"NEW PROJECT"**
- Dê um nome (ex: "Civilize AI")
- Clique em **"CREATE"**

### **3. Ative a Google+ API**
- No menu lateral, vá em **"APIs & Services" → "Library"**
- Procure por **"Google+ API"**
- Clique em **"ENABLE"**

### **4. Crie as Credenciais OAuth 2.0**
- No menu lateral, vá em **"APIs & Services" → "Credentials"**
- Clique em **"+ CREATE CREDENTIALS"** → **"OAuth client ID"**
- Se aparecer uma mensagem para configurar a tela de consentimento:
  - Clique em **"CONFIGURE CONSENT SCREEN"**
  - Escolha **"External"** (para testes) ou **"Internal"** (se for G Suite)
  - Preencha:
    - **App name**: Civilize AI
    - **User support email**: seu email
    - **Developer contact information**: seu email
  - Clique em **"SAVE AND CONTINUE"**
  - Em **Scopes**, clique em **"ADD OR REMOVE SCOPES"** e adicione:
    - `userinfo.email`
    - `userinfo.profile`
    - `openid`
  - Clique em **"SAVE AND CONTINUE"** → **"BACK TO DASHBOARD"**

- Volte para **"Credentials"** e clique em **"+ CREATE CREDENTIALS"** → **"OAuth client ID"**
- **Application type**: **"Web application"**
- **Name**: "Civilize AI Web Client"
- **Authorized JavaScript origins**: 
  - `http://localhost:3000` (para desenvolvimento local)
  - Adicione seu domínio de produção depois (ex: `https://civilizeai.com`)
- **Authorized redirect URIs**:
  - `http://localhost:3000` (para desenvolvimento local)
  - Adicione seu domínio de produção depois
- Clique em **"CREATE"**

### **5. Copie o Client ID**
- Após criar, uma modal aparecerá com o **Client ID**
- Copie o valor (será algo como: `123456789-abc123def.apps.googleusercontent.com`)

### **6. Cole o Client ID no código**
Abra o arquivo `/App.tsx` e procure pela constante no início do arquivo:

```typescript
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com";
```

Substitua por:

```typescript
const GOOGLE_CLIENT_ID = "SEU_CLIENT_ID_AQUI.apps.googleusercontent.com";
```

---

## 🧪 Testando a autenticação

1. Salve o arquivo `/App.tsx` com o Client ID real
2. Acesse a aplicação no navegador
3. Clique em **"Entrar"**
4. Clique no botão **"Continuar com Google"**
5. Um popup do Google deve abrir
6. Escolha sua conta do Google
7. Autorize as permissões solicitadas
8. Você será automaticamente logado! 🎉

---

## 🔍 Verificando os dados salvos

Abra o **Console do navegador** (F12) e digite:

```javascript
localStorage.getItem('civilizeai_user')
```

Você verá algo como:

```json
{
  "email": "seu@gmail.com",
  "name": "Seu Nome",
  "picture": "https://lh3.googleusercontent.com/...",
  "sub": "123456789012345678901"
}
```

---

## 🗑️ Testando o Logout

1. Clique no botão **"Sair"** no header
2. O sistema irá:
   - Remover `civilizeai_user` do `localStorage`
   - Limpar todos os estados da aplicação
   - Redirecionar para a Landing Page

---

## 📱 Modo de Produção

Quando for colocar em produção:

1. Adicione seu domínio real nas **Authorized JavaScript origins**
2. Adicione seu domínio real nas **Authorized redirect URIs**
3. Configure a tela de consentimento OAuth corretamente
4. Considere passar o Client ID por **variável de ambiente** em vez de hardcoded

---

## 🛠️ Estrutura dos arquivos

- `/App.tsx` - Componente principal com GoogleOAuthProvider, hook `useGoogleLogin` e Client ID
- `localStorage` key: `civilizeai_user` - Dados do usuário salvos localmente

---

## 🎯 Fluxo completo implementado

```
Usuário clica "Continuar com Google"
        ↓
handleGoogleSignIn() chama googleLogin()
        ↓
Popup do Google abre
        ↓
Usuário escolhe conta e autoriza
        ↓
Google retorna access_token
        ↓
Buscamos dados do usuário na API do Google
        ↓
Salvamos no estado googleUser
        ↓
useEffect salva automaticamente no localStorage
        ↓
Usuário logado! 🎉
```

---

## ❓ Problemas comuns

### Erro: "Invalid Client ID"
- Verifique se o Client ID está correto
- Certifique-se de que não há espaços extras
- Confirme que a API Google+ está habilitada

### Erro: "redirect_uri_mismatch"
- Adicione sua URL nas **Authorized redirect URIs** no Google Cloud Console
- Certifique-se de usar a mesma URL que está rodando a aplicação

### Popup do Google não abre
- Verifique se há bloqueadores de popup ativos
- Tente desabilitar extensões do navegador temporariamente

---

## 📚 Recursos úteis

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [@react-oauth/google Documentation](https://www.npmjs.com/package/@react-oauth/google)
- [Google Cloud Console](https://console.cloud.google.com/)

---

**Pronto! Sua autenticação com Google está configurada e funcionando! 🚀🎉**