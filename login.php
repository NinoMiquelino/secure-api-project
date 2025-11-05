<?php
// login.php
require_once 'auth_service.php';

// Apenas para requisições POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Método não permitido
    exit();
}

// Pega os dados JSON enviados pelo Front-end
$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

// **SIMULAÇÃO DE VERIFICAÇÃO DE CREDENCIAIS (BD REAL USARIA HASH)**
if ($username === 'admin' && $password === 'senha123') {
    // Credenciais válidas: Geração do Token
    $user_id = 1001;
    $role = 'corporativo';
    $jwt = create_jwt($user_id, $role);

    // Retorna o token para o Front-end
    http_response_code(200);
    echo json_encode([
        "message" => "Login bem-sucedido. Seja bem-vindo!",
        "token" => $jwt
    ]);
} else {
    // Credenciais inválidas
    http_response_code(401); // Não autorizado
    echo json_encode(["message" => "Usuário ou senha inválidos."]);
}
?>