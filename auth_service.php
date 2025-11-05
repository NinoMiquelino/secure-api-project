<?php
// auth_service.php
//require 'vendor/autoload.php';
require_once __DIR__ . '/../vendor/autoload.php'; 
require_once 'config.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// Função para criar um novo JWT
function create_jwt($user_id, $role) {
    $issued_at = time();
    $expiration_time = $issued_at + (60 * 60); // Token expira em 1 hora
    $issuer = "http://localhost/secure-api-project/api/"; // URL da sua API

    $payload = array(
        "iss" => $issuer,
        "iat" => $issued_at,
        "exp" => $expiration_time,
        "uid" => $user_id,
        "role" => $role
    );

    $jwt = JWT::encode($payload, JWT_SECRET_KEY, 'HS256');
    return $jwt;
}

// Função para validar um JWT
function validate_jwt() {
    // 1. Pega o cabeçalho 'Authorization'
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    
    if (empty($authHeader) || !preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
        http_response_code(401);
        echo json_encode(["message" => "Token não fornecido ou formato inválido."]);
        exit();
    }
    
    $token = $matches[1];

    try {
        // 2. Decodifica e valida o token
        $decoded = JWT::decode($token, new Key(JWT_SECRET_KEY, 'HS256'));
        
        // 3. Token válido, retorna o payload
        return $decoded; 

    } catch (\Exception $e) {
        // 4. Token inválido (expirado, assinatura incorreta, etc.)
        http_response_code(401);
        echo json_encode(["message" => "Token inválido ou expirado: " . $e->getMessage()]);
        exit();
    }
}
?>