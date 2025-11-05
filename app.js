// client/app.js

// URL base da sua API PHP
const API_BASE_URL = 'http://localhost/secure-api-project/api'; // Ajuste esta URL

// Elementos DOM
const loginArea = document.getElementById('login-area');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');
const dashboardArea = document.getElementById('dashboard-area');
const corporateDataOutput = document.getElementById('corporate-data-output');
const fetchDataBtn = document.getElementById('fetch-data-btn');
const logoutBtn = document.getElementById('logout-btn');

// --- Funções de Token ---
const TOKEN_KEY = 'corporate_jwt_token';
const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
const getToken = () => localStorage.getItem(TOKEN_KEY);
const removeToken = () => localStorage.removeItem(TOKEN_KEY);

// --- Função de Exibição (Ajustada para Tailwind) ---
function showLogin() {
    loginArea.classList.remove('hidden');
    dashboardArea.classList.add('hidden');
}

function showDashboard() {
    loginArea.classList.add('hidden');
    dashboardArea.classList.remove('hidden');
    loginMessage.textContent = ''; 
}

// --- 1. Lógica de Login ---
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Feedback visual de carregamento
    loginMessage.className = "text-center font-medium text-sm text-blue-600";
    loginMessage.textContent = 'Autenticando...';

    try {
        const response = await fetch(`${API_BASE_URL}/login.php`, {       
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            setToken(data.token);
            
            loginMessage.className = "text-center font-medium text-sm text-green-600";
            loginMessage.textContent = data.message;
            
            showDashboard();
            fetchProtectedData();
        } else {
            loginMessage.className = "text-center font-medium text-sm text-red-600";
            loginMessage.textContent = `Erro: ${data.message}`;
        }
    } catch (error) {
        loginMessage.className = "text-center font-medium text-sm text-red-600";
        loginMessage.textContent = 'Erro de conexão ou rede.: '+error;
        console.error("Login Error:", error);
    }
});

// --- 2. Lógica de Requisição Protegida ---
async function fetchProtectedData() {
    const token = getToken();
    corporateDataOutput.textContent = 'Buscando dados protegidos...';
    
    if (!token) {
        handleLogout('Token não encontrado no cliente. Faça login novamente.');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/protected_data.php`, {        
            method: 'GET',
            headers: { 
                'Authorization': `Bearer ${token}` 
            } 
        });

        const data = await response.json();

        if (response.ok) {
            corporateDataOutput.textContent = JSON.stringify(data.data, null, 2);
        } else if (response.status === 401) {
            handleLogout(`Erro 401: ${data.message}`);
        } else {
            corporateDataOutput.textContent = `Erro ao buscar dados: ${data.message || response.statusText}`;
        }

    } catch (error) {
        corporateDataOutput.textContent = 'Erro de rede ou no servidor da API.: '+error;
        console.error("Fetch Data Error:", error);
    }
}

// --- 3. Lógica de Logout ---
function handleLogout(message = 'Você saiu com sucesso.') {
    removeToken();
    showLogin();
    
    // Mensagem após o logout/expiração
    loginMessage.className = message.includes('Erro 401') ? 
        "text-center font-medium text-sm text-red-600" : 
        "text-center font-medium text-sm text-gray-500";
        
    loginMessage.textContent = message;
    corporateDataOutput.textContent = '';
}

// Event Listeners e Inicialização
logoutBtn.addEventListener('click', () => handleLogout());
fetchDataBtn.addEventListener('click', fetchProtectedData);

// Verifica a autenticação ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (getToken()) {
        showDashboard();
        fetchProtectedData();
    } else {
        showLogin();
        loginMessage.className = "text-center font-medium text-sm text-gray-500";
        loginMessage.textContent = 'Acesso restrito. Por favor, faça login.';
    }
});
